import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthUser from "./components/AuthUser";
import MenuBar from "./components/layouts/MenuBar";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Posts from "./pages/Posts";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <MenuBar />
      <Routes>
        <Route path="/" element={<AuthUser />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
