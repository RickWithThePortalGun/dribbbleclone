import Footer from "@components/Footer";
import {
  Hero,
  Carousel,
  Partners,
  Motto,
  Match,
  Features,
  Review,
  Why,
  Work,
  CTA,
  Start,
  Connecting,
  WorkCarousel
} from "@sections";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden max-w-7xl mx-auto">
      <section className="sm:px-16 px-8 sm:py-24 py-8">
        <Hero />
      </section>
      <Carousel />
      <section className="sm:px-16 px-8 sm:py-24 py-12">
        <Partners />
      </section>
      <section className="sm:px-16 px-8 sm:py-24 py-12">
        <Motto />
      </section>
      <section className="sm:px-16 px-8 sm:py-24 py-12">
        <div className="flex justify-center items-center">
          <div className="border-t-[1px] border-gray-300 w-[90%]"></div>
        </div>{" "}
        <Connecting />
      </section>
      <section className="sm:px-16 px-8 sm:py-24 py-12">
        <Match />
      </section>
      <section className="sm:px-16 px-8 sm:py-24 py-12">
        <Features />
      </section>
      <section className="sm:px-16 px-8 sm:py-24 py-12">
        <Review />
      </section>
      <section className="sm:px-16 px-8 sm:py-24 py-12">
        <Why />
      </section>
      <WorkCarousel />
        <Work />
      <CTA />
    </div>
  );
}
