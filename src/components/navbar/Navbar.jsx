import { useAuth } from "../../shared/contexts/AuthContext"
import { ReactComponent as AccountRoundedIcon } from "../../assets/icons/account-rounded.svg"
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg"
import { ReactComponent as ShopBagIcon } from "../../assets/icons/shop-bag.svg"
import { ReactComponent as Logo } from "../../assets/logo.svg"

const Sidebar = () => {
    const auth = useAuth()
    console.log(auth)
    return (
        <div className="fixed flex w-full items-center justify-between bg-transparent py-12 px-sides">
            <div>
                <Logo width={64} height={64} />
            </div>
            <ul className="flex items-center gap-10">
                <li>Products</li>
                <li>Support</li>
                <li>About us</li>
                <li>Contact Us</li>
            </ul>
            <div className="flex items-center gap-6">
                <SearchIcon />
                <ShopBagIcon />
                <AccountRoundedIcon />
            </div>
        </div>
    )
}

export default Sidebar
