import { Prop, Schema } from "@nestjs/mongoose";
import { IsArray, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { isValidObjectId, ObjectId } from "mongoose";

// interface Plan {
//     id: ObjectId;
//     locationId: number[];
// }

export class TravelPlanPayloadDto{
    @IsString()
    @IsNotEmpty()
    userName: string
    @IsString()
    @IsNotEmpty()
    planName: string
    @IsArray()
    @IsNotEmpty()
    locations: number[]
    @IsString()
    description: string
}