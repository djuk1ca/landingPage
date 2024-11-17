import Navbar from "./components/Navbar"
import RegisterForm from "./components/RegisterForm"
import Background from "../assets/background.png"

function Register({register, handleRegister}) {

  return (
    <>
      
      <div className="relative h-screen bg-neutral-900 overflow-hidden">
        <img src={Background} className="absolute z-0 h-[1600px] w-full -top-[37%] lg:left-[35%] md:left-[20%] sm:left-[15%] transform rotate-[15deg] origin-bottom-left " />
        <div className="relative z-10">
          <Navbar register={register} handleRegister={handleRegister}/>
          <RegisterForm />
        </div>
        
      </div>
    </>
  )
}

export default Register
