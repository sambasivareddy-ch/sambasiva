const PROJECTS_DATA = [
    {
        id: "dbu",
        project_name: "Distributed Postgres Join Optimizer",
        link: "https://github.com/sambasivareddy-ch/distributed-pg-stats/releases/tag/v1.0.0",
        gitlink: "https://github.com/sambasivareddy-ch/distributed-pg-stats",
        description:
            "A tool to build the global NDV (Number of Distinct Values) stats, load them and use them to give the optimal join order based on the given query.",
        skills: ["PostgreSQL", "Optimizer", "PG Extension", "Go", "Cobra", "CLI"],
        status: "Completed",
        preview: true,
    },
    {
        id: "project1",
        project_name: "Blog Page",
        link: "https://bysiva.blog/",
        gitlink: "https://github.com/sambasivareddy-ch/writes-by-siva",
        description:
            `This is a full-stack blogging application designed to share technical articles, coding solutions, and developer-focused blogs. It covers trending topics in software development such as MERN stack, and modern engineering practices. The blog section includes detailed posts on system design and core computer science concepts, while the coding section focuses on competitive programming with practical solutions and explanations.
            Each post is structured for clarity and usefulness, helping readers quickly grasp key ideas. `,
        skills: ["React.Js", "Next.js", "CSS", "Node.js", "Express.js", "PostgreSQL", "Redis"],
        status: "Completed",
        preview: true,
        features: [],
        frontend: [
            "A Simple Web App for my techincal & personal writing",
            "✅ Tag-Based Filtering: Match (all/any) selected blogs",
            "🔗 Easy Link Sharing: Share posts seamlessly with others",
            "🚀 SEO-Friendly Design",
            "📄 Pagination Support: Navigate through large number of posts at ease",
            "👍 Likes & Views Tracking: Engage with blogs and track popularity",
            "✨ TL;DR Summaries: Quick highlights for faster reading",
            "📩 Newsletter Subscription: Stay updated with the latest blogs",
            "🔎 Debounced Search: Search across the large number of posts with keywords",
            "🌙 Switch between the light and dark themes at your convenience.",
            "🥳 Users can react to the blog with following emojis ❤️, 😂, 🔥, 😡",
            "✔️ User can sort the blogs based on 'Blog Post (Asc/Desc), Most Viewed, Most Reacted'.",
            "📩 User's can now add the comments to each blog (powered by Remarks42) hosted by ourselves, so data will be with us.",
            "→ To add the comments, user should be login using their Gmail/Github to moderate the spam comments."
        ],
        backend: [
            "🛠️ Personalized Dashboard: Efficiently post and manage blogs",
            "🔄 Reset & Visibility Controls: Update blog details with ease",
            "📊 Application Stats: Track views, likes, and newsletter performance",
            "📩 Newsletter Subscription: Sending mails to the subscribers on every new Blog",
            "📣 Discord Notifications on post and login details of Admin who loggedin into the Page"
        ],
        insights: {
            performance: "99",
            accessibility: "100",
            "best-practices": "96",
            seo: "100",
        },
    },
    {
        id: "project3",
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
        id: "project4",
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
        id: "project5",
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
        id: "project6",
        project_name: "Event Management REST API",
        link: "",
        gitlink: "https://github.com/sambasivareddy-ch/rest_api_go",
        description:
            "An Event Management API helps in creating, deleting and updating an event. And supports user registration to the events",
        skills: ["Go", "Gin ", "REST API", "SQLite3"],
        status: "Completed",
        preview: false,
    },
    {
        id: "project7",
        project_name: "Club Manager",
        link: "https://eclub-manager.vercel.app/",
        gitlink: "https://github.com/sambasivareddy-ch/club_manager",
        description:
            "An application which allows the manage the different clubs affectively without conflicting the Events",
        skills: ["React.js", "Express.js", "Mongo DB", "Rest API", "Redux"],
        status: "Completed",
        preview: false,
        features: [
            "An application built with three-user architecture i.e user, manager, admin",
            "Admin can ables to create a new club and add a manager to it and can delete the club if needed",
            "Once the manager is added, We will send an email with Password to login into the web application",
            "Manager can add the club members, events and edit club related to that Club",
            "In the home page, we summarize all the clubs and events related to that organization",
        ],
    },
];

export default PROJECTS_DATA;
