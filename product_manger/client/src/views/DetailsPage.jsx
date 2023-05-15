import React from "react";
import {useState, useEffect} from 'react';
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const DetailsPage = () => {
    const [product, setProduct] = useState();

    const {id} = useParams();

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/Products/${id}`)
        .then(response=>{
            setProduct(response.data)
        })
        .catch(err=>console.log(err))
    }, [id])

    return (
        <div>
            {
                product?
                <div>
                    <h1> {product.title} </h1>
                    <p> Price: ${product.price}</p>
                    <p> Description: {product.description}</p>
                </div>:
                <h1>Loading..</h1>
            }
            <Link to="/">Home</Link>
        </div>
    )
}

export default DetailsPage