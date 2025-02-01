import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";

export async function getImages() {

    const user = await auth();
    if (!user.userId) {
        throw new Error("Unauthorized");
    }

    const images = await db.query.images.findMany({
        where: (image, { eq }) => eq(image.userId, user.userId),
        orderBy: (image, { desc }) => [desc(image.createdAt)]
    });
    return images;
}

export async function getImageById(id: number) {
    const user = await auth();
    if (!user.userId) throw new Error("Unauthorized");
  
    const image = await db.query.images.findFirst({
      where: (model, { eq }) => eq(model.id, id),
    });
    if (!image) throw new Error("Image not found");
  
    if (image.userId !== user.userId) throw new Error("Unauthorized");
  
    return image;
  }
