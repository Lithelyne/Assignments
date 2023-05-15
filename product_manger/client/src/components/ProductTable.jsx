import React from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

const ProductTable = (props) =>{

    const handleDelete = (deleteId) =>{
        axios.delete(`http://localhost:8000/api/products/${deleteId}`)
        .then(reponse=>{
            props.onDelete(deleteId)
        })
        .catch(err=>console.log(err))
    }





    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.productList.map((eachProduct, idx) => (
                            <tr key={idx}>
                                <td style={{ paddingRight: "20px" }}>{eachProduct.title}</td>
                                <td style={{ paddingRight: "20px" }}>{eachProduct.price}</td>
                                <td>{eachProduct.description}</td>

                                <td>
                                    <span>
                                        <Link to={`/Products/${eachProduct._id}`} style={{ marginLeft: "10px" }}>View</Link>
                                        <Link to={`/Products/${eachProduct._id}/edit`} style={{ marginLeft: "10px", marginRight: "20px" }}>Edit</Link>
                                    </span>
                                </td>
                                <td>
                                    <button onClick={()=>handleDelete(eachProduct._id)}>Delete</button>
                                </td>

                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProductTable