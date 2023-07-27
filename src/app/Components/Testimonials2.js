import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'; // Import ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: 'John Doe',
    designation: 'CEO, ABC Inc.',
    content: 'The testimonial content goes here...',
  },
  {
    name: 'John Doe',
    designation: 'CEO, ABC Inc.',
    content: 'The testimonial content goes here...',
  },
  // Add more testimonials here
];

const TestimonialsCarousel2 = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carouselItems = carouselRef.current.children;

    gsap.fromTo(
      carouselItems,
      { x: '100%' },
      {
        x: '0%',
        scrollTrigger: {
          trigger: carouselRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 0.5, // Adjust the scrub value for smoothness
        },
      }
    );
  }, []);

  return (
    <div ref={carouselRef} className="flex flex-col items-center space-y-8">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="p-4 border border-gray-200 rounded-md shadow-md">
          <p className="text-gray-600">{testimonial.content}</p>
          <div className="mt-4">
            <h4 className="text-lg font-semibold">{testimonial.name}</h4>
            <p className="text-gray-500">{testimonial.designation}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialsCarousel2;
