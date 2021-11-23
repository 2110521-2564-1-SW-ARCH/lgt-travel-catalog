import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TravelPlanModule } from './travelplan/travelplan.module';

@Module({
  imports: [
    TravelPlanModule,
    MongooseModule.forRoot('mongodb+srv://admin:travel1234@cluster0.poyct.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
