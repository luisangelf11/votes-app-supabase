import { NavLink, useNavigate } from "react-router-dom";
import { useStore } from "../context/useStore";

export default function Navbar() {
  const { logout, registration } = useStore();
  const navigate = useNavigate();

  const closeSession = (): void => {
    logout();
    navigate("/login");
  };
  return (
    <nav
      className="w-ful p-2 flex text-white justify-between items-center"
      style={{ backgroundColor: "#222" }}
    >
      <h2 className="font-semibold text-xl uppercase p-2">
        Binary Brotherhood
      </h2>
      <div className="flex gap-2 justify-center w-[200px]">
        <NavLink to="/" className="font-semibold p-1 ">
          Votar
        </NavLink>
        <NavLink to="/resultados" className="font-semibold p-1 ">
          Resultados
        </NavLink>
        {registration !== null ? (
          <button
            onClick={closeSession}
            className="font-semibold p-1 cursor-pointer"
          >
            Salir
          </button>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
}
