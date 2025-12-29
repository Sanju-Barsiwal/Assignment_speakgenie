import storyRightPath from "@/assets/story-right-path.jpg";
import storyFountain from "@/assets/story-fountain.jpg";
import storyLessSap from "@/assets/story-less-sap.jpg";
import storyFriendship from "@/assets/story-friendship.jpg";
import characterDoraemon from "@/assets/character-doraemon.jpg";
import characterSpiderman from "@/assets/character-spiderman.jpg";

interface LearnScreenProps {
  onBack: () => void;
}

const learnCards = [
  { id: 1, title: "Practice Chat", image: storyRightPath },
  { id: 2, title: "Roleplay", image: storyFountain },
  { id: 3, title: "Word Meaning", image: storyLessSap },
  { id: 4, title: "Word Games", image: storyFriendship },
  { id: 5, title: "Phonics & Sounds", image: characterDoraemon },
  { id: 6, title: "Sentence Builder", image: characterSpiderman },
];

function BookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.5 2H20V22H6.5A2.5 2.5 0 014 19.5V4.5A2.5 2.5 0 016.5 2z" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function LearnScreen({ onBack }: LearnScreenProps) {
  return (
    <div className="min-h-screen flex flex-col pb-24 bg-background">
      {/* Header */}
      <header className="px-4 pt-6 pb-4 border-b border-border">
        <div className="flex items-center justify-center relative">
          <button 
            onClick={onBack}
            className="absolute left-0 w-10 h-10 rounded-full bg-card flex items-center justify-center shadow-card"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground"/>
            </svg>
          </button>
          <div className="flex items-center gap-2">
            <BookIcon />
            <h1 className="text-lg font-bold text-foreground">Learn English</h1>
          </div>
        </div>
      </header>

      <main className="flex-1 px-4 py-4">
        {/* Cards Grid */}
        <div className="grid grid-cols-2 gap-4">
          {learnCards.map((card) => (
            <button
              key={card.id}
              className="bg-card rounded-2xl overflow-hidden shadow-card border border-border transition-transform active:scale-95"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3">
                <h3 className="text-sm font-medium text-foreground text-center">{card.title}</h3>
              </div>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}
