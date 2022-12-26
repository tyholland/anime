import { track, init } from '@amplitude/analytics-browser';

init(process.env.NEXT_PUBLIC_AMPLITUDE_KEY);

export const addEvent = (event, properties) => {
  track(event, properties);
};
