
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-[#F7ECE0] min-h-screen">
      <header className="py-6 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-serif text-[#272980]">About Us</h1>
          <nav>
            <Link href="/" legacyBehavior>
              <a className="text-[#7A7580] hover:text-[#272980]">Home</a>
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <section className="text-center">
          <h2 className="text-sm text-[#8E8C96] uppercase tracking-widest">OUR STORY</h2>
          <p className="text-4xl md:text-5xl font-serif text-[#272980] mt-4 max-w-3xl mx-auto">
            Providing Excellence in Facilities and Security Since Day One
          </p>
          <div className="flex justify-center my-8">
            <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 10H38" stroke="#2B2D82" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="20" cy="10" r="3" fill="#F0A582"/>
            </svg>
          </div>
        </section>

        <section className="my-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="text-lg text-[#7A7580]">
                Founded in Manchester, Commonwealth Facilities & Security has grown to become a trusted provider of comprehensive facilities management, security, and workforce solutions across the UK.
              </p>
              <p className="text-[#7A7580]">
                Our mission is to deliver reliable, high-quality services that meet the unique needs of each of our clients. We are committed to professionalism, integrity, and excellence in everything we do.
              </p>
              <p className="text-[#7A7580]">
                We believe in building long-term partnerships with our clients, based on trust and mutual respect. Our team of experienced professionals is dedicated to ensuring your complete satisfaction.
              </p>
            </div>
            <div>
              <Image src="https://picsum.photos/seed/about1/800/600" alt="Our Team" width={800} height={600} className="rounded-lg object-cover w-full" />
            </div>
          </div>
        </section>

        <section className="my-24 bg-[#EFE7E1] rounded-2xl p-12">
            <div className="text-center max-w-3xl mx-auto">
                <h3 className="text-sm text-[#8E8C96] uppercase tracking-widest">OUR VALUES</h3>
                <p className="text-3xl font-serif text-[#272980] mt-4">
                    The Principles That Guide Us
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-center">
                <div>
                    <h4 className="text-lg font-semibold text-[#272980]">Integrity</h4>
                    <p className="text-[#7A7580] mt-2">We operate with honesty and transparency in all our dealings.</p>
                </div>
                <div>
                    <h4 className="text-lg font-semibold text-[#272980]">Excellence</h4>
                    <p className="text-[#7A7580] mt-2">We strive for the highest standards of service and quality.</p>
                </div>
                <div>
                    <h4 className="text-lg font-semibold text-[#272980]">Reliability</h4>
                    <p className="text-[#7A7580] mt-2">Our clients can depend on us to deliver on our promises.</p>
                </div>
            </div>
        </section>

      </main>
    </div>
  );
}
