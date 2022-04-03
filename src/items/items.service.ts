import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Item } from './interface/iem.interface';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private itemModel: Model<Item>) {}
  async findAll(): Promise<Item[]> {
    return await this.itemModel.find().exec();
  }
  async findOne(id: string): Promise<Item> {
    return await this.itemModel.findOne({ _id: id });
  }

  async create(items: Item): Promise<Item> {
    const newItem = new this.itemModel(items);
    return await newItem.save();
  }
  async remove(items: Item): Promise<Item> {
    const newItem = new this.itemModel(items);
    return await newItem.remove(items);
  }
}
