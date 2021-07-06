export interface TagButtonProps {
    id?: string;
    index?: number;
    isChoosed?: boolean;
    value: string;
    onBlur?: (value: string, isChecked: boolean) => void | undefined;
    isHasCheckbox?: boolean;
}
