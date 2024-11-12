
export interface UserPublic {
    name: string;
    email: string;
}

export interface UserCreateDto {
    name: string;
    password: string;
    email: string;
}