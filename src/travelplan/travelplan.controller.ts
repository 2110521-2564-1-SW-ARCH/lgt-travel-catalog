import { Body, Controller, Get, Patch, Post } from "@nestjs/common";
import { TravelPlanPayloadDto } from "./travelplan.dto";
import { TravelPlanService } from "./travelplan.service";

@Controller('api/travelplan')
export class TravelPlanController {
    constructor(private travelPlanService: TravelPlanService){}
    @Post('/add')
    test(@Body() travelPlanPayloadDto: TravelPlanPayloadDto) {
        return this.travelPlanService.addTravelPlan(travelPlanPayloadDto)
    }
    
    @Patch('/update')
    async updateTravelPlan(@Body() travelPlanPayloadDto: TravelPlanPayloadDto){
        return this.travelPlanService.update(travelPlanPayloadDto)
    }

    @Get()
    async all() {
        return this.travelPlanService.all();
    }

}