import { ReactNode } from "react";

interface ActionIconProps {
  icon: ReactNode;
  label: string;
  sublabel?: string;
  onClick?: () => void;
  bgColor?: string;
  iconBgColor?: string;
  hasRing?: boolean;
}

export function ActionIcon({ 
  icon, 
  label, 
  sublabel,
  onClick, 
  bgColor = "bg-gray-50",
  iconBgColor,
  hasRing = false,
}: ActionIconProps) {
  return (
    <button 
      onClick={onClick}
      className="flex flex-col items-center gap-2 group"
    >
      <div className={`relative w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-105 ${bgColor} ${hasRing ? 'ring-2 ring-green-400 ring-offset-2' : ''}`}>
        {icon}
      </div>
      <div className="text-center">
        <p className="text-xs font-medium text-gray-700">{label}</p>
        {sublabel && (
          <p className="text-[10px] text-gray-500">{sublabel}</p>
        )}
      </div>
    </button>
  );
}

// Icon components
export function VideoIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="4" width="14" height="14" rx="2" stroke="#3b82f6" strokeWidth="2"/>
      <path d="M22 8L16 12L22 16V8Z" stroke="#3b82f6" strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  );
}

export function PeerCallIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 16.92V19.92C22 20.48 21.56 20.93 21 20.99C20.74 21.01 20.48 21.02 20.21 21.02C10.97 21.02 3.43 13.48 3.43 4.24C3.43 3.97 3.44 3.71 3.46 3.45C3.52 2.89 3.97 2.45 4.53 2.45H7.53C8.08 2.45 8.53 2.87 8.58 3.42C8.62 3.88 8.72 4.33 8.87 4.76C9.01 5.16 8.9 5.61 8.59 5.91L7.32 7.18" stroke="#f97316" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="15" cy="9" r="3" stroke="#f97316" strokeWidth="2"/>
      <circle cx="9" cy="12" r="2" stroke="#f97316" strokeWidth="2"/>
    </svg>
  );
}

export function StoriesIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="3" width="16" height="18" rx="2" stroke="#ef4444" strokeWidth="2"/>
      <path d="M8 7H16" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"/>
      <path d="M8 11H16" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"/>
      <path d="M8 15H12" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function AICallsIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#fecaca"/>
      <circle cx="9" cy="10" r="1.5" fill="#1f2937"/>
      <circle cx="15" cy="10" r="1.5" fill="#1f2937"/>
      <path d="M8.5 15C9.5 16.5 14.5 16.5 15.5 15" stroke="#1f2937" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
