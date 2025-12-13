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
    <header className="md:hidden sticky top-0 z-40 px-4 py-4 bg-black border-b border-white/10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">K</span>
          </div>
          <div>
            <h1 className="text-white font-bold">KORVO Negocios</h1>
            <p className="text-[10px] text-amber-500 font-semibold">Panel de Control</p>
          </div>
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
        <nav className="mt-4 space-y-2 border-t border-white/10 pt-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);

            return (
              <button
                key={item.path}
                onClick={() => handleNavigate(item.path)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium text-sm ${
                  active
                    ? 'bg-amber-500/20 border border-amber-500/50 text-amber-400'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon size={18} />
                {item.label}
              </button>
            );
          })}

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-all font-medium text-sm border-t border-white/10 mt-4 pt-4"
          >
            <LogOut size={18} />
            Volver a Usuario
          </button>
        </nav>
      )}
    </header>
  );
};
