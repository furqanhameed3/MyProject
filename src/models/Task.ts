import {Object, Types, BSON} from 'realm';

export class Task extends Object<Task> {
  _id: BSON.ObjectId = new BSON.ObjectId();
  description!: string;
  isComplete = false;
  createdAt: Date = new Date();
  owner_id!: string;
  static primaryKey = '_id';
}
