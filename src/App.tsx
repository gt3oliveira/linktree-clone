import { FacebookIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";

export default function App() {

  const links = [
    { name: "Meu GitHub" },
    { name: "Portfólio" },
    { name: "Meu último vídeo" },
    { name: "Agenda" },
  ]

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="flex flex-col w-full h-full space-y-6 items-center justify-center bg-white/80 px-8 home-web">
        <div className="flex flex-col gap-1 items-center div-avatar">
          <Avatar className="w-32 h-32 sm:w-24 sm:h-24">
            <AvatarImage
              src="https://avatars.githubusercontent.com/u/94011588?v=4"
              alt="Your profile picture"
            />
            <AvatarFallback>GT</AvatarFallback>
          </Avatar>
          <span className="text-4xl text-[#3C5335]">
            Gustavo <strong>Tavares</strong>
          </span>
          <p className="text-center font-semibold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit, vero eum maiores.
          </p>
        </div>
        <div className="gap-4 flex flex-col w-full items-center div-card">
          {links.map(item => (
            <a key={item.name} href="#" target="_blank" className="bg-[#3C5335] font-semibold text-[#D4D4D4] w-full p-3 text-center rounded-xl text-xl border-b-8 border-r-8 border-[#C4FFB2] hover:bg-[#3C5335]/95">
              {item.name}
            </a>
          ))}
          <div className="flex w-full justify-around px-12 mt-6">
            <LinkedinIcon className="w-10 h-10 text-[#3C5335] hover:scale-110 transition duration-200 sm:h-8 sm:w-8" />
            <InstagramIcon className="w-10 h-10 text-[#3C5335] hover:scale-110 transition duration-200 sm:h-8 sm:w-8" />
            <FacebookIcon className="w-10 h-10 text-[#3C5335] hover:scale-110 transition duration-200 sm:h-8 sm:w-8" />
          </div>
        </div>
      </div>
    </div>
  )
}
