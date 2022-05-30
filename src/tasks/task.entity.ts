import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TaskStatus } from './task-status.enum';
import { User } from './../auth/user.entity';

@Entity()
export class Task {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	title: string;

	@Column()
	description: string;

	@Column()
	status: TaskStatus;

	@ManyToOne(type => User, (user) => user.task, { eager: false })
	user: User;
}
