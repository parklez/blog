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

export interface PostsByTag {
  results: PostHeadline[];
  name: string;
  total: number;
}

export interface PostHeadline {
  _id: string;
  title: string;
  tags: string[];
  published: Date;
}