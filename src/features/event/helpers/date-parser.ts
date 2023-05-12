import { format } from 'date-fns';
import { id } from 'date-fns/locale';

export const parseEventDate = (
  startDate: string | null | undefined,
  endDate: string | null | undefined,
): [string, string] => {
  let eventDate = '';
  let eventTime = '';

  if (startDate) {
    eventDate = eventDate.concat(format(new Date(startDate), 'EEEE, d MMM', { locale: id }));
    eventTime = eventTime.concat(format(new Date(startDate), 'HH:mm', { locale: id }));
  }

  if (endDate) {
    eventDate = eventDate
      .concat(' - ')
      .concat(format(new Date(endDate), 'EEEE, d MMM yyyy', { locale: id }));
    eventTime = eventTime.concat(' - ').concat(format(new Date(endDate), 'HH:mm', { locale: id }));
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
) => {
  const now = new Date();

  if (startDate && endDate) {
    return now > new Date(startDate) && now < new Date(endDate);
  }

  return false;
};
