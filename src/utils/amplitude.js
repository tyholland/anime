import { track, init } from '@amplitude/analytics-browser';

init(process.env.NEXT_PUBLIC_AMPLITUDE_KEY);

export const addEvent = () => {
  track('EVENT_NAME_HERE');
};
