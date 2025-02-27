import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';

@Controller('reservation')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Post('create')
  async create(@Body() createReservationDto: CreateReservationDto) {
    try {
      const newReservation = await this.reservationsService.create(createReservationDto);
      return newReservation;
    }
    catch(err) {
      throw err;
    }
  }

  @Get('all')
  async findAll() {
    try {
      const reservations = await this.reservationsService.findAll();
      return reservations;
    }
    catch(err) {
      throw err;
    }
  }

  @Get('')
  async findOne(@Query('id') id: string) {
    try {
      const reservation = await this.reservationsService.findOne(id);
      return reservation;
    }
    catch(err) {
      throw err;
    }
  }

  @Put('update')
  async update(@Query('id') id: string, @Body() updateReservationDto: UpdateReservationDto) {
    try {
      const updatedReservation = await this.reservationsService.update(id, updateReservationDto);
      return updatedReservation;
    }
    catch(err) {
      throw err;
    }
  }

  @Delete('delete')
  async remove(@Query('id') id: string) {
    try {
      const deletedReservation = await this.reservationsService.remove(id);
      return deletedReservation;
    }
    catch(err) {
      throw err;
    }
  }
}
