import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {ItemDetail} from "../ItemDetail/ItemDetail"

export const ItemDetailConatiner = () =>{
    const [item, setItem] = useState([])
    const {id} = useParams()
    useEffect(() => {
        fetch('../json/productos.json')
        .then(response => response.json())
        .then (productos => {
            const prod = productos.find(prod => prod.id === (id))
            setItem(prod)
        })
    }, [id])
    return(
        <div>
            <ItemDetail item={item}/>
        </div>
    )
}