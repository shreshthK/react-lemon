import { getImageById } from "~/server/queries";
import { Modal } from "./modal";
export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const image = await getImageById(parseInt(photoId));
  return (
    <Modal>
      <img src={image.url} alt={image.name} width={380} height={380} />
    </Modal>
  );
}