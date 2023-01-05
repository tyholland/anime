import { init } from '@amplitude/analytics-browser';

init(process.env.NEXT_PUBLIC_AMPLITUDE_KEY);

export const addEvent = (event, properties) => {
  // track(event, properties);
  console.log('event:', event);
  console.log('props:', properties);
};
