export type LeagueWrapperContext = {
  allLeagueData: Record<string, any> | null;
  updateLeagueData: (data: Record<string, any>) => void | null;
  deleteLeagueData: () => void | null;
  handleLeagueRefresh: boolean | null;
};

export type TeamWrapperContext = {
  allTeamData: Record<string, any> | null;
  allInfoData: Record<string, any> | null;
  allRecapData: Record<string, any> | null;
  updateTeamData: (data: Record<string, any>) => void | null;
  updateInfoData: (data: Record<string, any>) => void | null;
  updateRecapData: (data: Record<string, any>) => void | null;
  deleteTeamData: () => void | null;
  handleTeamRefresh: boolean | null;
};

export type UserWrapperContext = {
  currentUser: Record<string, any> | null;
  updateCurrentUser: (data: Record<string, any>) => void | null;
  deleteCurrentUser: () => void | null;
};

export type ButtonProps = {
  btnColor: string;
  btnText: string;
  redirect?: string;
  customBtnClass: string;
  btnFunction?: () => void;
  isDisabled?: boolean;
  disabledMsg?: string;
}
