/**
 * backend
 * nexsis poc
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Name } from './name';


export interface User { 
    id: number;
    name?: Name;
    email: string;
    status?: User.StatusEnum;
    phoneNumbers: Array<string>;
}
export namespace User {
    export type StatusEnum = 'Happy' | 'Sad';
    export const StatusEnum = {
        Happy: 'Happy' as StatusEnum,
        Sad: 'Sad' as StatusEnum
    };
}
