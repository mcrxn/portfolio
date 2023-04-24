import "./App.css";
import { Hero } from "./components/Hero/Hero";
import { User } from "./interfaces/User";

function App() {
  const user: User = {
    name: "Filip",
    lastName: "Blazhevski",
    description: "MERN/MEAN Stack graduate from SEDC",
    title: "Web/Software Developer",
  };

  return (
    <>
      <Hero user={user} />
    </>
  );
}

export default App;
