import { TiTick } from "react-icons/ti"


const WebHostingPlan = () => {
    return (
        <div className="p-4 bg-gray-200 flex flex-col justify-center items-center w-3/4 rounded  mb-7 md:w1/2 lg:w-1/4 " >
            <h2 className="font-bold text-3xl text-purple-900 " >Premium</h2>
            <strong className="font-bold text-3xl space-x-1 my-5 text-gray-900" >$4.99/mon</strong>
            <span className="bg-red-200 text-red-900 rounded-full px-2 py-1 font-semibold" >
                10% OFF
            </span>
            <div className="mt-6"  >
                <h5 className="font-semibold text-2xl mb-1  text-purple-700 capitalize ">Top Featuers</h5>
                <div className="flex items-center text-green-700 mb-1 ps-3 ">
                    <TiTick />
                    100 websites
                </div>
                <div className="flex items-center text-green-700 mb-1 ps-3 ">
                    <TiTick />
                    100 GB SSD Storage
                </div>
                <div className="flex items-center text-green-700 mb-1 ps-3 ">
                    <TiTick />
                    Weekly backups
                </div>
                <div className="flex items-center text-green-700 mb-1 ps-3 ">
                    <TiTick />
                    Unilimted BandWidth
                </div>
                <div className="flex items-center text-green-700 mb-1 ps-3 ">
                    <TiTick />
                    Free SSL
                </div>
                <div className="flex items-center text-green-700 mb-1 ps-3 ">
                    <TiTick />
                    Free Email
                </div>
                <div className="flex items-center text-green-700 mb-1 ps-3 ">
                    <TiTick />
                    100 websites
                </div>
            </div>
            <button className="mt-4 border-2 border-gray-900 text-gray-900 text-2xl font-bold p-1 rounded-full hover:text-white hover:bg-gray-900 transition w-full" >Buy Now</button>

        </div>
    )
}

export default WebHostingPlan