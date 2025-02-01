import { db } from "~/server/db";

export const dynamic = 'force-dynamic';

const mockUrls = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg"
]

const mockImages = mockUrls.map((url, index) => ({
  url,
  id: index + 1
}))

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {
          posts.map((post) => (
            <div key={post.id}>
              {post.name}
            </div>
          ))
        }
        {
          [...mockImages, ...mockImages, ...mockImages].map((image,index) => ( 
            <div key={index} className="w-48">
              <img src={image.url} alt={`Image ${image.id}`} />
            </div>
          ))
        }
      </div>
    </main>
  );
}
