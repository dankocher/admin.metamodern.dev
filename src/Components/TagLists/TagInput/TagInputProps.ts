import { TagbleType } from "../TagbleType";
import { MetTagInputProps } from "@metamodern.dev/metamodern-ui/";

export interface TagInputProps {
    id: string;
    defaultValue: string;

    isChecked: boolean | undefined;

    tagType: TagbleType.BRIEF | TagbleType.MAIL | TagbleType.PROJECT;
}
