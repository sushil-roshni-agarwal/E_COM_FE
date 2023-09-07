import React from 'react'
import BeforeLoginHeader from './BeforeLoginHeader';

const HomePage=({isRegisterButtonClicked,setRegisterButtonClicked})=>{

    return (
        <>
        <BeforeLoginHeader setRegisterButtonClicked={setRegisterButtonClicked}></BeforeLoginHeader>
        </>
      );
};
export default HomePage;
