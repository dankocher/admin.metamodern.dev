export interface LinkInputProps {
    value: string;
    onChange: (event) => void;
    onBlur?: (event) => void;
    icon?;
    fontClass?: string;
    placeholder?: string;
    isSite?: boolean;
}
