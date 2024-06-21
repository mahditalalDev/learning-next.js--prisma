const posts = [1, 2, 3, 4, 5, 6]
const loading = () => {
    const postsList = posts.map((p) => {
        return (
            <div key={p} className="my-1 p-5 rounded-md bg-gray-200  w-full  md:2/5 lg:w-1/4  " >
                <h3 className="  bg-gray-400  h-10 "></h3>
                <p className="my-2  p-1 bg-gray-300 h-20" ></p>
                <div className=" w-full block rounded-lg p-1 h-10 bg-gray-400 " ></div>
            </div>
        )
    })
    return (
        <section className=" fix-height container m-auto px-5 ">
            {/* searchBar */}
            <div className="my-5 w-full md:w-2/3 m-auto bg-gray-200 h-14" >
            </div>
            {/* searchBar */}

            {/* articles */}
            <div className="flex items-center justify-center gap-7 flex-wrap " >
                {postsList}
            </div>

            {/* Pagination */}

            <div className=" container flex justify-center items-center  h-10 my-5 " >
                <div className="flex justify-center items-center p-2 w-1/4 bg-gray-400 h-10"></div>
            </div>
            {/*===Pagination==*/}

        </section>
    )
}
export default loading