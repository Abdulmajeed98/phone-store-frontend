import { useAuth } from "../../shared/contexts/AuthContext"
import { ReactComponent as AccountRoundedIcon } from "../../assets/icons/account-rounded.svg"
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg"
import { ReactComponent as ShopBagIcon } from "../../assets/icons/shop-bag.svg"
import { ReactComponent as Logo } from "../../assets/logo.svg"
import { NAVBAR_NAVLINKS } from "../../shared/constants/constants"
import { Link, NavLink } from "react-router-dom"
import routes from "../../routes/routeDefinitions"

const Sidebar = () => {
    const auth = useAuth()
    return (
        <div className="fixed z-50 flex w-full items-center justify-between  px-sides backdrop-blur-xl md:py-7 xl:py-10 2xl:py-12">
            <Link to={routes.home.path}>
                <Logo width={58} height={58} />
            </Link>
            <ul className="flex items-center gap-4">
                {NAVBAR_NAVLINKS.map(({ path, name }) => (
                    <NavLink
                        key={path}
                        to={path}
                        exact
                        activeClassName="bg-gradient-to-r from-shakespeare to-dull-lavender text-white"
                        className="rounded bg-transparent p-2 px-4 transition-colors duration-200 hover:bg-mine-shaft/25">
                        {name}
                    </NavLink>
                ))}
            </ul>
            <div className="flex items-center gap-6">
                <AccountRoundedIcon />
            </div>
        </div>
    )
}

export default Sidebar
