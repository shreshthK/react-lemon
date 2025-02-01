import { getImageById } from "~/server/queries";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const image = await getImageById(parseInt(photoId));
  return (
    <div>
      <img src={image.url} alt={image.name} width={480} height={480} />
    </div>
  );
}