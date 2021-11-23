import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, ObjectId } from "mongoose";
import { ILocation } from "../interface/location.interface";

export type TravelPlanDocument = TravelPlan & Document;


@Schema()
export class TravelPlan{
    @Prop({unique:true})
    planId: number
    @Prop()
    userName: string
    @Prop()
    planName: string
    @Prop()
    locations: ILocation[]
    @Prop()
    description: string
    @Prop()
    isPublic: boolean
}

export const TravelPlanSchema = SchemaFactory.createForClass(TravelPlan);