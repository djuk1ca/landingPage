import Navbar from "./components/Navbar"
import LoginForm from "./components/LoginForm"

export default function Login() {
  //register = false;

  return (
    <div className="relative min-w-screen min-h-screen bg-gradient-to-t from-[#065967] to-[#dde26e] overflow-hidden ">
      <div className="w-full h-[2000vh] -translate-y-[50%] bg-neutral-900 absolute top-0 rotate-[15deg] overflow-hidden z-0 -inset-[45%]" />
      <div className="relative z-10">
          <Navbar register={false}/>
          <LoginForm />
      </div>
    </div>
  )
}

