import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TravelPlan, TravelPlanSchema } from "./model/travelplan.model";
import { TravelPlanController } from "./travelplan.controller";
import { TravelPlanService } from "./travelplan.service";

@Module({
    imports: [
        MongooseModule.forFeature([{name: TravelPlan.name ,schema: TravelPlanSchema}])
    ],
    controllers: [TravelPlanController],
    providers: [TravelPlanService]
})

export class TravelPlanModule {}