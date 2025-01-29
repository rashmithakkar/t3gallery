// import FullPageImageView from "~/components/full-image-page";

import FullPageImageView from "~/app/components/full-image-page";
import { Modal } from "./modal";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const photoId = (await params).id;
  const idAsNumber = Number(photoId);

  if(Number.isNaN(idAsNumber)) throw new Error("Invalid ID"); 

  return (
  <Modal>
     <FullPageImageView id={idAsNumber}/>
  </Modal>
  );
}