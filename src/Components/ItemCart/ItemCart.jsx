import { useCarritoContext } from "../../Context/CartContext"
export const ItemCart = ({ item }) => {
    const { removeItem } = useCarritoContext()
    return (
        <div className="card d-flex justify-content-center">
            <div className="row ">
                <div className="    ">
                    <img src={item.img} className="img-fluid rounded-start" alt={`Imagen de ${item.nombre}`} />
                </div>
                <div className="    ">
                    <div className="card-body d-flex flex-column justify-content-center align-items-center flex-wrap">
                        <h5 className="card-title">{item.nombre}</h5>
                        <p className="card-text">Cantidad: {item.quantity}</p>
                        <p className="card-text">Precio Unitario:$ {item.precio}</p>
                        <p className="card-text">Subtotal: ${item.precio * item.quantity}</p>
                        <button className="btn btn-danger" onClick={() => removeItem(item.id)}>Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}