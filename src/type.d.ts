export interface TodoProps {
  todo: string;
  completed: boolean;
  date: string;
  id: string;
  depth: number;
}

export interface TodoPageProps {
  type?: string;
  isStartFromSunday?: boolean;
}

export interface CheckRowProps {
  title?: React.ReactNode;
  list?: TodoProps[];
  setList?: any;
}
