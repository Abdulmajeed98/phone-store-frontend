import InfoIllustration1 from "../assets/illustrations/info-illustration-1.svg"
import InfoIllustration2 from "../assets/illustrations/info-illustration-2.svg"
import InfoIllustration3 from "../assets/illustrations/info-illustration-3.svg"
import { ReactComponent as FacebookIcon } from "../assets/icons/facebook.svg"
import { ReactComponent as InstagramIcon } from "../assets/icons/instagram.svg"
import { ReactComponent as SnapchatIcon } from "../assets/icons/snapchat.svg"
import { ReactComponent as PinterestIcon } from "../assets/icons/pinterest.svg"

export const newArrivalData = [
    {
        id: "1",
        title: "Apple",
        name: "iPhone 14 pro max deep purple",
        image: "/iPhone_14_Pro_Max.png",
        price: "499.00",
    },
    {
        id: "2",
        title: "Samsung",
        name: "Samsung galaxy S23 ultra",
        image: "/Galaxy-S23-Ultra.png",
        price: "499.00",
    },
    {
        id: "3",
        title: "Xiaomi",
        name: "Xiaomi Mi 12s ultra",
        image: "/xiaomi-12s-ultra.png",
        price: "499.00",
    },
    {
        id: "4",
        title: "Samsung",
        name: "Samsung galaxy S23 ultra",
        image: "/Galaxy-S23-Ultra.png",
        price: "499.00",
    },
    {
        id: "5",
        title: "Xiaomi",
        name: "Xiaomi Mi 12s ultra",
        image: "/xiaomi-12s-ultra.png",
        price: "499.00",
    },
    {
        id: "6",
        title: "Apple",
        name: "iPhone 14 pro max deep purple",
        image: "/iPhone_14_Pro_Max.png",
        price: "499.00",
    },
]

export const productsData = [
    {
        id: "1",
        title: "Apple",
        name: "iPhone 14 pro max deep purple",
        image: "/iPhone_14_Pro_Max.png",
        price: "499.00",
    },
    {
        id: "2",
        title: "Samsung",
        name: "Samsung galaxy S23 ultra",
        image: "/Galaxy-S23-Ultra.png",
        price: "499.00",
    },
    {
        id: "3",
        title: "Xiaomi",
        name: "Xiaomi Mi 12s ultra",
        image: "/xiaomi-12s-ultra.png",
        price: "499.00",
    },
    {
        id: "4",
        title: "Samsung",
        name: "Samsung galaxy S23 ultra",
        image: "/Galaxy-S23-Ultra.png",
        price: "499.00",
    },
    {
        id: "5",
        title: "Xiaomi",
        name: "Xiaomi Mi 12s ultra",
        image: "/xiaomi-12s-ultra.png",
        price: "499.00",
    },
    {
        id: "6",
        title: "Apple",
        name: "iPhone 14 pro max deep purple",
        image: "/iPhone_14_Pro_Max.png",
        price: "499.00",
    },
    {
        id: "7",
        title: "Samsung",
        name: "Samsung galaxy S23 ultra",
        image: "/Galaxy-S23-Ultra.png",
        price: "499.00",
    },
    {
        id: "8",
        title: "Xiaomi",
        name: "Xiaomi Mi 12s ultra",
        image: "/xiaomi-12s-ultra.png",
        price: "499.00",
    },
    {
        id: "9",
        title: "Apple",
        name: "iPhone 14 pro max deep purple",
        image: "/iPhone_14_Pro_Max.png",
        price: "499.00",
    },
    {
        id: "10",
        title: "Samsung",
        name: "Samsung galaxy S23 ultra",
        image: "/Galaxy-S23-Ultra.png",
        price: "499.00",
    },
    {
        id: "11",
        title: "Xiaomi",
        name: "Xiaomi Mi 12s ultra",
        image: "/xiaomi-12s-ultra.png",
        price: "499.00",
    },
    {
        id: "12",
        title: "Apple",
        name: "iPhone 14 pro max deep purple",
        image: "/iPhone_14_Pro_Max.png",
        price: "499.00",
    },
    {
        id: "13",
        title: "Samsung",
        name: "Samsung galaxy S23 ultra",
        image: "/Galaxy-S23-Ultra.png",
        price: "499.00",
    },
    {
        id: "14",
        title: "Xiaomi",
        name: "Xiaomi Mi 12s ultra",
        image: "/xiaomi-12s-ultra.png",
        price: "499.00",
    },
    {
        id: "15",
        title: "Apple",
        name: "iPhone 14 pro max deep purple",
        image: "/iPhone_14_Pro_Max.png",
        price: "499.00",
    },
]

export const informationSectionData = [
    {
        id: 1,
        image: InfoIllustration1,
        badgeText: "We offer",
        title: "Room-filling sound.",
        subtitle: "You’ve never heard color like this.",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
    },
    {
        id: 2,
        image: InfoIllustration2,
        badgeText: "We offer",
        title: "Choosing your iMac.",
        subtitle: "You’ve never heard color like this.",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
    },
    {
        id: 3,
        image: InfoIllustration3,
        badgeText: "We offer",
        title: "New MacBook Pro.",
        subtitle: "You’ve never heard color like this.",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
    },
]

export const footerData = {
    brands: {
        label: "Brands",
        content: ["Apple", "Samsung", "Huawei", "Google", "Microsoft"],
    },
    routes: {
        label: "Company",
        content: [
            {
                name: "Products",
                to: "/products",
            },
            {
                name: "About Us",
                to: "about-us",
            },
            {
                name: "Login",
                to: "/login",
            },
            {
                name: "Sign up",
                to: "/signup",
            },
        ],
    },
    contactUs: {
        label: "Contact Us",
        content: [
            {
                type: "anchor",
                label: "+964 750 888 88 88",
                href: "tel:+9647508888888",
            },
            {
                type: "anchor",
                label: "+964 750 888 00 88",
                href: "tel:+9647508880088",
            },
            {
                type: "anchor",
                label: "contact@phonestore.com",
                href: "mailto:contact@phonestore.com",
            },
            {
                type: "link",
                label: "Send Feedback",
                href: "/contact",
            },
        ],
    },
    socialMedias: [
        {
            name: "Facebook",
            Icon: FacebookIcon,
            href: "https://www.facebook.com",
        },
        {
            name: "Instagram",
            Icon: InstagramIcon,
            href: "https://www.instagram.com",
        },
        {
            name: "Snapchat",
            Icon: SnapchatIcon,
            href: "https://www.snapchat.com",
        },
        {
            name: "Pinterest",
            Icon: PinterestIcon,
            href: "https://www.pinterest.com",
        },
    ],
}
