import { format, sub } from 'date-fns';
import { id } from 'date-fns/locale';

export const parseEventDate = (
  startDate: string | null | undefined,
  endDate: string | null | undefined,
): [string, string] => {
  let eventDate = '';
  let eventTime = '';

  if (startDate) {
    eventDate = eventDate.concat(format(new Date(startDate), 'd MMM', { locale: id }));
    eventTime = eventTime.concat(format(new Date(startDate), 'HH:mm', { locale: id }));
  }

  if (endDate) {
    eventDate = eventDate
      .concat(' - ')
      .concat(format(new Date(endDate), 'd MMM yyyy', { locale: id }));
  }

  if (eventTime) {
    eventTime = eventTime.concat(' WIB');
  }

  return [eventDate, eventTime];
};

export const formatDateTime = (givenDate: string | null | undefined) => {
  if (givenDate) {
    return format(new Date(givenDate), 'd MMMM yyyy - HH:mm').concat(' WIB');
  }
  return null;
};

export const checkEventLive = (
  startDate: string | null | undefined,
  endDate: string | null | undefined,
  // isAlmostStart: if true, checks if current time is within 30 minutes before the start date
  isAlmostStart?: boolean,
) => {
  const now = new Date();

  if (isAlmostStart && startDate && endDate) {
    return now > sub(new Date(startDate), { minutes: 30 }) && now < new Date(endDate);
  }

  if (startDate && endDate) {
    return now > new Date(startDate) && now < new Date(endDate);
  }

  return false;
};
