import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";


export default function About({innerRef}) {
    const firstName = info.firstName.toLowerCase()

    function aboutMeText() {
        return <>
            <p style={{fontSize:'1.1rem',color: '#a8b2d1'}}> <span style={{color: '#4369ae', fontWeight:'bold'}}>{firstName}{info.lastName.toLowerCase()} $</span> cat
                about {firstName} </p>
            <p style={{fontSize:'1.1rem',color: '#a8b2d1'}}><span style={{color: '#4369ae', fontWeight:'bold'}}>about{firstName} <span
                className={Style.green}>(main)</span> $ </span>
                {info.bio}
            </p>
        </>;
    }

    function skillsText() {
        return <>
            <p style={{fontSize:'1.1rem',color: '#a8b2d1'}}><span style={{color: '#4369ae', fontWeight:'bold'}}>{firstName}{info.lastName.toLowerCase()} $</span> cd skills/tools
            </p>
            <p style={{fontSize:'1.1rem',color: '#a8b2d1'}}><span style={{color: '#4369ae', fontWeight:'bold'}}>skills/tools <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <p style={{color: '#64ffda', fontWeight:'bold', fontSize:'1.1rem'}}> Languages</p>
            <ul style={{fontSize:'1.1rem'}} className={Style.skills}>
                {info.skills.proficientWith.map((proficiency, index) => <li style={{color: '#a8b2d1'}} key={index}>{proficiency}</li>)}
            </ul>
            <p style={{color: '#64ffda', fontWeight:'bold',  fontSize:'1.1rem'}}> Frameworks/Tools</p>
            <ul className={Style.skills}  style={{fontSize:'1.1rem'}}>
                {info.skills.exposedTo.map((skill, index) => <li style={{color: '#a8b2d1'}} key={index}>{skill}</li>)}
            </ul>
        </>;
    }

    function miscText() {
        return (
            <>
                <p style={{ fontSize: '1.1rem', color: '#a8b2d1' }}>
                    <span style={{ color: '#4369ae', fontWeight: 'bold' }}>{firstName}{info.lastName.toLowerCase()} $</span> cd hobbies/interests
                </p>
                <p style={{ fontSize: '1.1rem', color: '#a8b2d1' }}>
                    <span style={{ color: '#4369ae', fontWeight: 'bold' }}>hobbies/interests <span className={Style.green} style={{ fontSize: '1.1rem' }}>(main)</span> $</span> ls
                </p>
                <ul className={`${Style.skills}`} style={{ fontSize: '1.1rem', color: '#a8b2d1', paddingLeft: '0' }}>
                    {info.hobbies.map((hobby, index) => (
                        <li key={index} style={{ color: '#a8b2d1' }}>
                            <Box component={'span'}>{hobby.emoji}</Box>
                            {hobby.label}
                        </li>
                    ))}
                </ul>
            </>
        );
    }

    return (
        <Box ref={innerRef} display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'} id={'about'}>
            <Terminal text={aboutMeText()}/>
            <Terminal text={skillsText()}/>
            <Terminal text={miscText()}/>
        </Box>
    )
}