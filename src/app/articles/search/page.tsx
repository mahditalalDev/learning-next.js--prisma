import { getArticlesSearch } from "@/apiCalls/articleApiCall";
import ArticleItem from "@/components/articles/ArticleItem";
import { Article } from "@prisma/client";

interface SearchArticleProps {
  searchParams: { title: string }
}

const Search = async ({ searchParams: { title } }: SearchArticleProps) => {

  const articles: Article[] = await getArticlesSearch(title);
  console.log("the all articles is", articles)

  const articlesList = articles.map((item) => {
    return <ArticleItem key={item.id} article={item} />
  })
  return (
    <section className="fix-height container m-auto px-5 my-5 mb-3">
      {
        articlesList.length === 0 ? (
          <h2 className="text-gray-800 text-2xl font-bold p-5" >article based on <span className="text-red-500">{title}</span> Not found</h2>
        ) : (<>
          <h1 className="text-2xl font-bold text-center  capitalize">
            Articles based on searchText is :
            <span className="ms-1 text-green-700 text-3xl font-bold  ">
              {title}
            </span>
          </h1>
          <div className="flex items-center justify-center flex-wrap gap-7 mt-4 " >
            {articlesList}
          </div>
        </>)
      }
    </section>
  )
};

export default Search;
