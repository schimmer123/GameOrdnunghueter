import { Module } from '@nestjs/common';
import { ListsService } from './lists.service';
import { ListsController } from './lists.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Lists} from "./lists";

@Module({
  imports: [TypeOrmModule.forFeature([Lists])],
  providers: [ListsService],
  controllers: [ListsController]
})
export class ListsModule {}
