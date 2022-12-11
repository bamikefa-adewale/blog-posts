import { useState, useEffect, useContext } from "react";
import {
  Navbar,
  MobileNav,
  Button,
  IconButton,
  Avatar,
} from "@material-tailwind/react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

export default function MenuBar() {
  const context = useContext(AuthContext);
  const [openNav, setOpenNav] = useState(false);
  const Navigate = useNavigate();
  const { users, logout } = context;

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className=" py-2 px-4 lg:px-8 lg:py-4" fullWidth>
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Link to="/" className="text-2xl font-bold text-red-500">
          Mereev
        </Link>
        <div className="hidden md:flex items-center">
          <NavLink to={"/posts"} className="mr-6 text-2xl text-red-400">
            Posts
          </NavLink>
          {context.users.token && (
            <NavLink to={"/dashboard"} className="mr-6 text-2xl text-red-400">
              Dashboard
            </NavLink>
          )}
          {context.users?.username ? (
            <div>
              {" "}
              <Avatar src={users.image} alt={users.username} />
              <span>{users.username}</span>
              <Button variant="text" onClick={logout}>
                Logout
              </Button>
            </div>
          ) : (
            <Button
              variant="gradient"
              size="sm"
              color="red"
              className="hidden lg:inline-block"
              onClick={() => Navigate("/login")}
            >
              Login
            </Button>
          )}
        </div>

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <NavLink className="text-blue-300 py-10" to={"/posts"}>
          Posts
        </NavLink>
        {users.token ? (
          <div className="block md:flex flex-col">
            <Avatar src={users.image} alt={users.username} />
            <span>{users.username}</span>
            <Button variant="text" onClick={logout}>
              Logout
            </Button>
          </div>
        ) : (
          <Button
            variant="gradient"
            size="sm"
            color="red"
            className="block w-full md:hidden mt-4"
            onClick={() => Navigate("/login")}
          >
            Login
          </Button>
        )}
      </MobileNav>
    </Navbar>
  );
}
