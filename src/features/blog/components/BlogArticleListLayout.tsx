import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  SimpleGrid,
  Tabs,
  createStyles,
  em,
  getBreakpointValue,
  useMantineTheme,
} from '@mantine/core';
import { AllArticles } from './article-lists/AllArticles';
import { NewsArticles } from './article-lists/NewsArticles';
import { useMediaQuery } from '@mantine/hooks';
import { InvestmentArticles } from './article-lists/InvestmentArticles';
import { StartupArticles } from './article-lists/StartupArticles';
import { FAQArticles } from './article-lists/FAQArticles';

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
      case 'startup':
        return <StartupArticles />;
      case 'investment':
        return <InvestmentArticles />;
      case 'FAQ':
        return <FAQArticles />;
      default:
        return <AllArticles />;
    }
  };

  const theme = useMantineTheme();
  const isMobile = useMediaQuery(
    `(max-width: ${em(getBreakpointValue(theme.breakpoints.md) - 1)})`,
  );

  return (
    <Box>
      <Container size="ll" py="xl">
        <Grid>
          <Grid.Col
            md="auto"
            span="auto"
            sx={{
              '.mantine-1a1iqt9[data-active]': {
                borderBottom: '4px solid #00b382',
              },
              '::-webkit-scrollbar': {
                width: 0,
                height: 0,
                background: 'transparent',
              },
              borderBottom: '2px solid #D9D9D9',
              overflowX: 'auto',
              margin: '0px 8px',
              padding: '0px',
            }}>
            <Tabs
              sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
              }}
              styles={{
                tabLabel: {
                  margin: isMobile ? '12px' : '4px 32px 12px 0',
                },
              }}
              onTabChange={value => setArticleCategory(value as string)}
              value={articleCategory}
              defaultChecked>
              <Tabs.Tab className={classes.tab} value="semua">
                Semua
              </Tabs.Tab>
              <Tabs.Tab className={classes.tab} value="news">
                ICX News
              </Tabs.Tab>
              <Tabs.Tab className={classes.tab} value="startup">
                Startup
              </Tabs.Tab>
              <Tabs.Tab className={classes.tab} value="investment">
                Investment
              </Tabs.Tab>
              <Tabs.Tab className={classes.tab} value="FAQ">
                FAQ
              </Tabs.Tab>
            </Tabs>
          </Grid.Col>

          <Grid.Col md={3} span={12}>
            {/* <NativeSelect
              classNames={{
                input: classes.selectInput,
              }}
              data={['Sort by Newest-Oldest', 'Sort by Oldest-Newest']}
            /> */}
          </Grid.Col>
        </Grid>
        <SimpleGrid
          mt={isMobile ? '30px' : '40px'}
          mb="60px"
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
