/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";

// Your Summary And Greeting Section

const greeting = {
  username: "Joe Schubert",
  title: "Hi everybody, I'm Joe",
  subTitle: emoji(
    "Software Developer / Electronics Technician "
  ),
  resumeLink:
    "https://drive.google.com/file/d/1N7cKb79mMi-LgFQttXqqk-adkSQy8ZBC/view?usp=share_link",
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/JoeSchubert",
  linkedin: "https://www.linkedin.com/in/joeschubert/",
  gmail: "joseph.schubert@gmail.com",
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle:
    "Constantly striving to learn and expand my knowledge of languages.",
  skills: [
    emoji(
      "⚡ Designing and developing software using Python, Java and learning Go"
    ),
  ],

  softwareSkills: [
    {
      skillName: "python",
      classname: "logos:python",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "java",
      classname: "logos:java",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Go",
      classname: "simple-icons:go",
      style: {
        color: "#00acd7",
      },
    },
    {
      skillName: "git",
      classname: "logos:git-icon",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "docker",
      classname: "simple-icons:docker",
      style: {
        color: "#2396ed",
      },
    },
    {
      skillName: "MySQL",
      classname: "logos:mysql",
      style: {
        backgroundColor: "transparent",
      },
    },
  ],
};

// Your top 3 work experiences

const workExperiences = {
  viewExperiences: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Electronics Systems Detachment Supervisor",
      company: "United States Coast Guard",
      companylogo: require("./assets/images/uscg.png"),
      date: "July 2020 – Present",
      desc:
        "Served as the senior electronics technician for the department.  Supervised unit of ten personnel in completion of maintenance and repairs of electronics systems installed at supported units, maintained inventory, and oversaw training and professional development of personnel.",
      descBullets: [
        "As the ESD Supervisor, routinely coordinated with the command team at supported units to ensure that maintenance and repair would not negatively impact operations.",
        "Accounted for over $1.4 million in inventory, with 100% accuracy on annual audits.",
        "Served as the primary point of contact for the ESD which included duties such as completion of performance evaluations on assigned personnel, ensured that personnel completed and held qualifications, and provided bi-monthly status reports to senior leadership. ",
        "Applied analytical thought and troubleshooting prowess to resolve complex technical issues efficiently to support the operational readiness of the Coast Guard’s Long-Range High Frequency Communications missions. Conducted subsequent training based on lessons learned to enable junior technicians to resolve them in the future.",
      ],
    },
    {
      role: "Leading Petty Officer",
      company: "United States Coast Guard",
      companylogo: require("./assets/images/uscg.png"),
      date: "September 2018 – July 202",
      desc:
        "Served as the Leading Petty Officer within the Electronics Shop onboard USCGC Northland. Oversaw a team of technicians in the maintenance and repair of various electronic systems including Communications, Navigation, Electronic Warfare, and Radar systems.",
    },
    {
      role: "Leading Petty Officer",
      company: "United States Coast Guard",
      companylogo: require("./assets/images/uscg.png"),
      date: "May 2015 – September 2018",
      desc:
        "Supervised three personnel, including the Cutter’s Information Technician in the maintenance and repair of Electronics and Information systems. Ensured consistent operation of all shipboard Communications and Radar systems, including Satellite Internet Connectivity systems.",
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to false
  display: true, // Set false to hide this section, defaults to true
};

// Your certifications

const certifications = {
  certifications: [
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle: "Foundational",
      logo_path: "aws-clf.png",
      certificate_link:
        "https://www.credly.com/badges/46318cf3-17e7-40f1-97ae-e37e6eab6a58",
      alt_name: "AWS-CLF",
      color_code: "#F6EAEA",
    },
  ]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "(757) 374-5649",
  email_address: "joseph.schubert@gmail.com",
};

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  workExperiences,
  openSource,
  contactInfo,
  certifications,
};
