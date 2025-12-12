import { LayoutDashboard, Gift, Users, Zap, Settings, LogOut } from 'lucide-react';
import { useNavigation } from '@/hooks/use-navigation';
import { useLocation } from 'react-router-dom';

export const BusinessSideNav = () => {
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

  return (
    <aside className="hidden md:flex flex-col w-64 bg-black border-r border-white/10 fixed left-0 top-0 h-[100dvh] z-40">
      {/* Logo */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
            <span className="text-white font-bold text-lg">K</span>
          </div>
          <div>
            <h1 className="text-white font-bold text-lg">KORVO</h1>
            <p className="text-[10px] text-amber-500 font-semibold">NEGOCIOS</p>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);

          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
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
      </nav>

      {/* Footer */}
      <div className="border-t border-white/10 p-4">
        <button
          onClick={() => navigate('/')}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-all font-medium text-sm"
        >
          <LogOut size={18} />
          Volver a Usuario
        </button>
      </div>
    </aside>
  );
};
