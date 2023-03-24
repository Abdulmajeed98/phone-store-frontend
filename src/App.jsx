import { BrowserRouter } from "react-router-dom"
import Routes from "./routes/Routes"
import { AuthProvider } from "./shared/contexts/AuthContext"
import { ToastContainer } from "react-toastify"
import Navbar from "./components/navbar/Navbar"
import "react-toastify/dist/ReactToastify.css"
import "@splidejs/react-splide/css"

export default function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Navbar />
                <Routes />
            </AuthProvider>
            <ToastContainer />
        </BrowserRouter>
    )
}
