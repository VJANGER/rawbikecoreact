import { useEffect, useState } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getProduct } from "../../Firebase/Firebase.js"
export const ItemDetailContainer = () => {

    const [item, setItem] = useState([])
    const { id } = useParams()

    useEffect(() => {
        getProduct(id).then(prod => setItem(prod))

    }, [id])

    return(
        <div className="d-flex flex-row">
            <ItemDetail item={item}/>
        </div>
    )
}