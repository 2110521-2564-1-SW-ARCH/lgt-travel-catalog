import { Body, Controller, Get, Patch, Post } from "@nestjs/common";
import { ReviewPayloadDto } from "./review.dto";
import { ReviewService } from "./review.service";

@Controller('api/review')
export class ReviewController {
    constructor(private reviewService: ReviewService){}
    @Post('/add')
    test(@Body() reviewPayloadDto: ReviewPayloadDto) {
        return this.reviewService.addReview(reviewPayloadDto)
    }

    // @Patch('/update')
    // async updateTravelPlan(@Body() travelPlanPayloadDto: TravelPlanPayloadDto){
    //     return this.travelPlanService.update(travelPlanPayloadDto)
    // }

    @Get()
    async all() {
        return this.reviewService.all();
    }

}