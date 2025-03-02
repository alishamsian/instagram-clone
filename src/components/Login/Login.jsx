import Logo from "../../assets/logo.png";
import LoginImg from "../../assets/login-img.png";
import { toast } from "react-toastify";
import { client } from "../../lib/axios";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";


export default function Login() {
  const navigate=useNavigate()
  const schema=yup.object({
    username:yup.string().required(),
    password:yup.string().required().min(8).max(16)
})
const{register,handleSubmit,formState:{errors}}=useForm({//هوک برای مقداردهی و مدیریت ورودی های فرم استفاده شده استuseForm 
  resolver:yupResolver(schema),
  mode:"onBlur"
})
async function submitForm(user){//خروجیش object
  try {
      
      console.log(user);
     const response=await client.post("/user/login", user)
     localStorage.setItem('token',response.data.accessToken)
     localStorage.setItem('username',response.data.data.username)


     console.log(response.data.data.username)

     toast.success("login successfull",{
      type:"success",
     })
     navigate("/")
  } catch (error) {
      toast.error("error",{
          type:"error"
      });
  }
}

  return (
    <div className=" text-black flex justify-center items-center h-screen w-screen bg-gray-50 gap-10">
      <div className="flex md:w-1/4 w-0">
        <img
          src={LoginImg}
          alt="iPhone with Instagram"
        />
      </div>
      <div className="flex flex-col md:w-2/4 w-full max-w-md border border-gray-300 rounded py-20">
        <div className=" flex flex-col justify-center items-center">
                <img className="w-[150px] h-[50px]" src={Logo} alt="" />
                <form onSubmit={handleSubmit(submitForm)} className="mt-8 w-64 flex flex-col">
                  <input {...register("username")}
                    className="text-xs w-full mb-4 rounded border text-black bg-gray-100 border-gray-300 px-2 py-3 focus:outline-none focus:border-gray-400 active:outline-none"
                    id="username"
                    placeholder="username"
                    type="text"
                  />
                  { errors?.username?<span className="text-error"> {errors.username.message}</span>:null}

                  <input
                  {...register("password")}
                    className="text-xs w-full mb-4 rounded border text-black bg-gray-100 border-gray-300 px-2 py-3 focus:outline-none focus:border-gray-400 active:outline-none"
                    id="password"
                    placeholder="Password"
                    type="password"
                  />
                  { errors?.password?<span className="text-error"> {errors.password.message}</span>:null}
                  <button  type="submit" className=" text-sm text-center bg-blue-300 text-white py-1 rounded font-medium">Login</button>
                </form>
                <div className=" text-black text-center w-80 pt-10">
                  <span className="text-sm">Don’t have an account? </span>
                  <Link to="signup" className="text-blue-500 text-sm font-semibold" >signup</Link>
                </div>
            </div>
      </div>
    </div>
  )
}
