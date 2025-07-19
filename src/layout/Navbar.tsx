export default function Navbar(){
    return(
       <header className="bg-darkgray-500 text-palegray-500 p-8 flex flex-row justify-between">
        <img src={'./bh-logo.png'} className="max-w-[60px]" />
        <nav className="flex flex-row text-palegray-500 font-bold gap-8 text-lg justify-center place-items-center">
            <p>about</p>
            <p>contact</p>
        </nav>
       </header>
    )
}