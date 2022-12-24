export const formatUser = () => {
  return {
    userId: '',
    email: '',
    isActive: '',
    firebaseId: '',
    username: '',
    totalPoints: '',
  };
};

export const formatLeague = () => {
  return {
    leagueId: '',
    leagueName: '',
    teamId: '',
    teamName: '',
    week: '',
    players: {
      captain: '',
      brawlerA: '',
      brawlerB: '',
      bsBrawler: '',
      bsSupport: '',
      support: '',
      villain: '',
      battlefield: '',
      benchA: '',
      benchB: '',
      benchC: '',
      benchD: '',
      benchE: '',
    },
  };
};
