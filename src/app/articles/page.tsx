import ArticleItem from "@/components/articles/ArticleItem";

import { Article } from '@/utils/types'

const ArticlesPage = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Article[] = await response.json();
  let postsList = posts.map((p) => {
    return (<ArticleItem article={p} key={p.id} />)
  })

  return <section className="container m-auto px-5">
    <div className="flex items-center justify-center gap-7 flex-wrap" >{postsList}</div>

  </section>;
};

export default ArticlesPage;
