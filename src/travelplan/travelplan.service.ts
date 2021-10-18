import { Injectable } from '@nestjs/common';
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
        const createdTravelPlan = new this.travelPlanModel(travelPlanPayloadDto);
        return await createdTravelPlan.save();
    }

    async all() {
        return this.travelPlanModel.find().exec();
    }
}
