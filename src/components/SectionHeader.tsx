interface SectionHeaderProps {
  title: string;
  icon?: React.ReactNode;
  showAll?: boolean;
  onShowAll?: () => void;
  className?: string;
}

export function SectionHeader({ title, icon, showAll, onShowAll, className }: SectionHeaderProps) {
  return (
    <div className={`flex items-center justify-between mb-4 ${className || ''}`}>
      <div className="flex items-center gap-2">
        {icon}
        <h2 className="text-base font-semibold text-gray-800">{title}</h2>
      </div>
      {showAll && (
        <button 
          onClick={onShowAll}
          className="flex items-center gap-1 text-sm text-green-500 hover:text-green-600 transition-colors font-medium"
        >
          <span>Show all</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
    </div>
  );
}
