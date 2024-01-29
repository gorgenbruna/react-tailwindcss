import ToggleTheme from '../ToggleTheme/ToggleTheme';

const Header = ({ user }) => {
  const userName = user?.name || 'Usuário';

  return (
    <div className="flex h-20 bg-alura-200 dark:bg-dark-200 justify-between items-center px-5 sm:rounded-xl sm:m-5">
      <span className="text-gray-100">Olá, {userName}</span>
      <h1 className="text-gray-100 text-xl sm:cursor-pointer sm:hover:text-2xl">Alura Newsletter</h1>
      <ToggleTheme />
    </div>
  );
};

export default Header;
