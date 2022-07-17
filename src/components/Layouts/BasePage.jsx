import React from 'react'
import { Routes, Route} from 'react-router';
import WrongPage from '../Global/WrongPage';
import Logout from '../Global/Logout';
import NewVendor from '../AccountsPayables/NewVendor';
/*
<>    
        {/* <Route path="/" element={<MainPage {...props}/>} > */
        // <Route path="/" element={<MainPage {...props}/>} />
          {/* These routes will get rendered when Outlet is provided in parent component */} 
        {/* </Route> */}

        {/* For 404 Page */}
        {/* <Route path="*" element={<Navigate to="/" /> }/> */}

 const BasePage =(props)=> { 
    return (
      <>   
      <Routes>        
        <Route path="/" element={<h1>Company Dashboard</h1>} />  
        <Route path="/logout" element={<Logout {...props}/>} />
        <Route path="/avc" element={<h3>avc Component called</h3>} />
        <Route path="/NewVendor" element={<NewVendor />} />
        <Route path="*" element={<WrongPage /> }/> 
      </Routes>
       </>
    )
  } 
export default BasePage;