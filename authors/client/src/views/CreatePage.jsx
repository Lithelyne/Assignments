import React from "react";
import { useNavigate, Link } from "react-router-dom";

import CreateForm from "../components/CreateForm";

const CreatePage = () => {

    const navigate = useNavigate();
    return (
        <div>
            <p>
                <Link to="/">Home</Link>
            </p>
            <h3>Add a new author:</h3>
            <CreateForm onCreate={() => navigate("/")} />
        </div>
    )
}

export default CreatePage