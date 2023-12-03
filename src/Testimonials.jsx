import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"

export default function Testimonials() {
  return (
    <div className="px-1.6 flex flex-col gap-4.8 items-center relative">
      <h2 className="text-darkBlue text-3 text-center xl:text-left font-bold">
        What they've said
      </h2>
      <Splide
        aria-label="My Favorite Images"
        options={{
          type: "loop",
          perPage: 1,
          rewind: true,
          arrows: false,
          height: "auto",
          width: "100%",
          gap: "2.4rem",
          mediaQuery: "min",
          breakpoints: {
            768: {
              perPage: 3,
              pagination: false,
              width: "1800px",
            },
          },
        }}
      >
        <SplideSlide>
          <div className="relative bg-veryLightGray p-2.4 pt-6.4 flex flex-col gap-2.4 items-center">
            <img
              className="absolute w-[64px] top-[0px] left-[50%] translate-x-[-50%] translate-y-[-50%]"
              src="avatar-anisha.png"
              alt="avatar"
            />
            <p className="font-bold">Anisha Li</p>
            <p className="text-darkGrayishBlue text-center">
              “Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="relative bg-veryLightGray p-2.4 pt-6.4 flex flex-col gap-2.4 items-center overflow-visible">
            <img
              className="absolute w-[64px] top-[0px] left-[50%] translate-x-[-50%] translate-y-[-50%]"
              src="avatar-ali.png"
              alt="avatar"
            />
            <p className="font-bold">Ali Bravo</p>
            <p className="text-darkGrayishBlue text-center">
              “We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”
            </p>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="relative bg-veryLightGray p-2.4 pt-6.4 flex flex-col gap-2.4 items-center">
            <img
              className="absolute w-[64px] top-[0px] left-[50%] translate-x-[-50%] translate-y-[-50%]"
              src="avatar-richard.png"
              alt="avatar"
            />
            <p className="font-bold">Richard Watts</p>
            <p className="text-darkGrayishBlue text-center">
              “Manage allows us to provide structure and process. It keeps us
              organized and focused. I can’t stop recommending them to everyone
              I talk to!”
            </p>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="relative bg-veryLightGray p-2.4 pt-6.4 flex flex-col gap-2.4 items-center">
            <img
              className="absolute w-[64px] top-[0px] left-[50%] translate-x-[-50%] translate-y-[-50%]"
              src="avatar-shanai.png"
              alt="avatar"
            />
            <p className="font-bold">Shanai Gough</p>
            <p className="text-darkGrayishBlue text-center">
              “Their software allows us to track, manage and collaborate on our
              projects from anywhere. It keeps the whole team in-sync without
              being intrusive.”
            </p>
          </div>
        </SplideSlide>
      </Splide>

      <button className="bg-brightRed hover:bg-brightRed/50 transition-colors duration-300 rounded-full py-1.6 px-3.2 text-veryLightGray font-medium">
        Get started
      </button>
      <img
        className="hidden absolute bottom-[0px] left-[-430px] z-[-10] xl:block"
        src="bg-tablet-pattern.svg"
        alt="tablet pattern"
      />
    </div>
  )
}
