import Image from "next/image"


function Products(){
    return(
        
        <div className="w-full h-[300px] flex justify-center item-center mt-10 mb-20">
            <div className="w-[80%] h-full">
            {/*top side*/}
            <div>
                <span className="border-l-8 border-red-500 text-red-500 mb-5 font-bold">This Month</span>
                <div className="flex justify-between">
                <h2 className="text-4xl font-bold mt-5">Best Selling Products</h2>
                <button className="py-2 px-7 bg-red-500 rounded-md text-white">View All</button>
                </div>
            </div>
            {/*products */}
            {/*container boxes */}
            <div className="gap-5 flex justify-between mt-7">
                <div>
                <div className="w-[200px] h-[170px] bg-gray-100 flex justify-center items-center">
                    <Image src ={"/images/fresh/coat.png"} width={150} height={100} alt="coat"></Image>
                </div>
                {/* title */}
                <div className="flex flex-col">
                    <span className="font-bold pt-3">The north coat</span>
                    <span className="font-bold">$260</span>
                </div>
                </div>
                <div>
                <div className="w-[200px] h-[170px] bg-gray-100 flex justify-center items-center">
                <Image src ={"/images/fresh/bag.png"} width={90} height={75} alt="bag"></Image>
                </div>
                <div className="flex flex-col">
                <span className="font-bold pt-3">Gucci duffle bag </span>
                <span className="font-bold">$960</span>
                </div>
                </div>
                <div>
                <div className="w-[200px] h-[170px] bg-gray-100 flex justify-center items-center ">
                <Image src ={"/images/fresh/cooler.png"} width={150} height={100} alt="cooler"></Image>
                </div>
                <div className="flex flex-col">
                <span className="font-bold pt-3">RGB liquid CPU Cooler</span>
                <span className="font-bold">$160</span>
                </div>
                </div>
                <div>
                <div className="w-[200px] h-[170px] bg-gray-100 flex justify-center items-center">
                <Image src ={"/images/fresh/bookself.png"} width={150} height={100} alt="bookself"></Image>
                </div>
                <div className="flex flex-col">
                <span className="font-bold pt-3">Small BookSelf</span>
                <span className="font-bold">$360</span>
                </div>
                </div>
            </div>


            </div>

        </div>


    )
}
export default Products