import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AuthorsTable = (props) => {
    const handleDelete = (deleteId) => {
        axios
            .delete(`http://localhost:8000/api/authors/${deleteId}`)
            .then((response) => {
                props.onDelete(deleteId);
            })
            .catch((err) => console.log(err));
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {props.authorsList.map((eachAuthors, idx) => (
                        <tr key={idx}>
                            <td style={{ paddingRight: '20px' }}>
                                <Link to={`/authors/${eachAuthors._id}`} style={{ marginLeft: '10px' }}>
                                    {eachAuthors.name}
                                </Link>
                            </td>
                            <td>
                                <span>
                                    <Link to={`/authors/${eachAuthors._id}/edit`} style={{ marginLeft: '10px', marginRight: '10px' }}>
                                        Edit
                                    </Link>
                                    <button onClick={() => handleDelete(eachAuthors._id)}>Delete</button>
                                </span>
                            </td>
                            <td>{eachAuthors.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AuthorsTable;
