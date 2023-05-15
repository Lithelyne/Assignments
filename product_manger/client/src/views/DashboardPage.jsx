import React, {useState, useEffect} from "react";
import axios from "axios"

const DashboardPage = () => {
    const [productList, setProductList] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/Products`)
            .then(response=>{
                console.log(response.data);
                setProductList(response.data);
            })
            .catch(err=>console.log(err))
    }, [])




    return (
        <div>
            <h3>Product List</h3>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productList.map((eachProduct, idx)=>(
                            <tr key={idx}>
                                <td>{eachProduct.title}</td>
                                <td>{eachProduct.price}</td>
                                <td>{eachProduct.description}</td>

                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DashboardPage