import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put } from '@nestjs/common';
import { CarService } from './car.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { log } from 'console';
import { ManufacturerService } from 'src/manufacturer/manufacturer.service';
import { CategoryService } from 'src/category/category.service';

@Controller('car')
export class CarController {
  constructor(
    private carService: CarService,
    private manufacturerSrevice: ManufacturerService,
    private categoryService: CategoryService,
     ) {}

  @Post('create')
  async create(@Body() createCarDto: CreateCarDto) {
    try{
      const newCar = await this.carService.create(createCarDto);
      await this.manufacturerSrevice.increase(newCar.manufacturerId);
      await this.categoryService.increase(newCar.categoryId);
      return newCar;
    }
    catch(err){
      throw err;
    }
  }


  @Get('all')
  async findAll() {
    try{
      const cars = await this.carService.findAll();
      return cars;
    }
    catch(err){
      throw err;
    }
  }
  
  @Get()
  async findByIsConfirmed(@Query('isConfirmed') isConfirmed: boolean) {
    try{
      const cars = await this.carService.findByIsConfirmed(isConfirmed);
      return cars;
    }
    catch(err){
      throw err;
    }
  }
  

  @Get()
  async findOne(@Query('id') id: string) {
    try{
      const car = await this.carService.findOne(id);
      return car;
    }
    catch(err){
      throw err;
    }
  }

  @Put('update')
  async update(@Query('id') id: string, @Body() updateCarDto: UpdateCarDto) {
    try{
      const updatedCar = await this.carService.update(id, updateCarDto);
      return updatedCar;
    }
    catch(err){
      throw err;
    }
  }

  @Delete('delete')
  async remove(@Query('id') id: string) {
    try{
      const car = await this.carService.findOne(id);
      const deletedCar = await this.carService.remove(id);
      await this.manufacturerSrevice.decrease(car.manufacturerId);
      await this.categoryService.decrease(car.categoryId);
      return deletedCar;
    }
    catch(err){
      throw err;
    }
  }
}
