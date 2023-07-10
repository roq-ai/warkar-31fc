import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface SkillCategoryInterface {
  id?: string;
  name: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface SkillCategoryGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  user_id?: string;
}
