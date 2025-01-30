import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

async function Images() {
const images = await getMyImages();

return (
  <div className="flex flex-wrap gap-4 justify-center p-4">
  {images.map((img) => (
    <div key={img.id} className="w-48 h-40 flex flex-col">
      <div className="relative h-32">
        <Link href={`/photos/${img.id}`} key={img.id} passHref>
          <Image 
            src={img.url}
            className="object-cover"
            alt={img.name}
            fill={true}
          />
        </Link>
      </div>  
      <div className="mt-1">{img.name}</div>
    </div>
  ))}
</div>
  )
}

export default async function HomePage() {

  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-2xl text-center">Please Sign In above</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
