import ArticleItem from "@/components/articles/ArticleItem";
import SearchArticleInput from "@/components/articles/SearchArticleInput";

import { Article } from '@/utils/types'
import Pagination from "./Pagination";



const ArticlesPage = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error("failed to fetch")
  }
  const posts: Article[] = await response.json();
  let postsList = posts.slice(0, 6).map((p) => {
    return (<ArticleItem article={p} key={p.id} />)
  })

  return <section className="container m-auto px-5  ">
    <SearchArticleInput />
    <div className="flex items-center justify-center gap-7 flex-wrap" >
      {postsList}

    </div>
    <Pagination/>



  </section>;
};

export default ArticlesPage;
