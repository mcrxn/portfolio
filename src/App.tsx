import "./App.css";
import { Hero } from "./components/Hero/Hero";
import { Projects } from "./components/Projects/Projects";
import { ProjectDetails } from "./interfaces/ProjectDetails";
import { User } from "./interfaces/User";

function App() {
  const user: User = {
    name: "Filip",
    lastName: "Blazhevski",
    description: "MERN/MEAN Stack graduate from SEDC",
    title: "Web/Software Developer",
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
      <Hero user={user} />
      <Projects projects={projects} />
    </>
  );
}

export default App;
