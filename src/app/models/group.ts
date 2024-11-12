import { Entry } from "./Entry";
import { UserPublic } from "../features/login/User";


export interface Group {
    id: number;
    name: string;
    users: UserPublic[]
    entries: Entry[];
}
