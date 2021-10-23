import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { SchemaTypes } from "mongoose";
import { Document } from "mongoose";

export type TravelPlanDocument = TravelPlan & Document;
@Schema()
export class TravelPlan{
    @Prop()
    userId: number
    @Prop()
    locationId: number[]
    // @Prop({ type: [{ type: SchemaTypes.ObjectId, ref: 'Location' }] })
    // plans: Location[];
}

export const TravelPlanSchema = SchemaFactory.createForClass(TravelPlan);