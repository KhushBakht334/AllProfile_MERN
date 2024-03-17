// import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Service } from "./pages/Service";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Navbar } from "./components/Navbar";
import { Logout } from "./pages/Logout";
import { Admin } from "./pages/Admin";
import { AdminUsers } from "./pages/AdminUsers";
import { AdminContacts } from "./pages/AdminContacts";
import { UserUpdate } from "./pages/UserUpdate";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/logout" element={<Logout/>}/>
      <Route path="/admin" element={<Admin/>}>
        <Route path="users" element={<AdminUsers/>}/>
        <Route path="contacts" element={<AdminContacts/>}/>
        <Route path="user/:id/edit" element={<UserUpdate/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
