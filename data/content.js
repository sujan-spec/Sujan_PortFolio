/* ============================================================
   PORTFOLIO CONTENT
   ============================================================
   Edit everything in this file to update your portfolio.
   You should not need to touch index.html, css/style.css, or
   js/main.js for normal content updates.
   ============================================================ */

window.PORTFOLIO_CONTENT = {

  profile: {
    initials: "SK",
    photo: "assets/images/profile.png",
    name: "Sujan Kundu",
    title: "Senior QA Engineer",
    roles: [
      "Senior QA Engineer",
      "Automation Enthusiast",
      "Manual Testing Expert",
      "QA Team Lead"
    ],
    status: "Open to Opportunities",
    heroBadge: "Welcome to My Portfolio",
    heroText: "Senior QA Engineer with around 6 years of experience in Software Testing. Specialized in Manual Testing, Automation Testing, Sprint Planning, Release Validation, API Testing, QA Leadership and currently building automation frameworks using Playwright + JavaScript.",
    heroFloatingBadgeTop: "6+ Years",
    heroFloatingBadgeRight1: "QA Lead",
    heroFloatingBadgeRight2: "Automation",
    heroStats: [
      { value: "6+", label: "Years" },
      { value: "100+", label: "Releases" },
      { value: "500+", label: "Features" }
    ],
    heroTags: ["Selenium", "Playwright", "Java", "JavaScript", "API Testing"]
  },

  links: {
    email: "sujankundu399@gmail.com",
    phone: "+91 8927995106",
    location: "Kolkata, India",
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-username",
    resume: "assets/resume/Sujan_Kundu_QA_Automation.pdf"
  },

  about: {
    badge: "ABOUT ME",
    heading: "Who I Am",
    subheading: "Passionate QA Engineer with expertise in Manual Testing, Automation Testing, Release Management, Team Leadership, and Continuous Process Improvement.",
    roleHeading: "Senior QA Engineer",
    paragraphs: [
      "I have around 6 years of experience in Software Quality Assurance with expertise in Manual Testing, Automation Testing, Regression Testing, API Testing, Sprint Planning, Release Validation, Impact Analysis, and Team Coordination.",
      "I enjoy solving complex testing challenges, improving QA processes, mentoring QA engineers, and building automation frameworks using Playwright & JavaScript."
    ],
    photoBadge: "6+ Years of Experience",
    infoCards: [
      { icon: "user", label: "NAME", value: "Sujan Kundu" },
      { icon: "calendar", label: "EXPERIENCE", value: "6+ Years" },
      { icon: "briefcase", label: "CURRENT ROLE", value: "Senior QA Engineer" },
      { icon: "mail", label: "EMAIL", value: "sujankundu399@gmail.com" },
      { icon: "pin", label: "LOCATION", value: "Kolkata, India" },
      { icon: "check", label: "AVAILABILITY", value: "Open to Opportunities", positive: true }
    ]
  },

  highlights: [
    { icon: "check-badge", value: "6+", label: "Years of Experience" },
    { icon: "list", value: "1000+", label: "Features Tested" },
    { icon: "bug", value: "1500+", label: "Bugs Reported" },
    { icon: "rocket", value: "250+", label: "Production Releases" },
    { icon: "team", value: "4", label: "QA Members Mentored" }
  ],

  experience: {
    badge: "CAREER JOURNEY",
    heading: "Professional Experience",
    subheading: "My professional journey in Software Quality Assurance, Automation, Leadership, and Continuous Improvement.",
    items: [
      {
        tag: "CURRENT",
        active: true,
        employment: "Full Time",
        role: "Senior Quality Analyst",
        project: "Warranty Domain Project",
        description: "Leading quality assurance activities across manual testing, automation, sprint planning, release validation, and continuous QA process improvement.",
        bullets: [
          "Lead QA activities across sprint and release cycles.",
          "Perform functional, regression, integration, and release validation testing.",
          "Coordinate QA activities and mentor QA team members.",
          "Track defects, release readiness, and QA metrics.",
          "Contribute to automation framework development using Playwright and JavaScript."
        ],
        tech: ["Manual Testing", "Automation", "Playwright", "JavaScript", "JIRA"]
      },
      {
        tag: "PREVIOUS ROLE",
        active: false,
        employment: "Full Time",
        role: "Jr. QA Engineer",
        project: "Healthcare Domain Project",
        description: "Worked on end-to-end software testing activities with a strong focus on functional quality, regression testing, defect management, and release validation.",
        bullets: [
          "Designed and executed functional test scenarios.",
          "Performed regression and integration testing.",
          "Identified, documented, and tracked defects.",
          "Collaborated with developers and business teams."
        ],
        tech: ["Manual Testing", "Regression Testing", "API Testing", "JIRA"]
      }
    ]
  },

  skills: {
    badge: "MY EXPERTISE",
    heading: "Core Skills & Technologies",
    subheading: "A combination of hands-on QA experience, testing methodologies, automation tools, and modern development technologies.",
    groups: [
      {
        icon: "clipboard",
        name: "Testing Methodologies",
        items: ["Manual Testing", "Regression Testing", "API Testing", "Integration Testing", "Sprint Planning", "Release Validation"]
      },
      {
        icon: "automation",
        name: "Automation & Tools",
        items: ["Playwright", "Selenium", "TestNG", "Postman", "JIRA", "Git"]
      },
      {
        icon: "code",
        name: "Programming & Scripting",
        items: ["JavaScript", "Java", "Node.js", "JSON", "REST APIs"]
      },
      {
        icon: "team",
        name: "Process & Leadership",
        items: ["QA Leadership", "Team Mentoring", "Impact Analysis", "Defect Triage", "Agile / Scrum"]
      }
    ]
  },

  projects: {
    badge: "PORTFOLIO",
    heading: "Featured Projects",
    subheading: "Some of the projects I have worked on professionally and personally.",
    items: [
      {
        gradient: "blue",
        icon: "dashboard",
        imageLabel: "QA Dashboard",
        title: "QA Activity Dashboard",
        description: "A centralized QA dashboard to track Sprint progress, Release status, Team productivity, Live releases and QA metrics.",
        tags: ["HTML", "CSS", "JavaScript", "Firebase"],
        github: "https://github.com/your-username",
        demo: "#"
      },
      {
        gradient: "indigo",
        icon: "automation",
        imageLabel: "Playwright",
        title: "Playwright Automation Framework",
        description: "End-to-end automation framework using Playwright + JavaScript following Page Object Model with reusable utilities.",
        tags: ["Playwright", "JavaScript", "Node.js", "Git"],
        github: "https://github.com/your-username",
        demo: null
      },
      {
        gradient: "sky",
        icon: "extension",
        imageLabel: "Chrome Extension",
        title: "AI Test Case Generator",
        description: "Chrome Extension to generate QA test cases automatically using AI from Jira user stories.",
        tags: ["JavaScript", "Chrome API", "AI"],
        github: "https://github.com/your-username",
        demo: null
      }
    ]
  },

  achievements: {
    badge: "ACHIEVEMENTS",
    heading: "Professional Highlights",
    items: [
      { icon: "medal", value: "6+ Years", label: "Professional QA Experience" },
      { icon: "team", value: "QA Lead", label: "Mentoring QA Team Members" },
      { icon: "rocket", value: "350+", label: "Successful Releases" },
      { icon: "code", value: "Automation", label: "Learning Playwright with JavaScript" }
    ]
  },

  contact: {
    badge: "GET IN TOUCH",
    heading: "Get in Touch",
    body: "Feel free to contact me anytime. I'll get back to you as soon as possible.",
    formHeading: "Send a Message"
  },

  footer: {
    tagline: "Senior QA Engineer | Manual Testing | Automation Testing | Playwright | Selenium",
    copyright: "© 2026 Sujan Kundu. All Rights Reserved."
  }

};
