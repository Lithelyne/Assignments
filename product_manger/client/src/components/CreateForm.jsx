import React, { useState } from "react";
import axios from "axios"



const CreateForm = (props) => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/Products`, { title, price, description })
            .then(response => {
                props.onCreate(response.data)
            })
            .catch(err => console.log(err))
    }


    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <form onSubmit={handleSubmit} style={{ margin: '10px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
                    <label style={{ marginRight: '10px', width: '100px' }}>Title</label>
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        style={{ marginBottom: '10px' }}
                    />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
                    <label style={{ marginRight: '10px', width: '100px' }}>Price</label>
                    <input
                        type="text"
                        name="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        style={{ marginBottom: '10px' }}
                    />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
                    <label style={{ marginRight: '10px', width: '100px' }}>Description</label>
                    <input
                        type="text"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        style={{ marginBottom: '10px' }}
                    />
                </div>
                <button type="submit">Create New Product</button>
            </form>
        </div>


    )
}

export default CreateForm