interface CallScreenProps {
  onBack: () => void;
}

export function CallScreen({ onBack }: CallScreenProps) {
  return (
    <div className="min-h-screen flex flex-col pb-24 bg-background">
      {/* Header */}
      <header className="px-4 pt-6 pb-4 border-b border-border">
        <div className="flex items-center justify-center">
          <h1 className="text-lg font-medium text-foreground">Live Practice</h1>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4">
        {/* Call Icon */}
        <div className="w-24 h-24 rounded-full bg-green-500 flex items-center justify-center mb-8">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.09501 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.5953 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04207 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5765 14.4765 14.08 15.9L15.35 14.63C15.6219 14.3611 15.9651 14.1758 16.3391 14.0961C16.7131 14.0163 17.1021 14.0455 17.46 14.18C18.3673 14.5186 19.3099 14.7534 20.27 14.88C20.7558 14.9485 21.1996 15.1932 21.5179 15.5667C21.8362 15.9403 22.0062 16.4172 22 16.92Z" 
              stroke="white" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Text */}
        <h2 className="text-2xl font-bold text-foreground mb-2">Practice Speaking</h2>
        <p className="text-muted-foreground text-center mb-8">
          Connect with students to practice English speaking
        </p>

        {/* Button */}
        <button className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-green-500/30">
          Start Live Practice
        </button>
      </main>
    </div>
  );
}
