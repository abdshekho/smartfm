export interface IProfile {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address?: AddressType[];
    orders?: any;
}

export type AddressType = {
    location: string;
    region: string;
    area: string;
    contactNumber: string;
};
