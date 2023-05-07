import { InstagramSmall } from "@/svg";
import Link from "next/link";

export const InstagramFeed = ({ feed }: any) => {
  const images = feed.data;
  return (
    <section>
      <h3 className="my-4 font-bold text-[20px] tracking-[1px]">Síguenos en Instagram</h3>
      <ul className="grid grid-cols-3 gap-2 mb-4">
        {images &&
          images.slice(0,5).map((image: any) => (
            <li key={image.id} className="relative group">
              <Link href={image.permalink} target="_blank" title="Ir a instagram" className="absolute z-[10] top-0 left-0 right-0 bottom-0"></Link>
              <img
                src={image.media_url}
                alt={image.caption}
                width={120}
                height={120}
                loading="lazy"
                className="rounded-sm object-cover object-center aspect-square"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black z-[9] transition-opacity duration-300 ease-linear opacity-0 group-hover:opacity-50 flex justify-center items-center">
                <InstagramSmall/>
              </div>           
            </li>
          ))}
      </ul>
    </section>
  );
};
