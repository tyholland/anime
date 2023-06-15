import { Dispatch, KeyboardEventHandler } from "react";

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
  btnColor?: string;
  btnText?: string | React.JSX.Element;
  redirect?: string;
  customBtnClass?: string;
  btnFunction?: () => void;
  isDisabled?: boolean;
  disabledMsg?: string;
};

export type ActivateVotingProps = {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<boolean>;
  team1: Record<string, any>;
  team2: Record<string, any>;
  votes: Record<string, any>;
  setRetrigger: Dispatch<boolean>;
};

export type BioReviewProps = {
  modalIsOpen: boolean;
  closeModal: () => void;
  characterId: number;
  type?: string;
  canDraft?: boolean;
  draftPlayer?: () => void;
  errorMsg?: string;
};

export type BracketVotingProps = {
  playerA: Record<string, any>;
  playerB: Record<string, any>;
  isModalOpen: boolean;
  match: Record<string, any> | null;
  handleVotes: (match: Record<string, any> | null, team: string, payload: Record<string, any>) => Record<string, any>;
  errorMsg: string;
  setErrorMsg: Dispatch<string>;
  closeModal: () => void;
  roundWinner: Record<string, any>;
};

export type ChangeCharactersProps = {
  players: Record<string, any>;
  modalIsOpen: boolean;
  closeModal: () => void;
  setPlayerList: Dispatch<Record<string, any>>
  playerList: Record<string, any>
  field: string;
  isBracket?: boolean;
  leagueWeek?: number;
};

export type CharacterStatsProps = {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<boolean>;
  character: Record<string, any>;
  votes: Record<string, any>;
  isMatchupPage?: boolean;
  userId?: number | null;
  isActive?: boolean;
};

export type MainModalProps = {
  modalIsOpen: boolean;
  closeModal: () => void;
  styles: Record<string, any>;
};

export type NotificationProps = {
  modalIsOpen: boolean;
  closeModal: () => void;
  message: string | React.JSX.Element;
};

export type RecapProps = {
  data: Record<string, any>;
  modalIsOpen: boolean;
  closeModal: () => void;
  teamName: string;
};

export type SwapPlayerProps = {
  modalIsOpen: boolean;
  closeModal: () => void;
  setPlayerList: (players: Record<string, any>) => void;
  playerList: Record<string, any>;
  field: string;
};

export type BenchCardProps = {
  data: Record<string, any>;
  size: number;
};

export type BenchCardStyledProps = {
  noCharacter?: boolean;
};

export type BioCardProps = {
  characterId: number | string;
};

export type DisclaimerProps = {
  msg: string;
};

export type ErrorMsgProps = {
  msg: string;
};

export type GameContainerProps = {
  game: Record<string, any>;
  gameNum?: number | null;
};

export type GameContainerStyledProps = {
  isBye: boolean;
};

export type LeagueCardProps = {
  data: Record<string, any>;
};

export type LeagueChampProps = {
  classProp?: string | null;
};

export type LoaderProps = {
  isSmall?: boolean;
};

export type MatchUpProps = {
  isReverse: boolean;
  team: Record<string, any>;
  votes: Record<string, any>;
  userId: number;
  isActive: boolean;
};

export type MatchUpStyledProps = {
  noCharacter?: boolean;
};

export type MatchupVotingProps = {
  userPlayerA: Record<string, any>;
  userPlayerB: Record<string, any>;
  matchup: Record<string, any>;
  changeMatchup?: () => void;
  isChangeable?: boolean;
};

export type MetadataProps = {
  title: string;
  description: string;
  image?: string | null;
};

export type MobileHeaderProps = {
  acct: string;
  acctLink: string;
};

export type MobileHeaderStyledProps = {
  showOverlay: string;
};

export type NotUserProps = {
  message?: string | null;
};

export type PlayersProps = {
  data: Record<string, any>;
  changeRoster?: boolean;
  setPlayerList?: (player: Record<string, any>) => void;
  playerList?: Record<string, any>;
  field?: string;
  page?: string | null;
  leagueWeek?: number;
  openDraft?: (player: Record<string, any>) => void;
  series?: string;
};

export type TextFieldProps = {
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  onChange?: (value: string) => void;
  isDisabled?: boolean;
  inputVal?: string | number | null;
  maxLength?: number;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
};

export type SelectProps = {
  defaultVal: string;
  options: Record<string, any>;
  onChange: (value: string) => void;
};

export type SelectionCardProps = {
  btnText: string;
  redirect: string;
  isDisabled?: boolean;
  newTab?: boolean | null;
  disabledMsg?: string;
};

export type SingleSignOnProps = {
  buttonText?: string;
  setError: Dispatch<string>;
};

export type SocialMediaProps = {
  url: string;
  title: string;
  singleHashtag: string;
  pluralHashtags: string[];
  pageTitle: string;
  description: string;
};

export type TeamCardProps = {
  data: Record<string, any>;
};

export type TeamCardStyledProps = {
  noCharacter?: boolean;
};

export type DraftStyledProps = {
  teams?: number;
};
