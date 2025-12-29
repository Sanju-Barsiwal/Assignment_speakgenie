interface XPProgressProps {
  currentXP: number;
  totalXP: number;
  level: number;
  nextLevel: string;
  totalXPEarned: number;
}

export function XPProgress({ currentXP, totalXP, level, nextLevel, totalXPEarned }: XPProgressProps) {
  const percentage = (currentXP / totalXP) * 100;

  return (
    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-white/90 uppercase tracking-wide">
            XP Progress
          </span>
          <span className="text-white/60">•</span>
        </div>
        <div className="text-right">
          <span className="text-xs text-white/80">Next: </span>
          <span className="text-xs font-semibold text-white">{nextLevel}</span>
        </div>
      </div>
      
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
          <span className="text-sm font-bold text-white">L{level}</span>
        </div>
        <div className="flex-1">
          <div className="relative h-2.5 bg-white/20 rounded-full overflow-hidden">
            <div 
              className="absolute inset-y-0 left-0 bg-white rounded-full transition-all duration-500 ease-out"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <span className="text-xs text-white/80">{currentXP}/{totalXP} XP</span>
      </div>

      {/* Total XP Row */}
      <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/20">
        <div className="flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white" fillOpacity="0.9"/>
          </svg>
        </div>
        <span className="text-sm font-bold text-white">{totalXPEarned} XP</span>
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
        </div>
      </div>
    </div>
  );
}
