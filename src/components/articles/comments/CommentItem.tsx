import { CommentWithUser } from '@/utils/types'
import { FaEdit, FaTrash } from 'react-icons/fa'

interface CommentItemProps {
    comment: CommentWithUser;


}
const CommentItem = ({ comment }: CommentItemProps) => {
    return (
        <div className='mb-5 rounded-lg p-3 bg-gray-200 border-2 border-gray-300'>
            <div className='flex items-center justify-between mb-2'>
                <strong className='uppercase text-gray-950' >{comment.user.username}</strong>
                <span className='px-1 bg-yellow-700 rounded-lg text-white' >
                    {new Date(comment.createdAt).toDateString()}
                </span>
            </div>
            <p className='mb-2 text-gray-800'>
                {comment.text}
            </p>
            <div className='flex justify-end item-center'>
                <FaEdit className='text-green-600 text-xl cursor-pointer me-3' />
                <FaTrash className='text-xl text-red-600 cursor-pointer' />
            </div>

        </div>
    )
}

export default CommentItem