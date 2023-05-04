import { useState, useEffect } from "react"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { useDarkModeContext } from "../../Context/DarkModeContext"
import { getProducts } from "../../Firebase/Firebase"
export const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const { category } = useParams()
  const { darkMode } = useDarkModeContext()

  useEffect(() => {

    if (category) {
      getProducts()
        .then(productos => {
          const productosFiltrados = productos.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === parseInt(category))
          setProductos(productosFiltrados)

        })
    } else {
      getProducts()
        .then(productos => {
          const productosFiltrados = productos.filter(prod => prod.stock > 0)
          setProductos(productosFiltrados)

        })
    }

  }, [category])

  return (
    <div>
      {<ItemList productos={productos} plantilla={"Item"} />}
    </div>
  )
}
