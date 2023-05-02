import { UserType } from "./UserType";

export interface ButtonSubmitType {
    children: string;
    className: string;
    elementList: elementListType[];
    userList?: UserType[];
    id?: string;
}

export interface elementListType {
    className: string;
    message: string;
    regex ?: RegExp;
}