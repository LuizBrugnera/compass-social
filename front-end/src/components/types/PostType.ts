export interface PostType {
  user: string;
  post_date: string;
  description: string;
  likes: number;
  comments: Array<{
    user: string;
    comment: string;
  }>;
  url_imagem: string;
}
