import { client } from "../../lib/axios";

async function SubmitForm(user){
  try {
    console.log(user);
    const response=await client.post(/user/signup)
    localStorage.setItem('token',response.data.jwt)
    
    
  } catch (error) {
    
  }
}