export interface ButtonSubmitType {
    children: string;
    className: string;
    elementList: elementListType[];
    id?: string;
}

export interface elementListType {
    className: string;
    message: string;
    regex ?: RegExp;
}