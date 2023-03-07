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
    image: '/assets/profile/broly.webp',
    name: 'Broly',
    creator: '@HiteshHtSharma',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/profile/brook.webp',
    name: 'Brook',
    creator: '@die_grafiktheke',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/profile/chopper.webp',
    name: 'Chooper',
    creator: '@die_grafiktheke',
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
    image: '/assets/profile/goku.webp',
    name: 'Goku',
    creator: '@Felixmh',
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
    image: '/assets/profile/krillin.webp',
    name: 'Krillin',
    creator: '@HiteshHtSharma',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/profile/luffy.webp',
    name: 'Luffy',
    creator: '@die_grafiktheke',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/profile/naruto.webp',
    name: 'Naruto',
    creator: '@Eleatell',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/profile/sailor-jupiter.webp',
    name: 'Sailor jupiter',
    creator: '@SelenitSaturn',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/profile/sailor-mars.webp',
    name: 'Sailor ars',
    creator: '@SelenitSaturn',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/profile/sailor-mercury.webp',
    name: 'Sailor mercury',
    creator: '@SelenitSaturn',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/profile/sailor-moon.webp',
    name: 'Sailor moon',
    creator: '@SelenitSaturn',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/profile/sailor-venus.webp',
    name: 'Sailor venus',
    creator: '@SelenitSaturn',
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
    image: '/assets/profile/sanji.webp',
    name: 'Sanji',
    creator: '@die_grafiktheke',
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
    image: '/assets/profile/usopp.webp',
    name: 'Usopp',
    creator: '@die_grafiktheke',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/profile/vegeta.webp',
    name: 'Vegeta',
    creator: '@GDj',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/profile/zoro.webp',
    name: 'Zoro',
    creator: '@die_grafiktheke',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/icons/share-icon.webp',
    name: 'Share Icon',
    creator: '@IO-Images',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/profile/gohan.svg',
    name: 'Gohan',
    creator: '@Stban',
    platform: 'freesvg.org',
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
