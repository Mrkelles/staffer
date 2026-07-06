import Link from "next/link";

export const Head = () => {
  return (
    <header className="bg-[#F7ECE0] shadow-md">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="block text-[#272980]" href="/">
              <span className="sr-only">Home</span>
              {/* You can use an img tag here for your logo */}
              <h1 className="text-xl font-bold">Commonwealth</h1>
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li><Link className="text-[#7A7580] transition hover:text-[#7A7580]/75" href="/about">About</Link></li>
                <li><Link className="text-[#7A7580] transition hover:text-[#7A7580]/75" href="/services">Services</Link></li>
                <li><Link className="text-[#7A7580] transition hover:text-[#7A7580]/75" href="/careers">Careers</Link></li>
                <li><Link className="text-[#7A7580] transition hover:text-[#7A7580]/75" href="/contact">Contact</Link></li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <Link className="rounded-md bg-[#272980] px-5 py-2.5 text-sm font-medium text-white shadow" href="/quote">Request a Quote</Link>
              </div>

              <div className="block md:hidden">
                <button className="rounded bg-[#F7ECE0] p-2 text-[#7A7580] transition hover:text-[#7A7580]/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};