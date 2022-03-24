import { Authority } from "./authority";

export interface Principal {
    dn: string;
    password: string;
    username: string;
    authorities: Authority[];
    accountNonExpired: boolean;
    accountNonLocked: boolean;
    credentialsNonExpired: boolean;
    enabled: boolean;
    timeBeforeExpiration: number;
    graceLoginsRemaining: number;
}