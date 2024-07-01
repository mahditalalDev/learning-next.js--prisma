
import { getSingleArticle } from "@/apiCalls/articleApiCall";
import AddCommentForm from "@/components/articles/comments/AddCommentForm";
import CommentItem from "@/components/articles/comments/CommentItem";
import { SingleArtcile } from "@/utils/types";
import { Article } from "@prisma/client";


interface SingleArticlePageProps {
    params: { id: number }
}
const SingleArticlePage = async ({ params }: SingleArticlePageProps) => {
    
    

    const article: SingleArtcile = await getSingleArticle(params.id);
    console.log(article)
    // const commentsList = article.comments.map((comment) => {
    //     return <CommentItem key={comment.id} comment={comment} />


    // })
    return (
        <section className="fix-height container m-auto w-full px-5 pt-8 md:w3/4 ">
            <div className="bg-white p-7 rounded-lg mb-7"  >
                <h1 className="text-3xl text-gray-700 font-bold mb-2" >{article.title}</h1>
                <div className="text-gray-400" >{new Date(article.createdAt).toDateString()}</div>
                <p className=" text-gray-800 text-xl mt-5 " >{article.description}</p>

            </div>
            <AddCommentForm articleId={article.id} />
            <h4 className="text-xl text-gray-800 ps-1 font-semibold mb-2 mt-7">Comments</h4>
            {article.comment?.map((c) => {
                return <CommentItem key={c.id} comment={c} />
            })}
        </section>
    )
}

export default SingleArticlePage