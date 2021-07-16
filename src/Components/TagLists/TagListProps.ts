import { TagbleType } from "./TagbleType";

export interface TagListProps {
    projectId?: string;
    tagListType: TagbleType.BRIEF | TagbleType.MAIL | TagbleType.PROJECT;
    header: string;
}
