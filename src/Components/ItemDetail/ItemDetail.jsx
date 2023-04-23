import { ItemCount } from "../ItemCount/ItemCount"

export const ItemDetail = ({item}) => {
    const onAdd = (contador) => {
        console.log(contador)
        console.log(item)
    }
    return(
        <div className="container-fluid d-flex flex-col h-100 m-4">
        <div className="col-md-12">
            <div className="card-body">
                <h3 className="card-title">{item.nombre}</h3>
                <div className="d-flex flex-row gap-5 p-5">
                <img src={item.img} alt={item.name} className="img-fluid round-start card-img-top"/>
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