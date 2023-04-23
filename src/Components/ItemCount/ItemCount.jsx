import { useCount } from "../../hooks/useCount"

export const ItemCount = ({ValInicial, min, max, onAdd}) => {

const {count, minus, sum, reset} = useCount(ValInicial, min, max)
    return(
        <div className="Counter container d-flex flex-column gap-1 col-4">
            <div className="Controls d-flex flex-row justify-content-evenly align-items-center">
                <button className="Button btn btn-secondary btn-sm text-center" onClick={minus}>-</button>
                <h6 className="Number text-center">{count}</h6>
                <button className="Button btn btn-secondary btn-sm text-center" onClick={sum}>+</button>
            </div>
            <div className="Controls container d-flex flex-column gap-1 justify-content-evenly align-items-center">
            <button className="btn btn-dark" onClick={reset}>Reset</button>
            <button className="button btn btn-dark btn-sm text-center" onClick={() => onAdd(count)}>
                Agregar al Carrito
            </button>
            </div>
        </div>
    )
}
