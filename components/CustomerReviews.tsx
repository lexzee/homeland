import { useRef, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import classNames from "classnames";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Profile1 from "../Assets/ProfileMale.png";
import Profile2 from "../Assets/ProfileFemale.png";
import Image from "next/image";

import { StaticImageData } from "next/image";

interface Review {
  name: string;
  location: string;
  review: string;
  image: StaticImageData;
  reviewHeader: string;
}

export default function CustomerReviews() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const prevButton = useRef<HTMLButtonElement>(null);
  const nextButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => {
        if (prevButton.current && nextButton.current) {
          prevButton.current.disabled = !emblaApi.canScrollPrev();
          nextButton.current.disabled = !emblaApi.canScrollNext();
        }
      });
    }
  }, [emblaApi]);

  const reviews: Review[] = [
    {
      name: "Wade Warren",
      location: "United Kingdom",
      reviewHeader: "An Unforgettable Experience!",
      review:
        "Flying with Homeland was a truly magical experience. The electric hot-air balloon ride was incredibly smooth and quiet, allowing us to fully enjoy the breathtaking views. Knowing that our adventure was also eco-friendly made it even better. Highly recommend!",
      image: Profile1,
    },
    {
      name: "Savanna Nguyen",
      location: "Saudi Arabia",
      reviewHeader: "Innovative and Eco-Friendly",
      review:
        "Homlander's electric hot-air balloon ride exceeded all my expectations. It was peaceful, beautiful, and most importantly, environmentally friendly. It's great to see companies like Homlander leading the way in sustainable tourism.",
      image: Profile2,
    },
    {
      name: "Wade Warren",
      location: "United Kingdom",
      reviewHeader: "An Unforgettable Experience!",
      review:
        "Flying with Homeland was a truly magical experience. The electric hot-air balloon ride was incredibly smooth and quiet, allowing us to fully enjoy the breathtaking views. Knowing that our adventure was also eco-friendly made it even better. Highly recommend!",
      image: Profile1,
    },
    {
      name: "Savanna Nguyen",
      location: "Saudi Arabia",
      reviewHeader: "Innovative and Eco-Friendly",
      review:
        "Homlander's electric hot-air balloon ride exceeded all my expectations. It was peaceful, beautiful, and most importantly, environmentally friendly. It's great to see companies like Homlander leading the way in sustainable tourism.",
      image: Profile2,
    },
  ];

  return (
    <div className="relative flex items-center">
      <button
        data-aos="fade-right"
        ref={prevButton}
        className={classNames(
          "mr-4 rounded-full bg-gradient-to-b from-brand to-transparent p-1",
          {
            "cursor-not-allowed opacity-50": !emblaApi?.canScrollPrev(),
          },
        )}
        onClick={() => emblaApi?.scrollPrev()}
      >
        <FaAngleLeft size={20} className="text-white" />
      </button>

      <div className="flex-1 overflow-hidden" ref={emblaRef} data-aos="fade-up">
        <div className="flex items-center justify-between">
          {reviews.map((review, index) => (
            <div className="mx-8 flex h-[28em] min-w-[500px] flex-col rounded-2xl border border-brand bg-white px-6 py-8 shadow-2xl drop-shadow-md lg:h-[28em] lg:min-w-[400px]">
              {/* Card Header */}
              <div className="flex items-center gap-4">
                <div className="overflow-clip rounded-full">
                  <Image
                    src={review.image}
                    alt="Profile"
                    className="h-16 w-16 rounded-full md:h-20 md:w-20 lg:h-24 lg:w-24"
                  />
                </div>
                <div className="grid gap-2">
                  <h3 className="md:text[20px] text-[16px] font-semibold lg:text-[24px]">
                    {review.name}
                  </h3>
                  <p className="text-base md:text-lg lg:text-xl">
                    {review.location}
                  </p>
                </div>
              </div>

              {/* Review */}
              <h4 className="md:text[20px] mt-4 text-[16px] font-semibold lg:text-[24px]">
                "{review.reviewHeader}"
              </h4>
              <p className="mt-4 text-base md:text-lg lg:text-xl">
                "{review.review}"
              </p>
            </div>
          ))}
        </div>
      </div>

      <button
        data-aos="fade-left"
        ref={nextButton}
        className={classNames(
          "ml-4 rounded-full bg-gradient-to-b from-brand to-transparent p-1",
          {
            "cursor-not-allowed opacity-50": !emblaApi?.canScrollNext(),
          },
        )}
        onClick={() => emblaApi?.scrollNext()}
      >
        <FaAngleRight size={20} className="text-white" />
      </button>
    </div>
  );
}
