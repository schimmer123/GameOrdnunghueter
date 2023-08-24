import {Body, Controller, Get, Post} from '@nestjs/common';
import {Lists} from "./lists";
import {ListsService} from "./lists.service";

@Controller('lists')
export class ListsController {

    constructor(private listsService: ListsService) {
    }

    @Post()
    createList(@Body() newList: Lists)  {
        this.listsService.createList(newList);
    }

   @Get()
    getAllLists(): Promise<Lists[]> {
        return this.listsService.getAllLists();
    }

}
