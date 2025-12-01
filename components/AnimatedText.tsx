'use client';

import { useEffect, useState } from 'react';

export default function AnimatedText() {
  const [isVisible, setIsVisible] = useState(false);
  const phrases = [
    '코딩하는 중...',
    '창의력 폭발 중...',
    '새로운 아이디어 구상 중...',
    '프로젝트 진행 중...',
  ];
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-8 right-8 z-50 pointer-events-none">
      <div
        className={`
          px-6 py-3
          bg-gradient-to-r from-blue-500 to-purple-600
          text-white font-bold text-sm rounded-full
          shadow-lg
          transition-all duration-1000
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}
        `}
      >
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <span className="w-2 h-2 bg-white rounded-full animate-bounce" />
            <span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:0.2s]" />
            <span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:0.4s]" />
          </div>
          <span className="animate-pulse">{phrases[currentPhrase]}</span>
        </div>
      </div>
    </div>
  );
}
