import express from 'express';
import { client } from '@repo/db/client';

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3002;

app.get('/', (req, res) => {
  res.send('Welcome to the BookMyShow HTTP Server!');
});

app.post('/signup', async (req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    
   const user = await client.user.create({
      data: {
        username,
        password
      }
    })
    res.json({
        message: 'User created successfully',
        id : user.id
    })
    
});

app.listen(PORT, () => {
  console.log(`HTTP server is running on http://localhost:${PORT}`);
}); 