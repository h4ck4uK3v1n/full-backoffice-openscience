export interface TableRow {
  id: number;
  title: string;
  visible: boolean;
  updated: string;
}

export interface IProps {
  data: TableRow[];
}
