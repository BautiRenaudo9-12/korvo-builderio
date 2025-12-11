import { mockTransactions } from '@/lib/data';
import { ArrowDownLeft, ArrowUpRight } from 'lucide-react';

export default function Activity() {
  return (
    <div className="px-6 md:px-8 pt-4 md:pt-8 pb-20 md:pb-8">
      <h2 className="text-xl md:text-3xl font-semibold text-white tracking-tight mb-6 md:mb-8">Actividad Reciente</h2>
      <div className="flex flex-col max-w-3xl">
        {mockTransactions.map((transaction, i) => {
          const isEarn = transaction.type === 'earn';
          const color = isEarn ? 'text-emerald-500' : 'text-neutral-200';
          const icon = isEarn ? ArrowDownLeft : ArrowUpRight;
          const Icon = icon;
          const iconBg = isEarn ? 'bg-emerald-500/10 text-emerald-500' : 'bg-neutral-800 text-neutral-400';

          return (
            <div
              key={transaction.id}
              className="flex items-center justify-between py-4 md:py-6 px-4 md:px-6 border-b border-white/5 hover:bg-white/5 transition-colors rounded-lg animate-fade-in"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="flex items-center gap-3 flex-1">
                <div className={`w-8 md:w-10 h-8 md:h-10 rounded-full ${iconBg} flex items-center justify-center flex-shrink-0`}>
                  <Icon size={16} className="md:hidden" />
                  <Icon size={18} className="hidden md:block" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm md:text-base font-medium text-white">{transaction.item || 'Compra'}</p>
                  <p className="text-[10px] md:text-xs text-neutral-500">
                    {transaction.shop} • {transaction.date}
                  </p>
                </div>
              </div>
              <span className={`text-xs md:text-sm font-semibold ${color} tracking-tight ml-4 flex-shrink-0`}>
                {transaction.amount}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
