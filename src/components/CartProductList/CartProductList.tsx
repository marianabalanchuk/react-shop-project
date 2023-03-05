import { Button } from '@mui/material'
import ProductsArray, { getProductsObject, Product } from 'utils/ProductsArray'
import CartProductListItem from './CartProductListItem'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
    CartItem?: any
    deleteProductFromCart?: Function
}

const CartProductList = ({
    productsInCart,
    productsObject = getProductsObject(ProductsArray),
    CartItem = CartProductListItem,
    deleteProductFromCart,
}: Props) => {
    return (
        <>
            {Object.keys(productsInCart).map((id) => (
                <CartItem
                    key={id}
                    product={productsObject[parseInt(id)]}
                    productCount={productsInCart[parseInt(id)]}
                    deleteProductFromCart={deleteProductFromCart}
                />
            ))}
        </>
    )
}

export default CartProductList
