export default function Cta() {
  return (
    <section className="bg-brightRed bg-[url('./public/bg-simplify-section-mobile.svg')] bg-no-repeat py-6.4">
      <div className="mx-auto max-w-5xl px-1.6 xl:px-[0px] flex flex-col xl:flex-row xl:justify-between gap-2.4 items-center ">
        <h2 className="font-medium text-veryLightGray text-3.6 text-center xl:text-left xl:w-[50%]">
          Simplify how your team works today.
        </h2>
        <button className="py-1.2 px-2.4 text-1.4 font-bold bg-veryLightGray text-brightRed hover:text-brightRed/50 duration-300 transition-colors rounded-full">
          Get Started
        </button>
      </div>
    </section>
  )
}
