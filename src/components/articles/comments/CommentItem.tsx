import { FaEdit, FaTrash } from 'react-icons/fa'

const CommentItem = () => {
    return (
        <div className='mb-5 rounded-lg p-3 bg-gray-200 border-2 border-gray-300'>
            <div className='flex items-center justify-between mb-2'>
                <strong className='uppercase text-gray-950' >mahdi</strong>
                <span className='px-1 bg-yellow-700 rounded-lg text-white' >1/1/2024</span>
            </div>
            <p className='mb-2 text-gray-800'>
                thanks for this article
            </p>
            <div className='flex justify-end item-center'>
                <FaEdit className='text-green-600 text-xl cursor-pointer me-3' />
                <FaTrash className='text-xl text-red-600 cursor-pointer'/>
            </div>

        </div>
    )
}

export default CommentItem