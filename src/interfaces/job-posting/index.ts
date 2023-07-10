import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface JobPostingInterface {
  id?: string;
  title: string;
  description: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface JobPostingGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  user_id?: string;
}
