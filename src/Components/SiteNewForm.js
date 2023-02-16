import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as tailwind from '../css/style'

const API = process.env.REACT_APP_API_URL

export default function SiteNewForm (){
    
    const navigate = useNavigate()

    const [site, setSite] = useState({
        name: '',
        website: '',
        address: '',
        description:'', 
        price:'', 
        picture: '',
        category: ''
    })
    
    const addSite = (newSite) => {
        axios
        .post(`${API}/sites`, newSite)
        .then(
            () => {
                navigate(`/sites`)
            }, 
            (error) => console.error(error)
        )
        .catch((c) => console.warn(`catch`, c))
    }


    const handleTextChange = (event) => {
        setSite({ ...site, [event.target.id]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addSite(site)
    }

    return(
        <div className="w-2/5 m-auto">
            <form onSubmit={handleSubmit} className='bg-gray-100 px-10 py-8'>
               <div className="mb-4 "> 
                <label htmlFor="name" className="inline w-1/3" >Name: </label>
                <input
                    id="name"
                    value={site.name}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Name of site"
                    required
                    className="w-2/3 py-2 px-3 "
                    />
                    </div>

                    <div className="mb-4 ">
                    <label htmlFor="address" className="inline w-1/3">Address: </label>
                    <input
                    id="address"
                    type="text"
                    name="address"
                    value={site.address}
                    onChange={handleTextChange}
                    className="w-2/3 py-2 px-3"
                    />
                    </div>

                    <div className="mb-4">
                    <label htmlFor="website">Website:</label>
                    <input
                    id="website"
                    type="text"
                    value={site.website}
                    placeholder="Website"
                    onChange={handleTextChange}
                    required
                    className="w-2/3 py-2 px-3"
                    />
                    </div>

                    <div className="mb-4">
                    <label htmlFor="description">Description:</label>
                    <input
                    id="description"
                    type="text"
                    value={site.description}
                    placeholder="Description of business"
                    onChange={handleTextChange}
                    className="w-2/3 py-2 px-3"
                    />
                    </div>

                    <div className="mb-4">
                    <label htmlFor="price">Price:</label>
                    <input
                    id="price"
                    type="text"
                    onChange={handleTextChange}
                    value={site.price}
                    placeholder="Price Range $ - $"
                    className="w-2/3 py-2 px-3"
                    /> 
                    </div>

                    <div className="mb-4">
                    <label htmlFor="picture">Picture:</label>
                    <input
                    id="picture"
                    type="text"
                    onChange={handleTextChange}
                    value={site.picture}
                    placeholder="Link to Picture of business"
                    className="w-2/3 py-2 px-3"
                    />
                    </div>

                    <div className="mb-4">
                    <label htmlFor="categorgy">Choose a category:</label>
                    <select name="category" id="category">
                    <option value=''>--Please choose an option--</option>
                    <option value='finance'>Finance</option>
                    <option value='health-fitness'>Health & Fitness</option>
                    <option value='food'>Food</option>
                    <option value='art'>Art</option>

                    </select>
                    </div>

                    <input type='submit' className={tailwind.buttons}/>
            </form>
        </div>
    )

}