import { Injectable } from '@nestjs/common';
import { CreateSpotDto } from './dto/create-spot.dto';
import { UpdateSpotDto } from './dto/update-spot.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SpotsService {
  constructor(private prismaService: PrismaService) {}

  create(createSpotDto: CreateSpotDto) {
    return 'This action adds a new spot';
  }

  findAll(eventId: string) {
    return `This action returns all spots`;
  }

  findOne(eventId: string, sportId: number) {
    return `This action returns a #${id} spot`;
  }

  update(eventId: string, sportId: number, updateSpotDto: UpdateSpotDto) {
    return `This action updates a #${id} spot`;
  }

  remove(eventId: string, sportId: number) {
    return `This action removes a #${id} spot`;
  }
}
