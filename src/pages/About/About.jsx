import { Link } from 'react-router-dom';

export const About = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <h2>
        Sobre o Mini <span>Blog</span>
      </h2>
      <p>
        Este projeto consiste em um blog feito com React no front-end e firebase
        no back-end.
      </p>
      <Link to="/post/create">Criar post </Link>
    </div>
  );
};
