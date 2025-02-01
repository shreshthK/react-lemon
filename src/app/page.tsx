import { db } from "~/server/db";
import { SignedOut, SignedIn } from "@clerk/nextjs";
export const dynamic = 'force-dynamic';



async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (image, { desc }) => [desc(image.createdAt)]
  });

  return (
    <div className="flex flex-wrap gap-4">
      {
        images.map((image, index) => (
          <div key={index} className="flex flex-col gap-2 w-48">
            <img src={image.url} alt={image.name} />
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
