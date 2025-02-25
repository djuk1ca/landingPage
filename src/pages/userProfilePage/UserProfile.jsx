import Navbar from "../Navbar"
import BasicInfo from "./components/BasicInfo"
import ChangeAccountInfo from "./components/ChangeAccountInfo"
import EditPayment from "./components/EditPayment";
import { useState } from "react";

const info = {
    fullName: "John Doe",
    email: "johndoe@gmail.com",
    phone: "+112333322",
    adress: "BlaBla Avenue 2561",
    companyName: "Test Company Name"
}

export default function UserProfile() {
    const username = localStorage.getItem("username");
    const [userInfo, editUserInfo] = useState(info);
    const [paymentFormOpen, setPaymentFormOpen] = useState(false)

    function handlePaymentForm(e){
        e.preventDefault();
        setPaymentFormOpen(!paymentFormOpen);
    }

    function handleUserInfo(e) {
        e.preventDefault()
        
        const form = e.target;
        const editedUserInfo = {
            fullName: form.fullName.value,
            email: form.email.value,
            phone: form.phone.value,
            adress: form.adress.value,
            companyName: form.companyName.value
        }

        editUserInfo(editedUserInfo);
    }

    return (
        <div className="bg-[#151516] w-full min-h-screen relative font-zenKaku text-white">
            <Navbar username={username}/>
            <div className="w-[90%] lg:w-4/5 m-auto flex flex-col justify-between gap-12 lg:flex-row py-8 lg:py-16">
                <BasicInfo fullName={userInfo.fullName} email={userInfo.email} phone={userInfo.phone} adress={userInfo.adress} companyName={userInfo.companyName} />
                <ChangeAccountInfo fullName={userInfo.fullName} email={userInfo.email} phone={userInfo.phone} adress={userInfo.adress} companyName={userInfo.companyName} handlePayment={handlePaymentForm} handleUpdate={handleUserInfo} />
            </div>
            <EditPayment handlePayment={handlePaymentForm} paymentFormOpen={paymentFormOpen}/>
        </div>
    )
}