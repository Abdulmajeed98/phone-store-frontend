import routes from "../../routes/routeDefinitions"

export const NEW_ARRIVAL_TABS = [
    {
        id: "samsung",
        name: "Samsung",
    },
    {
        id: "apple",
        name: "Apple",
    },
    {
        id: "xiaomi",
        name: "Xiaomi",
    },
    {
        id: "huawei",
        name: "Huawei",
    },
]

export const COLORS_OPTIONS = [
    {
        id: "deep_purple",
        text: "Deep Purple",
    },
    {
        id: "black_green",
        text: "Black Green",
    },
    {
        id: "sky_blue",
        text: "Sky Blue",
    },
    {
        id: "snow_white",
        text: "Snow White",
    },
    {
        id: "silver",
        text: "Silver",
    },
]

export const NAVBAR_NAVLINKS = Object.values(routes).filter(({ path }) => !(path === routes.login.path || path === routes.signup.path || path === routes.cart.path))

export const PROFILE_DROPDOWN_OPTIONS = [
    {
        text: routes.login.name,
        to: routes.login.path,
        type: "link",
    },
    {
        text: routes.signup.name,
        to: routes.signup.path,
        type: "link",
    },
]
