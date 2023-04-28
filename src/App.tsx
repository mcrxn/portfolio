import "./App.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";
import { ProjectDetails } from "./interfaces/ProjectDetails";
import { User } from "./interfaces/User";

function App() {
  const user: User = {
    name: "Filip",
    lastName: "Blazhevski",
    description: "MERN/MEAN Stack graduate from SEDC",
    title: "Web/Software Developer",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    skills: {
      languages: [
        "HTML",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS3",
        "JavaScript",
        "TypeScript",
      ],
      frameworks: ["Angular", "React", "Vue"],
      other: ["SQL", "Git", "NoSQL", "MS SQL Server"],
    },
  };

  const projects: ProjectDetails[] = [
    {
      name: "Test",
      technologies: ["test 1", "test 1", "test 1", "test 1"],
      description: "Lorem ipsum",
      ghLink: "testlink",
      siteLink: "test link",
    },
  ];

  return (
    <>
      <Header />
      <Hero user={user} />
      <Projects projects={projects} />
      {/* <div id="about-skills"> */}
      <About user={user} />
      <Skills user={user} />
      {/* </div> */}
      <Contact />
    </>
  );
}

export default App;
