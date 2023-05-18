import {
  FiChevronsLeft,
  FiChevronsRight,
  FiChevronRight,
  FiChevronLeft,
} from "react-icons/fi";

export const PartnerSettings = {
  className: "center",
  dots: true,
  infinite: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 2024,
      settings: {
        infinite: true,
        slidesToShow: 4,
        centerPadding: "60px",
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        centerPadding: "60px",
      },
    },
    {
      breakpoint: 768,
      settings: {
        centerPadding: "60px",
        dots: false,
        centerMode: true,
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 380,
      settings: {
        centerPadding: "60px",
        dots: false,
        centerMode: true,
        slidesToShow: 1,
      },
    },
  ],
  speed: 500,
};
