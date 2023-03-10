import ProductsArray, { getProductsObject, Product } from 'utils/ProductsArray'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
}

const CartTotal = ({productsInCart, productsObject = getProductsObject(ProductsArray)}: Props) => {
  return (
    <div>
                Total: ${' '}
                {Object.keys(productsInCart).reduce(
                    (total, id) =>
                        total +
                        productsObject[parseInt(id)].price *
                            productsInCart[parseInt(id)],
                    0
                )}{' '}
            </div>
  )
}

export default CartTotal