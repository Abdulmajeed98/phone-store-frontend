import { Link } from "react-router-dom"

const LinkButton = ({ text, to }) => {
    return (
        <Link
            to={to}
            className="relative after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-black after:transition-[width] after:duration-200 after:content-[''] hover:after:w-full">
            {text}
        </Link>
    )
}

export default LinkButton
