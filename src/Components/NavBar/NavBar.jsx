import { Link } from "react-router-dom"
import {CartWidget} from "../CartWidget/CartWidget"
import { BotonDarkMode } from "./BotonDarkMode/BotonDarkMode"


export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg barra">
            <div className="container-fluid">
                <Link className="nav-link" to={"/"}>
                <img className="imgLogo logo" src="https://firebasestorage.googleapis.com/v0/b/rawbikeco-80622.appspot.com/o/logo.png?alt=media&token=29384f00-0378-4543-8d61-0adc83ba2b61" alt="logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon texto"></span></button>
            <div className="collapse navbar-collapse justify-content-end align-items-center texto" id="navbarNavDropdown">
                <ul className="navbar-nav justify-content-end align-items-center">
                    <li className="nav-item dropdown">
                        <p className="nav-link dropdown-toggle texto" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos</p>
                        <ul className="dropdown-menu">
                            <li>
                            <Link className="nav-link" to={"/category/cuadros"}>
                                <p className="dropdown-item">Cuadros</p>
                            </Link>
                            </li>
                            <li>
                            <Link className="nav-link" to={"/category/forks"}>
                                <p className="dropdown-item">Horquillas</p>
                            </Link>
                            </li>
                            <li>
                            <Link className="nav-link" to={"/category/manubrios"}>
                                <p className="dropdown-item">Manubrios</p>
                            </Link>
                            </li>
                            <li>
                            <Link className="nav-link" to={"/category/stems"}>
                                <p className="dropdown-item">Stems</p>
                            </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    <CartWidget/>
    <BotonDarkMode />
</nav>
  )
}
