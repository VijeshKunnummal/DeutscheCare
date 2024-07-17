// import { Header } from "./Header"
// import { Patient } from "./Patient"
// import { Caregiver} from "./Caregiver"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Patient } from "./Patient";
import { Header } from "./Header";

import { Task } from "./Task";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const MyRouter = () => {
    return (
        <Router>
          <Header />  
          <div className="content">
          <Routes>
              <Route index element={<Task/>} />
              <Route path="home" element={<Task />} />
              <Route path="profile" element={<Patient />} />
          </Routes>
        </div>
    </Router>
    )
}