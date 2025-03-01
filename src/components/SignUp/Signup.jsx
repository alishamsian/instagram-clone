import { toast } from "react-toastify";
import Logo from "../../assets/logo.png";
import { client } from "../../lib/axios";
import{yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useForm } from "react-hook-form"

export default function Signup() {
  const schema=yup.object({
    username:yup.string().required(),
    email:yup.string().email().required(),
    password:yup.string().required().min(8).max(16)
  })

  const{register,handleSubmit,formState:{errors}}=useForm({//هوک برای مقداردهی و مدیریت ورودی های فرم استفاده شده استuseForm 
    resolver:yupResolver(schema),
    mode:"onBlur"
}) 
  // function toggleshowpassword(){
  //   setIsshowpassword(!isshowpassword)

  async function submitForm(user){
    try {
      console.log(user);
      const response=await client.post(/user/signup)
      localStorage.setItem('token',response.data.jwt)
       
      toast.success("user added successfull",{
        type:"success",
       })
    } catch (error) {
      toast.error("error",{
        type:"error"
    });
    }
  }
  return (
    <div className="h-screen bg-gray-50 flex flex-col justify-center items-center">
      <div className="bg-white border border-gray-300 w-80 py-8 flex items-center flex-col mb-3">
        <img className="w-[150px] h-[50px]" src={Logo} alt="" />
        <form  onSubmit={handleSubmit(submitForm)} className="mt-8 w-64 flex flex-col">
          <input {...register("email")}
            autofocus
            className="text-xs w-full mb-2 rounded border text-black bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
            id="email"
            placeholder="email"
            type="text"
          />
          {errors?.email?<span className="text-error"> {errors.email.message}</span>:null}
          <input  {...register("username")}
            autofocus
            className="text-xs w-full mb-2 rounded border text-black bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
            id="usesrname"
            placeholder="usesrname"
            type="usesrname"
          />
        {errors?.username?<span className="text-error"> {errors.username.message}</span>:null}

          <input  {...register("password")}
            autofocus
            className="text-xs w-full mb-4 rounded border text-black bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
            id="password"
            placeholder="Password"
            type="password"
          />
            {errors?.password?<span className="text-error"> {errors.password.message}</span>:null}

          <a className=" text-sm text-center bg-blue-300 text-white py-1 rounded font-medium">
            Sign up
          </a>
        </form>
        <div className=" text-black text-center w-80 py-4">
          <span className="text-sm">Already have an account? </span>
          <a className="text-blue-500 text-sm font-semibold">Login</a>
        </div>
      </div>
    </div>
  );
}
