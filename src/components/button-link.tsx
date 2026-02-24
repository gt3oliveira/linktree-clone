interface Link {
  name: string;
}
export const ButtonLink = ({ links }: { links: Link[] }) => {
  return (
    <div className="flex flex-col w-full gap-4">
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
    </div>
  );
};
