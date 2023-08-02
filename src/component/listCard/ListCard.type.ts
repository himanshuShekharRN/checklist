export interface ListCardProps {
  iconName: string;
  editable?: boolean;
  readonly?: boolean;
  listTitle?: string;
  onChangeTextHandler?: (text: string) => void;
}
