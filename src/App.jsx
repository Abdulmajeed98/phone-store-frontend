import { BrowserRouter } from "react-router-dom"
import Routes from "./routes/Routes"
import { AuthProvider } from "./shared/contexts/AuthContext"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "@splidejs/react-splide/css"
import { CartProvider } from "./shared/contexts/CartContext"

export default function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <CartProvider>
                    <Routes />
                </CartProvider>
            </AuthProvider>
            <ToastContainer />
        </BrowserRouter>
    )
}
