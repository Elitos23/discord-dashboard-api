import { Controller, Get, Inject, Param, Post, Res} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FCFS } from 'src/utils/typeorm/entities/FCFS';
import { FCFSConfig } from 'src/utils/types';
import { Repository } from 'typeorm';
import { ROUTES, SERVICES } from '../../utils/constants';
import { IFCFSService } from '../interfaces/fcfs';


@Controller(ROUTES.CFCFS)
export class FCFSController {
  constructor(
    @InjectRepository(FCFS) private readonly fcfsRepository: Repository<FCFS>,
  ) {}

    @Post(':guildId/fcfs')
  async  createFCFS(
    @Param('')
    details: FCFSConfig) {
      console.log('Create FCFS');
      const newFCFS = this.fcfsRepository.create(details);
      return this.fcfsRepository.save(newFCFS);

}
}
