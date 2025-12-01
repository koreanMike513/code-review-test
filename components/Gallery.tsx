export default function Gallery() {
  const images = [
    { id: 1, color: 'bg-gradient-to-br from-pink-400 to-red-500' },
    { id: 2, color: 'bg-gradient-to-br from-blue-400 to-cyan-500' },
    { id: 3, color: 'bg-gradient-to-br from-green-400 to-emerald-500' },
    { id: 4, color: 'bg-gradient-to-br from-purple-400 to-pink-500' },
    { id: 5, color: 'bg-gradient-to-br from-yellow-400 to-orange-500' },
    { id: 6, color: 'bg-gradient-to-br from-indigo-400 to-purple-500' },
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          갤러리
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <div className={`w-full h-full ${image.color}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
