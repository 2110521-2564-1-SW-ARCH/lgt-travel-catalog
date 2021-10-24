import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ReviewPayloadDto } from './review.dto';
import { Review, ReviewDocument } from './review.model';

@Injectable()
export class ReviewService {
    constructor(
        @InjectModel(Review.name) 
        private readonly reviewModel: Model<ReviewDocument>
    ) {}

    async addReview(reviewPayloadDto: ReviewPayloadDto): Promise<ReviewDocument> {
        return await new this.reviewModel(reviewPayloadDto).save();
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

    async all() {
        return this.reviewModel.find().exec();
    }

    // async findUserTravelPlan(userId: number){
    //     const userTravelPlan = this.travelPlanModel.findOne({userId: userId})
    //     if (!userTravelPlan){
    //         throw new NotFoundException()
    //     }
    //     return userTravelPlan
    // }
}
