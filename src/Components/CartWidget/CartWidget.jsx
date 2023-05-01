import { useCarritoContext } from "../../Context/CartContext.js"
import { Link } from "react-router-dom"
import {cart} from "https://firebasestorage.googleapis.com/v0/b/rawbikeco-80622.appspot.com/o/shopIcon.png?alt=media&token=1e14c582-48f1-4634-be40-472a62a0d1e8"
export const CartWidget = () => {
  const { getItemQuantity } = useCarritoContext()
  return (
    <>
      <button className="btn btn-dark cartWidget">
        <Link to={"/cart"} className="nav-link">
          <img src={cart} alt="cartWidget" />0
          {getItemQuantity() > 0 && <span className="">{getItemQuantity()}</span>}
        </Link>
      </button>

    </>
  )
}