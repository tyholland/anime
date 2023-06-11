import { init, track } from '@amplitude/analytics-browser';

init(process.env.NEXT_PUBLIC_AMPLITUDE_KEY);

export const addEvent = (event: string, properties?: Record<string, any>) => {
  if (properties?.status === 400) {
    return;
  }

  if (!properties) {
    track(event);
  }

  track(event, properties);
};
