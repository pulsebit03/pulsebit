import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-[url(/texture.svg)]">
      <div className="flex-1 space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight fade-trigger">
          Transform Your Digital Presence
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl fade-trigger delay-100">
          We create intuitive websites and mobile applications that help businesses thrive in the digital world.
        </p>
        <div className="pt-4 fade-trigger delay-200">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
            Let's Get Started
          </button>
        </div>
      </div>
      <div className="flex-1 mt-8 md:mt-0">
        <Image
          src="/hero-image.svg"
          alt="Digital Transformation"
          width={600}
          height={400}
          className="object-contain scale-trigger delay-300"
          priority
        />
      </div>
    </section>
  );
}