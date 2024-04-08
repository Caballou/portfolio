import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/dist/css/splide.min.css';
import './styles/Slider.scss';

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
        {techs.map((num, i) => (
          <SplideSlide key={i}>
            <div className='container'>
              <img
                className='logo'
                src={`./assets/skills/skill-${num}.png`}
                alt={`skills-1`}
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
