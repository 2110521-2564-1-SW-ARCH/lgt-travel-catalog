import { Body, Controller, Get, Inject, Param, Patch, Post } from "@nestjs/common";
import { EventPattern } from "@nestjs/microservices";
import { LocationsPayloadDto } from "./locations.dto";
import { TravelPlanPayloadDto } from "./travelplan.dto";
import { TravelPlanService } from "./travelplan.service";

@Controller('api/travelplan')
export class TravelPlanController {
    constructor(
        private travelPlanService: TravelPlanService
    ){
    }
    private travelPlanPayloadDto: TravelPlanPayloadDto = {userId:0,locationId:[]}
    @Post('/add')
    saveTravelPlan(@Body() locationsPayloadDto: LocationsPayloadDto) {
        this.travelPlanPayloadDto.locationId = locationsPayloadDto.locationId
        return this.travelPlanService.addTravelPlan(this.travelPlanPayloadDto)
    }
    
    @EventPattern('getCurrentUserId')
    async getUserId(uid: number) {
        this.travelPlanPayloadDto.userId = uid
        console.log(uid)
        this.saveTravelPlan({locationId:[10500,10200]})
    }

    @Patch('/update')
    async updateTravelPlan(@Body() travelPlanPayloadDto: TravelPlanPayloadDto){
        return this.travelPlanService.update(travelPlanPayloadDto)
    }

    @Get(':userId')
    async getUserTravelPlan(@Param('userId') userId: number) {
        return this.travelPlanService.findUserTravelPlan(userId)
    }
    @Get()
    async all() {
        return this.travelPlanService.all();
    }
  

}