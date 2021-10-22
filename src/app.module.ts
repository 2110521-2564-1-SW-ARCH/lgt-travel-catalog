import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReviewModule } from './review-location/review.module';
import { TravelPlanModule } from './travelplan/travelplan.module';

@Module({
  imports: [
    // TravelPlanModule,
    ReviewModule,
    MongooseModule.forRoot('mongodb+srv://admin:travel1234@cluster0.poyct.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
