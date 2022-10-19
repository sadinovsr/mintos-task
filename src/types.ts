export interface DataItem {
  name: string,
  checked: boolean
};

export type ChangeByNameFunction = (name: string) => void;
export type ChangeFunction = (e: React.MouseEvent<HTMLElement>, index: number) => void;
