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

export const photoCredits = [
  {
    image: '/assets/background/deku-allmight.jpg',
    name: 'Deku and All Might',
    creator: '@ermaltahiri',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/background/dragonball.png',
    name: '5 star dragonball',
    creator: '@axel22',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/background/goku-kamehameha.jpeg',
    name: 'Goku kamehamaha',
    creator: '@edparanoid',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/background/itachi.png',
    name: 'Itachi background',
    creator: '@HtcHnm',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/background/kakashi-sharigan.png',
    name: 'Kakashi sharigan',
    creator: '@HtcHnm',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/background/naruto-rasengan.png',
    name: 'Naruto rasengan',
    creator: '@HtcHnm',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/background/saitama.png',
    name: 'Saitama background',
    creator: '@HiteshHtSharma',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/background/vegito.png',
    name: 'Vegito background',
    creator: '@Felixmh',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/background/young-goku.jpeg',
    name: 'Young goku',
    creator: '@myartchronicle',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/profile/broly.png',
    name: 'Broly',
    creator: '@HiteshHtSharma',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/profile/brook.png',
    name: 'Brook',
    creator: '@die_grafiktheke',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/profile/chopper.png',
    name: 'Chooper',
    creator: '@die_grafiktheke',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/profile/deku.jpg',
    name: 'Deku',
    creator: '@Abdullah3992',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/profile/elizabeth.jpg',
    name: 'Elizabeth',
    creator: '@ermaltahiri',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/profile/gaara.jpeg',
    name: 'Gaara',
    creator: '@Eleatell',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/profile/goku.png',
    name: 'Goku',
    creator: '@Felixmh',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/profile/hinata.png',
    name: 'Hinata',
    creator: '@iwhydog',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/profile/kakashi.png',
    name: 'Kakashi',
    creator: '@HtcHnm',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/profile/krillin.png',
    name: 'Krillin',
    creator: '@HiteshHtSharma',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/profile/luffy.png',
    name: 'Luffy',
    creator: '@die_grafiktheke',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/profile/naruto.png',
    name: 'Naruto',
    creator: '@Eleatell',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/profile/sailor-jupiter.png',
    name: 'Sailor jupiter',
    creator: '@SelenitSaturn',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/profile/sailor-mars.png',
    name: 'Sailor ars',
    creator: '@SelenitSaturn',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/profile/sailor-mercury.png',
    name: 'Sailor mercury',
    creator: '@SelenitSaturn',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/profile/sailor-moon.png',
    name: 'Sailor moon',
    creator: '@SelenitSaturn',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/profile/sailor-venus.png',
    name: 'Sailor venus',
    creator: '@SelenitSaturn',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/profile/saitama.png',
    name: 'Saitama',
    creator: '@eriston13',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/profile/sakura.png',
    name: 'Sakura',
    creator: '@Eleatell',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/profile/sanji.png',
    name: 'Sanji',
    creator: '@die_grafiktheke',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/profile/sasuke.png',
    name: 'Sasuke',
    creator: '@Eleatell',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/profile/sukuna.jpeg',
    name: 'Sukuna',
    creator: '@TRIFEX',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/profile/usopp.png',
    name: 'Usopp',
    creator: '@die_grafiktheke',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/profile/vegeta.png',
    name: 'Vegeta',
    creator: '@GDj',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/profile/zoro.png',
    name: 'Zoro',
    creator: '@die_grafiktheke',
    platform: 'pixabay.com',
  },
  {
    image: '/assets/icons/share-icon.png',
    name: 'Share Icon',
    creator: '@azadaquib',
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
    image: '/assets/icons/google-icon.png',
    name: 'Google Icon',
    creator: '@Clovis_Cheminot',
    platform: 'pixabay.com',
  },
];
