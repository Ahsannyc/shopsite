import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple } from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'

function Hero(){
    return(
    <div className="w-full h-[275px] flex justify-center mt-6">
        <div className='bg-black h-full w-[80%] flex justify-between'>
            {/* left side */}
            <div className='ml-8 mt-16 text-white'>
                <div className='flex justify-center items-center'>
                    <span> <FontAwesomeIcon icon={faApple} className='w-[30px]' /></span>
                    <span className='ml-4'>iphone 14 Series</span>
                </div>
                <div className='w-[200px]'>
                    <h1 className='text-3xl font-sans font-bold ml-5'>Up to 10% off Voucher</h1>
                    <button className='font-bold underline underline-offset-8 mt-8 ml-5'>Shop Now</button>
                </div>
            </div>

            {/* right side */}
            <div>
                <Image src={"/images/hero.png"} width={380} height={200} alt="Heroimage" className='mt-5'></Image>
            </div>
        </div>
    </div>
    )
}
export default Hero
