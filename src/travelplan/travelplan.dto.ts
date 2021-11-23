import { Prop, Schema } from "@nestjs/mongoose";
import { IsArray, IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { isValidObjectId, ObjectId } from "mongoose";
import { ILocation } from "./interface/location.interface";

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
    locations: ILocation[]
    @IsString()
    description: string
    @IsBoolean()
    isPublic: boolean
}