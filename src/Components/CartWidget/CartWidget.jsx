import { useCarritoContext } from "../../context/CartContext.js"
import { Link } from "react-router-dom"
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