
import logo from "./logo.svg";
import "./style/App.css";
// import { Caregiver } from "./components/Caregiver";
// import { Patient } from "./components/Patient";
// import { Header } from "./components/Header";

// import { Task } from "./components/Task";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import MyRouter from MyRouter
import { MyRouter } from "./components/MyRouter";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  // const [tasklist, setTasklist] = useState([]);
  // const [task, setTask] = useState({});
  return (
    <div className="app">
      <MyRouter/>
    </div>
  );
}

export default App;
