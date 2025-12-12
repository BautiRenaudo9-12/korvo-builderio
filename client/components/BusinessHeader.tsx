import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export const BusinessHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
    </header>
  );
};
