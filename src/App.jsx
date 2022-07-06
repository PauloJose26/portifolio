import { Main } from "./style/Global";
import  Menu  from "./components/Menu";
import Home from "./components/Home";
import Description from "./components/Description";


const App = () => {
  return (
    <Main>
      <Menu />
      <Home />
      <Description />
    </Main>
  );
};


export default App;
