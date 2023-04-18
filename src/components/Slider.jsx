import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/dist/css/splide.min.css';
import './Slider.scss';

export function Slider() {
  const techs = [...Array(15).keys()];
  return (
    <div className='slider'>
      <Splide
        options={{
          gap: '100px',
          type: 'loop',
          drag: 'free',
          arrows: false,
          pagination: false,
          perPage: 5,
          autoScroll: {
            pauseOnHover: false,
            pauseOnFocus: false,
            rewind: false,
            speed: 1,
          },
        }}
        extensions={{ AutoScroll }}
      >
        {techs.map((num) => (
          <SplideSlide>
            <img
              className='logo'
              src={`./assets/tech-logos/tech${num}.png`}
              alt={`skills-${num}`}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
