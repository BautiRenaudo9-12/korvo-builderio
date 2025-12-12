import { useNavigate } from 'react-router-dom';
import { ChevronLeft, User } from 'lucide-react';

interface HeaderProps {
  isDetailRoute: boolean;
  onBack: () => void;
}

export const Header = ({ isDetailRoute, onBack }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className="md:hidden pt-6 pb-2 px-6 flex justify-between items-center z-20 bg-[#1a1a1a]/90 backdrop-blur-sm sticky top-0 transition-all duration-300">
      {isDetailRoute ? (
        <button
          onClick={onBack}
          className="p-2 rounded-full hover:bg-white/5 transition-colors flex items-center gap-1 text-neutral-400 hover:text-white"
        >
          <ChevronLeft size={24} strokeWidth={1.5} />
          <span className="text-sm font-medium">Volver</span>
        </button>
      ) : (
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-amber-500/10 rounded-lg flex items-center justify-center border border-amber-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="18" height="18" viewBox="0 0 24 24" data-icon="lucide:bird" data-width="18" data-stroke-width="1.5" class="iconify text-amber-500 iconify--lucide"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M16 7h.01M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"></path><path d="m20 7l2 .5l-2 .5M10 18v3m4-3.25V21m-7-3a6 6 0 0 0 3.84-10.61"></path></g></svg>
          </div>
          <h1 className="text-lg font-semibold tracking-tighter text-white">KORVO</h1>
        </div>
      )}

      {isDetailRoute && <div />}

      <button
        onClick={() => navigate('/profile')}
        className="relative p-2 rounded-full hover:bg-white/5 transition-colors group"
      >
        <User size={20} className="text-neutral-400 group-hover:text-white transition-colors" strokeWidth={1.5} />
      </button>
    </header>
  );
};
