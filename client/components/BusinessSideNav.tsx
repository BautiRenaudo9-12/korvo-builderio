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
    <aside className="hidden md:flex flex-col w-64 bg-[#1a1a1a] border-r border-white/5 p-6 h-[100dvh] sticky top-0">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-12">
        <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center border border-amber-500/20">
          <span className="text-amber-500 font-bold text-lg">K</span>
        </div>
        <h1 className="text-2xl font-semibold tracking-tighter text-white">KORVO</h1>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);

          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
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
      </nav>

      {/* Footer */}
      <button
        onClick={() => navigate('/')}
        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 border border-transparent transition-all font-medium text-sm"
      >
        <LogOut size={20} strokeWidth={1.5} />
        Volver a Usuario
      </button>
    </aside>
  );
};
