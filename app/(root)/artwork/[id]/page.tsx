import { getGallery } from "@/lib/actions/getGallery"

type SearchParamProps = {
  params: {
    id: string
  },
  searchParams: URLSearchParams
}

const ArtworkDetail = async ({
  params: { id },
  searchParams,
}: SearchParamProps) => {
  const artwork = await getGallery({id})

  if(!artwork) {
    return <div className="flex w-full h-full my-20 items-center justify-center text-3xl">Artwork not found</div>
  }
  return (
    <div>
      {artwork.name}
    </div>
  )
}

export default ArtworkDetail