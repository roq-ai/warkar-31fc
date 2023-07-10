import * as yup from 'yup';

export const reviewValidationSchema = yup.object().shape({
  rating: yup.number().integer().required(),
  comment: yup.string(),
  reviewer_id: yup.string().nullable(),
  reviewee_id: yup.string().nullable(),
});
