import { TagbleType } from "./TagbleType";

export interface TagListProps {
    tagListType: TagbleType.BRIEF | TagbleType.MAIL | TagbleType.PROJECT;
    header: string;
}
