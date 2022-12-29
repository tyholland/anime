export const redirectToAccount = (currentUser, router) => {
  if (currentUser) {
    router.push('/account');
  }
};
