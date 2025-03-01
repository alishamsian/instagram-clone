import Logo from "../../assets/logo.png";
import LoginImg from "../../assets/login-img.png";

export default function Login() {
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
                <form className="mt-8 w-64 flex flex-col">
                  <input
                    className="text-xs w-full mb-4 rounded border text-black bg-gray-100 border-gray-300 px-2 py-3 focus:outline-none focus:border-gray-400 active:outline-none"
                    id="usesrname"
                    placeholder="usesrname"
                    type="usesrname"
                  />
                  <input
                    className="text-xs w-full mb-4 rounded border text-black bg-gray-100 border-gray-300 px-2 py-3 focus:outline-none focus:border-gray-400 active:outline-none"
                    id="password"
                    placeholder="Password"
                    type="password"
                  />
                  <a className=" text-sm text-center bg-blue-300 text-white py-1 rounded font-medium">
                    Login
                  </a>
                </form>
                <div className=" text-black text-center w-80 pt-10">
                  <span className="text-sm">Don’t have an account? </span>
                  <a className="text-blue-500 text-sm font-semibold">signup</a>
                </div>
            </div>
      </div>
    </div>
  )
}
