import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'fcfs_config'})

export class FCFS {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
spots: string;

  @Column()
  roleId: string;

  @Column()
  channel: string;

  @Column()
  message: string;




}
