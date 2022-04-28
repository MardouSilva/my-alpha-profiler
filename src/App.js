import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/index";
import { Router } from "./routes/routes";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  );
};

export default App;
