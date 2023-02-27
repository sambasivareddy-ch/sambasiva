import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/page.module.css';
import Project from './Project';

const projects_arr = [
    {
        project_name: "Real-time Chat App",
        gitlink: "https://github.com/samba-chinta/realtime-chat-app",
        description: "Help the users to one-to-one communicate in real-time, and it allows the users to make both audio and video calls in real-time.",
        skills: ['React.js', 'Node.js', 'Express.js', 'GraphQL', 'Socket.io'],
        status: "In Progress"
    },
    {
        project_name: "Query based Application",
        gitlink: "https://github.com/samba-chinta/question_and_answer_website_client",
        description: "A project which helps the students to clear their doubts by posting the doubts in the form of question, and get answers from fellow students.",
        skills: ['React.js', 'Node.js', 'Express.js', 'REST'],
        status: "Completed"
    },
    {
        project_name: "Control of Photo Sharing over social network",
        gitlink: "https://github.com/samba-chinta/mini-2",
        description: "A project to provide privacy while posting in Social Media, by using facial recognition we send the users a notification to confirm whether to accept/not.",
        skills: ['React.js', 'Node.js', 'Express.js', 'REST', 'ML', 'Flask'],
        status: "Completed"
    }
]

const Projects = () => {
    return (
        <div className={styles['projects-wrapper']} id="projects">
            <h2 className={styles['title']}>My Projects</h2>
            <div className={styles['projects-list']}>
                {
                    projects_arr.map(pro => {
                        return <Project project_details={pro} key={ Math.random() } />
                    })
                }
            </div>
            <div className={styles['view-more__wrapper']}>
                <button className={styles['view-more__btn']}>
                        <Link to="/projects">View More</Link>
                </button>
            </div>
        </div>
    )
}

export default Projects;