import React from 'react';
import Style from './Navbar.module.scss';
import Toggler from "./home/Toggler";
import { HashLink as Link } from 'react-router-hash-link';
import { Box } from "@mui/material";
import { info } from "../info/Info";
import { singlePage } from '../info/Info';

const links = [
    {
        name: 'Home',
        to: '',
        active: 'home'
    },
    {
        name: 'About',
        to: 'about',
        active: 'about'
    },
    {
        name: 'experience',
        to: 'experience',
        active: 'experience'
    },
    {
        name: 'Projects',
        to: 'portfolio',
        active: 'portfolio'
    }
]

// This function is used to create a scroll offset to compensate for the navbar
// when you click on the nav buttons to scroll down.
const scrollWidthOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}


export default function Navbar({ darkMode, handleClick, active, setActive }) {

    return (
        <Box component={'nav'} width={'100%'} position={singlePage ? 'fixed' : 'relative'} className={darkMode? Style.dark : Style.light}>
            <Box component={'ul'} display={'flex'} justifyContent={'center'} alignItems={'center'}
                gap={{ 
                    xs: '1rem',    // Mobile: 320px-767px
                    sm: '1.5rem',  // Small tablets: 768px-1023px 
                    md: '8rem',    // Default laptop range (preserved)
                    xl: '10rem',   // Large monitors: 2000px+
                    '2xl': '12rem' // Ultra-wide: 2560px+
                }}
                textTransform={'lowercase'} 
                fontSize={'1rem'}
                sx={{
                    '@media screen and (max-width: 375px)': {
                        gap: '0.5rem',
                        flexWrap: 'nowrap',
                        overflowX: 'hidden',
                        justifyContent: 'space-between',
                        paddingX: '0.75rem',
                        width: '100%'
                    },
                    '@media screen and (min-width: 376px) and (max-width: 767px)': {
                        gap: '1rem',
                        flexWrap: 'nowrap',
                        overflowX: 'hidden',
                        justifyContent: 'space-evenly',
                        paddingX: '1rem',
                        width: '100%'
                    },
                    '@media screen and (min-width: 768px) and (max-width: 1023px)': {
                        gap: '2rem'
                    },
                    '@media screen and (min-width: 2000px)': {
                        gap: '10rem'
                    },
                    '@media screen and (min-width: 2560px)': {
                        gap: '12rem'
                    }
                }}>
                {links.map((link, index) => (
                    <Box key={index} component={'li'} className={(link.active === active && !link.type) && Style.active}
                        sx={{ borderImageSource: info.gradient }}>
                        <Link to={singlePage ? `#${link.to}` : `/${link.to}`}
                        scroll={el => scrollWidthOffset(el)}
                            smooth
                            onClick={() => setActive(link.active)} className={Style.link}>
                            {!link.type && <p style={{ padding: '0.5rem 0', margin: 0, whiteSpace: 'nowrap' }}>{link.name}</p>}
                            {link.type && <h1>{link.name}</h1>}
                        </Link>
                    </Box>
                ))}
                <Box component={'li'} sx={{
                    /* Mobile phones (320px - 767px) */
                    '@media screen and (max-width: 767px)': {
                        minWidth: '44px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }
                }}>
                    <Toggler darkMode={darkMode} handleClick={handleClick} />
                </Box>
            </Box>
        </Box>
    )
}