import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-2 px-8 shadow-lg">
      <div className="text-xl">
        <NavLink to="/">
          Mini <span className="font-black transform: uppercase">Blog</span>
        </NavLink>
      </div>
      <ul className="flex gap-6">
        <li className="p-1 active:bg-violet-400 transition-colors border-2 border-transparent hover:border-violet-500 focus:border-violet-500 focus:outline-none rounded-md">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="p-1 active:bg-violet-400  border-2 border-transparent hover:border-violet-500 hover:transition-all focus:border-violet-500 focus:outline-none rounded-md">
          <NavLink to="/Login">Entrar</NavLink>
        </li>
        <li className="p-1 active:bg-violet-400 transition-colors border-2 border-transparent hover:border-violet-500 focus:border-violet-500 focus:outline-none rounded-md">
          <NavLink to="/Register">Cadastrar</NavLink>
        </li>
        <li className="p-1 active:bg-violet-400 transition-colors border-2 border-transparent hover:border-violet-500 focus:border-violet-500 focus:outline-none rounded-md">
          <NavLink to="/about">Sobre</NavLink>
        </li>
      </ul>
    </nav>
  );
};