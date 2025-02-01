import { getImageById } from "~/server/queries";
import Image from "next/image";
import { Dialog, DialogContent } from "~/components/ui/dialog";

export default async function ImageModal({
  params: { id: photoId },
}: {
  params: { id: number };
}) {
//   const image = await getImageById(id);
  
//   if (!image) return null;

//   return (
//     <Dialog defaultOpen>
//       <DialogContent className="max-w-4xl" onInteractOutside={() => window.history.back()}>
//         <div className="flex flex-col gap-4">
//           <Image
//             src={image.url}
//             alt={image.name}
//             width={800}
//             height={800}
//             className="w-full"
//             unoptimized
//           />
//           <div className="text-lg">{image.name}</div>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
}