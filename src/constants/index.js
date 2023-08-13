import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Java Developer",
      icon: web,
    },
    {
      title: "Spring Boot Developer",
      icon: mobile,
    },
    {
      title: "REST API's Developer",
      icon: backend,
    },
    {
      title: "React Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "C-Lang Developer",
      company_name: "HOLBERTON SCHOOL",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Nov 2022",
      points: [
        "Developing and maintaining Simple GUI Terminal (Simple shell) for Bash and Script writing, using C-Lang and other related technologies.",
        "Collaborating with cross-functional teams globally to create a Unique `PRINTF function` which can be use by other Developers.",
        // "Implementing responsive design and ensuring cross-browser compatibility.",
        // "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Python Developer",
      company_name: "ALX-AFRICA",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Nov 2022",
      points: [
        "Collaborative Problem-Solving: Collaborated closely with the data science team, showcasing strong teamwork and communication skills while architecting the solution and ensuring data integrity through comprehensive testing.",
        // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design (AirBnB clone) and ensuring cross-browser compatibility.",
        // "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Java Developer",
      company_name: "DECAGON",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2023",
      points: [
        "Wrote integration tests for all applications using JUnit/Mockito, significantly reducing customer complaints about bugs and application malfunctions..",
        "Designed and built scalable APIs to increase development workflow by 25%",
       // "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "DECAGON",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "JUNE 2023 - Present",
      points: [
        "Improved user authentication by incorporating email service into an existing Spring Boot application.",
        "Increased productivity by 40% by following agile methodologies and best practices for product development.",
        "Managed SQL Server database system to ensure data integrity and security.",
        //"Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Innocent Udo proved me wrong.",
      name: "Emmanuel Macaulay",
      designation: "Stack Associate",
      company: "DECAGON",
      image: "https://shorturl.at/rBI03",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Innocent Udo does.",
      name: "Samuel Olawuyi",
      designation: "CEO",
      company: "SammyWealth",
      image: "https://shorturl.at/hruy6",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Pius Owolabi",
      designation: "Head of Network Operations",
      company: "Nigerian Civil Aviation Authority",
      image: "https://shorturl.at/vABJ9",
    },
  ];
  
  const projects = [
    {
      name: "Mini Facebook clone",
      description:
        "Web-based platform that allows users to sign-up, login, and chat with other users as well as Make post, Like post and comment.",
      tags: [
        {
          name: "SpringBoot",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "Thymeleaf",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Innocentsax/Spring_Boot3_Hibernate-JPA/tree/main/simple-form",
    },
    {
      name: "AirBnB Platform clone",
      description:
        "Web-based platform that allows users to search, book, and manage Home rentals from various providers, providing a convenient and efficient solution for Hospitality needs.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "RestApi",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Innocentsax/AirBnB_clone_v2",
    },
    {
      name: "Movie Review web Platform",
      description:
        "A web aplication that allow users to review trending movies base on genre.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "Java",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Innocentsax/FULL_STACK_PROJECTS/tree/main/Movie_Review_Website",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };