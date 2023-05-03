import CMS from 'netlify-cms-app';

import AboutPagePreview from './preview/AboutPagePreview';
import HomePagePreview from './preview/HomePagePreview';

CMS.registerPreviewTemplate('home', HomePagePreview);
CMS.registerPreviewTemplate('about', AboutPagePreview);
