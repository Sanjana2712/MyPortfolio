import React, { useState } from 'react';
import IconLink from "./IconLink";
import { Box, Button } from "@mui/material";
import { Launch, ArrowForward } from '@mui/icons-material';

function PortfolioBlock(props) {
   const { image, live, source, title, description, darkMode } = props;
   const hasLiveDemo = live && live.trim() !== '';
   const isComingSoon = false;

   // State to manage hover status for card
   const [isHovered, setIsHovered] = useState(false);

   const cardStyle = {
      borderRadius: '14px',
      padding: '0.5rem 1.5rem 1.5rem 1.5rem',
      background: darkMode 
         ? 'rgba(255, 255, 255, 0.05)' 
         : 'transparent',
      backdropFilter: darkMode ? 'blur(10px)' : 'none',
      transition: 'all 0.3s ease',
      transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
      boxShadow: isHovered ? '0 8px 30px rgba(0,0,0,0.4)' : '0 4px 20px rgba(0,0,0,0.3)',
      display: 'flex',
      flexDirection: 'column',
      height: '500px',
      width: '100%'
   };

   return (
      <Box 
         style={cardStyle}
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
         sx={{
            /* Mobile-only fixes */
            '@media (max-width: 767px)': {
               height: 'auto',
               padding: '1rem 1rem 1.25rem 1rem',
               borderRadius: '12px',
               transform: 'none !important',
               boxShadow: '0 2px 12px rgba(0,0,0,0.15) !important',
               marginBottom: '1.5rem'
            }
         }}
      >
          <Box 
            component={'img'} 
            src={image} 
            alt={'mockup'}
            style={{ 
                width: '100%',
                height: '450px',
                objectFit: 'cover',
                borderRadius: '8px',
                marginBottom: '1rem',
                alignSelf: 'center'
            }}
            sx={{
               /* Mobile-only image fixes */
               '@media (max-width: 767px)': {
                  height: 'auto',
                  aspectRatio: '16/10',
                  marginBottom: '0.75rem',
                  borderRadius: '8px'
               }
            }}
         />
         
         <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
            <Box component="h2" sx={{ 
               fontSize: '1.3rem', 
               marginBottom: '0.5rem',
               marginTop: '0',
               fontWeight: '600',
               /* Mobile-only title fixes */
               '@media (max-width: 767px)': {
                  fontSize: 'clamp(1.1rem, 4vw, 1.25rem)',
                  marginBottom: '0.375rem',
                  lineHeight: 1.2
               }
            }}>{title}</Box>
            
            <Box component="p" sx={{ 
               fontSize: '0.9rem',
               lineHeight: '1.5',
               marginBottom: '1rem',
               color: darkMode ? '#888' : '#555',
               flexGrow: 1,
               /* Mobile-only description fixes */
               '@media (max-width: 767px)': {
                  fontSize: 'clamp(0.8rem, 3.5vw, 0.875rem)',
                  lineHeight: '1.4',
                  marginBottom: '0.75rem',
                  flexGrow: 0
               }
            }}>{description}</Box>
            
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} mt={'auto'}
                 sx={{
                    /* Mobile-only button container fixes */
                    '@media (max-width: 767px)': {
                       flexDirection: 'column',
                       gap: '0.5rem',
                       alignItems: 'stretch',
                       mt: '0.5rem'
                    }
                 }}>
               <Button
                  variant="outlined"
                  endIcon={<ArrowForward />}
                  href={source}
                  target="_blank"
                  sx={{
                     borderColor: darkMode ? '#6b7280' : '#374151',
                     color: darkMode ? '#6b7280' : '#374151',
                     textTransform: 'none',
                     borderRadius: '8px',
                     padding: '0.5rem 1rem',
                     fontSize: '0.875rem',
                     /* Mobile-only button fixes */
                     '@media (max-width: 767px)': {
                        padding: '0.5rem 0.75rem',
                        fontSize: 'clamp(0.8rem, 3.5vw, 0.875rem)',
                        minHeight: '44px',
                        borderRadius: '6px'
                     },
                     '&:hover': {
                        borderColor: darkMode ? '#4b5563' : '#1f2937',
                        color: darkMode ? '#4b5563' : '#1f2937',
                        backgroundColor: 'rgba(107, 114, 128, 0.1)'
                     }
                  }}
               >
                  Details
               </Button>
               
               {hasLiveDemo ? (
                  <Button
                     variant="text"
                     endIcon={<Launch />}
                     href={live}
                     target="_blank"
                     sx={{
                        color: '#3b82f6 !important',
                        textTransform: 'none',
                        padding: '0.75rem 1rem',
                        fontSize: '0.875rem',
                        borderRadius: '8px',
                        /* Mobile-only Live Demo button fixes */
                        '@media (max-width: 767px)': {
                           padding: '0.5rem 0.75rem',
                           fontSize: 'clamp(0.8rem, 3.5vw, 0.875rem)',
                           minHeight: '44px',
                           borderRadius: '6px'
                        },
                        '&:hover': {
                           backgroundColor: 'rgba(59, 130, 246, 0.1)',
                           transform: 'none'
                        }
                     }}
                  >
                     Live Demo
                  </Button>
               ) : isComingSoon ? (
                  <Button
                     variant="outlined"
                     disabled
                     sx={{
                        borderColor: '#6b7280',
                        color: '#6b7280',
                        textTransform: 'none',
                        borderRadius: '8px',
                        padding: '0.5rem 1rem',
                        fontSize: '0.875rem',
                        opacity: 0.6,
                        cursor: 'not-allowed',
                        '&.Mui-disabled': {
                           borderColor: '#6b7280',
                           color: '#6b7280'
                        }
                     }}
                  >
                     Coming Soon
                  </Button>
               ) : null}
            </Box>
         </Box>
      </Box>
   );
}

export default PortfolioBlock;