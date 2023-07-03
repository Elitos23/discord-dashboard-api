import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { FCFS } from "src/utils/typeorm/entities/FCFS";
import { FCFSConfig } from 'src/utils/types';
import { Repository } from 'typeorm';
import { IFCFSService } from '../interfaces/fcfs';


@Injectable()
export class FCFSService implements IFCFSService {

  constructor(
    @InjectRepository(FCFS) private readonly fcfsRepository: Repository<FCFS>,
  ) {}
  createFCFS(details: FCFSConfig) {
    console.log('Create FCFS');
    const newFCFS = this.fcfsRepository.create(details);
    return this.fcfsRepository.save(newFCFS);
  }


}
