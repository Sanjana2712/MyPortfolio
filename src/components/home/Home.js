import React from 'react';
import Style from './Home.module.scss';
import me from '../../img/dummy.jpg';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import {Box, Button} from "@mui/material";
import {info} from "../../info/Info";
import { ReactTyped as Typed } from 'react-typed';
import SocialIcon from "./SocialIcon";

export default function Home({innerRef}) {

   return (
      <Box ref={innerRef} component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'}
           justifyContent={'center'} minHeight={'calc(100vh - 175px)'} id={'home'} sx={{
              position: 'relative',
              overflow: 'hidden',
              maxWidth: '1400px',
              width: '100%',
              mx: 'auto',
              px: {xs: 2, md: 4, lg: 6}
           }}>
         
         {/* Constellation Background - Full Screen */}
         <Box sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            pointerEvents: 'none',
            zIndex: 0
         }}>
            {/* SVG for constellation lines and points */}
            <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
               {/* Constellation patterns - Realistic geometric shapes */}
               
               {/* Big Dipper constellation - Top left */}
               <circle cx="12%" cy="15%" r="1.4" fill="rgba(136, 146, 176, 0.3)" />
               <circle cx="18%" cy="12%" r="1.2" fill="rgba(136, 146, 176, 0.25)" />
               <circle cx="24%" cy="10%" r="1.3" fill="rgba(136, 146, 176, 0.28)" />
               <circle cx="30%" cy="8%" r="1.2" fill="rgba(136, 146, 176, 0.25)" />
               <circle cx="35%" cy="12%" r="1.4" fill="rgba(136, 146, 176, 0.3)" />
               <circle cx="32%" cy="18%" r="1.1" fill="rgba(136, 146, 176, 0.22)" />
               <circle cx="28%" cy="22%" r="1.3" fill="rgba(136, 146, 176, 0.26)" />
               
               {/* Orion constellation - Top right */}
               <circle cx="75%" cy="8%" r="1.5" fill="rgba(136, 146, 176, 0.32)" />
               <circle cx="85%" cy="12%" r="1.3" fill="rgba(136, 146, 176, 0.28)" />
               <circle cx="78%" cy="18%" r="1.2" fill="rgba(136, 146, 176, 0.25)" />
               <circle cx="82%" cy="22%" r="1.4" fill="rgba(136, 146, 176, 0.3)" />
               <circle cx="88%" cy="20%" r="1.1" fill="rgba(136, 146, 176, 0.22)" />
               <circle cx="80%" cy="25%" r="1.2" fill="rgba(136, 146, 176, 0.24)" />
               <circle cx="84%" cy="28%" r="1.3" fill="rgba(136, 146, 176, 0.27)" />
               
               {/* Cassiopeia W-shape - Middle left */}
               <circle cx="8%" cy="40%" r="1.3" fill="rgba(136, 146, 176, 0.27)" />
               <circle cx="15%" cy="35%" r="1.2" fill="rgba(136, 146, 176, 0.24)" />
               <circle cx="22%" cy="42%" r="1.4" fill="rgba(136, 146, 176, 0.3)" />
               <circle cx="28%" cy="38%" r="1.1" fill="rgba(136, 146, 176, 0.22)" />
               <circle cx="35%" cy="45%" r="1.3" fill="rgba(136, 146, 176, 0.28)" />
               
               {/* Southern Cross - Middle right */}
               <circle cx="78%" cy="42%" r="1.4" fill="rgba(136, 146, 176, 0.3)" />
               <circle cx="85%" cy="38%" r="1.2" fill="rgba(136, 146, 176, 0.25)" />
               <circle cx="82%" cy="48%" r="1.3" fill="rgba(136, 146, 176, 0.28)" />
               <circle cx="75%" cy="45%" r="1.2" fill="rgba(136, 146, 176, 0.24)" />
               <circle cx="88%" cy="45%" r="1.1" fill="rgba(136, 146, 176, 0.22)" />
               
               {/* Triangle constellation - Lower left */}
               <circle cx="15%" cy="68%" r="1.3" fill="rgba(136, 146, 176, 0.28)" />
               <circle cx="25%" cy="75%" r="1.4" fill="rgba(136, 146, 176, 0.3)" />
               <circle cx="35%" cy="72%" r="1.2" fill="rgba(136, 146, 176, 0.25)" />
               
               {/* Diamond constellation - Lower right */}
               <circle cx="72%" cy="70%" r="1.2" fill="rgba(136, 146, 176, 0.24)" />
               <circle cx="78%" cy="65%" r="1.4" fill="rgba(136, 146, 176, 0.3)" />
               <circle cx="84%" cy="70%" r="1.3" fill="rgba(136, 146, 176, 0.27)" />
               <circle cx="78%" cy="75%" r="1.2" fill="rgba(136, 146, 176, 0.25)" />
               
               {/* Small pentagon - Bottom center */}
               <circle cx="45%" cy="85%" r="1.1" fill="rgba(136, 146, 176, 0.22)" />
               <circle cx="52%" cy="82%" r="1.2" fill="rgba(136, 146, 176, 0.25)" />
               <circle cx="55%" cy="88%" r="1.1" fill="rgba(136, 146, 176, 0.23)" />
               <circle cx="48%" cy="92%" r="1.2" fill="rgba(136, 146, 176, 0.24)" />
               <circle cx="42%" cy="90%" r="1.1" fill="rgba(136, 146, 176, 0.22)" />
               
               {/* Isolated bright stars for depth */}
               <circle cx="60%" cy="25%" r="1.5" fill="rgba(136, 146, 176, 0.35)" />
               <circle cx="5%" cy="60%" r="1.3" fill="rgba(136, 146, 176, 0.28)" />
               <circle cx="95%" cy="75%" r="1.4" fill="rgba(136, 146, 176, 0.32)" />
               <circle cx="50%" cy="55%" r="1.2" fill="rgba(136, 146, 176, 0.26)" />
               
               {/* Continuous Star Map - Interconnected like real astronomical charts */}
               
               {/* Main constellation patterns */}
               {/* Big Dipper - Classic ladle shape */}
               <line x1="12%" y1="15%" x2="18%" y2="12%" stroke="rgba(136, 146, 176, 0.16)" strokeWidth="0.9" />
               <line x1="18%" y1="12%" x2="24%" y2="10%" stroke="rgba(136, 146, 176, 0.16)" strokeWidth="0.9" />
               <line x1="24%" y1="10%" x2="30%" y2="8%" stroke="rgba(136, 146, 176, 0.16)" strokeWidth="0.9" />
               <line x1="30%" y1="8%" x2="35%" y2="12%" stroke="rgba(136, 146, 176, 0.16)" strokeWidth="0.9" />
               <line x1="35%" y1="12%" x2="32%" y2="18%" stroke="rgba(136, 146, 176, 0.16)" strokeWidth="0.9" />
               <line x1="32%" y1="18%" x2="28%" y2="22%" stroke="rgba(136, 146, 176, 0.16)" strokeWidth="0.9" />
               
               {/* Orion belt and structure */}
               <line x1="75%" y1="8%" x2="78%" y2="18%" stroke="rgba(136, 146, 176, 0.15)" strokeWidth="0.9" />
               <line x1="78%" y1="18%" x2="82%" y2="22%" stroke="rgba(136, 146, 176, 0.15)" strokeWidth="0.9" />
               <line x1="82%" y1="22%" x2="80%" y2="25%" stroke="rgba(136, 146, 176, 0.15)" strokeWidth="0.9" />
               <line x1="85%" y1="12%" x2="88%" y2="20%" stroke="rgba(136, 146, 176, 0.15)" strokeWidth="0.9" />
               <line x1="88%" y1="20%" x2="84%" y2="28%" stroke="rgba(136, 146, 176, 0.15)" strokeWidth="0.9" />
               
               {/* Cassiopeia W-shape */}
               <line x1="8%" y1="40%" x2="15%" y2="35%" stroke="rgba(136, 146, 176, 0.14)" strokeWidth="0.9" />
               <line x1="15%" y1="35%" x2="22%" y2="42%" stroke="rgba(136, 146, 176, 0.14)" strokeWidth="0.9" />
               <line x1="22%" y1="42%" x2="28%" y2="38%" stroke="rgba(136, 146, 176, 0.14)" strokeWidth="0.9" />
               <line x1="28%" y1="38%" x2="35%" y2="45%" stroke="rgba(136, 146, 176, 0.14)" strokeWidth="0.9" />
               
               {/* Southern Cross */}
               <line x1="78%" y1="42%" x2="82%" y2="48%" stroke="rgba(136, 146, 176, 0.13)" strokeWidth="0.8" />
               <line x1="75%" y1="45%" x2="88%" y2="45%" stroke="rgba(136, 146, 176, 0.13)" strokeWidth="0.8" />
               
               {/* Lower geometric patterns */}
               <line x1="15%" y1="68%" x2="25%" y2="75%" stroke="rgba(136, 146, 176, 0.12)" strokeWidth="0.8" />
               <line x1="25%" y1="75%" x2="35%" y2="72%" stroke="rgba(136, 146, 176, 0.12)" strokeWidth="0.8" />
               <line x1="78%" y1="65%" x2="84%" y2="70%" stroke="rgba(136, 146, 176, 0.12)" strokeWidth="0.8" />
               <line x1="84%" y1="70%" x2="78%" y2="75%" stroke="rgba(136, 146, 176, 0.12)" strokeWidth="0.8" />
               
               {/* Pentagon at bottom */}
               <line x1="45%" y1="85%" x2="52%" y2="82%" stroke="rgba(136, 146, 176, 0.11)" strokeWidth="0.7" />
               <line x1="52%" y1="82%" x2="55%" y2="88%" stroke="rgba(136, 146, 176, 0.11)" strokeWidth="0.7" />
               <line x1="55%" y1="88%" x2="48%" y2="92%" stroke="rgba(136, 146, 176, 0.11)" strokeWidth="0.7" />
               <line x1="48%" y1="92%" x2="42%" y2="90%" stroke="rgba(136, 146, 176, 0.11)" strokeWidth="0.7" />
               <line x1="42%" y1="90%" x2="45%" y2="85%" stroke="rgba(136, 146, 176, 0.11)" strokeWidth="0.7" />
               
               {/* CONTINUOUS CONNECTIONS - Flow between constellations like real star maps */}
               
               {/* Top tier connections - linking northern constellations */}
               <line x1="35%" y1="12%" x2="60%" y2="25%" stroke="rgba(136, 146, 176, 0.10)" strokeWidth="0.7" />
               <line x1="60%" y1="25%" x2="75%" y2="8%" stroke="rgba(136, 146, 176, 0.09)" strokeWidth="0.7" />
               <line x1="28%" y1="22%" x2="60%" y2="25%" stroke="rgba(136, 146, 176, 0.08)" strokeWidth="0.6" />
               
               {/* Mid-level constellation bridges */}
               <line x1="35%" y1="45%" x2="50%" y2="55%" stroke="rgba(136, 146, 176, 0.09)" strokeWidth="0.7" />
               <line x1="50%" y1="55%" x2="78%" y2="42%" stroke="rgba(136, 146, 176, 0.08)" strokeWidth="0.6" />
               <line x1="8%" y1="40%" x2="5%" y2="60%" stroke="rgba(136, 146, 176, 0.08)" strokeWidth="0.6" />
               
               {/* Vertical flow - connecting different regions */}
               <line x1="18%" y1="12%" x2="15%" y2="35%" stroke="rgba(136, 146, 176, 0.09)" strokeWidth="0.6" />
               <line x1="22%" y1="42%" x2="25%" y2="75%" stroke="rgba(136, 146, 176, 0.08)" strokeWidth="0.6" />
               <line x1="82%" y1="22%" x2="78%" y2="42%" stroke="rgba(136, 146, 176, 0.09)" strokeWidth="0.6" />
               <line x1="84%" y1="28%" x2="78%" y2="65%" stroke="rgba(136, 146, 176, 0.08)" strokeWidth="0.6" />
               
               {/* Diagonal flows - creating natural star map pathways */}
               <line x1="12%" y1="15%" x2="35%" y2="45%" stroke="rgba(136, 146, 176, 0.07)" strokeWidth="0.5" />
               <line x1="88%" y1="20%" x2="95%" y2="75%" stroke="rgba(136, 146, 176, 0.07)" strokeWidth="0.5" />
               <line x1="30%" y1="8%" x2="82%" y2="48%" stroke="rgba(136, 146, 176, 0.06)" strokeWidth="0.5" />
               
               {/* Lower region connections */}
               <line x1="35%" y1="72%" x2="45%" y2="85%" stroke="rgba(136, 146, 176, 0.08)" strokeWidth="0.6" />
               <line x1="52%" y1="82%" x2="72%" y2="70%" stroke="rgba(136, 146, 176, 0.08)" strokeWidth="0.6" />
               <line x1="25%" y1="75%" x2="78%" y2="75%" stroke="rgba(136, 146, 176, 0.07)" strokeWidth="0.5" />
               
               {/* Isolated star connections - linking bright stars to main patterns */}
               <line x1="60%" y1="25%" x2="50%" y2="55%" stroke="rgba(136, 146, 176, 0.09)" strokeWidth="0.6" />
               <line x1="5%" y1="60%" x2="15%" y2="68%" stroke="rgba(136, 146, 176, 0.08)" strokeWidth="0.6" />
               <line x1="95%" y1="75%" x2="88%" y2="45%" stroke="rgba(136, 146, 176, 0.08)" strokeWidth="0.6" />
               
               {/* Faint background web - subtle connections for depth */}
               <line x1="12%" y1="15%" x2="95%" y2="75%" stroke="rgba(136, 146, 176, 0.05)" strokeWidth="0.4" />
               <line x1="85%" y1="12%" x2="15%" y2="68%" stroke="rgba(136, 146, 176, 0.05)" strokeWidth="0.4" />
               <line x1="8%" y1="40%" x2="88%" y2="45%" stroke="rgba(136, 146, 176, 0.05)" strokeWidth="0.4" />
            </svg>
         </Box>

         <Box className={classNames(Style.avatar, Style.shadowed)} alt={'image of developer'} style={{background: info.gradient, position: 'relative', zIndex: 1, marginTop: '-100px'}} component={'img'} src={me} 
         width={{xs: '28vh', md: '30vh'}} height={{xs: '22vh', md: '30vh'}} borderRadius={'50%'} mb={{xs: '1rem', sm: 0}} mr={{xs: 0, md: '3rem'}}/>
         <Box sx={{ position: 'relative', zIndex: 1 }}>
            <h2>Hello, I'm <span>{info.firstName}!</span>
            </h2>
            <h2 style={{background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
            <Typed
            strings={info.position}   // Pass the array directly
            typeSpeed={50}
            backSpeed={50}
            backDelay={1000}
            loop
            showCursor={true}
            />
            </h2>
            <Box maxWidth={{xs: '95%', md: '85ch'}} style={{fontSize:'17px',marginBottom:'2rem',marginTop:'1rem',fontFamily:'roboto',color:'rgb(136, 146, 176)',lineHeight:'1.6'}}>
               <span>Passionate full-stack developer with a keen eye for creating seamless digital experiences. I specialize in building robust, scalable web applications using modern technologies like React, Node.js, and cloud platforms. With over two years of hands-on experience, I thrive on transforming complex business requirements into intuitive, high-performance solutions that users love.</span>
            </Box>

            {/* Social Links */}
            <Box 
               sx={{
                  display: 'flex',
                  gap: '1rem',
                  fontSize: '1.5rem',
                  mb: 3,
                  justifyContent: {xs: 'center', md: 'flex-start'}
               }}
            >
               {info.socials.map((social, index) => (
                  <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
               ))}
            </Box>

            {/* Download Resume Button */}
            <Box sx={{ display: 'flex', justifyContent: {xs: 'center', md: 'flex-start'} }}>
               <Button 
                  variant="outlined"
                  size="large"
                  sx={{
                     borderColor: 'rgb(136, 146, 176)',
                     color: 'rgb(136, 146, 176)',
                     fontWeight: '500',
                     borderRadius: '4px',
                     px: 3,
                     py: 1.2,
                     fontSize: '0.95rem',
                     textTransform: 'none',
                     fontFamily: 'roboto',
                     borderWidth: '1px',
                     transition: 'all 0.2s ease',
                     '&:hover': {
                        borderColor: 'white',
                        color: 'white',
                        backgroundColor: 'transparent'
                     }
                  }}
                  onClick={() => {
                     const link = document.createElement('a');
                     link.href = '/sanjanag_resume.pdf';
                     link.download = 'sanjanag_resume.pdf';
                     link.click();
                  }}
               >
                  Download Resume
               </Button>
            </Box>
           
            </Box>
      </Box>
         
   )
}