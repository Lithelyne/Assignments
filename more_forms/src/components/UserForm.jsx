import React, { useState } from 'react';


    const UserForm = (props) => {
        const [firstname, setFirstname] = useState("");
        const [lastname, setLastname] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [confirmpassword, setConfirmPassword] = useState("")

    const createUser = (e) => {
        e.preventDefault();
        if (firstname.length<2 || lastname.length<2 || email.length<5) {
            alert("invalid")
        }
        if (confirmpassword !== password) {
            alert("Passwords must match!");
        }
        else {
        const newUser = { firstname, lastname, email, password, confirmpassword };
        console.log("Welcome", newUser);
        }
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <form onSubmit={createUser} style={{ display: 'inline-block', textAlign: 'left' }}>
                <div>
                    <div>
                        <label>First Name: </label>
                        <input type="text" name="firstName" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                        {
                            firstname.length <2 &&
                            <p style={{color: "red"}}> Please input first name</p>
                        }
                    </div>
                    <div>
                        <label>Last Name: </label>
                        <input type="text" name="lastName" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                        {
                            lastname.length <2 &&
                            <p style={{color: "red"}}> Please input last name</p>
                        }
                    </div>
                    <div>
                        <label>Email Address: </label>
                        <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    {
                            email.length <5 &&
                            <p style={{color: "red"}}> Please input your email</p>
                        }
                    <div>
                        <label>Password: </label>
                        <input type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        {
                            password.length <8 &&
                            <p style={{color: "red"}}> Please input password</p>
                        }
                    </div>
                    <div>
                        <label>Confirm Password: </label>
                        <input type="text" name="confirm" value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        
                    </div>
                    <input type="submit" value="Create User" />
                </div>
            </form>
        </div>
    );
};

export default UserForm;
