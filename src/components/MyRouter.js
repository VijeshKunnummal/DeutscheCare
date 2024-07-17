import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Patient } from "./Patient";
import { Header } from "./Header";
import Chat from "./Chat";
import { Task } from "./Task";

export const MyRouter = () => {
    return (
        <Router>
          <Header />  
          <div className="content">
          <Routes>
              <Route index element={<Task/>} />
              <Route path="home" element={<Task />} />
              <Route path="profile" element={<Patient />} />
              <Route path="chat" element={<Chat />} />
          </Routes>
        </div>
    </Router>
    )
}