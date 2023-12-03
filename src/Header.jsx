export default function Header({ isOpen, setIsOpen }) {
  return (
    <header className="px-1.6 py-2.4 bg-[url('./public/bg-simplify-section-mobile.svg')]">
      <div className="mx-auto max-w-6xl py-2.4 relative">
        <nav className="flex justify-between items-center">
          <img src="logo.svg" alt="logo" />
          {!isOpen && (
            <img
              className="cursor-pointer md:hidden z-40"
              src="icon-hamburger.svg"
              alt="hamburger menu icon"
              onClick={() => setIsOpen(!isOpen)}
            />
          )}

          {isOpen && (
            <img
              className="cursor-pointer md:hidden z-40"
              src="icon-close.svg"
              alt="hamburger close icon"
              onClick={() => setIsOpen(!isOpen)}
            />
          )}

          <ul
            className={`${
              isOpen ? "flex" : "hidden"
            } absolute md:static flex-col md:flex md:flex-row items-center bottom-[-270px] md:bottom-auto left-[0px] md:left-auto rounded-md w-full md:w-auto bg-veryLightGray md:bg-transparent p-2.4 md:p-[0px] gap-2.4 text-veryDarkBlue font-medium z-50`}
          >
            <li>
              <a
                className="hover:text-darkGrayishBlue duration-300 transition-colors"
                href="#"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                className="hover:text-darkGrayishBlue duration-300 transition-colors"
                href="#"
              >
                Product
              </a>
            </li>
            <li>
              <a
                className="hover:text-darkGrayishBlue duration-300 transition-colors"
                href="#"
              >
                About us
              </a>
            </li>
            <li>
              <a
                className="hover:text-darkGrayishBlue duration-300 transition-colors"
                href="#"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                className="hover:text-darkGrayishBlue duration-300 transition-colors"
                href="#"
              >
                Community
              </a>
            </li>
          </ul>

          <button className="hidden md:block bg-brightRed hover:bg-brightRed/50 transition-colors duration-300 rounded-full py-1.6 px-3.2 text-veryLightGray font-medium">
            Get started
          </button>
        </nav>
      </div>
    </header>
  )
}
