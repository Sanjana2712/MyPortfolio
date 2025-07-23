import React, { useEffect, useState } from 'react';
import Style from './BaseLayout.module.scss'
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import MultiPageRoutes from './MultiPageRoutes';
import { singlePage } from '../info/Info';
import SinglePageRoutes from './SinglePageRoutes';
import useScrollObserver from '../hooks/useScrollObserver';

export default function BaseLayout() {
   const location = useLocation()

   const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));
   const refHome = useScrollObserver(setActive);
   const refAbout = useScrollObserver(setActive);
   const refPortfolio = useScrollObserver(setActive);
   let [darkMode, setDarkMode] = useState(false);
   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

   function handleToggleDarkMode() {
      let oppositeOfCurrentDarkMode = !darkMode
      console.log(oppositeOfCurrentDarkMode)
      localStorage.setItem('darkMode', `${oppositeOfCurrentDarkMode}`)
      setDarkMode(oppositeOfCurrentDarkMode)
   }

   useEffect(() => {
      let detectedDarkMode = JSON.parse(localStorage.getItem('darkMode'));

      if (detectedDarkMode) {
         setDarkMode(detectedDarkMode)
      } else {
         localStorage.setItem('darkMode', 'false')
      }
   }, [])

   useEffect(() => {
      const handleMouseMove = (e) => {
         setMousePosition({ x: e.clientX, y: e.clientY });
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
   }, []);

   return (
      <>
         {darkMode && (
            <div 
               style={{
                  position: 'fixed',
                  pointerEvents: 'none',
                  zIndex: 50,
                  width: '450px',
                  height: '450px',
                  borderRadius: '50%',
                  opacity: 0.3,
                  filter: 'blur(46px)',
                  transition: 'all 20ms ease-out',
                  background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
                  left: mousePosition.x - 225,
                  top: mousePosition.y - 225,
               }}
            />
         )}
         <Box className={`${darkMode ? Style.dark : Style.light} ${darkMode ? 'dark' : 'light'}`}>
            <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
               justifyContent={'space-between'}>
               <Grid item>
                  <Navbar darkMode={darkMode} handleClick={handleToggleDarkMode} active={active} setActive={setActive} />
               </Grid>
               <Grid item flexGrow={1}>
                  {singlePage ? <SinglePageRoutes refs={{refHome, refAbout, refPortfolio}} darkMode={darkMode}/> : <MultiPageRoutes darkMode={darkMode} />}
               </Grid>
              
            </Grid>
         </Box>
      </>
   )
}

