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
        //const userTravelPlan = await this.travelPlanModel.findOne({userId:travelPlanPayloadDto.userName});
        // if (!userTravelPlan){
        const newUserPlan = new this.travelPlanModel({
            planId: Math.random(),
            userName: travelPlanPayloadDto.userName,
            planName: travelPlanPayloadDto.planName,
            locations: travelPlanPayloadDto.locations,
            description: travelPlanPayloadDto.description
        })
        const result = await newUserPlan.save()
        return result;
        // }
        // else {
        //     const userNewPlan = userTravelPlan.locations.concat(travelPlanPayloadDto.locations);
        //     const newUserPlan = new this.travelPlanModel({
        //         userId: travelPlanPayloadDto.userId,
        //         plan: userNewPlan
        //     },{_id:false})
        //     const res = await this.travelPlanModel
        //     .findOneAndUpdate({userId:travelPlanPayloadDto.userId},newUserPlan)
        //     .populate('plan')
        //     return res
        // }
    }

    // async update(updateData: TravelPlanPayloadDto){
    //     const travelPlan = await this.travelPlanModel
    //     .findOneAndUpdate({userId:updateData.userId},updateData)
    //     .populate('locationId')
    //     if (!travelPlan){
    //         throw new NotFoundException()
    //     }
    //     return travelPlan
    // }

    // async delete(userid: number){
    //     const deletedPlan = await this.travelPlanModel.deleteOne({userId:userid});
    //     if (!deletedPlan){
    //         throw new NotFoundException()
    //     }
    //     return deletedPlan
    // }

}
