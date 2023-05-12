import fetch from 'node-fetch';
import { GatsbyNode } from 'gatsby';

type PaginationMeta = {
  hasNext: boolean;
  hasPrevious: boolean;
  page: number;
  perPage: number;
  total: number;
};

type PageableResponse<T> = {
  data: T[];
  meta: PaginationMeta;
};

enum EventMethodType {
  OFFLINE = 'offline',
  ONLINE = 'online',
}

enum BannerMediaType {
  IMAGE = 'image',
  VIDEO = 'video',
}

type Banner = {
  url: string;
  mediaType: BannerMediaType;
};

type Event = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  type: EventMethodType;
  onlineLink: string | null;
  coverImage: string;
  banners: Banner[];
  initialQuota: number;
  remainingQuota: number;
  startDate: string | null;
  endDate: string | null;
  location: string;
  mapLink: string | null;
  brochureLink: string | null;
  minimumUserInvestment: number;
};

// get events data from endpoint
const getEvents = async (): Promise<Event[]> => {
  const eventsResponse = await fetch(`${process.env.GATSBY_API_URL}/events`).then(r => r.json());
  const events = eventsResponse as unknown as PageableResponse<Event>;
  return events.data;
};

// create source node for events to graphql
export const sourceNodes: GatsbyNode['sourceNodes'] = async ({
  actions,
  createContentDigest,
  createNodeId,
}) => {
  const events = await getEvents();

  if (!events.length) {
    throw new Error('cannot collect events data from endpoint');
  }

  for (const event of events) {
    actions.createNode({
      ...event,
      id: createNodeId(`event-${event.id}`),
      eventId: event.id,
      parent: null,
      children: [],
      internal: {
        type: 'Event',
        contentDigest: createContentDigest(event),
      },
    });
  }
};
