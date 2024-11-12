
import { UserPublic } from "../features/login/User";
import { Group } from "./group";

export interface Entry {
    id: number;
    saldo: number;
    description: string;
    user: UserPublic;
    group: Group;
}
