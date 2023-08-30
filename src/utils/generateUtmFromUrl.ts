interface UtmOptions {
  source: string;
  medium: string;
  campaign: string;
}

export const generateUtmFromUrl = (url: string, { campaign, medium, source }: UtmOptions) => {
  const baseUrl = new URL(url);

  baseUrl.searchParams.set('utm_source', source);
  baseUrl.searchParams.set('utm_medium', medium);
  baseUrl.searchParams.set('utm_campaign', campaign);

  return baseUrl.toString();
};
