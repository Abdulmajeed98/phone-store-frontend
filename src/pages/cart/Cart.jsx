import Footer from "../../components/footer/Footer"
import { useCart } from "../../shared/contexts/CartContext"
import animatedBasket from "../../assets/icons/basket.gif"
import { Link } from "react-router-dom"
import routes from "../../routes/routeDefinitions"

const Cart = () => {
    const { cart } = useCart()

    return (
        <div className="flex min-h-screen flex-col">
            {!cart.length ? (
                <div className="flex flex-1 items-center justify-center px-sides pt-32 pb-10">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-5xl font-medium uppercase">The cart is empty!</h1>
                        <img src={animatedBasket} alt="animated basket" width={380} height={380} className="mx-auto" />
                        <Link
                            to={routes.products.path}
                            className="flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-shakespeare to-dull-lavender py-4 px-10 uppercase text-white transition-transform duration-300 hover:scale-[1.05]">
                            Add some item
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="flex-1 px-sides pt-32 pb-10">Cart</div>
            )}
            <Footer />
        </div>
    )
}

export default Cart
