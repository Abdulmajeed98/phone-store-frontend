import { useEffect, useMemo } from "react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import PasswordInput from "../../components/passwordInput/PasswordInput"
import EmailInput from "../../components/textInputs/EmailInput"
import routeDefinitions from "../../routes/routeDefinitions"

const showToast = (message) =>
    toast.error(message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
    })

const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    console.log(errors)
    const onSubmit = (data) => {
        // TODO: submit to backend
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
                <h1 className="mb-5 text-center text-4xl font-normal capitalize">Sign Up</h1>
                <div className="text-center capitalize">
                    <span>Already have an account?</span>{" "}
                    <Link className="bg-gradient-to-r from-royal-blue to-wisteria bg-clip-text  text-transparent" to={routeDefinitions.login.path}>
                        {routeDefinitions.login.name}
                    </Link>
                </div>
                <div className="flex flex-col gap-7">
                    <EmailInput label="email" register={register} registerOptions={{ required: "Email Address is required" }} />
                    <PasswordInput label="password" register={register} registerOptions={{ required: "Password is required" }} />
                    <button type="submit" className="w-full rounded-lg border border-mine-shaft px-1 py-2 transition-colors duration-300 hover:bg-royal-blue hover:text-white">
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Signup
