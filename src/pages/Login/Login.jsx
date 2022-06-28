import { useState, useEffect } from 'react';
import { useAuthentication } from '../../hooks/useAuthentication';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { login, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');

    const user = {
      email,
      password,
    };

    const res = await login(user);

    console.log(res);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <div className="min-h-[60vh] py-10 text-gray-100 flex flex-col items-center">
      <h1 className="p-3 text-4xl">Entrar</h1>
      <p className="mb-2">Faça o seu login</p>
      <form
        onSubmit={handleSubmit}
        className="w-1/3 flex flex-col items-center"
      >
        <label className="flex flex-col mb-1 w-3/4">
          <span className="mb-2 font-bold text-left">E-mail:</span>
          <input
            className="mb-2 placeholder:italic placeholder:text-slate-400 border-b-2 bg-transparent"
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
            className="mb-2 placeholder:italic placeholder:text-slate-400 border-b-2 bg-transparent"
            type="password"
            name="password"
            required
            placeholder="Insira a sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        {!loading && (
          <button className="w-32 px-2 py-3  font-bold bg-violet-500  rounded-lg">
            Entrar
          </button>
        )}
        {loading && (
          <button className="w-32 px-2 py-3 font-bold bg-violet-500  rounded-lg">
            Aguarde...
          </button>
        )}
        {error && (
          <p className=" flex items-center justify-center text-sm mt-2 ring-2 rounded-lg ring-violet-500 ">
            {error}
          </p>
        )}
      </form>
    </div>
  );
};
