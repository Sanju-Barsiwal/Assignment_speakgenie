import { useState } from "react";
import { BottomNav } from "@/components/BottomNav";
import { HomeScreen } from "@/components/screens/HomeScreen";
import { NowPlayingScreen } from "@/components/screens/NowPlayingScreen";
import { LearnScreen } from "@/components/screens/LearnScreen";
import { CallScreen } from "@/components/screens/CallScreen";
import { ProfileScreen } from "@/components/screens/ProfileScreen";
import { useTheme } from "@/hooks/useTheme";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [showPlayer, setShowPlayer] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const handleNavigateToPlayer = () => {
    setShowPlayer(true);
  };

  const handleBackFromPlayer = () => {
    setShowPlayer(false);
  };

  const handleBackFromLearn = () => {
    setActiveTab("home");
  };

  if (showPlayer) {
    return <NowPlayingScreen onBack={handleBackFromPlayer} />;
  }

  return (
    <div className="min-h-screen bg-background">
      {activeTab === "home" && (
        <HomeScreen 
          onNavigateToPlayer={handleNavigateToPlayer} 
          isDark={isDark}
          toggleTheme={toggleTheme}
        />
      )}
      {activeTab === "learn" && (
        <LearnScreen onBack={handleBackFromLearn} />
      )}
      {activeTab === "call" && (
        <CallScreen onBack={() => setActiveTab("home")} />
      )}
      {activeTab === "profile" && (
        <ProfileScreen onBack={() => setActiveTab("home")} />
      )}

      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
