import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { useLocation, useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const location = useLocation()
    const currency = '$'
    const delivery_fee = 10;
    const [search, setSearch] = useState('')
    const [showSearch, setShowSearch] = useState(false)
    const navigate  = useNavigate()

    // Define when the search bar should be shown
    const searchRoute = location.pathname === "/collection";
    

    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch, searchRoute,navigate,
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider