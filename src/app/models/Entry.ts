
import { UserPublic } from "../features/login/User";

export interface Entry {
    id: number;
    saldo: number;
    description: string;
    user: UserPublic;
}
