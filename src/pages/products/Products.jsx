import { useMemo, useState } from "react"
import Card from "../../components/card/Card"
import { productsData } from "../../mocks/mocks"
import { ReactComponent as ShoppingCart } from "../../assets/icons/shopping-cart.svg"
import AddToCartModal from "../../components/modals/AddToCartModal"
import { COLORS_OPTIONS } from "../../shared/constants/constants"
import Footer from "../../components/footer/Footer"

const Products = () => {
    const [selectedProduct, setSelectedProduct] = useState("")
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const filteredProduct = useMemo(() => productsData.find(({ id }) => id === selectedProduct) || {}, [productsData, selectedProduct])

    const onDialogClose = () => setIsDialogOpen(false)
    const onShopClickHandler = (event) => {
        setSelectedProduct(event.currentTarget.dataset.id)
        setIsDialogOpen(true)
    }

    return (
        <>
            <div className="px-sides pt-32 pb-10">
                <h1 className="mb-6 text-4xl">Products</h1>
                <div className="grid grid-cols-1 gap-4 text-gallery md:grid-cols-2 xl:grid-cols-3 ">
                    {productsData.map(({ id, image, name, price, title }) => (
                        <Card
                            key={id}
                            className="h-full"
                            image={image}
                            title={title}
                            name={name}
                            description={`${price}$`}
                            buttonIcon={<ShoppingCart />}
                            id={id}
                            onButtonClick={onShopClickHandler}
                        />
                    ))}
                </div>
                {/* TODO: implement add to Cart  */}
                <AddToCartModal
                    open={isDialogOpen}
                    onClose={onDialogClose}
                    image={filteredProduct.image}
                    name={filteredProduct.name}
                    price={filteredProduct.price}
                    colors={COLORS_OPTIONS}
                    onAddToCart={() => console.log("added to cart")}
                />
            </div>
            <Footer />
        </>
    )
}

export default Products
