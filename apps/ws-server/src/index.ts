import {WebSocketServer} from "ws";
import {client} from "@repo/db/client";


const server = new WebSocketServer({port: 3001});

server.on('connection', async socket => {
    const res = await client.user.create({
        data: {
            username: Math.random().toString(36).substring(2, 15),
            password: Math.random().toString()
        }
    })
    socket.send('Welcome to the BookMyShow WebSocket Server!');
    console.log(res);
    
});

console.log('WebSocket server is running on ws://localhost:3001');