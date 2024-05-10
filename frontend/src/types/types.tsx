export enum Role {
  regular = "regular",
  admin = "admin",
}

export interface TeamMember {
  id?: number;
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  role: Role;
}
