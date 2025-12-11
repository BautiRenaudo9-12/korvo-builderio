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
            <svg
              className="w-5 h-5 text-amber-500"
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
