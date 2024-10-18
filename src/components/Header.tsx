import Link from "next/link"

function Header(){
    return(
        <div className="w-full h-[80px] flex justify-center items-center border-b-2">
            <div className="w-[80%] h-full flex justify-between items-center">
                {/* left side */}
                <div>
                    {/* logo */}
                    <h1 className="text-3xl font-bold">Exclusive</h1>
                </div>

                {/* right side */}
                <div>
                   <ul className="flex gap-x-5 mr-4">
                    <li>
                        <Link className="hover:underline" href={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link className="hover:underline" href={"/"}>about</Link>
                    </li>
                    <li>
                        <Link className="hover:underline" href={"/"}>contact</Link>
                    </li>
                    <li>
                        <Link className="hover:underline" href={"/"}>sign up</Link>
                    </li>
                    
                    </ul> 
                </div>

            </div>

        </div>
    )
}
export default Header