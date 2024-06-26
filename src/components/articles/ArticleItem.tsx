import Link from "next/link"
import { Article } from "@prisma/client"
interface ArticleItemProps {
  article: Article
}
const ArticleItem = ({ article }: ArticleItemProps) => {
  return (
    <div className="my-1 p-5 rounded-md border-2 shadow-lg border-gray-400 hover:bg-slate-200 w-full md:2/5 lg:w-1/4  " >
      <h3 className="text-xl font-bold text-gray-900 line-clamp-1 ">{article.title}</h3>
      <p className="my-2 text-xl p-1 text-gray-700 line-clamp-1" >{article.description}</p>
      <Link className=" w-full block rounded-lg  transition-all text-xl bg-cyan-600 p-1 text-center  text-white hover:bg-cyan-700 " href={`/articles/${article.id}`} >read more</Link>
    </div>
  )
}
export default ArticleItem