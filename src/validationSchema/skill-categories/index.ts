import * as yup from 'yup';

export const skillCategoryValidationSchema = yup.object().shape({
  name: yup.string().required(),
  user_id: yup.string().nullable(),
});
