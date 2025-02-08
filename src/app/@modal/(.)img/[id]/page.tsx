import { getImageById } from "~/server/queries";
import { Modal } from "./modal";
export default async function PhotoModal({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const image = await getImageById(parseInt(id));
  return (
    <Modal>
      <img src={image.url} alt={image.name} width={380} height={380} />
    </Modal>
  );
}