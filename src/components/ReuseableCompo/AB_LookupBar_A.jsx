import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
const MyLookupBar = (props)=> {
  let{OnLookupClick}=props  
  const [values, setValues] = React.useState({
        amount: '',
        showPassword: false,
      });

    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
      
      return (
        <Box >              
            <FormControl fullWidth    sx={{ m: 1 }} variant="outlined"  >
              <InputLabel >Account</InputLabel>
              <OutlinedInput  
              value={values.password}
                onChange={handleChange('password')}
                endAdornment={ 
                  <InputAdornment position="end" >
                      <IconButton edge="end" onClick={()=>OnLookupClick(true)} >
                        <SearchIcon fontSize='large' color='secondary' /> 
                    </IconButton>
                  </InputAdornment>
                }
                label="Account"
              />
            </FormControl> 
        </Box>
      );
    } 
export default  MyLookupBar;

