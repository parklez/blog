export interface Project {
  _id: string,
  title: string,
  category: string,
  description: string,
  link: string,
  thumbnail: string,
  published: Date,
  hidden: boolean,
}

export interface Projects {
  results: Project[];
  total: number;
  page: number;
}