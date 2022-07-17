import React, { useEffect, useState } from 'react' 
import {Drawer,Button, Container, Grid, Typography, Box, Paper, Toolbar} from '@mui/material';
import { styled } from '@mui/material/styles';
import { green, purple, red } from '@mui/material/colors';
import { width } from '@mui/system';

const drawerWidth = 270;
 

 const MyTemproryDrawer =(props)=> { 
  
    const {
        children, height, open, setDrawerOpen, anchor
    } = props    

    const [DrawerSize, setDrawerSize] = useState(window.innerWidth);
     
    let check = window.innerWidth >1000?'750px':window.innerWidth<500 ?'300px':'650px'
 
    useEffect(() => {
     const handelSize =()=>{
        setDrawerSize(window.innerWidth)
     } 
     window.addEventListener('resize',handelSize)
     return ()=>{
        window.removeEventListener('resize',handelSize)
     }
    }, []);


  return ( <Drawer  
        variant='persistent' 
        PaperProps={{ 
            sx: {
                //minWidth:"60%",
                // width:{check},
                margin:"auto",
                height: {height},
               // minWidth:1000
               //color: "rgba(225,249,27,1)",
               //backgroundColor: "rgba(30, 139, 195, 0.8)" 
                
            }
        }}
        anchor={anchor} //position
        open={open} //bool
        onClose={()=>setDrawerOpen(true)} //handler
        >
            <div style={{width:`${check}`}} >  
            <Toolbar />  
            <Button variant='outlined' onClick={()=>setDrawerOpen(false)}>Close</Button> 
              {/* //Place Childerns */} 
              {children} 
               </div>
        </Drawer> )}
export default MyTemproryDrawer;
 