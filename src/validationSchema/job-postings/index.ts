import * as yup from 'yup';

export const jobPostingValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  user_id: yup.string().nullable(),
});
