import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TravelPlan, TravelPlanDocument } from './model/travelplan.model';
import { Model } from 'mongoose';
import { TravelPlanPayloadDto } from './travelplan.dto';

@Injectable()
export class TravelPlanService {
    constructor(
        @InjectModel(TravelPlan.name) 
        private readonly travelPlanModel: Model<TravelPlanDocument>
    ) {}

    async addTravelPlan(travelPlanPayloadDto: TravelPlanPayloadDto): Promise<TravelPlanDocument> {
        const newUserPlan = new this.travelPlanModel({
            planId: Math.random(),
            userName: travelPlanPayloadDto.userName,
            planName: travelPlanPayloadDto.planName,
            locations: travelPlanPayloadDto.locations,
            description: travelPlanPayloadDto.description,
            isPublic: travelPlanPayloadDto.isPublic
        })
        const result = await newUserPlan.save()
        return result;
    }


}
