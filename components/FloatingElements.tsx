'use client';

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20 animate-float" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg opacity-20 animate-float-delayed" />
      <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full opacity-20 animate-float-slow" />
      <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg opacity-20 animate-float" />
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full opacity-20 animate-float-delayed" />
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-br from-violet-400 to-violet-600 rounded-lg opacity-20 animate-float-slow" />
    </div>
  );
}
