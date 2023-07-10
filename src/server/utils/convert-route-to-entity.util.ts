const mapping: Record<string, string> = {
  'job-postings': 'job_posting',
  platforms: 'platform',
  reviews: 'review',
  'skill-categories': 'skill_category',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
