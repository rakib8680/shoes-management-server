import { TPolishService } from "./polishService.interface";
import { polishService } from "./polishService.model";




const addPolishServiceToDB = async (payload:TPolishService)=>{

    const result = await polishService.create(payload);

    return result;

}




export const polishServices = {
    addPolishServiceToDB
}