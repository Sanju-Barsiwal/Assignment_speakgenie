import { Share2, Users } from "lucide-react";

interface PeerCallCardProps {
  title: string;
  description: string;
  participants?: number;
  onShare?: () => void;
  onJoin?: () => void;
}

export function PeerCallCard({ 
  title, 
  description, 
  participants = 2,
  onShare, 
  onJoin 
}: PeerCallCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase">Be first!</span>
          </div>
          <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
        </div>
        <button 
          onClick={onShare}
          className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          <Share2 className="w-4 h-4 text-gray-900 dark:text-white" />
        </button>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            {[...Array(Math.min(participants, 3))].map((_, i) => (
              <div 
                key={i}
                className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 border-2 border-white dark:border-gray-800 flex items-center justify-center"
              >
                <Users className="w-3 h-3 text-white" />
              </div>
            ))}
          </div>
          <span className="text-xs text-gray-600 dark:text-gray-400">{participants} Learning</span>
        </div>
        
        <button 
          onClick={onJoin}
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-sm font-semibold text-white shadow-lg hover:opacity-90 transition-opacity"
        >
          Join & Start Call
        </button>
      </div>
    </div>
  );
}