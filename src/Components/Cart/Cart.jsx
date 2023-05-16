import { useCarritoContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"
export const Cart = () => {
    const { carrito, totalPrice, emptyCart } = useCarritoContext()
    return (
        <>
            {
                carrito.length === 0 ?
                    <div className="text-center p-5 m-5">
                        <h1>Carrito Vacio</h1>
                        <button className="btn btn-dark"><Link to={"/"} className="nav-link">Continuar comprando</Link></button>
                    </div>
                    :
                    <div className="row m-5 p-5">
                        <div className="col-6 m-5">
                        {<ItemList productos={carrito} plantilla={"ItemCart"} />}
                        </div>
                        <div className="  col-4  ">
                            <p>Resumen de la compra: {totalPrice()}</p>
                            <button className="btn btn-danger" onClick={() => emptyCart()}>Vaciar Carrito</button>
                            <Link className="nav-link" to={"/"}><button className="btn btn-dark">Continuar Comprando</button></Link>
                            <Link className="nav-link" to={"/checkout"}><button className="btn btn-dark">Finalizar Compra</button></Link>
                        </div>
                    </div>

            }


        </>
    )
}