import { getArticlesSearch } from "@/apiCalls/articleApiCall";
import ArticleItem from "@/components/articles/ArticleItem";
import { Article } from "@prisma/client";

interface SearchArticleProps {
  searchParams: { title: string }
}

const Search = async ({ searchParams: { title } }: SearchArticleProps) => {
  console.log("the title is", title)
  const articles: Article[] = await getArticlesSearch(title);
  console.log("the aaaaaaaaaaaaaaaa",articles)
  const articlesList = articles.map((item) => {
    return <ArticleItem key={item.id} article={item} />
  })
  return (
    <section className="fix-height container m-auto px-5">
      <h1 className="text-2xl font-bold">
        articles based on searchText is :
        <span className="ms-1 text-green-700 text-3xl font-bold">
          {title}
        </span>
      </h1>
      <div className="flex items-center justify-center flex-wrap gap-7" >
        {articlesList}

      </div>
    </section>
  )
};

export default Search;
