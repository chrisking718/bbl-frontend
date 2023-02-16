import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import SiteEditForm from "./SiteEditForm";
import * as tailwind from '../css/style'

const API = process.env.REACT_APP_API_URL

export default function SiteDetails(){
    const {id} = useParams()
    const [site,setSite] = useState([])
    const navigate = useNavigate()

    const deleteSite = () => {
        axios
          .delete(`${API}/sites/${id}`)
          .then(
            () => {
              navigate(`/sites`);
            },
            (error) => console.error(error)
          )
          .catch((c) => console.warn("catch", c));
      };
    
      const handleDelete = () => {
        deleteSite();
      };

    useEffect(() => {
        axios
        .get(`${API}/sites/${id}`)
        .then((res) => {
            setSite(res.data)
        })
        .catch((c) =>{
            console.warn('catch',c)
        })
    },[id])


    return(
        <article className={tailwind.articles}>
            
           
            <h1 className={tailwind.S_D_Details}>
              Business Name: <span className={tailwind.S_D_Values}>{site.name}</span> 
            </h1>
            <h6 className={tailwind.S_D_Details}>
              Business Website: <span className={tailwind.S_D_Values}>{site.website}</span> 
            </h6>
            <h6 className={tailwind.S_D_Details}>
               Business Address/ Area: <span className={tailwind.S_D_Values}>{site.address}</span>
            </h6>
            <span className={tailwind.S_D_Details}>
             Description:  <span className={tailwind.S_D_Values}>{site.description}</span> 
            </span>
            <p className={tailwind.S_D_Details}>
               Payment Type: <span className={tailwind.S_D_Values}>{site.price}</span>
            </p>
            < p className={tailwind.S_D_Details}>
               Category: <span className={tailwind.S_D_Values}>{site.category}</span>
            </p>
            <p >
                <img src={site.picture } alt=' Link Not Working' className={tailwind.image}></img>
            </p>
            <div className="showNavigation">
        <>
          <Link to={`/sites`} >
            <button className={tailwind.buttons}>Back</button>
          </Link>
          <button onClick={handleDelete} className={tailwind.buttons}>Delete</button>
        </>
        <SiteEditForm />
       
        
      </div>
        </article>
    )
}