import { FCFS } from "src/utils/typeorm/entities/FCFS";
import { FCFSConfig } from "src/utils/types";

export interface IFCFSService {
  createFCFS(details: FCFSConfig): Promise<FCFS>;


}
