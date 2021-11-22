import { Body, Controller, Get, Inject, Param, Patch, Post } from "@nestjs/common";
import { EventPattern } from "@nestjs/microservices";
import { TravelPlanPayloadDto } from "./travelplan.dto";
import { TravelPlanService } from "./travelplan.service";

@Controller('api/travelplan')
export class TravelPlanController {
    constructor(
        private travelPlanService: TravelPlanService
    ){}
    // private travelPlanPayloadDto: TravelPlanPayloadDto = {userId:0,locationId:[]}
    // @Post('/add')
    // saveTravelPlan(@Body() locationsPayloadDto: LocationsPayloadDto) {
    //     this.travelPlanPayloadDto.locationId = locationsPayloadDto.locationId
    //     return this.travelPlanService.addTravelPlan(this.travelPlanPayloadDto)
    // }
    
    @EventPattern('save-plan')
    async savePlan(travelPlanPayloadDto: TravelPlanPayloadDto) {
        console.log(travelPlanPayloadDto)
        return this.travelPlanService.addTravelPlan(travelPlanPayloadDto)
    }

    // @EventPattern('update-plan')
    // async updateTravelPlan(@Body() travelPlanPayloadDto: TravelPlanPayloadDto){
    //     return this.travelPlanService.update(travelPlanPayloadDto)
    // }

    // @EventPattern('delete-plan')
    // async deleteTravelPlan(@Body() userid: number){
    //     return this.travelPlanService.delete(userid);
    // }

    // @Get(':userId')
    // async getUserTravelPlan(@Param('userId') userId: number) {
    //     return this.travelPlanService.findUserTravelPlan(userId)
    // }

}