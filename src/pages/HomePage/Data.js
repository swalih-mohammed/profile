export const homeObjOne = {
  primary: true,
  lightBg: true,
  lightTopLine: true,
  lightText: false,
  lightTextDesc: false,
  imgStart: "",
  img: require("../../images/profile_3.jpg"),
  alt: "Credit Card",
  start: ""
};

export const homeObjTwo = {
  primary: true,
  lightBg: false,
  lightTopLine: true,
  lightText: true,
  lightTextDesc: true,
  imgStart: "",
  img: require("../../images/svg-14.svg"),
  alt: "Vault",
  start: ""
};

export const homeObjThree = {
  primary: false,
  lightBg: true,
  lightTopLine: false,
  lightText: false,
  lightTextDesc: false,
  imgStart: "start",
  img: require("../../images/svg-15.svg"),
  alt: "Vault",
  start: "true"
};

export const homeObjFour = {
  primary: true,
  lightBg: false,
  lightTopLine: true,
  lightText: true,
  lightTextDesc: true,
  imgStart: "start",
  img: require("../../images/svg-16.svg"),
  alt: "Vault",
  start: "true"
};

export const homeObjFive = {
  primary: true,
  lightBg: true,
  lightTopLine: false,
  lightText: false,
  lightTextDesc: false,
  imgStart: "start",
  img: require("../../images/svg-16.svg"),
  alt: "Vault",
  start: "true"
};

export const homeObjSix = {
  primary: true,
  lightBg: true,
  lightTopLine: false,
  lightText: false,
  lightTextDesc: false,
  imgStart: "start",
  img: require("../../images/svg-16.svg"),
  alt: "Vault",
  start: "true"
};

export const ProjectData = [
  {
    topLine: "django - React - React Native",
    heading: "Laam Academy - Language Learning App",
    demo: "https://play.google.com/store/apps/details?id=com.sibiyan.laamacademy",
    github: "https://github.com/sibiyan/ftest",
    img: require("../../images/laam_app1.png"),
    description:
      "Laam Academy is an android application built with React Native. It provides a platform to learn languages through video and audio lessons, quezzes and conversations. The backend of the app is built on Djano and MySQL. AWS and GCC are used to generate audios and storing assets. The application is correctly used by 100+ students.The front-end web is created with React JS and intended to bring the same mobile application experience to the web."
  },

  {
    topLine: "spaCy - flask - React",
    heading: "NLP Application ",
    demo: "https://flask-react-nlp-app.onrender.com/",
    github: "https://github.com/swalih-mohammed/Flask_React_NLP_App",
    img: require("../../images/nlp_app.png"),
    description:
      "This NLP application is an attempt to  bring the natural language processing experience to the web using flask and react. I have implimented sentance seperator, tagging POS and comparison of sentances."
  },

  {
    topLine: "Python - django",
    heading: "Property Listing Application",
    demo: "https://www.murtazaalirealestate.com/",
    // github: "https://github.com/sibiyan/django-web-scraping",
    img: require("../../images/real_estate.png"),
    description:
      "The property web application is built on top of django and react. The web app is buit such that it displays the properties categoriecally and location wise. The property can  be searched and filtered categorically"
  },

  {
    topLine: "Node - Express- MongoDb",
    heading: "Blog ",
    demo: "https://mern-blog-hpgm.onrender.com/",
    github: "https://github.com/swalih-mohammed/MERN_blog",
    img: require("../../images/mern_blog.png"),

    description:
      "I mainly work on Django and python. This is an attempt to experiment with a different frame work. This blog is buit with Express and MongoDB. All CRUD functionalities are implimented using React and Express."
  },


];
