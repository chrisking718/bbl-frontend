import {Link } from 'react-router-dom'
import * as tailwind from '../css/style'



export default function Site({site,id}){
    return(
        <tr>
            <td>
                {site.name}
            </td>
            <td>
                {site.address}
            </td>
            <td>
                {site.price}
            </td>
            <td>
                <Link to={`/sites/${site.id}`} className={tailwind.more_button}> More</Link>
            </td>
        </tr>
    )
}

//name , website, address, description, price, picture 