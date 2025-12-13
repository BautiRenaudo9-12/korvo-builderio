import { Menu, X, LayoutDashboard, Gift, Users, Zap, Settings, LogOut } from 'lucide-react';
import { useState } from 'react';
import { useNavigation } from '@/hooks/use-navigation';
import { useLocation } from 'react-router-dom';

export const BusinessHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const { navigate } = useNavigation();

  const menuItems = [
    { path: '/business/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/business/rewards', label: 'Recompensas', icon: Gift },
    { path: '/business/customers', label: 'Clientes', icon: Users },
    { path: '/business/promotions', label: 'Promociones', icon: Zap },
    { path: '/business/settings', label: 'Configuración', icon: Settings },
  ];

  const isActive = (path: string) => pathname === path;

  const handleNavigate = (path: string) => {
    navigate(path);
    setMenuOpen(false);
  };

  const handleLogout = () => {
    navigate('/');
    setMenuOpen(false);
  };

  return (
    <header className="md:hidden sticky top-0 z-40 px-4 py-4 bg-[#1a1a1a] border-b border-white/5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-amber-500/10 rounded-lg flex items-center justify-center border border-amber-500/20">
            <span className="text-amber-500 font-bold text-sm">K</span>
          </div>
          <h1 className="text-white font-semibold">KORVO</h1>
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="mt-4 space-y-2 border-t border-white/5 pt-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);

            return (
              <button
                key={item.path}
                onClick={() => handleNavigate(item.path)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium text-sm ${
                  active
                    ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                <Icon size={20} strokeWidth={1.5} />
                {item.label}
              </button>
            );
          })}

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 border border-transparent transition-all font-medium text-sm"
          >
            <LogOut size={20} strokeWidth={1.5} />
            Volver a Usuario
          </button>
        </nav>
      )}
    </header>
  );
};
