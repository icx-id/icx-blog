export const slugify = (input: string): string => {
  const slug = input
    .toLowerCase()
    .replace(/[^a-zA-Z0-9\s]/g, '')
    .replace(/\s+/g, '-')
    .trim();

  return slug;
};
