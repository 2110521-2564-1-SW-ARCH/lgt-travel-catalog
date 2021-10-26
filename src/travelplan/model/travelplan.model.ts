import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, ObjectId } from "mongoose";
import { Transform } from 'class-transformer';

export type TravelPlanDocument = TravelPlan & Document;

// @Schema({_id: false})
// class Plan {
//     @Prop()
//     locationId: number[]
// }
// const PlanSchema = SchemaFactory.createForClass(Plan)

interface Plan {
    id: ObjectId;
    locationId: number[];
}

@Schema()
export class TravelPlan{
    @Prop({unique: true})
    userId: number
    @Prop()
    plan: Plan[]
}

export const TravelPlanSchema = SchemaFactory.createForClass(TravelPlan);