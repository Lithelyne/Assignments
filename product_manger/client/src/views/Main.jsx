import React, { useState, useEffect } from "react";
import axios from "axios"
import CreateForm from "../components/CreateForm";
import ProductTable from "../components/ProductTable";


const Main = () => {
    const [productList, setProductList] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/Products`)
            .then(response => {
                setProductList(response.data);
            })
            .catch(err => console.log(err))
    }, [])

    const removeFromDom = (deleteId) => {
        const filteredList =  productList.filter((eachProduct)=>
            eachProduct._id !== deleteId)
        setProductList(filteredList)
    }

    const addToDom = (newProduct)=>{
        setProductList([...productList, newProduct])
    }


    return (
        <div>
            <CreateForm onCreate={addToDom}/>
            <h3 style={{ borderBottom: '1px solid black', paddingBottom: '10px', borderTop: '1px solid black', paddingTop: '10px' }}>All Products:</h3>
            <ProductTable productList = {productList} onDelete={removeFromDom} />
        </div>
    )
}

export default Main