export interface TagInputProps {
    id?: string;
    index?: number;
    defaultValue: string;
    innerRef?: any;
    isChecked: boolean | undefined;
    onBlur?: (value: string, isChecked: boolean) => void | undefined;
    isHasCheckbox?: boolean;
}
