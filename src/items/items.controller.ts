import { Body, Controller, Get, Param, Post, Delete } from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { Item } from './interface/iem.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}
  @Get()
  findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id): Promise<Item> {
    return this.itemsService.findOne(id);
  }
  @Post()
  create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemsService.create(createItemDto);
  }
  @Delete(':id')
  remove(@Param('id') id): Promise<Item> {
    return this.itemsService.findOne(id);
  }
}
