import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { VolunteerService } from './volunteer.service';
import { VolunteersController } from './volunteers.controller';

@Module({
  providers: [VolunteerService, PrismaService],
  controllers: [VolunteersController],
  imports: [],
})
export class VolunteerModule {}
