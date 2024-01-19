import { Manager } from './manager';

export interface Visitor {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  gender: string;
  remarks: string;
  managerId: number;
  manager: Manager | undefined;
  date: string;
}
