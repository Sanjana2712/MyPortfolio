import React from 'react';
import {Box} from "@mui/material";

export default function Toggler({darkMode, handleClick}) {
    const transition = 'all 250ms ease'

   return (
      <Box 
         fontSize={'1.5rem'} 
         sx={{
            cursor: 'pointer', 
            ":hover": {transform: 'translateY(-3px)', transition: transition},
            /* Mobile phones (320px - 767px) - Touch-friendly styling */
            '@media screen and (max-width: 767px)': {
               fontSize: '1.75rem',
               minWidth: '44px',
               minHeight: '44px',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               padding: '0.5rem',
               borderRadius: '8px',
               ":hover": {
                  transform: 'none' // Disable hover transform on mobile
               },
               ":active": {
                  transform: 'scale(0.95)',
                  transition: transition
               }
            }
         }}
         onClick={handleClick}
      >
         {
            darkMode ?
               <span aria-label="Full Moon" role="img">🌕</span>
               :
               <span aria-label="New Moon" role="img">🌑</span>
         }
      </Box>
   )
}