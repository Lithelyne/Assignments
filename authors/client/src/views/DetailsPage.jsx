import React from "react";
import {useState, useEffect} from 'react';
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const DetailsPage = () => {
    const [authors, setAuthors] = useState();

    const {id} = useParams();

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then(response=>{
            setAuthors(response.data)
        })
        .catch(err=>console.log(err))
    }, [id])

    return (
        <div>
            {
                authors?
                <div>
                    <h1> {authors.name} </h1>
                    
                </div>:
                <h1>Loading..</h1>
            }
            <Link to="/">Home</Link>
        </div>
    )
}

export default DetailsPage