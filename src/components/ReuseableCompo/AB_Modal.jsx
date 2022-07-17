import { Button,  Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material' 

const AB_Modal=(props)=> {
let{ Heading,Content,open,Closer,children}=props 
  return (
    <Dialog 
    open={open} 
    onClose={()=>Closer(false)} 
    fullWidth 
    //fullScreen
    maxWidth='md'
    > 
        <u><DialogTitle>{Heading}</DialogTitle></u>
        {Content?.Length > 0 ?<DialogContent>{Content}</DialogContent>:null} 
        {/* Render Modal's HTML that passed from outside */}
         
        {children}
         
        <DialogActions>
             <Button variant='outlined' color='primary' onClick={()=>Closer(false)}>Close</Button>
        </DialogActions>   
    </Dialog> 
  )
} 
export default AB_Modal; 