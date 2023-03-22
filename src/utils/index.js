import { joinLeague } from 'src/requests/league';
import { addEvent } from './amplitude';

export const redirectUrl = (url) => {
  window.location.href = url;
};

export const redirectToAccount = (currentUser) => {
  if (currentUser) {
    redirectUrl('/account');
  }
};

export const redirectToContinuePage = (router) => {
  const path = router.query;

  if (Object.keys(path).includes('continue')) {
    redirectUrl(`${path.continue}`);
  } else {
    redirectUrl('/account');
  }
};

export const responseError = (err, description) => {
  return {
    data: err?.response?.data || err?.message,
    status: err?.response?.status || err?.request?.status,
    description,
  };
};

export const randomInt = () => {
  return Math.floor(Math.random() * 50);
};

export const photoCredits = [
  {
    image: '/assets/background/deku-allmight.webp',
    name: 'Deku and All Might',
    creator: '@ermaltahiri',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/background/dragonball.webp',
    name: '5 star dragonball',
    creator: '@axel22',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/background/goku-kamehameha.webp',
    name: 'Goku kamehamaha',
    creator: '@edparanoid',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/background/itachi.webp',
    name: 'Itachi background',
    creator: '@HtcHnm',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/background/kakashi-sharigan.webp',
    name: 'Kakashi sharigan',
    creator: '@HtcHnm',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/background/naruto-rasengan.webp',
    name: 'Naruto rasengan',
    creator: '@HtcHnm',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/background/saitama.webp',
    name: 'Saitama background',
    creator: '@HiteshHtSharma',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/background/vegito.webp',
    name: 'Vegito background',
    creator: '@Felixmh',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/background/young-goku.webp',
    name: 'Young goku',
    creator: '@myartchronicle',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/profile/deku.webp',
    name: 'Deku',
    creator: '@Abdullah3992',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/profile/elizabeth.webp',
    name: 'Elizabeth',
    creator: '@ermaltahiri',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/profile/gaara.webp',
    name: 'Gaara',
    creator: '@Eleatell',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/profile/hinata.webp',
    name: 'Hinata',
    creator: '@iwhydog',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/profile/kakashi.webp',
    name: 'Kakashi',
    creator: '@HtcHnm',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/profile/naruto.webp',
    name: 'Naruto',
    creator: '@Eleatell',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/profile/saitama.webp',
    name: 'Saitama',
    creator: '@eriston13',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/profile/sakura.webp',
    name: 'Sakura',
    creator: '@Eleatell',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/profile/sasuke.webp',
    name: 'Sasuke',
    creator: '@Eleatell',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/profile/sukuna.webp',
    name: 'Sukuna',
    creator: '@TRIFEX',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/icons/share-icon.webp',
    name: 'Share Icon',
    creator: '@IO-Images',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/profile/edward-elric.svg',
    name: 'Edward Elric',
    creator: '@Stban',
    platform: 'freesvg.org',
  },
  {
    image: '/assets/icons/google-icon.webp',
    name: 'Google Icon',
    creator: '@Clovis_Cheminot',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/icons/youtube-icon.webp',
    name: 'Youtube Icon',
    creator: '@joshborup',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/icons/twitter-icon.webp',
    name: 'Twitter Icon',
    creator: '@joshborup',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/icons/facebook-icon.webp',
    name: 'Facebook Icon',
    creator: '@joshborup',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/icons/instagram-icon.webp',
    name: 'Instagram Icon',
    creator: '@joshborup',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/icons/tiktok-icon.webp',
    name: 'Tiktok Icon',
    creator: '@Sayyid96',
    platform: 'pixabay.com',
  },
];

export const getAffinitiesTypes = (character) => {
  if (!character) {
    return [];
  }

  const {
    fire,
    water,
    wind,
    earth,
    arcane,
    electric,
    celestrial,
    darkness,
    ice,
    no_affinity,
  } = character;

  const affinities = [
    {
      type: 'fire',
      value: fire,
    },
    {
      type: 'water',
      value: water,
    },
    {
      type: 'wind',
      value: wind,
    },
    {
      type: 'earth',
      value: earth,
    },
    {
      type: 'arcane',
      value: arcane,
    },
    {
      type: 'electric',
      value: electric,
    },
    {
      type: 'celestrial',
      value: celestrial,
    },
    {
      type: 'darkness',
      value: darkness,
    },
    {
      type: 'ice',
      value: ice,
    },
    {
      type: 'no affinity',
      value: no_affinity,
    },
  ];

  const affinityList = [];

  affinities.forEach((item) => {
    if (!!item.value && item.value > 0) {
      affinityList.push(item.type);
    }
  });

  return affinityList;
};

export const joinLeagueSetup = async (leagueHash, currentUser, router) => {
  const payload = {
    hash: leagueHash,
  };

  try {
    const { leagueId } = await joinLeague(payload, currentUser?.token);

    addEvent('Join League', {
      league: leagueHash,
    });

    router.push(`/league?league_id=${leagueId}`);
  } catch (err) {
    throw new Error(`${err} - Can not join league`);
  }
};
