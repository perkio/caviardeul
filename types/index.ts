export type Article = {
  key?: string;
  pageName: string;
  article: string;
  title: string;
};

export type History = [string, number][];

export type GameState = {
  history: History;
  words: Set<string>;
  isOver: boolean;
  selection: [string, number] | null;
};

export type ScoreHistory = {
  title: string;
  isOver: boolean;
  nbTrials: number;
  accuracy: number;
}[];