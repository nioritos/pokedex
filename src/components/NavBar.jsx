import PokedexIcon from "../../public/pokedex-logo.png";
import "../styles/NavBar.css";

function NavBar() {
  return (
    <>
      <header className="flex w-full h-36 items-center ">
        <nav className="flex w-full justify-between items-center h-full ">
          <img src={PokedexIcon} alt="" className="w-36 h-auto" />
          <div className="flex items-center justify-end">
            <img
              src="https://github.com/nioritos.png"
              alt="nioritos's personal photo"
              className="rounded-2xl w-24 h-auto"
            />
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
