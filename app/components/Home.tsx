import Image from "next/image";

const HomeView = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8 py-8 px-20">
        <div className="flex-1">
          <HeaderText />
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/profile_image.png"
            height={500}
            width={500}
            alt="header image"
            className="object-contain"
            priority
          />
        </div>
      </div>
    )
}



const HeaderText = () => {
    return (
        <div className="flex flex-col text-6xl gap-y-6">
            <p>MY NAME <br></br> IS <b className="font-extrabold">LUCAS LEBELWANE</b></p>
            
            <p className="text-3xl">Systems Developer</p>

            <div className="bg-black py-2 px-4 text-white text-lg w-max">{"LET'S TALK WITH ME"}</div>

            <span className="text-lg flex items-center gap-x-20"><p>{"+27 79 044 6226"}</p> <p>{"lebelwane@protonmail.com"}</p></span>
        </div>
    )
}

export default HomeView;