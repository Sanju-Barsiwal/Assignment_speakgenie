interface ProfileScreenProps {
  onBack: () => void;
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

const menuItems = [
  { 
    id: "membership", 
    title: "Manage Membership", 
    subtitle: "Account Status: Free",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#f97316" strokeWidth="2"/>
      </svg>
    ),
    iconBg: "bg-orange-50 dark:bg-orange-900/30"
  },
  { 
    id: "report", 
    title: "Student Report", 
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 15C15.866 15 19 11.866 19 8V3H5V8C5 11.866 8.13401 15 12 15Z" stroke="#f97316" strokeWidth="2"/>
        <path d="M5 3H19" stroke="#f97316" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 15V19" stroke="#f97316" strokeWidth="2"/>
        <path d="M8 22H16" stroke="#f97316" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    iconBg: "bg-orange-50 dark:bg-orange-900/30"
  },
  { 
    id: "leaderboard", 
    title: "Leaderboard", 
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="#3b82f6" strokeWidth="2"/>
        <path d="M7 17V11" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 17V7" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
        <path d="M17 17V13" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    iconBg: "bg-blue-50 dark:bg-blue-900/30"
  },
  { 
    id: "personal", 
    title: "Personal Information", 
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="#f97316" strokeWidth="2"/>
        <circle cx="12" cy="10" r="3" stroke="#f97316" strokeWidth="2"/>
        <path d="M7 20.662V19C7 17.9391 7.42143 16.9217 8.17157 16.1716C8.92172 15.4214 9.93913 15 11 15H13C14.0609 15 15.0783 15.4214 15.8284 16.1716C16.5786 16.9217 17 17.9391 17 19V20.662" stroke="#f97316" strokeWidth="2"/>
      </svg>
    ),
    iconBg: "bg-orange-50 dark:bg-orange-900/30"
  },
  { 
    id: "support", 
    title: "Customer Support", 
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    iconBg: "bg-green-50 dark:bg-green-900/30"
  },
  { 
    id: "invite", 
    title: "Invite Friends", 
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="8" width="18" height="13" rx="2" stroke="#ef4444" strokeWidth="2"/>
        <path d="M12 8V3" stroke="#ef4444" strokeWidth="2"/>
        <path d="M7 3H17" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="12" cy="14" r="2" stroke="#ef4444" strokeWidth="2"/>
      </svg>
    ),
    iconBg: "bg-red-50 dark:bg-red-900/30"
  },
];

export function ProfileScreen({ onBack }: ProfileScreenProps) {
  return (
    <div className="min-h-screen flex flex-col pb-24 bg-background">
      {/* Header */}
      <header className="px-4 pt-6 pb-4">
        <div className="flex items-center justify-between">
          <div className="w-10" />
          <h1 className="text-lg font-medium text-foreground">Profile</h1>
          <button className="w-10 h-10 flex items-center justify-center text-muted-foreground">
            <MenuIcon />
          </button>
        </div>
      </header>

      <main className="flex-1 px-4">
        {/* Avatar */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 rounded-full border-4 border-blue-400 overflow-hidden mb-3">
            <div className="w-full h-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                <circle cx="12" cy="8" r="4"/>
                <path d="M4 20C4 16.6863 7.58172 14 12 14C16.4183 14 20 16.6863 20 20"/>
              </svg>
            </div>
          </div>
          <h2 className="text-xl font-bold text-foreground">naveen</h2>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-stat-blue/30 rounded-2xl p-4 text-center">
            <p className="text-2xl font-bold text-blue-500">0%</p>
            <div className="flex items-center justify-center gap-1 mt-1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#22c55e" strokeWidth="2"/>
                <path d="M9 12L11 14L15 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-sm text-blue-500">Accuracy</span>
            </div>
          </div>
          <div className="bg-stat-green/30 rounded-2xl p-4 text-center">
            <p className="text-2xl font-bold text-green-600">1</p>
            <div className="flex items-center justify-center gap-1 mt-1">
              <span className="text-base">🏆</span>
              <span className="text-sm text-green-600">Level</span>
            </div>
          </div>
          <div className="bg-stat-pink/30 rounded-2xl p-4 text-center">
            <p className="text-2xl font-bold text-pink-500">0 min</p>
            <div className="flex items-center justify-center gap-1 mt-1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#f97316" strokeWidth="2"/>
                <path d="M12 6V12L16 14" stroke="#f97316" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span className="text-sm text-pink-500">Time Spent</span>
            </div>
          </div>
          <div className="bg-stat-yellow/30 rounded-2xl p-4 text-center">
            <p className="text-2xl font-bold text-orange-500">0</p>
            <div className="flex items-center justify-center gap-1 mt-1">
              <span className="text-base">🏅</span>
              <span className="text-sm text-orange-500">XP Points</span>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="bg-card rounded-2xl border border-border overflow-hidden">
          {menuItems.map((item, index) => (
            <button
              key={item.id}
              className={`w-full flex items-center gap-3 px-4 py-4 hover:bg-muted transition-colors ${
                index !== menuItems.length - 1 ? 'border-b border-border' : ''
              }`}
            >
              <div className={`w-10 h-10 rounded-full ${item.iconBg} flex items-center justify-center`}>
                {item.icon}
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm font-medium text-foreground">{item.title}</p>
                {item.subtitle && (
                  <p className="text-xs text-muted-foreground">{item.subtitle}</p>
                )}
              </div>
              <div className="text-muted-foreground">
                <ChevronRight />
              </div>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}
