import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ReviewDocument = Review & Document;
@Schema()
export class Review{
    @Prop()
    locationId: number
    @Prop()
    userId: number
    @Prop()
    comment: string
    @Prop()
    star: number
}

export const ReviewSchema = SchemaFactory.createForClass(Review);