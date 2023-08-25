import React, { useState } from 'react';
import { TestimonyCarousel } from '~/components/TestimonyCarousel';

const testimonies = [
  {
    author: 'Wibi Hanif',
    authorImage: '/img/testimony-author.webp',
    company: 'WIBI Ventures',
    description:
      'Gila keren abis ! Ga nyangka sekeren ini ! Saya bakal order lagi, trims. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
    image: '/img/testimony-image.webp',
  },
  {
    author: 'Theodore',
    authorImage: '/img/testimony-author.webp',
    company: 'WKWK Ventures',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: '/img/testimony-image.webp',
  },
  {
    author: 'Sumarny Elizabeth Manurung',
    authorImage: '/img/testimony-author.webp',
    company: 'SPIL Ventures',
    description:
      'As a new CVC of PT Salam Pacific Indonesia Lines, a shipping line based in Indonesia, SPIL Ventures are thrilled to have discovered ICX. We look forward to potential collaborations in the future, as we believe they have the expertise to turn innovative ideas into successful ventures.',
    image: '/img/testimony-image.webp',
  },
];

export const TestimonySection = ({ ...props }) => {
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
