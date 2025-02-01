export default async function PhotoModal({
    params: { id: photoId },
  }: {
    params: { id: string };
  }) {
    return (
      <div>
        <div>{photoId}</div>
      </div>
    );
  }