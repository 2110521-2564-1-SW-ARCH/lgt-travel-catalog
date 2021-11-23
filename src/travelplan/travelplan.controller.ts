import { Body, Controller, Get, Inject, Param, Patch, Post } from "@nestjs/common";
import { EventPattern } from "@nestjs/microservices";
import { TravelPlanPayloadDto } from "./travelplan.dto";
import { TravelPlanService } from "./travelplan.service";

@Controller('api/travelplan')
export class TravelPlanController {
    constructor(
        private travelPlanService: TravelPlanService
    ){}
    
    @EventPattern('save-plan')
    async savePlan(travelPlanPayloadDto: TravelPlanPayloadDto) {
        console.log(travelPlanPayloadDto)
        return this.travelPlanService.addTravelPlan(travelPlanPayloadDto)
    }

}