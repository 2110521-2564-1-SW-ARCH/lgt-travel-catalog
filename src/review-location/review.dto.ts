import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class ReviewPayloadDto{
    @IsNumber()
    @IsNotEmpty()
    locationId: number
    @IsNumber()
    @IsNotEmpty()
    userId: number
    @IsString()
    comment: string
    @IsNumber()
    star: number
}