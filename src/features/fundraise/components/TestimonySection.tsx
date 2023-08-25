import React, { FC, useState } from 'react';
import { TestimonyCarousel } from '~/components/TestimonyCarousel';
import { TestimonySectionProps } from '../types';

export const TestimonySection: FC<TestimonySectionProps> = ({ testimonies }) => {
  const [active, setActive] = useState(0);

  const onClickPrev = () => {
    if (active > 0) {
      setActive(prev => prev - 1);
    }
  };

  const onClickNext = () => {
    if (active < testimonies.length - 1) {
      setActive(prev => prev + 1);
    }
  };

  return (
    <TestimonyCarousel
      hideWhatTheySaid
      description={testimonies[active].description}
      author={testimonies[active].author}
      authorImage={testimonies[active].authorImage}
      company={testimonies[active].company}
      testimonies={testimonies}
      active={active}
      onClickPrev={onClickPrev}
      onClickNext={onClickNext}
      image={testimonies[active].image}
    />
  );
};
