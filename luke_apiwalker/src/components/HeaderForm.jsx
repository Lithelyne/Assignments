import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HeaderForm = () => {
    const [category, setCategory] = useState("people")
    const [id, setId] = useState("")

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/${category}/${id}`)
    }

    return (
        
            <form onSubmit={handleSubmit}>
                <label>
                    Search For:
                    <select name="category" value={category} onChange={e => setCategory(e.target.value)}>
                        <option value="people">People</option>
                        <option value="planets">Planet</option>
                    </select>
                </label>
                <label>ID:</label>
                <input type="number" name="id" value={id} onChange={e => setId(e.target.value)} />
                <button type="submit">Search</button>
            </form>
        
    )
}


export default HeaderForm;
