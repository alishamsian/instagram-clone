import Logo from "../../assets/logo.png";

export default function Signup() {
  return (
    <div className="h-screen bg-gray-50 flex flex-col justify-center items-center">
      <div className="bg-white border border-gray-300 w-80 py-8 flex items-center flex-col mb-3">
        <img className="w-[150px] h-[50px]" src={Logo} alt="" />
        <form className="mt-8 w-64 flex flex-col">
          <input
            autofocus
            className="text-xs w-full mb-2 rounded border text-black bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
            id="email"
            placeholder="email"
            type="text"
          />
          <input
            autofocus
            className="text-xs w-full mb-2 rounded border text-black bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
            id="usesrname"
            placeholder="usesrname"
            type="usesrname"
          />
          <input
            autofocus
            className="text-xs w-full mb-4 rounded border text-black bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
            id="password"
            placeholder="Password"
            type="password"
          />
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
