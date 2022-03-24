import { Authority } from "./authority"
import { Details } from "./details"
import { Principal } from "./principal"

export interface LoginResponse {
    authenticated: boolean;
    credential: string;
    name: string;
    principal: Principal;
    authorities: Authority[];
    details: Details;
}
