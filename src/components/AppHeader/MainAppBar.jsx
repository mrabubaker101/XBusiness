import {useState} from 'react';
import {AppBar,Box,Toolbar,Typography,Menu,Container,Button,MenuItem,Paper,IconButton} from '@mui/material';
import IssueCheck from '../IssuePayments/IssueCheck';  
import WidgetsIcon from '@mui/icons-material/Widgets'; 
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import RightMenus from '../Global/Header/RightMenus';
import AppDrawer from '../Global/Header/AppDrawer';
import AppBreadCrumbs from '../Global/Breadcrumbs/AppBreadCrumbs';
import MenuOpenSharpIcon from '@mui/icons-material/MenuOpenSharp';
import { Outlet} from 'react-router';
import BasePage from '../Layouts/BasePage';

const drawerWidth = 220;
const pages = ['Products',   'Blog'];

const MainAppBar = (props) => {   
  const {token,setToken} =props
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    }; 
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    }; 
    
    //For drawer

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
      };
      
    return (  
    <Box sx={{ display: 'flex' }}>     
      <AppBar  
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      > 
        <Container  > 
            <Toolbar  disableGutters>  
            
            
            <IconButton
              color="inherit"  
              onClick={()=>setMobileOpen(!mobileOpen)}
              sx={{ mr: 2  }}
            >
                <MenuOpenSharpIcon />
          </IconButton>   



          <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                //fontStyle:'oblique',
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Financial Accounting
          </Typography>

 
          {/* Hidden Menu for left side , This Menu will show when screen is sx  */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                  <WidgetsIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
          </Box>

          {/* Hidden Text for App , This will show when screen is sx  */} 
          <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              FA Manager
            </Typography>



              {/* Always Visible until screen size will becom xs */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>


              {/* Right Menus always show */}
            <RightMenus 
                //send compulsory states
                anchorElUser={anchorElUser}
                setAnchorElUser={setAnchorElUser}

                //send all props that are comming from top parent series 
                {...props}
            />

            
            </Toolbar> 
        </Container>
      </AppBar> 
  

        <Container  sx={{marginTop:2}} >
           
      {/* Drawer */}
      <AppDrawer 
        mobileOpen={mobileOpen} 
        setMobileOpen={setMobileOpen}
        drawerWidth={drawerWidth}
      />



            {/* BreadCumbs */} 
            <br /> <AppBreadCrumbs/><br />
            
            <Container component={Paper} elevation={5}   
              style={{
                boxShadow: '3px 0px 15px -5px navy',
                borderRadius:'0px 10px 0px 10px'
              }}
            >
              {/* General Routing  */}
              <BasePage token={token} setToken={setToken}/>
            </Container>  
        </Container>  
    </Box>
    );
}
export default MainAppBar;