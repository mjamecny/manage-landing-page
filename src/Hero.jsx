export default function Hero() {
  return (
    <section className="py-3.2">
      <div className="mx-auto max-w-6xl flex flex-col xl:flex-row-reverse px-1.6">
        <img
          className="w-full md:w-[60%] md:self-center"
          src="illustration-intro.svg"
          alt="illustration intro"
        />
        <div className="flex flex-col xl:justify-center gap-1.6 px-1.6 xl:px-[0px]">
          <h1 className="text-darkBlue text-3 xl:text-4.4 leading-tight text-center xl:text-left font-bold">
            Bring everyone together to build better products.
          </h1>
          <p className="text-darkGrayishBlue text-center xl:text-left">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <button className="self-center xl:self-start rounded-full bg-brightRed hover:bg-brightRed/50 transition-colors duration-300 text-veryLightGray py-1.6 px-3.2">
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}
