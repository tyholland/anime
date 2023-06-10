import { Dispatch } from "react";

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
  canDraft: boolean;
  draftPlayer: () => void;
  errorMsg: string;
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
  isBracket: boolean;
  leagueWeek: number;
};

export type CharacterStatsProps = {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<boolean>;
  character: Record<string, any>;
  votes: Record<string, any>;
  isMatchupPage: boolean;
  userId: number | null;
  isActive: number | null;
};

export type MainModalProps = {
  modalIsOpen: boolean;
  closeModal: () => void;
  styles: Record<string, any>;
};

export type NotificationProps = {
  modalIsOpen: boolean;
  closeModal: () => void;
  message: string;
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
