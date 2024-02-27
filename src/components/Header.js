import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    const [btnName,setBtnName] = useState("Login")

    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext)

    const cartItems = useSelector((store) => store.cart?.items)

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg">
            <div className="logo-container">
                <img className="w-56" src = {LOGO_URL}/>
            </div>
            <div className="flex items-center ">
                <ul className="flex p-4 m-4">
                    <li className="px-4"><h3>Online Status : {onlineStatus ? "🟢" : "🔴"}</h3></li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to = "/about"> About Us</Link></li>
                    <li className="px-4"><Link to ="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to ="/grocery">Grocery</Link></li>
                    <li className="px-4 font-bold text-lg"><Link to ="/cart">Cart - {cartItems?.length || "0"} items</Link></li>
                    <button className="px-4" onClick={() => {
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                    }}>{btnName}</button>
                    <li className="font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;