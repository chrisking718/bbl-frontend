import {useState, useEffect} from 'react'
import axios from 'axios'
import Site from './Site'
import * as tailwind from '../css/style'



const API = process.env.REACT_APP_API_URL;

export default function Sites(){
    const [sites, setSites] = useState([])

    useEffect(()=>{
        axios
        .get(`${API}/sites`)
        .then((res) => setSites(res.data))
        .catch((c) => console.warn("catch", c))
    }, [])

    return(
        <div className='Sites'>
            <section>
                <table className={tailwind.table}>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Price</th>
                        <th>More Details</th>
                    </tr>
                    </thead>
                    <tbody>
                        {sites.map((site) => {
                            return <Site key={site.id} site={site} />
                        })}
                    </tbody>
                </table>
            </section>
        </div>
    )
}

//name , website, address, description, price, picture 