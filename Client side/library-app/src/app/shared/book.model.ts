import { Customer } from './customer.model';

export interface Book {
    id: string;
    title: string;
    author: string;
    publisher: string;
    dateOfPublication: Date;
    isLended: boolean;
    lender: Customer;
}
