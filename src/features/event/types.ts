export enum EventMethodType {
  OFFLINE = 'offline',
  ONLINE = 'online',
}

export enum EventScheduleType {
  UPCOMING = 'upcoming',
  PAST = 'past',
}

export enum BannerMediaType {
  IMAGE = 'image',
  VIDEO = 'video',
}

export type Banner = {
  url: string;
  mediaType: BannerMediaType;
};

export type EventRegistration = {
  id: string;
  user: string;
  event: string;
};

export type Event = {
  id: string;
  eventId: number;
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

export interface SimplifiedEvent
  extends Omit<
    Event,
    | 'subtitle'
    | 'description'
    | 'onlineLink'
    | 'banners'
    | 'initialQuota'
    | 'remainingQuota'
    | 'mapLink'
    | 'brochureLink'
    | 'startDate'
    | 'endDate'
  > {
  startDate: string;
  endDate: string;
}
