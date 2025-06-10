import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import styles from '../styles/details.module.css';
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import PROJECTS_DATA from '../projectinfo';
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import spotifyImage from '../assests/spotify.png';
import nextbuyImage from '../assests/nextbuy.png';
import meetingNotesImage from '../assests/meetingNotes.png';
import clubManagerImage from '../assests/clubmanager.png';

const ProjectDetailsPage = (props) => {
    const { id } = useParams();

    const projectInfo = PROJECTS_DATA.filter((project) => project.id === id)[0];

    return (
        <div className={styles['project-details_wrapper']}>
            <div className={styles['project-details_main']}>
                <div className={styles['project-details-navigation']}>
                    <Link to="/" className={styles['home-link']} fontSize="small">
                        <KeyboardBackspaceIcon /> 
                        <p>Home</p>
                    </Link>
                </div>
                <div className={styles['project-details']}>
                    <h1 className={styles['project-name']}>
                        {projectInfo.project_name}
                    </h1>
                    <div className={styles['project-links']}>
                        <a href={projectInfo.gitlink} target='_blank' rel="noreferrer">
                            <GitHubIcon/>
                        </a>
                        <a href={projectInfo.link} targt="_blank" rel="noreferrer">
                            <OpenInNewIcon/>
                        </a>
                    </div>
                    {projectInfo.link && <div className={styles['project-img']}>
                        <a href={projectInfo.link} target='_blank' rel="noreferrer">
                            {id === 'project2' && 
                                <img src={spotifyImage} alt="Spotify Image"/>
                            }
                            {id === 'project3' && 
                                <img src={nextbuyImage} alt="Next Buy Image"/>
                            }
                            {id === 'project5' && 
                                <img src={meetingNotesImage} alt="Meeting notes Image"/>
                            }
                            {id === 'project7' && 
                                <img src={clubManagerImage} alt="Club Manager Image"/>
                            }
                        </a>
                    </div>}
                    <div className={styles['project-info']}>
                        <p>{projectInfo.description}</p>
                    </div>
                    <div className={styles['project-skills']}>
                        <h3>Skills</h3>
                        <ol>
                            {projectInfo.skills.map((skill) => {
                                return <li key={Math.random()}>{skill}</li>
                            })}
                        </ol>
                    </div>
                    {projectInfo.features && <div className={styles['project-features']}>
                        <h3>Features</h3>
                        <ul>
                            {projectInfo.features.map((feature) => {
                                return <li key={Math.random()}>{feature}</li>
                            })}
                        </ul>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default ProjectDetailsPage;