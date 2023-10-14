export interface ICategory {
    id: string;
    name: string;
    ar_name?: string;
    parent: ICategory | null;
    children: ICategory[];
    isSelected: boolean;
}
