import { navigate } from 'gatsby';
import { useEffect } from 'react';
import { useStore } from '~/stores';

export const useGuestRoute = (
  callback = () => {
    navigate('/');
  },
) => {
  const { user } = useStore();

  useEffect(() => {
    if (user) {
      callback();
    }
  }, [user]);
};
