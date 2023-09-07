export interface Posts {
  results: Post[];
  total: number;
  page: number;
}

export interface Post {
  _id: string;
  userId: number;
  title: string;
  content: string;
  hidden: boolean;
  published: Date;
}
