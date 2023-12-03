import Testimonials from "./Testimonials"

export default function Features() {
  return (
    <section className="pt-3.2 pb-9.6 flex flex-col gap-6.4">
      <div className="mx-auto max-w-6xl flex flex-col xl:flex-row gap-4.8 pl-1.6">
        <div className="flex flex-col gap-2.4 px-1.6 xl:px-[0px]">
          <h2 className="text-darkBlue text-3 text-center xl:text-left font-bold">
            What’s different about Manage?
          </h2>
          <p className="text-darkGrayishBlue text-center xl:text-left">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        <div className="flex flex-col gap-3.2">
          <div className="grid grid-cols-[auto_1fr] xl:grid-cols-[min-content_1fr] gap-y-1.6 xl:gap-x-1.6">
            <div className="bg-veryPaleRed xl:bg-[#fff] rounded-l-full">
              <p className="py-0.8 px-2.4 bg-brightRed  rounded-full font-medium text-veryLightGray">
                01
              </p>
            </div>
            <div className="px-1.6 xl:px-[0px] bg-veryPaleRed xl:bg-[#fff] flex items-center">
              <h3 className="font-bold text-darkBlue text-1.4">
                Track company-wide progress
              </h3>
            </div>

            <p className="text-darkGrayishBlue col-span-2 xl:col-start-2 xl:col-span-1">
              See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone level all the way done to the
              smallest of details. Never lose sight of the bigger picture again.
            </p>
          </div>
          <div className="grid grid-cols-[auto_1fr] xl:grid-cols-[min-content_1fr] gap-y-1.6 xl:gap-x-1.6">
            <div className="bg-veryPaleRed xl:bg-[#fff] rounded-l-full">
              <p className="py-0.8 px-2.4 bg-brightRed  rounded-full font-medium text-veryLightGray">
                02
              </p>
            </div>
            <div className="px-1.6 xl:px-[0px] bg-veryPaleRed xl:bg-[#fff] flex items-center">
              <h3 className="font-bold text-darkBlue text-1.4">
                Advanced built-in reports
              </h3>
            </div>

            <p className="text-darkGrayishBlue col-span-2 xl:col-start-2 xl:col-span-1">
              Set internal delivery estimates and track progress toward company
              goals. Our customisable dashboard helps you build out the reports
              you need to keep key stakeholders informed.
            </p>
          </div>
          <div className="grid grid-cols-[auto_1fr] xl:grid-cols-[min-content_1fr] gap-y-1.6 xl:gap-x-1.6">
            <div className="bg-veryPaleRed xl:bg-[#fff] rounded-l-full">
              <p className="py-0.8 px-2.4 bg-brightRed  rounded-full font-medium text-veryLightGray">
                03
              </p>
            </div>
            <div className="px-1.6 xl:px-[0px] bg-veryPaleRed xl:bg-[#fff] flex items-center">
              <h3 className="font-bold text-darkBlue text-1.4">
                Everything you need in one place
              </h3>
            </div>

            <p className="text-darkGrayishBlue col-span-2 xl:col-start-2 xl:col-span-1">
              Stop jumping from one service to another to communicate, store
              files, track tasks and share documents. Manage offers an
              all-in-one team productivity solution.
            </p>
          </div>
        </div>
      </div>
      <Testimonials />
    </section>
  )
}
