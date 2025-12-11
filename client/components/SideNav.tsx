import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Wallet, Compass, User } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Inicio', icon: Home, path: '/' },
  { id: 'wallet', label: 'Billetera', icon: Wallet, path: '/wallet' },
  { id: 'explore', label: 'Explorar', icon: Compass, path: '/explore' },
];

export const SideNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className="hidden md:flex flex-col w-64 bg-[#1a1a1a] border-r border-white/5 p-6 h-[100dvh] sticky top-0">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-12">
        <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center border border-amber-500/20">
          <svg
            className="w-6 h-6 text-amber-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-semibold tracking-tighter text-white">KORVO</h1>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 space-y-2">
        {navItems.map(({ id, label, icon: Icon, path }) => {
          const isActive = location.pathname === path;
          return (
            <button
              key={id}
              onClick={() => navigate(path)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all group ${
                isActive
                  ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5 border border-transparent'
              }`}
            >
              <Icon size={20} strokeWidth={1.5} />
              <span className="font-medium">{label}</span>
            </button>
          );
        })}
      </nav>

      {/* Profile Bottom */}
      <button
        onClick={() => navigate('/profile')}
        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 border border-transparent transition-all group"
      >
        <User size={20} strokeWidth={1.5} />
        <span className="font-medium">Perfil</span>
      </button>
    </aside>
  );
};
