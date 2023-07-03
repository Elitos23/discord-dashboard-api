import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FCFS } from 'src/utils/typeorm/entities/FCFS';
import { SERVICES } from '../utils/constants';
import { FCFSService } from './services/fcfs.services';


@Module({
  imports: [TypeOrmModule.forFeature([FCFS])],
  providers: [
    {
      provide: SERVICES.FCFSE,
      useClass: FCFSService,
    },
  ],
  exports: [
    {
      provide: SERVICES.FCFSE,
      useClass: FCFSService,
    },
  ],
})
export class FCFSModule {}
