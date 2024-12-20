import { Outlet, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  function handleHome() {
    navigate("/");
  }

  function navFavourites() {
    navigate("/favourites");
  }

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-gray-800 shadow-md z-50">
        <div className="flex flex-row justify-between items-center bg-blue-300 py-2 px-5 font-bold text-black">
          <div>
            <p className="hover:text-red-500 transition-colors pointer-events-none">
              blue-shirt-maaran
            </p>
          </div>
          <div>
            <button
              onClick={handleHome}
              className="hover:text-red-500 transition-colors"
            >
              Home
            </button>
          </div>
          <div>
            <span
              onClick={navFavourites}
              className="material-symbols-outlined cursor-pointer hover:text-red-700 transition-colors"
            >
              favorite
            </span>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default NavBar;
