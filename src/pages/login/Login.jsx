import { useEffect, useMemo } from "react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { ToastContainer,toast } from "react-toastify"
import PasswordInput from "../../components/inputs/PasswordInput"
import EmailInput from "../../components/inputs/EmailInput"
import routeDefinitions from "../../routes/routeDefinitions"
import axios from "axios"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

const showToast = (message) =>
    toast.error(message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
    })

const Login = () => {
    const history = useHistory();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        axios.post('http://localhost:8000/api/getUser',data).then((res)=>{
            if(res.data.length>0){
                localStorage.setItem('Email', res.data[0].Email)
                history.push('/login');
                return;
            }else{
                showToast("Email Or Password Wrong")
                return ;
            }
        })
    }
    const errorValues = useMemo(() => Object.values(errors), [errors])
    useEffect(() => {
        errorValues.forEach(({ message }) => showToast(message))
    }, [errorValues, showToast])
    return (
        <div
            className="flex
         h-full items-center justify-center">
            <form className="w-[500px]" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="mb-5 text-center text-4xl font-normal capitalize">login</h1>
                <div className="text-center capitalize">
                    <span>Don't have an account?</span>{" "}
                    <Link className="bg-gradient-to-r from-royal-blue to-wisteria bg-clip-text  text-transparent" to={routeDefinitions.signup.path}>
                        {routeDefinitions.signup.name}
                    </Link>
                </div>
                <div className="flex flex-col gap-7">
                    <EmailInput label="email" register={register} registerOptions={{ required: "Email Address is required" }} />
                    <PasswordInput label="password" register={register} registerOptions={{ required: "Password is required" }} />
                    <button type="submit" className="w-full rounded-lg border border-mine-shaft px-1 py-2 transition-colors duration-300 hover:bg-royal-blue hover:text-white">
                        Log in
                    </button>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}

export default Login
