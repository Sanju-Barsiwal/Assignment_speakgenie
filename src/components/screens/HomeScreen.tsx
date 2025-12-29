import { StoryCard, CharacterCard, PracticeCard } from '@/components/StoryCard';
import { SectionHeader } from '@/components/SectionHeader';
import { useNavigate } from 'react-router-dom';
import storyRightPath from '@/assets/story-right-path.jpg';
import storyFountain from '@/assets/story-fountain.jpg';
import storyLessSap from '@/assets/story-less-sap.jpg';
import characterDoraemon from '@/assets/character-doraemon.jpg';
import characterSpiderman from '@/assets/character-spiderman.jpg';
import storyFriendship from '@/assets/story-friendship.jpg';

interface HomeScreenProps {
  onNavigateToPlayer: () => void;
  isDark: boolean;
  toggleTheme: () => void;
}

const audioStories = [
  { id: 1, title: 'Prahlad - Inner Strength', image: storyRightPath },
  { id: 2, title: 'Teamwork and Leadership', image: storyFountain },
  { id: 3, title: 'The Magic Pencil', image: storyLessSap },
  { id: 4, title: 'The Melody of Friendship', image: storyFriendship },
];

const aiCharacters = [
  {
    id: 1,
    name: 'Talk with Doraemon',
    image: characterDoraemon,
    borderColor: 'border-blue-400',
  },
  {
    id: 2,
    name: 'Talk with Spider Man',
    image: characterSpiderman,
    borderColor: 'border-red-400',
  },
  {
    id: 3,
    name: 'Talk with Shinchan',
    image: characterDoraemon,
    borderColor: 'border-orange-400',
  },
  {
    id: 4,
    name: 'Talk with Virat Kohli',
    image: characterSpiderman,
    borderColor: 'border-blue-400',
  },
  {
    id: 5,
    name: 'Talk with Shashi Tharoor',
    image: characterDoraemon,
    borderColor: 'border-green-400',
  },
];

const practiceCards = [
  {
    id: 1,
    title: 'Favorite Animals',
    description: 'Talk about your favorite animals and pets',
    image: storyFriendship,
  },
  {
    id: 2,
    title: 'Hobbies & Fun',
    description: 'Share what you love to do in your free time',
    image: storyFountain,
  },
  {
    id: 3,
    title: 'School Life',
    description: 'Chat about school, friends, and learning',
    image: storyLessSap,
  },
];

function AudioStoriesIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
        fill="#22c55e"
      />
    </svg>
  );
}

function PracticeAIIcon() {
  return (
    <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="10" stroke="#f97316" strokeWidth="2" />
        <path
          d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14"
          stroke="#f97316"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="9" cy="10" r="1" fill="#f97316" />
        <circle cx="15" cy="10" r="1" fill="#f97316" />
      </svg>
    </div>
  );
}

