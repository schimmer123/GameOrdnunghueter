import {Injectable} from '@nestjs/common';
import {Lists} from "./lists";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class ListsService {

    constructor(@InjectRepository(Lists) private listsRepo: Repository<Lists>) {
    }



    createList(newList: Lists) {
        this.listsRepo.save(newList);
    }


    getAllLists(): Promise<Lists[]> {
        return this.listsRepo.find()
    }
}
