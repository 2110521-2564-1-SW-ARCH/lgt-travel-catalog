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
        const createdTravelPlan = await new this.travelPlanModel(travelPlanPayloadDto).save();
        return createdTravelPlan;
    }

    async update(updateData: TravelPlanPayloadDto){
        const travelPlan = await this.travelPlanModel
        .findOneAndUpdate({userId:updateData.userId},updateData)
        .populate('locationId')
        if (!travelPlan){
            throw new NotFoundException()
        }
        return travelPlan
    }

    async all() {
        return this.travelPlanModel.find().exec();
    }

    async findUserTravelPlan(userId: number){
        const userTravelPlan = this.travelPlanModel.findOne({userId: userId})
        if (!userTravelPlan){
            throw new NotFoundException()
        }
        return userTravelPlan
    }
}
