import { getImageById } from "~/server/queries";
export default async function PhotoModal(props: {
  params: { id: string };
}) {
  const { id } = await props.params;
  const image = await getImageById(parseInt(id));
  return (
      <img src={image.url} alt={image.name} width={380} height={380} />
  );
}