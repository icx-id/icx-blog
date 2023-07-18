import React, { useState } from 'react';
import { Box, Container, Grid, NativeSelect, SimpleGrid, Tabs, createStyles } from '@mantine/core';
import { AllArticles } from './article-lists/AllArticles';
import { NewsArticles } from './article-lists/NewsArticles';
import { EkonomiArticles } from './article-lists/EkonomiArticles';
import { KeuanganArticles } from './article-lists/KeuanganArticles';
import { InvestasiArticles } from './article-lists/InvestasiArticles';

const useStyles = createStyles(theme => ({
  tab: {
    fontWeight: 'bold',
    color: 'gray',
  },
  selectInput: {
    // borderRadius: '50px',
    background: theme.white,
    boxShadow: `0px 4.993950843811035px 20px 0px rgba(0, 0, 0, 0.10)`,
    border: '1px solid white',
  },
}));

export const BlogArticleListLayout = () => {
  const { classes } = useStyles();
  const [articleCategory, setArticleCategory] = useState<string>('semua');

  const renderArticlesBasedOnCategory = () => {
    switch (articleCategory) {
      case 'semua':
        return <AllArticles />;
      case 'news':
        return <NewsArticles />;
      case 'ekonomi':
        return <EkonomiArticles />;
      case 'keuangan':
        return <KeuanganArticles />;
      case 'investasi':
        return <InvestasiArticles />;
      default:
        return <AllArticles />;
    }
  };

  return (
    <Box>
      <Container size="ll" py="xl">
        <Grid>
          <Grid.Col md="auto" span="auto">
            <Tabs
              styles={{
                tabLabel: {
                  // marginBottom: '16px',
                  margin: '0 32px 16px 0',
                },
              }}
              sx={{ flex: 1 }}
              onTabChange={value => setArticleCategory(value as string)}
              value={articleCategory}>
              <Tabs.List defaultChecked>
                <Tabs.Tab className={classes.tab} value="semua">
                  Semua
                </Tabs.Tab>
                <Tabs.Tab className={classes.tab} value="news">
                  News
                </Tabs.Tab>
                <Tabs.Tab className={classes.tab} value="ekonomi">
                  Ekonomi
                </Tabs.Tab>
                <Tabs.Tab className={classes.tab} value="keuangan">
                  Keuangan
                </Tabs.Tab>
                <Tabs.Tab className={classes.tab} value="investasi">
                  Investasi
                </Tabs.Tab>
              </Tabs.List>
            </Tabs>
          </Grid.Col>
          <Grid.Col md={3} span={12}>
            <NativeSelect
              classNames={{
                input: classes.selectInput,
              }}
              data={['Sort by Newest-Oldest', 'Sort by Oldest-Newest']}
            />
          </Grid.Col>
        </Grid>
        <SimpleGrid
          my="lg"
          cols={4}
          verticalSpacing="xl"
          breakpoints={[
            {
              cols: 3,
              maxWidth: 'md',
            },
            {
              cols: 1,
              maxWidth: 'sm',
            },
          ]}>
          {renderArticlesBasedOnCategory()}
        </SimpleGrid>
      </Container>
    </Box>
  );
};
