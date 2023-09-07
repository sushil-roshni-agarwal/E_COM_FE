import React from 'react'
import { Link } from 'react-router-dom';

const BeforeLoginHeader=()=>{
    return (
        <header className="bg-primary py-3">
        <div className="container d-flex justify-content-between align-items-center">
            <div>
            <h1 className="text-white">Welcome to My Website</h1>
            </div>
            <div>
            <Link to="/login">
                <button className="btn btn-light me-2">Login</button>
            </Link>
            <Link to="/register">
                <button className="btn btn-light">Regsiter</button>
            </Link>
            </div>
        </div>
        </header>
      );
}
export default BeforeLoginHeader;