import { FacebookIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";

export default function App() {
  const links = [
    { name: "Meu GitHub" },
    { name: "Portfólio" },
    { name: "Meu último vídeo" },
    { name: "Agenda" },
  ];

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="flex flex-col items-center justify-center w-full h-full px-8 space-y-6 bg-white/80 home-web">
        <div className="flex flex-col items-center gap-1 div-avatar">
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
          <p className="font-semibold text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit, vero eum
            maiores.
          </p>
        </div>
        <div className="flex flex-col items-center w-full gap-4 div-card">
          {links.map((item) => (
            <a
              key={item.name}
              href="#"
              target="_blank"
              className="bg-[#3C5335] font-semibold text-[#D4D4D4] w-full p-3 text-center rounded-xl text-xl border-b-8 border-r-8 border-[#C4FFB2] hover:bg-[#3C5335]/95"
            >
              {item.name}
            </a>
          ))}
          <div className="flex justify-around w-full px-12 mt-6">
            <LinkedinIcon className="w-10 h-10 rounded-sm text-[#3C5335] hover:scale-110 transition duration-200 sm:h-8 sm:w-8 hover:text-white hover:bg-blue-600 hover:rounded-sm" />
            <InstagramIcon className="w-10 h-10 text-[#3C5335] hover:scale-110 transition duration-200 sm:h-8 sm:w-8 hover:text-violet-400" />
            <FacebookIcon className="w-10 h-10 text-[#3C5335] hover:scale-110 transition duration-200 sm:h-8 sm:w-8 hover:text-blue-600" />
          </div>
        </div>
      </div>
    </div>
  );
}
