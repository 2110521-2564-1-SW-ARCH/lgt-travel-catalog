import { IsString, IsNotEmpty } from "class-validator";

export class TravelPlanPayloadDto{
    @IsString()
    @IsNotEmpty()
    locationName: string
}