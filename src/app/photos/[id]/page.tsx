
export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const photoId = (await params).id;
  const idAsNumber = Number(photoId);

  if(Number.isNaN(idAsNumber)) throw new Error("Invalid ID"); 

  return <div>ROUTE {photoId}</div>;
}