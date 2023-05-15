import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams, useNavigate, Link } from 'react-router-dom'


const UpdatePage = () => {
    const { id } = useParams()

    const navigate = useNavigate();

    const [name, setName] = useState("")

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(response => {
                const authors = response.data;
                setName(authors.name);
            })
            .catch(err => console.log(err))
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/authors/${id}`, { name })
            .then(response => {
                console.log(response.data)
                navigate(`/authors/${id}`)
            })
            .catch(err => console.log(err))
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <p>            <Link to="/">Home</Link>
                    </p>
                    <p>Edit This Author</p>
                    <label style={{ margin: '10px' }}>Name</label>
                    <input type="text" name="name" value={name}
                        onChange={e => setName(e.target.value)} style={{ margin: '10px' }}
                    />
                </div>
                <button onClick={() => navigate('/')}>Cancel</button>
                <button type="submit" style={{ margin: '10px' }}>Submit</button>

            </form>
        </div>
    )
}

export default UpdatePage