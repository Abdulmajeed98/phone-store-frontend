import { useMemo } from "react"
import Footer from "../../components/footer/Footer"
import animatedEmail from "../../assets/icons/email.gif"
import { useForm } from "react-hook-form"
import EmailInput from "../../components/inputs/EmailInput"
import TextInput from "../../components/inputs/TextInput"
import TextArea from "../../components/inputs/TextArea"
import FilledButton from "../../components/buttons/FilledButton"
import { toast } from "react-toastify"
import { useEffect } from "react"

const showToast = (message) =>
    toast.error(message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
    })

const ContactUs = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    const errorValues = useMemo(() => Object.values(errors), [errors])
    useEffect(() => {
        errorValues.forEach(({ message }) => showToast(message))
    }, [errorValues, showToast])

    return (
        <>
            <div className="flex min-h-[65vh] flex-col items-center justify-center gap-10 px-sides pt-32 pb-10">
                <h1 className="text-5xl font-medium uppercase">Have some questions?</h1>
                <div className="flex gap-14">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-1 flex-col gap-4">
                        <TextInput label="first name" register={register} registerOptions={{ required: "First name is required" }} />
                        <TextInput label="last name" register={register} registerOptions={{ required: "Last name is required" }} />
                        <EmailInput label="email" register={register} registerOptions={{ required: "Email Address is required" }} />
                        <TextArea label="message" register={register} registerOptions={{ required: "Message is required" }} />
                        <FilledButton type="submit" size="block" text="Submit" />
                    </form>
                    <div className="flex-1">
                        <img src={animatedEmail} alt="email icon" width={720} height={720} className="object-contain" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ContactUs
