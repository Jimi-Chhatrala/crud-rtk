import "bootstrap/dist/css/bootstrap.min.css";
import Users from "./components/Users";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import CreateUser from "./components/CreateUser";
import EditUser from "./components/EditUser";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
