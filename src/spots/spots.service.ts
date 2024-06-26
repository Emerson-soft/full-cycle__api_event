import { Injectable } from '@nestjs/common';
import { CreateSpotDto } from './dto/create-spot.dto';
import { UpdateSpotDto } from './dto/update-spot.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { SportStatus } from '@prisma/client';

@Injectable()
export class SpotsService {
  constructor(private prismaService: PrismaService) {}

  async create(createSpotDto: CreateSpotDto & { eventId: string }) {
    const event = await this.prismaService.event.findFirst({
      where: {
        id: createSpotDto.eventId,
      },
    });

    if (!event) {
      throw new Error('Event not found');
    }

    return this.prismaService.sport.create({
      data: {
        ...createSpotDto,
        status: SportStatus.available,
      },
    });
  }

  findAll(eventId: string) {
    return this.prismaService.sport.findMany({
      where: {
        eventId,
      },
    });
  }

  findOne(eventId: string, sportId: string) {
    return this.prismaService.sport.findUnique({
      where: {
        eventId,
        id: sportId,
      },
    });
  }

  update(eventId: string, sportId: string, updateSpotDto: UpdateSpotDto) {
    return this.prismaService.sport.update({
      where: {
        eventId,
        id: sportId,
      },
      data: updateSpotDto,
    });
  }

  remove(eventId: string, sportId: string) {
    return this.prismaService.sport.delete({
      where: {
        eventId,
        id: sportId,
      },
    });
  }
}
