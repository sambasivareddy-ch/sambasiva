const PROJECTS_DATA = [
    {
        id: 'project1',
        project_name: "Blog Page",
        link: "https://bysiva.vercel.app/",
        gitlink: "https://github.com/sambasivareddy-ch/bysiva",
        description:
            "A simple blogging app to post my technical articles, blogs and codes etc",
        skills: ["React.Js"],
        status: "Completed",
        preview: true,
        features: [
            "A Simple Web App for my techincal & personal writing",
            "Includes Tag based filtering",
            "We can able to filter the blogs on OR of tags & AND of tags",
        ]
    },
    {
        id: 'project2',
        project_name: "Spotify Profile",
        link: "https://music-dashboard-spotify.vercel.app/",
        gitlink: "https://github.com/sambasivareddy-ch/spotify-profile-client",
        description:
            "A sleek and responsive frontend application that integrates with the Spotify Web API to deliver a personalized music dashboard.",
        skills: ["React (TS)", "Express.js", "Spotify API"],
        status: "Completed",
        preview: false,
        features: [
            "Spotify OAuth login for secure authentication.",
            "Display user's top artists with name, popularity, followers count, and genres.",
            "Show user's playlists with ability to view songs inside each playlist.",
            "Display user's top songs based on listening history.",
            "Show detailed song information including artist, release year, popularity, and duration.",
            "Allow user to play songs using web browser or mobile Spotify app.",
            "Display currently playing song with real-time updates.",
            "Show user's playback queue with upcoming tracks.",
            "Responsive design for optimal experience across desktop, tablet, and mobile.",
        ]
    },
    {
        id: 'project3',
        project_name: "NextBuy",
        link: "https://e-nextbuy.vercel.app/",
        gitlink: "https://github.com/sambasivareddy-ch/nextbuy",
        description:
            "A Single Page E-Commerce Application which allows the users perform adding products to cart, wishlist and checkout the products. (Currenly It's static one with some statically generated data)",
        skills: ["React (TS)", "Redux", "Router", "MockApI"],
        status: "Completed",
        preview: true,
    },
    {
        id: 'project4',
        project_name: "Database Backup Utility",
        link: "https://github.com/sambasivareddy-ch/db_backup_utility/releases/tag/v1.0.0",
        gitlink: "https://github.com/sambasivareddy-ch/db_backup_utility",
        description:
            "An CLI tool which helps to perform Backup, restore on database likes Postgres, SQL and also helps to automate the backup job",
        skills: ["Go", "Cobra", "CLI"],
        status: "Completed",
        preview: true,
    },
    {
        id: 'project5',
        project_name: "Meeting Notes",
        link: "https://meeting-notes-phi.vercel.app/",
        gitlink: "https://github.com/sambasivareddy-ch/meeting_notes",
        description:
            "An Application which helps to take notes on various scheduled meeting in your google calender.",
        skills: ["React.js", "Go Language", "Postgres", "Gin"],
        status: "Completed",
        preview: true,
    },
    {
        id: 'project6',
        project_name: "Event Management REST API",
        link: "",
        gitlink: "https://github.com/sambasivareddy-ch/rest_api_go",
        description: "An Event Management API helps in creating, deleting and updating an event. And supports user registration to the events",
        skills: ['Go', 'Gin ', 'REST API', 'SQLite3'],
        status: "Completed",
        preview: false,
    },
    {
        id: 'project7',
        project_name: "Club Manager",
        link: "https://eclub-manager.vercel.app/",
        gitlink: "https://github.com/sambasivareddy-ch/club_manager",
        description: "An application which allows the manage the different clubs affectively without conflicting the Events",
        skills: ['React.js', 'Express.js', 'Mongo DB', 'Rest API', 'Redux'],
        status: "Completed",
        preview: false,
        features: [
            "An application built with three-user architecture i.e user, manager, admin",
            "Admin can ables to create a new club and add a manager to it and can delete the club if needed",
            "Once the manager is added, We will send an email with Password to login into the web application",
            "Manager can add the club members, events and edit club related to that Club",
            "In the home page, we summarize all the clubs and events related to that organization",
        ]
    },
];

export default PROJECTS_DATA;