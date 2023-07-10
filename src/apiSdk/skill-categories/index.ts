import axios from 'axios';
import queryString from 'query-string';
import { SkillCategoryInterface, SkillCategoryGetQueryInterface } from 'interfaces/skill-category';
import { GetQueryInterface } from '../../interfaces';

export const getSkillCategories = async (query?: SkillCategoryGetQueryInterface) => {
  const response = await axios.get(`/api/skill-categories${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createSkillCategory = async (skillCategory: SkillCategoryInterface) => {
  const response = await axios.post('/api/skill-categories', skillCategory);
  return response.data;
};

export const updateSkillCategoryById = async (id: string, skillCategory: SkillCategoryInterface) => {
  const response = await axios.put(`/api/skill-categories/${id}`, skillCategory);
  return response.data;
};

export const getSkillCategoryById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/skill-categories/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteSkillCategoryById = async (id: string) => {
  const response = await axios.delete(`/api/skill-categories/${id}`);
  return response.data;
};
