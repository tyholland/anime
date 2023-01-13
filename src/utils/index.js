export const redirectToAccount = (currentUser, router) => {
  if (currentUser) {
    router.push('/account');
  }
};

export const redirectToContinuePage = (router) => {
  const path = router.query;

  if (Object.keys(path).includes('continue')) {
    router.push(`${path.continue}`);
  } else {
    router.push('/account');
  }
};

export const setCookie = (cvalue) => {
  const d = new Date();
  const exdays = 7;

  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = 'expires=' + d.toUTCString();

  document.cookie = `token=${cvalue}; ${expires}`;
};

export const deleteCookie = () => {
  document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC';
};

export const responseError = (err, description) => {
  return {
    data: err.response?.data || err.message,
    status: err.response?.status || err.request?.status,
    description,
  };
};
