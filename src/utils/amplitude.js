import { init, track } from '@amplitude/analytics-browser';

init(process.env.NEXT_PUBLIC_AMPLITUDE_KEY);

export const addEvent = (event, properties) => {
  if (!properties) {
    track(event);
  }

  track(event, properties);
};
