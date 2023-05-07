import { Box, Grid, MediaQuery, Text } from '@mantine/core';
import React from 'react';
import { AboutContainer } from './AboutContainer';
import { NewsCard } from './NewsCard';
import { subDays } from 'date-fns';

const newsData = [
  {
    title: 'AngelList now valued at $4.1 billion',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz014y1iuhnWcmiTVVYU9UzAqG8TZMrZXWMN9S_VE5Pu8_JX6QNUV21DYLWQFPDc321A&usqp=CAU',
    publishDate: subDays(new Date(), 14),
    description: `AngelList, a venture fundraising platform, raised $100
    million at a $4 billion pre-money valuation. Tiger Global
    led, and was joined by insider Accomplice.`,
    newsURL: 'https://www.google.com',
  },
  {
    title: 'Even Your Allergist Is Now Investing in Start-Ups',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/TechCrunch_logo.svg/1200px-TechCrunch_logo.svg.png',
    publishDate: subDays(new Date(), 331),
    description: `The once-clubby world of start-up deal making known as
    “angel investing” has had an influx of new participants....`,
    newsURL: 'https://www.google.com',
  },
  {
    title: `AngelList Venture takes on rare
    capital at a $4 billion valuation`,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Fortune_magazine_logo_2016.svg/1280px-Fortune_magazine_logo_2016.svg.png',
    publishDate: subDays(new Date(), 613),
    description: `After seven years since its last financing round, AngelList
    Venture has raised new capital, according to sources
    familiar with the matter. The company announced in a
    blog post today that it has raised a $100 million Series B
    led by Tiger and Accomplice at a $4 billion valuation.`,
    newsURL: 'https://www.google.com',
  },
];

export const NewsSection = () => {
  const renderNews = () => {
    return newsData.map((news, idx) => {
      return (
        <Grid.Col sm={12} md={6} lg={4} key={idx}>
          <NewsCard
            description={news.description}
            image={news.image}
            newsURL={news.newsURL}
            publishDate={news.publishDate}
            title={news.title}
          />
        </Grid.Col>
      );
    });
  };

  return (
    <MediaQuery smallerThan="md" styles={{ marginTop: '67px' }}>
      <Box mt="140px">
        <AboutContainer>
          <MediaQuery smallerThan="md" styles={{ fontSize: '1.5em' }}>
            <Text fz="2.5em" fw="bold">
              ICX in the news
            </Text>
          </MediaQuery>
          <MediaQuery smallerThan="md" styles={{ marginTop: '0.25em' }}>
            <Text mt="1em">For media inquiries, please reach out here.</Text>
          </MediaQuery>

          <Grid mt="lg">{renderNews()}</Grid>
        </AboutContainer>
      </Box>
    </MediaQuery>
  );
};
