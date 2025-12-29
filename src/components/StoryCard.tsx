interface StoryCardProps {
  title: string;
  image: string;
  onClick?: () => void;
}

export function StoryCard({ title, image, onClick }: StoryCardProps) {
  return (
    <button
      onClick={onClick}
      className="flex-shrink-0 w-28 transition-transform active:scale-95"
    >
      <div className="w-28 h-36 rounded-xl overflow-hidden shadow-card mb-2">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-xs font-medium text-foreground text-center line-clamp-2 px-1">
        {title}
      </p>
    </button>
  );
}

interface CharacterCardProps {
  name: string;
  image: string;
  borderColor?: string;
  onClick?: () => void;
}

export function CharacterCard({ name, image, borderColor = "border-blue-400", onClick }: CharacterCardProps) {
  return (
    <button onClick={onClick} className="flex-shrink-0 w-24 transition-transform active:scale-95">
      <div className={`w-24 h-28 rounded-xl overflow-hidden border-2 ${borderColor} mb-2`}>
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-xs font-medium text-foreground text-center line-clamp-2 px-1">
        {name}
      </p>
    </button>
  );
}

interface PracticeCardProps {
  title: string;
  description: string;
  image: string;
  badge?: string;
}

export function PracticeCard({ title, description, image, badge }: PracticeCardProps) {
  return (
    <div className="flex-shrink-0 w-72 rounded-2xl overflow-hidden shadow-card">
      <div className="relative h-36">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        {badge && (
          <div className="absolute top-3 right-3 px-2 py-1 bg-purple-500 rounded-full">
            <span className="text-xs font-medium text-white">{badge}</span>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
          <h3 className="text-sm font-bold text-white">{title}</h3>
          <p className="text-xs text-white/80 line-clamp-1">{description}</p>
        </div>
      </div>
      <div className="p-3 bg-card">
        <button className="w-full py-2.5 bg-card border border-border rounded-xl text-sm font-semibold text-green-500 hover:bg-muted transition-colors">
          Join & Start Call
        </button>
      </div>
    </div>
  );
}
