import Image from "next/image"


function Sale(){
    return(
        <main>
        <div className="w-full h-[300px] flex justify-center item-center mt-10">
            <div className="w-[80%] h-full">
            {/*top side*/}
            <div>
                <span className="border-l-8 border-red-500 text-red-500 mb-5 font-bold">Today's</span>
                <h2 className="text-4xl font-bold mt-5">Flash Sales</h2>
            </div>
            {/*products */}
            {/*container boxes */}
            <div className="gap-5 flex justify-between mt-7">
                <div>
                <div className="w-[200px] h-[170px] bg-gray-100 flex justify-center items-center">
                    <Image src ={"/images/fresh/gaming.png"} width={150} height={100} alt="gaming"></Image>
                </div>
                {/* title */}
                <div className="flex flex-col">
                    <span className="font-bold pt-3">HAVIT HV-G92 Gamepad</span>
                    <span className="font-bold">$120</span>
                </div>
                </div>
                <div>
                <div className="w-[200px] h-[170px] bg-gray-100 flex justify-center items-center">
                <Image src ={"/images/fresh/chair.png"} width={90} height={75} alt="gaming"></Image>
                </div>
                <div className="flex flex-col">
                <span className="font-bold pt-3">S-Series Comfort Chair </span>
                <span className="font-bold">$375</span>
                </div>
                </div>
                <div>
                <div className="w-[200px] h-[170px] bg-gray-100 flex justify-center items-center ">
                <Image src ={"/images/fresh/keyboard.png"} width={150} height={100} alt="gaming"></Image>
                </div>
                <div className="flex flex-col">
                <span className="font-bold pt-3">AK-900 Wired Keyboard</span>
                <span className="font-bold">$960</span>
                </div>
                </div>
                <div>
                <div className="w-[200px] h-[170px] bg-gray-100 flex justify-center items-center">
                <Image src ={"/images/fresh/lcd.png"} width={150} height={100} alt="gaming"></Image>
                </div>
                <div className="flex flex-col">
                <span className="font-bold pt-3">IPS LCD Gaming Monitor</span>
                <span className="font-bold">$370</span>
                </div>
                </div>
            </div>


            </div>

        </div>

        <button className="py-2 px-3 bg-red-500 ml-[880px] mt-[100px] rounded-md text-white">View All Products</button>

        </main>
    )
}
export default Sale