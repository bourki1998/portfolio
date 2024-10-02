/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Hafida BOURKI",
  title: "Hi all, I'm Hafida",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web with JavaScript / Reactjs / ASP.NET CORE and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1LFyX7HudXgd-jMxRCSC-D03libfCjOuj/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/bourki1998",
  linkedin: "https://www.linkedin.com/in/hafida-bourki-a612371a6/",
  gmail: "bourkihafida@gmail.com",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of backend services using ASP.NET Core")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },

    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Material UI",
      fontAwesomeClassname: "fas fa-palette"
    },
    {
      skillName: "Redux",
      fontAwesomeClassname: "fas fa-sync-alt"
    },
    {
      skillName: "ASP.NET Core",
      fontAwesomeClassname: "fas fa-server"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "National School of Mines of Rabat",
      logo: require("./assets/images/ensmr.jfif"),
      subHeader: "Information Systems Management",
      duration: "September 2019 - september 2022"
    },
    {
      schoolName: "Preparatory Classes for Major Engineering Schools",
      logo: require("./assets/images/cpge.png"),
      subHeader: "Mathematics / Physics: MP",
      duration: "September 2016 - september 2019"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Algo consulting group",
      companylogo: require("./assets/images/algo.png"),
      date: "may 2024 – Present",
      desc: "Designing and developing interactive web platforms using the latest front-end and back-end technologies."
    },
    {
      role: "Front-End Developer",
      company: "Algo consulting group",
      companylogo: require("./assets/images/algo.png"),
      date: "May 2023 – May 2024",
      desc: "Develop highly interactive Front end / User Interfaces for application web."
    },
    {
      role: "Sharepoint consultant",
      company: "Algo consulting group",
      companylogo: require("./assets/images/algo.png"),
      date: "sept 2022 – dec 2023",
      desc: "Design and development of new features and interfaces."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/agriculture.jfif"),
      projectName: "MISAGRI application",
      projectDesc:
        "Development of an application (Misagri) for the budgetary management of internal flows of the Ministry of Agriculture."
    },
    {
      image: require("./assets/images/etranger.jfif"),
      projectName: "MAEC",
      projectDesc:
        "Development of an application for international cooperation and foreign affairs."
    },
    {
      image: require("./assets/images/cms.jfif"),
      projectName: "CMS",
      projectDesc:
        "Development of a microfinance observatory for storage, exchange and automatic sharing of data on microfinance in Morocco"
    },
    {
      image: require("./assets/images/sante.png"),
      projectName: "SGCM",
      projectDesc:
        "Development of a system for digitalizing medical control procedures"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications!. I have others on my LinkedIn profile.",

  achievementsCards: [
    {
      title: ".Net Full Stack Foundation",
      subtitle:
        "Possess in-depth expertise in .NET Full Stack development and the creation of efficient .NET applications.",
      image: require("./assets/images/board.png"),
      imageAlt: ".Net Full Stack Foundation",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/FVBM5HYCGRKX"
        }
      ]
    },
    {
      title: "Developing Front-End Apps with React",
      subtitle:
        "Master the framework React Js and building rich Front-End applications with React and ES6.",
      image: require("./assets/images/IBM.png"),
      imageAlt: "Developing Front-End Apps with React",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/E70TRYK5KFUL"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};
// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+212659250834",
  email_address: "bourkihafida@gmail.com"
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
  isHireable,
  resumeSection
};
