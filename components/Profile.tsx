export default function Profile() {
  return (
    <section id="profile" className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-zinc-200 dark:border-zinc-800">
            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-5xl font-bold">
              G
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              건호류
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400">
              Developer & Creator
            </p>
          </div>

          <p className="max-w-2xl text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            안녕하세요! 저는 열정적인 개발자이자 크리에이터입니다.
            새로운 기술을 배우고 멋진 프로젝트를 만드는 것을 좋아합니다.
          </p>
        </div>
      </div>
    </section>
  );
}
