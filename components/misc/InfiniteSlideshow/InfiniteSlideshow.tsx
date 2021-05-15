import { ReactElement } from 'react';
import Slider from 'react-slick';

function InfiniteSlideshow({
  children
}: {
  children: ReactElement[];
}): ReactElement {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 100,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6
        }
      }
    ]
  };
  return <Slider {...settings}>{children}</Slider>;
}

export default InfiniteSlideshow;
