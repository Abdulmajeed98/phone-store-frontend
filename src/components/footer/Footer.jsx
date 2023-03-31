import { Link } from "react-router-dom"
import { ReactComponent as Logo } from "../../assets/logo.svg"
import { footerData } from "../../mocks/mocks"
import routes from "../../routes/routeDefinitions"

const Footer = () => {
    return (
        <footer className="flex flex-col gap-10 bg-cod-gray py-14 px-sides text-gallery">
            <div>
                <Link to={routes.home.path}>
                    <Logo width={58} height={58} />
                </Link>

                <div className="flex justify-between pt-6">
                    <div className="flex max-w-[40%] flex-col gap-8">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum since the 1500s,</p>
                        <div className="flex gap-5">
                            {footerData.socialMedias.map(({ name, Icon, href }) => (
                                <a key={name} href={href} target="_blank" className="aspect-square w-10 transition-transform duration-300 hover:scale-110">
                                    <Icon />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-10">
                        <div className="flex flex-col gap-5">
                            <h3 className="text-xl">{footerData.brands.label}</h3>
                            <div className="flex flex-col gap-3">
                                {footerData.brands.content.map((brand) => (
                                    <p key={brand}>{brand}</p>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-5">
                            <h3 className="text-xl">{footerData.routes.label}</h3>

                            <div className="flex flex-col gap-3">
                                {footerData.routes.content.map(({ name, to }) => (
                                    <Link key={to} to={to} className="underline-offset-2 hover:underline">
                                        {name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-5">
                            <h3 className="text-xl">{footerData.contactUs.label}</h3>

                            <div className="flex flex-col gap-3">
                                {footerData.contactUs.content.map(({ type, href, label }) => {
                                    if (type === "anchor")
                                        return (
                                            <a key={href} href={href}>
                                                {label}
                                            </a>
                                        )

                                    return (
                                        <Link key={href} to={href} className="underline underline-offset-2">
                                            {label}
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <p className="text-center">
                All rights reserved for <span className="bg-gradient-to-r from-shakespeare to-dull-lavender bg-clip-text font-semibold text-transparent">PhoneStore</span> &copy;
                {new Date().getFullYear()}
            </p>
        </footer>
    )
}

export default Footer
