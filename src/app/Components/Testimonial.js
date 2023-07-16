import { useEffect, useRef } from "react";
import gsap from "gsap";

const TestimonialsCarousel = () => {
  const carouselRef = useRef(null);
  const slideRef = useRef(null);

  useEffect(() => {
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
    <div
      ref={carouselRef}
      className="relative overflow-hidden border-2 border-red-500 border-solid"
    >
      <div ref={slideRef} className="flex">
        <div className="w-full">
          <div className="p-8">
            <h3 className="text-lg font-bold">Testimonial 1</h3>
            <p className="mt-2">
              &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque in eleifend sapien. Fusce dapibus hendrerit nunc, sit
              amet tempus purus pretium sed. Sed pharetra tellus at fringilla
              tempus. Quisque ullamcorper est et maximus facilisis.&rdquo;
            </p>
          </div>
        </div>
        <div className="w-full">
          <div className="p-8">
            <h3 className="text-lg font-bold">Testimonial 2</h3>
            <p className="mt-2">
              &ldquo;Suspendisse potenti. Nulla scelerisque efficitur ligula eu
              dapibus. Mauris ac iaculis ante. Nullam lacinia lacus ac rhoncus
              ultrices. Ut commodo fermentum elementum. Maecenas laoreet
              venenatis purus vitae scelerisque.&rdquo;
            </p>
          </div>
        </div>
        <div className="w-full">
          <div className="p-8">
            <h3 className="text-lg font-bold">Testimonial 3</h3>
            <p className="mt-2">
              &ldquo;Duis faucibus volutpat mauris at semper. Nullam sed metus
              condimentum, convallis lacus ac, aliquam libero. Vestibulum ante
              ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              curae; Mauris facilisis, purus ut ultrices dignissim, tellus enim
              lacinia neque, ut convallis mi dolor eu libero.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
