import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "bootswatch/dist/litera/bootstrap.min.css";
import './index.css';

// importing components
import App from './App';

render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById("root")
);

