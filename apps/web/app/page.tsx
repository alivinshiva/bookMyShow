
import {client} from "@repo/db/client";


export default async function Home() {
  const user = await client.user.findFirst();
  return (
    <div>
      <h1>Welcome to BookMyShow Web App!</h1>
      <p>This is the production environment.</p>
      <>
        <p>First user in database: {user?.username}</p>
        <p>Password: {user?.password}</p>
      </>    
    </div>
  );
}
