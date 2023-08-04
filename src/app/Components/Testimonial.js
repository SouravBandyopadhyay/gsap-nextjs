import { useEffect, useRef } from "react";
import gsap from "gsap";
import useIsomorphicLayoutEffect from "../useIsomorphicLayoutEffect";

const testimonialArr = [
  {
    id: 1,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in eleifend sapien. Fusce dapibus hendrerit nunc, sit amet tempus purus pretium sed. Sed pharetra tellus at fringilla tempus. Quisque ullamcorper est et maximus facilisis.",
  },
  {
    id: 2,
    desc: "Suspendisse potenti. Nulla scelerisque efficitur ligula eu    dapibus. Mauris ac iaculis ante. Nullam lacinia lacus ac rhoncus ultrices. Ut commodo fermentum elementum. Maecenas laoreet venenatis purus vitae scelerisque.",
  },
  {
    id: 3,
    desc: "Suspendisse potenti. Nulla scelerisque efficitur ligula eu    dapibus. Mauris ac iaculis ante. Nullam lacinia lacus ac rhoncus ultrices. Ut commodo fermentum elementum. Maecenas laoreet venenatis purus vitae scelerisque.",
  },
];

const TestimonialsCarousel = () => {
  const carouselRef = useRef(null);
  const slideRef = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const carousel = carouselRef.current;
    const slides = slideRef.current.children;
    const totalSlides = slides.length;

    gsap.set(slides, { opacity: 0 });

    let slideIndex = 0;

    const animateSlides = () => {
      gsap.to(slides[slideIndex], { duration: 0.8, opacity: 1 });
    };

    const nextSlide = () => {
      gsap.to(slides[slideIndex], { duration: 0.8, opacity: 0 });
      slideIndex = (slideIndex + 1) % totalSlides;
      animateSlides();
    };

    const carouselTl = gsap.timeline({ repeat: -1 });
    carouselTl.to({}, { duration: 3, onComplete: nextSlide });

    return () => {
      carouselTl.kill();
    };
  }, []);

  return (
    <div ref={carouselRef} className="relative overflow-hidden">
      <h2 className=" mx-auto my-auto text-center text-4xl font-bold mb-4">
        Testimonial
      </h2>
      <div ref={slideRef} className="flex p-5">
        {testimonialArr.map((el) => (
          <section className="p-8 bg-zinc-900 rounded-md" key={el.id}>
            <h3 className="text-lg font-bold">Testimonial 3</h3>
            <p className="mt-2 text-md">{el.desc}</p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
