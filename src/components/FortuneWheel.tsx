import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface WheelSegment {
  label: string;
  emoji: string;
  color: string;
  isWin: boolean;
}

// 20% clătită gratis (2/10), 25% jumătate de preț (2.5/10 ≈ 3/10)
const segments: WheelSegment[] = [
  { label: 'Clătită gratis', emoji: '🎉', color: '#DC143C', isWin: true },
  { label: 'Mai încearcă', emoji: '🔁', color: '#D4A574', isWin: false },
  { label: 'Jumătate de preț', emoji: '💰', color: '#FFD700', isWin: true },
  { label: 'Poate data viitoare', emoji: '😄', color: '#8B4513', isWin: false },
  { label: 'Jumătate de preț', emoji: '💰', color: '#FFD700', isWin: true },
  { label: 'Aproape!', emoji: '😅', color: '#A0522D', isWin: false },
  { label: 'Clătită gratis', emoji: '🎉', color: '#DC143C', isWin: true },
  { label: 'Mulțumim!', emoji: '❤️', color: '#C41E3A', isWin: false },
];

const STORAGE_KEY = 'clatite_wheel_played';
const RESULT_KEY = 'clatite_wheel_result';

const FortuneWheel = () => {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [result, setResult] = useState<WheelSegment | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [savedResult, setSavedResult] = useState<WheelSegment | null>(null);

  useEffect(() => {
    const played = localStorage.getItem(STORAGE_KEY);
    const savedResultStr = localStorage.getItem(RESULT_KEY);
    if (played) {
      setHasPlayed(true);
      if (savedResultStr) {
        setSavedResult(JSON.parse(savedResultStr));
      }
    }
  }, []);

  const spinWheel = useCallback(() => {
    if (isSpinning || hasPlayed) return;

    setIsSpinning(true);
    setShowResult(false);
    
    const segmentAngle = 360 / segments.length;
    const randomSegment = Math.floor(Math.random() * segments.length);
    const extraSpins = 5 + Math.floor(Math.random() * 3);
    const finalRotation = extraSpins * 360 + (360 - randomSegment * segmentAngle - segmentAngle / 2);
    
    setRotation(finalRotation);

    setTimeout(() => {
      setIsSpinning(false);
      const wonSegment = segments[randomSegment];
      setResult(wonSegment);
      setSavedResult(wonSegment);
      setShowResult(true);
      setHasPlayed(true);
      localStorage.setItem(STORAGE_KEY, 'true');
      localStorage.setItem(RESULT_KEY, JSON.stringify(wonSegment));
    }, 4000);
  }, [isSpinning, hasPlayed]);

  const segmentAngle = 360 / segments.length;

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="relative">
        {/* Pointer */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 z-10">
          <div 
            className="w-0 h-0 border-l-[15px] border-r-[15px] border-t-[25px] border-l-transparent border-r-transparent border-t-chocolate"
            style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}
          />
        </div>

        {/* Wheel */}
        <motion.div 
          className="relative w-72 h-72 md:w-80 md:h-80 rounded-full shadow-warm overflow-hidden"
          style={{ 
            transform: `rotate(${rotation}deg)`,
            transition: isSpinning ? 'transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)' : 'none'
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {segments.map((segment, index) => {
              const startAngle = index * segmentAngle;
              const endAngle = (index + 1) * segmentAngle;
              const startRad = (startAngle - 90) * Math.PI / 180;
              const endRad = (endAngle - 90) * Math.PI / 180;
              
              const x1 = 50 + 50 * Math.cos(startRad);
              const y1 = 50 + 50 * Math.sin(startRad);
              const x2 = 50 + 50 * Math.cos(endRad);
              const y2 = 50 + 50 * Math.sin(endRad);
              
              const largeArc = segmentAngle > 180 ? 1 : 0;
              
              const d = `M 50 50 L ${x1} ${y1} A 50 50 0 ${largeArc} 1 ${x2} ${y2} Z`;
              
              const midAngle = (startAngle + endAngle) / 2 - 90;
              const midRad = midAngle * Math.PI / 180;
              const textX = 50 + 32 * Math.cos(midRad);
              const textY = 50 + 32 * Math.sin(midRad);
              
              return (
                <g key={index}>
                  <path
                    d={d}
                    fill={segment.color}
                    stroke="hsl(35 30% 96%)"
                    strokeWidth="0.5"
                  />
                  <text
                    x={textX}
                    y={textY}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="white"
                    fontSize="6"
                    fontWeight="bold"
                    transform={`rotate(${startAngle + segmentAngle / 2}, ${textX}, ${textY})`}
                    style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}
                  >
                    {segment.emoji}
                  </text>
                </g>
              );
            })}
            {/* Center circle */}
            <circle cx="50" cy="50" r="8" fill="hsl(35 30% 96%)" />
            <circle cx="50" cy="50" r="6" fill="hsl(25 60% 25%)" />
          </svg>
        </motion.div>

        {/* Decorative border */}
        <div 
          className="absolute inset-0 rounded-full border-8 border-chocolate pointer-events-none"
          style={{ boxShadow: 'inset 0 0 20px rgba(0,0,0,0.1)' }}
        />
      </div>

      {/* Spin button */}
      <Button
        onClick={spinWheel}
        disabled={isSpinning || hasPlayed}
        size="lg"
        className="bg-chocolate hover:bg-chocolate/90 text-cream font-display text-xl px-10 py-6 rounded-full shadow-warm transition-all duration-300 hover:scale-105 disabled:opacity-60 disabled:hover:scale-100"
      >
        {hasPlayed ? '🎡 Ai participat deja' : isSpinning ? '🎡 Se învârte...' : '🎡 Învârte Roata!'}
      </Button>

      {/* Result modal */}
      <AnimatePresence>
        {showResult && result && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm"
            onClick={() => setShowResult(false)}
          >
            <motion.div
              className="bg-cream rounded-2xl p-8 max-w-md w-full text-center shadow-warm"
              onClick={(e) => e.stopPropagation()}
              initial={{ y: 50 }}
              animate={{ y: 0 }}
            >
              <div className="text-6xl mb-4">{result.emoji}</div>
              <h3 className="font-display text-2xl md:text-3xl text-chocolate mb-4">
                {result.label}
              </h3>
              <p className="text-muted-foreground mb-6">
                {result.isWin 
                  ? 'Felicitări! Arată acest ecran la stand și primești premiul 🎉'
                  : 'Azi n-a fost noroc, dar clătitele sunt oricum câștigătoare 😋'
                }
              </p>
              <p className="text-sm text-muted-foreground">
                Te așteptăm la stand!
              </p>
              <Button
                onClick={() => setShowResult(false)}
                className="mt-6 bg-strawberry hover:bg-strawberry/90 text-accent-foreground"
              >
                Închide
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {hasPlayed && !showResult && savedResult && (
        <div className="flex flex-col items-center gap-3">
          <Button
            onClick={() => {
              setResult(savedResult);
              setShowResult(true);
            }}
            variant="outline"
            className="border-chocolate text-chocolate hover:bg-chocolate hover:text-cream"
          >
            🎁 Vezi ce ai câștigat
          </Button>
          <p className="text-muted-foreground text-center text-sm">
            Ai participat deja la tombolă. Te așteptăm la stand! 🥞
          </p>
        </div>
      )}
    </div>
  );
};

export default FortuneWheel;
