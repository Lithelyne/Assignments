import React, { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";



const CreateForm = (props) => {
    const [name, setName] = useState("")

    const [errors, setErrors] = useState([])

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/authors`, { name })
            .then(response => {
                props.onCreate(response.data)
            })
            .catch(err => {
                const errResponse = err.response.data.errors;
                const errMsgArr = []

                for (const eachKey in errResponse) {
                    errMsgArr.push(errResponse[eachKey]["message"])
                }
                setErrors(errMsgArr);
            })
    }


    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <form onSubmit={handleSubmit}>
                <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
                    <label style={{ marginRight: '10px', width: '50px' }}>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}

                    />
                </div>
                <button onClick={() => navigate('/')} style={{ margin: '10px' }}>Cancel</button>
                <button type="submit" style={{ margin: '10px' }}>Submit</button>
                {
                    errors.map((eachErr, idx) => (
                        <p key={idx} style={{ color: "red" }}>
                            {eachErr}
                        </p>
                    ))
                }
            </form>
        </div>


    )
}

export default CreateForm