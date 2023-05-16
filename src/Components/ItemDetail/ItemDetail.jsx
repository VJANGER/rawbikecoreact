import { ItemCount } from "../ItemCount/ItemCount"
import { useCarritoContext } from "../../Context/CartContext"
export const ItemDetail = ({ item }) => {
    const { addItem } = useCarritoContext()

    const onAdd = (contador) => {
        addItem(item, contador)
    }

    return(
        <div className="d-flex flex-col justify-content-center">
            <div className="col-10">
                <div className="card-body p-5">
                    <h3 className="card-title">{item.nombre}</h3>
                    <div className="d-flex flex-row gap-5">
                    <img src={item.img} alt={item.name} className="img-fluid py-5 round-start card-img-top"/>
                    <div>
                        <p className="card-text">Color: {item.color}</p>
                        <p className="card-text">Talle: {item.talle}</p>
                        <p className="card-text">Talles especiales: {item.talleEspeciales}</p>
                        <p className="card-text">Precio: ${item.precio}</p>
                        <p className="card-text">Descripcion: {item.descripcion}</p>
                        <p className="card-text">Stock: {item.stock}</p>
                    <div className="col-12">
                    <ItemCount ValInicial={1} min={1} max={item.stock} onAdd={onAdd}/>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}