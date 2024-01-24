import logo from "../assets/pokemon.png";
export function Navigation() {
  return (
    <nav className="bg-gray-800 h-19 w-full py-3 px-2">
      <div className="w-18 flex justify-between mr-4">
        <img
          src={logo}
          className="w-14 h-14 mt-3 bg-cover mr-4 animate-pulse hover:-rotate-45 hover:ease-in-out"
        />
        <h1
          className="font-bold text-white text-5xl py-4
        transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 poke-text align-middle
        ">Pokedex</h1>
      </div>
    </nav>
  );
}