function PracticeHumansIcon() {
  return (
    <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22 16.92V19.92C22 20.48 21.56 20.93 21 20.99C20.74 21.01 20.48 21.02 20.21 21.02C10.97 21.02 3.43 13.48 3.43 4.24C3.43 3.97 3.44 3.71 3.46 3.45C3.52 2.89 3.97 2.45 4.53 2.45H7.53"
          stroke="#22c55e"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

function VideoIcon() {
  return (
    <div className="w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="2"
          y="5"
          width="14"
          height="14"
          rx="2"
          stroke="#3b82f6"
          strokeWidth="2"
        />
        <path
          d="M17 9L22 6V18L17 15"
          stroke="#3b82f6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function PeerCallsIcon() {
  return (
    <div className="w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center relative">
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.09501 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999"
          stroke="#3b82f6"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center">
        <span className="text-xs font-bold text-white">2</span>
      </div>
    </div>
  );
}

function StoriesIcon() {
  return (
    <div className="w-16 h-16 rounded-full bg-red-50 dark:bg-red-900/30 flex items-center justify-center">
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="4"
          y="2"
          width="16"
          height="20"
          rx="2"
          stroke="#ef4444"
          strokeWidth="2"
        />
        <path
          d="M8 6H16"
          stroke="#ef4444"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M8 10H16"
          stroke="#ef4444"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M8 14H12"
          stroke="#ef4444"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

function AICallsIcon() {
  return (
    <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/40 flex items-center justify-center">
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="10" fill="#ef4444" />
        <ellipse cx="9" cy="10" rx="2" ry="3" fill="white" />
        <ellipse cx="15" cy="10" rx="2" ry="3" fill="white" />
        <circle cx="9" cy="10" r="1" fill="#1f2937" />
        <circle cx="15" cy="10" r="1" fill="#1f2937" />
      </svg>
    </div>
  );
}

export function HomeScreen({
  onNavigateToPlayer,
  isDark,
  toggleTheme,
}: HomeScreenProps) {
  const currentHour = new Date().getHours();
  const greeting =
    currentHour < 12
      ? 'Good Morning'
      : currentHour < 17
      ? 'Good Afternoon'
      : 'Good Night';

  return (
    <div className="min-h-screen pb-24 bg-background">
      {/* Green Header */}
      <header className="bg-gradient-to-br from-green-500 to-green-600 px-4 pt-6 pb-8 rounded-b-3xl">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center overflow-hidden border-2 border-white/30">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20C4 16.6863 7.58172 14 12 14C16.4183 14 20 16.6863 20 20" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-white/80">{greeting}</p>
              <h1 className="text-xl font-bold text-white">Sanjeev</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center"
            >
              {isDark ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <circle cx="12" cy="12" r="5" />
                  <path
                    d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              )}
            </button>
            <div className="flex items-center gap-1 px-2 py-1 bg-white/20 rounded-full">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#fbbf24">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              <span className="text-sm font-semibold text-white">30</span>
            </div>
            <div className="px-2 py-1 bg-orange-500 rounded-full">
              <span className="text-xs font-bold text-white">PRO</span>
            </div>
          </div>
        </div>

        {/* XP Progress */}
        <div className="bg-green-600/50 rounded-2xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-green-700 flex items-center justify-center">
              <span className="text-sm font-bold text-white">L1</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-semibold text-white">
                  XP PROGRESS •
                </span>
                <div className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                      fill="#22c55e"
                    />
                  </svg>
                  <span className="text-sm font-semibold text-white">0 XP</span>
                  <span className="text-white/60">•••</span>
                </div>
              </div>
              <div className="h-1.5 bg-green-700/50 rounded-full overflow-hidden mb-1">
                <div
                  className="h-full bg-white rounded-full"
                  style={{ width: '0%' }}
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-white/70">0/100 XP</span>
                <span className="text-xs text-white/70">Next: L2</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="px-4 mt-6">
        {/* Quick Actions */}
        <div className="bg-card rounded-2xl p-4 shadow-card mb-6 border border-border">
          <div className="flex items-center justify-around">
            <div className="flex flex-col items-center gap-2">
              <VideoIcon />
              <div className="text-center">
                <p className="text-xs font-medium text-foreground">Video</p>
                <p className="text-xs text-muted-foreground">Learning</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <PeerCallsIcon />
              <p className="text-xs font-medium text-foreground">Peer Calls</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <StoriesIcon />
              <p className="text-xs font-medium text-foreground">Stories</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <AICallsIcon />
              <p className="text-xs font-medium text-foreground">AI Calls</p>
            </div>
          </div>
        </div>

        {/* Audio Stories */}
        <section className="mb-6">
          <SectionHeader
            title="Audio Stories"
            icon={<AudioStoriesIcon />}
            showAll
          />
          <div className="flex gap-4 overflow-x-auto scrollbar-hide -mx-4 px-4 pb-2">
            {audioStories.map((story) => (
              <StoryCard
                key={story.id}
                title={story.title}
                image={story.image}
                onClick={onNavigateToPlayer}
              />
            ))}
          </div>
        </section>

        {/* Practice with Humans */}
        <section className="mb-6">
          <SectionHeader
            title="Practice with Humans"
            icon={<PracticeHumansIcon />}
            showAll
          />
          <div className="flex gap-4 overflow-x-auto scrollbar-hide -mx-4 px-4 pb-2">
            {practiceCards.map((card) => (
              <PracticeCard
                key={card.id}
                title={card.title}
                description={card.description}
                image={card.image}
                badge="Be first!"
              />
            ))}
          </div>
        </section>

        {/* Practice with AI */}
        <section className="mb-6">
          <SectionHeader
            title="Practice with AI"
            icon={<PracticeAIIcon />}
            showAll
          />
          <div className="flex gap-4 overflow-x-auto scrollbar-hide -mx-4 px-4 pb-2">
            {aiCharacters.map((character) => (
              <CharacterCard
                key={character.id}
                name={character.name}
                image={character.image}
                borderColor={character.borderColor}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
