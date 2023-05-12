import { useCarritoContext } from "../../Context/CartContext.js"
import { Link } from "react-router-dom"

export const CartWidget = () => {
  const { getItemQuantity } = useCarritoContext()
  return (
    <>
      <button className="btn btn-dark cartWidget">
        <Link to={"/cart"} className="nav-link carro">
          <img src="https://firebasestorage.googleapis.com/v0/b/rawbikeco-80622.appspot.com/o/shopIcon.png?alt=media&token=1e14c582-48f1-4634-be40-472a62a0d1e8" alt="cartWidget" width="50"/>
          {getItemQuantity() > 0 && <span className="cantCarrito">{getItemQuantity()}</span>}
        </Link>
      </button>

    </>
  )
}