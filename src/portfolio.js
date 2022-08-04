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
  username: "Alexandre Stamm",
  title: "Hi, my name is Alexandre!",
  subTitle: emoji(
    "I'm a Business/Data Analyst, passionate about Data Science and currently working as a Business Analyst in a Brazilian startup."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1giJRQ6XXPhGtb0OIErCPYWfnQzeBh-c5/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/alestamm",
  linkedin: "https://www.linkedin.com/in/alexandre-stamm/",
  gmail: "alestcarvalho@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@alestamm",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Help businesses thrive by collecting, transforming, and organizing data to support companies with data-driven decisions.",
  skills: [
    emoji(
      "⚡ I have experience using SQL and Python to collect, clean, and analyze data."
    ),
    emoji(
      "⚡I can use Tableau, Google DataStudio, and PowerBI to deliver beautiful reports and visualizations to stakeholders."
    ),
    emoji(
      "⚡ I can also use machine-learning and tools like Pandas, Scikit-Learn and, Tensorflow to develop models to help companies solve problems."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "NumPy",
      fontAwesomeClassname: "fas fa-cube"
    },
    {
      skillName: "Pandas",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AI",
      fontAwesomeClassname: "fas fa-microship-ai"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "google cloud",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Le Wagon Coding Bootcamp",
      logo: require("./assets/images/logolewagon.png"),
      subHeader: "Data Science Bootcamp",
      duration: "November 2019 - May 2022",
      desc: "Le Wagon's Data Science Bootcamp is a 24-week-360h long program focused on the intensive and immersive theoretical and practical work related to this field.",
      descBullets: [
        "Python for Data Science",
        "Relational Database & SQL",
        "Statistics, Probability, Linear Algebra",
        "Machine learning & Deep Learning",
        "Data engineering"
      ]
    },
    {
      schoolName: "Universidade Presbiteriana Mackenzie",
      logo: require("./assets/images/mackenzielogo.png"),
      subHeader: "Bachelor of Business admnistration",
      duration: "january 2008 - December 2011",
      desc: "Bachelor degree in Business Admnistration in the top 1 private college according THE Latin America University Ranking"
      //descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    },
    {
      schoolName: "Fundação Getúlio Vargas - FGV",
      logo: require("./assets/images/logofgv.png"),
      subHeader: "Retail management Specialization",
      duration: "April 2015 - July 2015",
      desc: "Retail management specilization short course provided by FGV, one of the best private colleges in Brazil."
      //descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "SQL (PostgreSQL, Snowflake, MySQL)",
      progressPercentage: "80%"
    },
    {
      Stack: "Data Analytics",
      progressPercentage: "90%"
    },
    {
      Stack: "Pandas, Numpy, Seaborn",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Business Analyst",
      company: "Inventa",
      companylogo: require("./assets/images/logoinventa.png"),
      date: "April 2022 – Present",
      desc: "Using data to help stakeholders make good business decisions.",
      descBullets: [
        "Creating models and analysis to understand consumer behavior, retention, and marketing campaigns impacts;",
        "Managing hypothesis testing and analysis from the start to end, and monitoring results;",
        "Identify business challenges and opportunities, using tools and analytical skills to solve problems.",
        "Working with stakeholders on diagnostic and hypothesis testing of business cases;",
        "Tools I use daily: Snowflake, PostgreSQL, Google DataStudio, Python, Hex"
      ]
    },
    {
      role: "Co-founder",
      company: "Barato Express",
      companylogo: require("./assets/images/logobarato.png"),
      date: "October 2015 – April 2022",
      desc: "Co-founded the company which grew up to have more than 80 employees and 26 physical locations all over Brazil",
      descBullets: [
        "Providing feedback and analysis through data reports for the franchisees and other stakeholders, also being responsible for all ETL and data workflow of the company;",
        "Branching the company to sell in online Brazilian marketplaces such as MercadoLivre and Shopee, and growing from 0 to more than R$100.000 in sales in just 3 months.",
        "Recruiting, training, and managing of 80+ employees in their   tasks and processes in the company;"
      ]
    },
    {
      role: "Operations Analyst",
      company: "Leporello",
      companylogo: require("./assets/images/logoleporello.png"),
      date: "March 2008 – October 2015",
      desc: "Worked directly with the CEO and CFO, elaborating data reports and dashboards to help with data-driven decisions.",
      descBullets: [
        "Preparation of management reports (data reports and dashboards) for the Financial, Commercial, and Logistics Departments;",
        "Elaborating data reports directly to the CEO to help with data-oriented decisions;",
        "Control and analysis of stores sales and performance;",
        "Hired and implemented a new ERP system which resulted in more than 30 % savings in monthly personnel and administration costs."
      ]
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
  title: "Projects",
  subtitle: "Some cool projects I participated!",
  projects: [
    {
      image: require("./assets/images/hear4me.jpg"),
      projectName: "Hear4me",
      projectDesc:
        "Hear4me is an app that uses NLP to summarize and provide sentiment analysis of audio files. It was done by me and my colleagues Luis and Alexandre @ Le Wagon.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://hear4.me/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/bitcoin.png"),
      projectName: "Coindata",
      projectDesc:
        "Coindata is a content aggregator for Reddit, that I made for getting daily submissions of the top 50 cryptocurrencies on CoinMarketCap.",
      footerLink: [
        {
          name: "Check it on github",
          url: "https://github.com/alestamm/CoinData"
        }
      ]
    },
    {
      image: require("./assets/images/bellabeat.png"),
      projectName: "Bellabeat Case Study",
      projectDesc:
        "This is a case study of Bellabeat company done for the Google Data Analytics capstone project.",
      footerLink: [
        {
          name: "Check it out on Kaggle",
          url: "https://www.kaggle.com/code/alestamm/bellabeat-case-study"
        }
      ]
    },
    {
      image: require("./assets/images/olist.jpg"),
      projectName: "Olist Le Wagon Challenge",
      projectDesc:
        "This was my first project of data analysis done while attending Le Wagon Data Science Bootcamp",
      footerLink: [
        {
          name: "Check it out on github",
          url: "https://github.com/alestamm/Olist-Le-Wagon-Challenge/blob/main/ceo_request.ipynb"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements and Certifications",

  achievementsCards: [
    {
      title: "Google Data Analytics Professional Certificate",
      subtitle:
        "Those who earn the Google Data Analytics Certificate have completed eight courses, developed by Google, that include hands-on, practice-based assessments in Data Analytics.",
      image: require("./assets/images/googlecert.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/c9eb2ea0-d0a7-413e-af74-b38d1d4427c8"
        }
      ]
    },
    {
      title: "Le Wagon Data Science Bootcamp",
      subtitle:
        "Completed Le Wagon 360h long Data Science, Python & Machine learning bootcamp.",
      image: require("./assets/images/logolewagon.png"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1U4raHeqTN2-zf52dOjZ6N__RzBF8dfLb/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Besides working with data daily, I also write about Data Analytics and Data Science whenever I can.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "",
      description: ""
    },
    {
      url: "",
      title: "",
      description: ""
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  //number: "+92-0000000000",
  email_address: "alestcarvalho@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

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
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
