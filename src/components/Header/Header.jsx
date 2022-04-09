import React from 'react'
import logo from './img/logo.png'
import './header.scss'
import { Container } from '@mui/material'
import { Link, animateScroll as scroll } from "react-scroll";
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';



export default function Header() {

    const drawerWidth = 240;


    const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    }),
    }));

    const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
    backgroundColor: 'black',
    }));
    
    function PersistentDrawerRight() {
        const theme = useTheme();
        const [open, setOpen] = React.useState(false);

        const handleDrawerOpen = () => {
            setOpen(true);
        };

        const handleDrawerClose = () => {
            setOpen(false);
        };

    return (
        <Box sx={{ display: 'flex'}} >
        <CssBaseline />
        <AppBar position="fixed" open={open} >
            <Toolbar >
            <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
                <Link
                activeClass="active"
                to="header"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}>
                    <img src={logo} alt="logo" className='header_logo'/>
                </Link>
            </Typography>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerOpen}
                sx={{ ...(open && { display: 'none' }) }}
            >
                <MenuIcon />
            </IconButton>
            </Toolbar>
        </AppBar>
        <Drawer
            sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
            },
            }}
            variant="temporary"
            anchor="right"
            open={open}
        >
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'permanent' ? <ChevronLeftIcon /> : <ChevronRightIcon style={{color: 'white'}}/>}
                </IconButton>
            </DrawerHeader>
                <List className='nav-list'>
                    <ListItem onClick={handleDrawerClose}><a href="#">Business areas</a></ListItem>
                    <ListItem onClick={handleDrawerClose}><a href="#">Featured images</a></ListItem>
                    <ListItem onClick={handleDrawerClose}><a href="#">Gear cage</a></ListItem>
                    <ListItem onClick={handleDrawerClose}><a href="#">Contact</a></ListItem>
                    <ListItem onClick={handleDrawerClose}><a href="#">Get template</a></ListItem>
                </List>
        </Drawer>
        </Box>
    );
    }

  return (
    <div className='header'>
            <header>
                <Container>
                    <div className="header_wraper">
                        <Link
                        activeClass="active"
                        to="header"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}>
                            <img src={logo} alt="logo" className='header_logo'/>
                        </Link>
                        <ul className="header_list">
                            <li className='header_list_item'>
                                <a href="#" className='header_list_item__link'>Business areas</a>
                            </li>
                            <li className='header_list_item'>
                                <a href="#" className='header_list_item__link'>Featured images</a>
                            </li>
                            <li className='header_list_item'>
                                <a href="#" className='header_list_item__link'>Gear cage</a>
                            </li>
                            <li className='header_list_item'>
                                <a href="#" className='header_list_item__link'>Contact</a>
                            </li>
                            <li className='header_list_item'>
                                <a href="#" className='header_list_item__link'>Get template</a>
                            </li>
                        </ul>
                    </div>
                    <div className="drawer">
                        <PersistentDrawerRight/> 
                    </div>
                </Container>
            </header>
            
            
        <div className="header_img">
            <ul className="header_img_icons">
                <li className="header_img_icons__item">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.37292 0C8.43752 0 8.48989 0.0523801 8.48989 0.116913V0.239364C8.48989 0.303897 8.43752 0.356277 8.37292 0.356277H8.23866V0.750704C12.3393 0.876693 15.625 4.24071 15.625 8.37297C15.625 12.5856 12.2114 16 8.00042 16C3.78941 16 0.375 12.5856 0.375 8.37297C0.375 4.24102 3.66099 0.877078 7.76134 0.750781V0.356277H7.62708C7.56248 0.356277 7.51019 0.303897 7.51019 0.239364V0.116913C7.51019 0.0523801 7.56248 0 7.62708 0H8.37292ZM8.19106 1.75062V2.41987C8.19106 2.5254 8.10554 2.61093 8.00004 2.61093C7.89453 2.61093 7.80894 2.5254 7.80894 2.41987V1.75062C4.30164 1.85038 1.47812 4.67406 1.37877 8.18221H2.04787C2.15338 8.18221 2.23897 8.26775 2.23897 8.37328C2.23897 8.47888 2.15338 8.56441 2.04787 8.56441H1.37877C1.47858 12.0723 4.30187 14.8962 7.80894 14.996V14.3268C7.80894 14.2212 7.89453 14.1356 8.00004 14.1356C8.10554 14.1356 8.19106 14.2212 8.19106 14.3268V14.996C11.6984 14.8966 14.5214 12.0725 14.6212 8.56441H13.9521C13.8466 8.56441 13.7611 8.47888 13.7611 8.37328C13.7611 8.26775 13.8466 8.18221 13.9521 8.18221H14.6212C14.5219 4.67375 11.6987 1.84999 8.19106 1.75062ZM7.99999 8.01702C8.1967 8.01702 8.35619 8.17655 8.35619 8.3733C8.35619 8.3936 8.3535 8.41314 8.35027 8.43245L10.6161 10.4819C10.6742 10.5345 10.7162 10.6026 10.7371 10.6782L10.7677 10.7894C10.7827 10.8435 10.7363 10.8948 10.681 10.8854L10.5672 10.866C10.4899 10.8529 10.418 10.8179 10.3598 10.7653L8.09358 8.7155C8.06359 8.72381 8.0326 8.72958 7.99999 8.72958C7.80336 8.72958 7.64379 8.57005 7.64379 8.3733C7.64379 8.17655 7.80336 8.01702 7.99999 8.01702Z" fill="white"/>
                    </svg>
                    <span>1/2000s</span>
                </li>
                <li className="header_img_icons__item">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.63925 10.5956L12.0234 14.8859C10.8401 15.597 9.46737 16 8 16C6.79297 16 5.65694 15.7393 4.63925 15.2415V10.5956ZM4.04733 6.39976V14.9331C1.82261 13.7005 0.284244 11.4012 0.0475711 8.72273L4.04733 6.39976ZM16 7.94027V8.01138C16 10.7136 14.651 13.1077 12.5919 14.5299L8.59215 12.2306L16 7.94027ZM11.9529 1.06667C14.1776 2.29926 15.716 4.59852 15.9527 7.27704L11.9529 9.6V1.06667ZM3.40808 1.46963L7.40785 3.76889L0 8.03556V8.01185C0 5.28593 1.34903 2.89185 3.40808 1.46963ZM8.00047 0C9.2075 0 10.3435 0.260741 11.3612 0.758519V5.38074L3.97704 1.09037C5.1604 0.402963 6.5331 0 8.00047 0Z" fill="white"/>
                    </svg>
                    <span>f/11</span>
                </li>
                <li className="header_img_icons__item">
                    <svg width="32" height="16" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M28.8992 0C30.6117 0 32 1.39911 32 3.125V12.875C32 14.6009 30.6117 16 28.8992 16H3.10078C1.38826 16 0 14.6009 0 12.875V3.125C0 1.39911 1.38826 0 3.10078 0H28.8992ZM12.71 2.911C12.0313 2.911 11.428 3.02737 10.9001 3.26012C10.3722 3.49287 9.96217 3.82775 9.66995 4.26475C9.37774 4.70175 9.23163 5.21475 9.23163 5.80375C9.23163 6.43075 9.37538 6.93188 9.66288 7.30713C9.95039 7.68237 10.2944 7.96263 10.6951 8.14787C11.0957 8.33313 11.6165 8.52075 12.2575 8.71075C12.7288 8.84375 13.0988 8.96488 13.3674 9.07413C13.6361 9.18338 13.86 9.333 14.0391 9.523C14.2182 9.713 14.3077 9.95525 14.3077 10.2498C14.3077 10.6108 14.1758 10.9029 13.9118 11.1261C13.6479 11.3494 13.285 11.461 12.8231 11.461C12.3706 11.461 12.0148 11.3422 11.7555 11.1047C11.5067 10.8767 11.3642 10.57 11.3282 10.1844L11.3243 10.1357H9.20335L9.20495 10.2006C9.22476 10.7813 9.38918 11.2869 9.69823 11.7175C10.0187 12.164 10.4547 12.506 11.0061 12.7435C11.5576 12.981 12.1774 13.0997 12.8655 13.0997C13.5913 13.0997 14.2182 12.9644 14.746 12.6936C15.2739 12.4229 15.6745 12.0595 15.9479 11.6035C16.2213 11.1475 16.358 10.6535 16.358 10.1215C16.358 9.504 16.2118 9.00525 15.9196 8.62525C15.6274 8.24525 15.2786 7.96025 14.8733 7.77025C14.468 7.58025 13.9448 7.39025 13.3038 7.20025C12.8325 7.05775 12.4672 6.93188 12.208 6.82263C11.9488 6.71338 11.732 6.57087 11.5576 6.39512C11.3832 6.21938 11.296 5.9985 11.296 5.7325C11.296 5.3525 11.4115 5.06275 11.6424 4.86325C11.8734 4.66375 12.1821 4.564 12.5686 4.564C13.0116 4.564 13.3674 4.67563 13.6361 4.89888C13.8936 5.11282 14.0363 5.3813 14.0643 5.70431L14.0673 5.74675H16.2448L16.2399 5.68617C16.1627 4.82222 15.8133 4.14654 15.1914 3.65913C14.5552 3.16038 13.728 2.911 12.71 2.911ZM23.3942 2.911C22.4704 2.911 21.6221 3.1295 20.8491 3.5665C20.0762 4.0035 19.4634 4.60913 19.011 5.38338C18.5585 6.15763 18.3323 7.02925 18.3323 7.99825C18.3323 8.97675 18.5585 9.85312 19.011 10.6274C19.4634 11.4016 20.0762 12.0072 20.8491 12.4443C21.6221 12.8813 22.4704 13.0997 23.3942 13.0997C24.318 13.0997 25.1664 12.8813 25.9393 12.4443C26.7123 12.0072 27.3227 11.4016 27.7704 10.6274C28.2182 9.85312 28.442 8.97675 28.442 7.99825C28.442 7.02925 28.2182 6.15763 27.7704 5.38338C27.3227 4.60913 26.7147 4.0035 25.9464 3.5665C25.1782 3.1295 24.3274 2.911 23.3942 2.911ZM6.76242 3.0535H4.78288V13H6.76242V3.0535ZM23.3942 4.7065C23.9881 4.7065 24.5113 4.8395 24.9637 5.1055C25.4162 5.3715 25.7697 5.75387 26.0242 6.25262C26.2787 6.75138 26.406 7.33325 26.406 7.99825C26.406 8.66325 26.2787 9.2475 26.0242 9.751C25.7697 10.2545 25.4162 10.6416 24.9637 10.9124C24.5113 11.1831 23.9881 11.3185 23.3942 11.3185C22.8004 11.3185 22.2749 11.1831 21.8177 10.9124C21.3605 10.6416 21.0047 10.2545 20.7501 9.751C20.4956 9.2475 20.3684 8.66325 20.3684 7.99825C20.3684 7.33325 20.4956 6.75138 20.7501 6.25262C21.0047 5.75387 21.3605 5.3715 21.8177 5.1055C22.2749 4.8395 22.8004 4.7065 23.3942 4.7065Z" fill="white"/>
                    </svg>
                    <span>100</span>
                </li>
                <li className="header_img_icons__item">
                    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5 6.44452C4.03804 6.44452 3.25973 5.70036 3.25973 4.78061C3.25973 3.86295 4.03804 3.11879 5 3.11879C5.95977 3.11879 6.73809 3.86295 6.73809 4.78061C6.73809 5.70036 5.95977 6.44452 5 6.44452ZM5 0C2.23874 0 0 2.14051 0 4.78061C0 6.70791 2.6585 12.471 4.09926 15.4497C4.45343 16.1834 5.54438 16.1834 5.90074 15.4497C7.33931 12.471 10 6.70791 10 4.78061C10 2.14051 7.76126 0 5 0Z" fill="white"/>
                    </svg>
                    <span>Iceland</span>
                </li>
            </ul>
        </div>
    </div>
  )
}
