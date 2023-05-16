import React, { useState, useEffect } from "react";
import axios from "axios"
import AuthorsTable from "../components/AuthorsTable";
import { Link } from "react-router-dom";


const Main = () => {
    const [authorsList, setAuthorsList] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors`)
            .then(response => {
                setAuthorsList(response.data);
            })
            .catch(err => console.log(err))
    }, [])

    const removeFromDom = (deleteId) => {
        const filteredList =  authorsList.filter((eachAuthors)=>
            eachAuthors._id !== deleteId)
        setAuthorsList(filteredList)
    }

    //add from dom if its one page and you want to update while having a create form on that page


    return (
        <div>
            <p><Link to="/authors/new">Add an Author</Link></p>
            <h3 style={{ borderBottom: '1px solid black', paddingBottom: '10px', borderTop: '1px solid black', paddingTop: '10px' }}>We have quotes by:</h3>
            <AuthorsTable authorsList = {authorsList} onDelete={removeFromDom} />
        </div>
    )
}

export default Main