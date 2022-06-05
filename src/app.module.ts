import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { VolunteerModule } from './volunteers/volunteer.module';

@Module({
  imports: [VolunteerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
