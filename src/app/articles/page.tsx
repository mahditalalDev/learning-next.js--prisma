import ArticleItem from "@/components/articles/ArticleItem";
import SearchArticleInput from "@/components/articles/SearchArticleInput";
import { getArticles } from "@/apiCalls/articleApiCall";
import Pagination from "./Pagination";
import { getArticlesCount } from "@/apiCalls/articleApiCall";

interface ArticlePageProps {
  searchParams: { pageNumber: string }
}



const ArticlesPage = async ({ searchParams }: ArticlePageProps) => {
  // await new Promise((resolve) => {
  //   setTimeout(resolve, 3000)
  // })
  const count: number = await getArticlesCount()
  const { pageNumber } = searchParams;
  const articles = await getArticles(pageNumber);
  const pages = Math.ceil(count / 6);
  const postsList = articles.map((p) => {
    return <ArticleItem key={p.id} article={p} />
  })




  return (
    <section className="fix-height container m-auto px-5  ">
      <SearchArticleInput />
      <div className="flex items-center justify-center gap-7 flex-wrap" >
        {postsList}
      </div>
      <Pagination pageNumber={parseInt(pageNumber)} route="/articles/" pages={pages} />
    </section>
  );
};

export default ArticlesPage;
