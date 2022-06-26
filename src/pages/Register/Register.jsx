import { useState, useEffect } from 'react';

export const Register = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setError('');

    const user = {
      displayName,
      email,
      password,
    };

    if (password !== confirmPassword) {
      setError('As senhas precisam ser iguais');
      return;
    }
  };

  return (
    <div className="py-10 text-gray-100 flex flex-col items-center">
      <h1 className="p-3 text-4xl">Cadastre-se</h1>
      <p className="mb-2">Crie seu usuário e compartilhe suas histórias</p>
      <form
        onSubmit={handleSubmit}
        className="w-1/3 flex flex-col items-center"
      >
        <label className="flex flex-col mb-1 w-3/4">
          <span className="mb-2 font-bold text-left">Nome:</span>
          <input
            className="placeholder:italic placeholder:text-slate-400 border-b-2 bg-transparent"
            type="text"
            name="displayName"
            required
            placeholder="Nome do usuário"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>
        <label className="flex flex-col mb-1 w-3/4">
          <span className="mb-2 font-bold text-left">E-mail:</span>
          <input
            className="placeholder:italic placeholder:text-slate-400 border-b-2 bg-transparent  "
            type="email"
            name="email"
            required
            placeholder="Email do usuário"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="flex flex-col mb-1 w-3/4">
          <span className="mb-2 font-bold text-left">Senha:</span>
          <input
            className="placeholder:italic placeholder:text-slate-400 border-b-2 bg-transparent "
            type="password"
            name="password"
            required
            placeholder="Insira a sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label className="flex flex-col mb-4 w-3/4">
          <span className="mb-2 font-bold text-left">
            Confirmação de senha:
          </span>
          <input
            className="placeholder:italic placeholder:text-slate-400 border-b-2 bg-transparent "
            type="password"
            name="confirmpassword"
            required
            placeholder="Confirme a sua senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <button className="w-32 px-2 py-3  font-bold bg-violet-500  rounded-lg">
          Cadastrar
        </button>
        {error && (
          <p className=" flex items-center justify-center mt-4 ring-2 w-60 rounded-lg ring-violet-500 ">
            {error}
          </p>
        )}
      </form>
    </div>
  );
};
