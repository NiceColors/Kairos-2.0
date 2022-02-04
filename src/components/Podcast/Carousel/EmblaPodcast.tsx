import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "./EmblaCarouselThumb";
import { mediaByIndex } from "../media";
import "./podcast.css";
import { AspectRatio } from "@chakra-ui/react";

const EmblaCarousel = ({ slides }: any) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mainViewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [thumbViewportRef, emblaThumbs] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index) => {
      if (!embla || !emblaThumbs) return;
      if (emblaThumbs.clickAllowed()) embla.scrollTo(index);
    },
    [embla, emblaThumbs]
  );

  const onSelect = useCallback(() => {
    if (!embla || !emblaThumbs) return;
    setSelectedIndex(embla.selectedScrollSnap());
    emblaThumbs.scrollTo(embla.selectedScrollSnap());
  }, [embla, emblaThumbs, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
  }, [embla, onSelect]);

  return (
    <>
      <div className="embla embla-two">
        <div
          className="embla__viewport embla__viewport-two"
          ref={mainViewportRef}
        >
          <div className="embla__container embla__container-two">
            {slides.map((slide: any, index: any) => (
              <div className="embla__slide embla__slide-two">
                <div className="embla__slide__inner embla__slide__inner-two">
                  <AspectRatio borderRadius="18px" maxH="500px" ratio={1}>
                    <iframe
                      title="naruto"
                      src="https://www.youtube.com/embed/QhBnZ6NPOY0"
                      allowFullScreen
                    />
                  </AspectRatio>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="embla embla-two embla--thumb embla--thumb-two">
        <div
          className="embla__viewport embla__viewport-two"
          ref={thumbViewportRef}
        >
          <div className="embla__container embla__container-two embla__container--thumb embla__container--thumb-two">
            {slides.map((index: number) => (
              <Thumb
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                imgSrc={mediaByIndex(index)}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default EmblaCarousel;
