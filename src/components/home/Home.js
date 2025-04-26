import React from 'react';
import Style from './Home.module.scss';
import me from '../../img/dummy.jpg';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import {Box} from "@mui/material";
import {info} from "../../info/Info";
import { ReactTyped as Typed } from 'react-typed';

export default function Home({innerRef}) {

   return (
      <Box ref={innerRef} component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'}
           justifyContent={'center'} minHeight={'calc(100vh - 175px)'} id={'home'}>
         <Box className={classNames(Style.avatar, Style.shadowed)} alt={'image of developer'} style={{background: info.gradient}} component={'img'} src={me} 
         width={{xs: '32vh', md: '34vh'}} height={{xs: '24vh', md: '34vh'}} borderRadius={'50%'} mb={{xs: '1rem', sm: 0}} mr={{xs: 0, md: '2rem'}}/>
         <Box>
            <h2>Hello, I'm <span>{info.firstName}</span>
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
            <Box maxWidth={{xs: '90%', md: '60ch'}} style={{fontSize:'16.7px',marginBottom:'1rem',marginTop:'0.8rem',fontFamily:'roboto',color:'rgb(136, 146, 176)'}}>
               <span>As a MERN stack developer, I am committed to building high-quality web applications that meet the needs of my clients. With years of experience in full-stack web development, I specialize in using React.js, Typescript, MongoDB, Express.js, and Node.js to create scalable and robust web applications.</span>
            </Box>
           
            </Box>
      </Box>
         
   )
}