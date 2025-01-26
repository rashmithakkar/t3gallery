import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

// const mockUrls = [
//   "https://cdhvx2folz.ufs.sh/f/DUywFna8ETzArxiDKQ5LPcoByFnj9e4dZWA2atgqI3Di76SY",
//   "https://cdhvx2folz.ufs.sh/f/DUywFna8ETzAxmLliYt0gcHhjzSaLfmRrNlbo7eIA4qwYG13",
//   "https://cdhvx2folz.ufs.sh/f/DUywFna8ETzAmyjeFvIn0jh3w8koWKptgPivDuGQF5qEfcRJ",
//   "https://cdhvx2folz.ufs.sh/f/DUywFna8ETzAvxv839qeWgF3TSb4HPEMpqwosth0KijAkO7n",
//   "https://cdhvx2folz.ufs.sh/f/DUywFna8ETzAp8ySIZqudgfW48OEhYm9IMrkTHCVS5Aqxn2b",
//   "https://cdhvx2folz.ufs.sh/f/DUywFna8ETzAuQXierUdXF8ZQj4cmGDxTM0swg9qyeYrtbzL",
//   "https://cdhvx2folz.ufs.sh/f/DUywFna8ETzAYT3S6JkyNk2tLQaf1wEO46dAbIJDgsMeqclp",
//   "https://cdhvx2folz.ufs.sh/f/DUywFna8ETzAQG0EUnNuUbcSR1sqa3iEp4mGzeNBkvXCPVtj",
//   "https://cdhvx2folz.ufs.sh/f/DUywFna8ETzANgceYsrvKBYx3iRECSF98qTsLnWuOAopP2jG",
//   "https://cdhvx2folz.ufs.sh/f/DUywFna8ETzAwVAf3TKengODUKhP5l0ZAuHBQXyptsIzwb8L",
//   "https://cdhvx2folz.ufs.sh/f/DUywFna8ETzA4INh81xdIejs8NaUWhgTPiQcDV6n0fbvZ97M",
//   "https://cdhvx2folz.ufs.sh/f/DUywFna8ETzA8JDfeKGljGCX2baL3hrnZIiHdVxTo76g9Q5c"
// ]

// const mockImages = mockUrls.map((url, index) => ({
//   id: index + 1,
//   url,
// }));

async function Images() {
  const images = await db.query.images.findMany(
  {
    orderBy:(model, { desc }) => desc(model.id),
  }
);
return (
    <div className="flex flex-wrap gap-4">
      {images.map((image, index) => (
        <div key={image.id + '-' + index} className="w-48 flex-col">
          <img src={image.url} />
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  )
}

export default async function HomePage() {

  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-2xl text-center">Please Sign In above</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
