import React from "react";

export const Thumb = ({ selected, onClick, imgSrc }: any) => (
  <div
    className={`embla__slide embla__slide-two embla__slide--thumb embla__slide--thumb-two ${
      selected ? "is-selected" : ""
    }`}
  >
    <button
      onClick={onClick}
      className="embla__slide__inner embla__slide__inner-two embla__slide__inner--thumb embla__slide__inner--thumb-two "
      type="button"
    >
      <img
        className="embla__slide__thumbnail embla__slide__thumbnail-two"
        src={imgSrc}
        alt="A cool cat."
      />
    </button>
  </div>
);
