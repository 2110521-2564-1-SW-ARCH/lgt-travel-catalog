import { Body, Controller, Get, Post } from "@nestjs/common";
import { TravelPlanPayloadDto } from "./travelplan.dto";
import { TravelPlanService } from "./travelplan.service";

@Controller('api/travelplan')
export class TravelPlanController {
    constructor(private travelPlanService: TravelPlanService){}
    @Post('/add')
    test(@Body() travelPlanPayloadDto: TravelPlanPayloadDto) {
        const travelPlanResponse = this.travelPlanService.addTravelPlan(travelPlanPayloadDto)
        return travelPlanResponse
    }

    @Get()
    async all() {
        return this.travelPlanService.all();
    }

}