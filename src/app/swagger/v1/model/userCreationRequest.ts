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


export interface UserCreationRequest { 
    email: string;
    name: Name;
    phoneNumbers: Array<string>;
}
