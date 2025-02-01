import { db } from "~/server/db";

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const images = await db.query.image.findMany({
    orderBy: (image, { desc }) => [desc(image.createdAt)]
  });
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {
          images.map((image,index) => ( 
            <div key={index} className="flex flex-col gap-2 w-48">
              <img src={image.url} alt={image.name} />
              <div className="text-sm text-gray-500">{image.name}</div>
            </div>
          ))
        }
      </div>
    </main>
  );
}
