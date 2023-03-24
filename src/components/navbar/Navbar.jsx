import { useAuth } from "../../shared/contexts/AuthContext"
import { ReactComponent as AccountRoundedIcon } from "../../assets/icons/account-rounded.svg"
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg"
import { ReactComponent as ShopBagIcon } from "../../assets/icons/shop-bag.svg"
import { ReactComponent as Logo } from "../../assets/logo.svg"

const Sidebar = () => {
    const auth = useAuth()
    return (
        <div className="fixed z-50 flex w-full items-center justify-between bg-porcelain px-sides backdrop-blur-xl md:py-7 xl:py-10 2xl:py-12">
            <div>
                <Logo width={58} height={58} />
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
