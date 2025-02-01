import { SignedOut, SignedIn } from "@clerk/nextjs";
import Image from "next/image";
export const dynamic = 'force-dynamic';
import { getImages } from "~/server/queries";


async function Images() {
  const images = await getImages();
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {
        images.map((image, index) => (
          <div key={index} className="flex flex-col gap-2 w-48">
            <Image 
              src={image.url} 
              alt={image.name} 
              width={480} 
              height={480}
              unoptimized
            />
            <div className="text-sm text-gray-500">{image.name}</div>
          </div>
        ))
      }
    </div>
  )
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl font-bold">Welcome to React Lemon Gallery</h1>
          <p className="text-lg">Please sign in to continue</p>
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
