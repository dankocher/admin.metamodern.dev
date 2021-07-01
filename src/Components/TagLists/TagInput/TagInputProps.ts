import { TagbleType } from "../TagbleType";
import { MetTagInputProps } from "@metamodern.dev/metamodern-ui/";

export interface TagInputProps {
    id?: string;
    index?: number;
    defaultValue: string;
    innerRef?: any;
    isChecked: boolean | undefined;
    onBlur?: (value: string, isChecked: boolean) => void | undefined;

    // tagType: TagbleType.BRIEF | TagbleType.MAIL | TagbleType.PROJECT;
    isHasCheckbox?: boolean;
}
