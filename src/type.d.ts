export interface TodoProps {
  todo: string;
  completed: boolean;
  id: string;
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
