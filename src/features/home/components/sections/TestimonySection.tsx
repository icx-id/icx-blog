import React, { FC, useState } from 'react';
import { TestimonySectionProps } from '../../types';
import { TestimonyCarousel } from '~/components/TestimonyCarousel';
import { Box } from '@mantine/core';

export const TestimonySection: FC<TestimonySectionProps> = ({ ...props }) => {
  const [active, setActive] = useState(0);

  const onClickPrev = () => {
    if (active > 0) {
      setActive(prev => prev - 1);
    }
  };

  const onClickNext = () => {
    if (active < props.testimonies.length - 1) {
      setActive(prev => prev + 1);
    }
  };

  return (
    <Box pt={100}>
      <TestimonyCarousel
        description={props.testimonies[active].description}
        author={props.testimonies[active].author}
        company={props.testimonies[active].company}
        testimonies={props.testimonies}
        active={active}
        onClickPrev={onClickPrev}
        onClickNext={onClickNext}
        image={props.testimonies[active].image}
      />
    </Box>
  );
};
