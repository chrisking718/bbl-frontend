import {Link} from "react-router-dom"
import * as tailwind from '../css/style'

export default function NavBar(){
return(
    <nav className={tailwind.NavBar}>
        <h2>
            <Link to='/' className={tailwind.NavBar_logo}>BBL</Link>
        </h2>
        <h2>
            <Link to="/sites" className={tailwind.NavBar_button}>All sites</Link>
        </h2>
        <button>
            <Link to="/sites/new" className={tailwind.NavBar_button}>New Site</Link>
        </button>
    </nav>
    )
}