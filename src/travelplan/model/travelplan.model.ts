import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { SchemaTypes } from "mongoose";
import { Location } from "./location.model";
import { Document } from "mongoose";

export type TravelPlanDocument = TravelPlan & Document;
@Schema()
export class TravelPlan{
    @Prop()
    locationName: string

    // @Prop({ type: [{ type: SchemaTypes.ObjectId, ref: 'Location' }] })
    // plans: Location[];
}

export const TravelPlanSchema = SchemaFactory.createForClass(TravelPlan);