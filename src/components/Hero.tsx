import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-[url(/texture.svg)]">
      <div className="flex-1 space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight fade-trigger">
        Make Your Dream a Digital Success
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl fade-trigger delay-100">
        We craft intuitive websites and mobile apps that empower businesses to succeed in the digital age.        </p>
        <div className="pt-4 fade-trigger delay-200">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
            Let&apos;s Get Started
          </button>
        </div>
      </div>
      <div className="flex-1 mt-8 md:mt-0 ml-8">
        <Image
          src="/projects/hero-image.jpeg"
          alt="Digital Transformation"
          width={400}
          height={200}
          // fill
          className="object-contain scale-trigger delay-300 rounded-lg shadow-lg -rotate-5 float-animation"
          priority
        />
      </div>
    </section>
  );
}