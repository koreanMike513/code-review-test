export default function Timeline() {
  const activities = [
    {
      id: 1,
      date: '2024년 12월',
      title: '새로운 프로젝트 시작',
      description: 'Next.js를 사용한 팬 페이지 프로젝트를 시작했습니다.',
    },
    {
      id: 2,
      date: '2024년 11월',
      title: '새로운 기술 학습',
      description: 'React와 TypeScript를 깊이 있게 공부했습니다.',
    },
    {
      id: 3,
      date: '2024년 10월',
      title: '커뮤니티 활동',
      description: '오픈소스 프로젝트에 기여하고 다양한 개발자들과 교류했습니다.',
    },
    {
      id: 4,
      date: '2024년 9월',
      title: '개인 블로그 시작',
      description: '개발 경험과 배운 내용을 공유하는 블로그를 시작했습니다.',
    },
  ];

  return (
    <section id="timeline" className="py-16 md:py-24 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          타임라인
        </h2>

        <div className="space-y-8">
          {activities.map((activity, index) => (
            <div
              key={activity.id}
              className="relative pl-8 border-l-2 border-zinc-200 dark:border-zinc-800"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-zinc-900 dark:bg-zinc-100" />

              <div className="pb-8">
                <time className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  {activity.date}
                </time>
                <h3 className="mt-2 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                  {activity.title}
                </h3>
                <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
