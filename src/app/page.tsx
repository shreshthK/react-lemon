import Link from "next/link";

const mockUrls = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg"
]

const mockImages = mockUrls.map((url, index) => ({
  url,
  id: index + 1
}))

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
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
