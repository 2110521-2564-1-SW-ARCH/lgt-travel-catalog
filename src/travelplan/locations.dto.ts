import { IsNotEmpty, IsNumber } from "class-validator";

export class LocationsPayloadDto{
    @IsNumber()
    @IsNotEmpty()
    locationId: number[]
}