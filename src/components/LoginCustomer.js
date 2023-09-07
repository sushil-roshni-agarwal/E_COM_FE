import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginCustomer=()=>{
    const [formData, setFormData] = useState({
        custUserName: '',
        custPassword: '',
    });

    const navigate = useNavigate(); 

    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (event) => {
        const { name, value } = event.target;
            setFormData({
                ...formData,
                [name]: value
            });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/loginCustomer', formData);
            console.log(response.data);
            if(response.data === "Cant login! Invalid credentials"){
                setErrorMessage("Wrong Credentials");
            }
            else{
                navigate("/products")
                setErrorMessage("");
            }
            console.log(response);
                setFormData({
                custUserName: '',
                custPassword: '',
            });
        } catch (error) {
            console.error(error);
        }
    };

    return(
        <>
        <div className="container">
            <h2>LOGIN</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    {errorMessage && <p className="errormsg">{errorMessage}</p>}
                    <label htmlFor="custUserName" className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="custUserName"
                        name="custUserName"
                        value={formData.custUserName}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="custPassword" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="custPassword"
                        name="custPassword"
                        value={formData.custPassword}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
        </>
    )
}

export default LoginCustomer;