import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegisterCustomer=()=>{

    const [formData, setFormData] = useState({
        custName: '',
        custPhoneNumber: '',
        custUserName: '',
        custPassword: '',
        custRegisterDate: '',
        address: {
            streetName: '',
            cityName: '',
            pinCode:'',
        }
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
    
        if (name === "streetName" || name === "cityName" || name === "pinCode") {
            setFormData((prevData) => ({
                ...formData,
                address: {
                    ...prevData.address,
                    [name]: value
                }
            }));
        } else {
            
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };
    

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Handle registration logic here, e.g., submit the formData to an API
        try {
            const response = await axios.post('http://localhost:8080/registerCustomer', formData).then(
                
            );
            console.log(response);

            // Clear the form data after successful registration
            setFormData({
                custName: '',
                custPhoneNumber: '',
                custUserName: '',
                custPassword: '',
                custRegisterDate: '', // Reset to empty
                address: {
                    streetName: '',
                    cityName: '',
                    pinCode: '',
                }
            });
        } catch (error) {
            console.error(error);
        }
    };

    return(
        <>
            <div className="container">
            <h2>Registration</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="custName" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="custName"
                        name="custName"
                        value={formData.custName}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="custPhoneNumber" className="form-label">Phone Number</label>
                    <input
                        type="tel"
                        className="form-control"
                        id="custPhoneNumber"
                        name="custPhoneNumber"
                        value={formData.custPhoneNumber}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
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
                <div className="mb-3">
                    <label htmlFor="custRegisterDate" className="form-label">Date</label>
                    <input
                        type="date"
                        className="form-control"
                        id="custRegisterDate"
                        name="custRegisterDate"
                        value={formData.custRegisterDate}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="streetName" className="form-label">Street Name</label>
                    <input
                     type="text" 
                     className="form-control" 
                     id="streetName" 
                     name="streetName" 
                     value={formData.streetName}
                     onChange={handleInputChange}
                     required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="cityName" className="form-label">City Name</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="cityName" 
                    name="cityName" 
                    value={formData.cityName}
                    onChange={handleInputChange}
                    required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="pinCode" className="form-label">Pin Code</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="pinCode" 
                    name="pinCode" 
                    value={formData.pinCode}
                    onChange={handleInputChange}
                    required/>
                </div>

                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
        </>
    )
}

export default RegisterCustomer;
