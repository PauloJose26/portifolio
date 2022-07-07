import { Main } from "./style/Global";
import  Menu  from "./components/Menu";
import Home from "./components/Home";
import Description from "./components/Description";
import Technology from "./components/Technology";
import Projects from "./components/Projects";


const App = () => {
  return (
    <Main>
      <Menu />
      <Home />
      <Description />
      <Technology />
      <Projects />
    </Main>
  );
};


export default App;
