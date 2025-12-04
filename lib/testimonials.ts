import pb from "@/lib/pocketbase"

export type TestimonialRecord = {
  nameEn: string
  nameNe: string
  quoteEn: string
  quoteNe: string
  image?: string
}

const TESTIMONIALS_COLLECTION = "NinjaLanding_Testimonials"

export async function fetchTestimonials(): Promise<TestimonialRecord[]> {
  const records: any[] = await pb
    .collection(TESTIMONIALS_COLLECTION)
    .getFullList({ sort: "-created" })

  return records.map((r: any) => {
    const nameEn: string = r.Name_EN ?? ""
    const nameNe: string = r.Name_NE ?? ""
    const quoteEn: string = r.Quote_en ?? ""
    const quoteNe: string = r.Quote_ne ?? ""
    const fileField = r.Image ?? r.image
    const image = fileField ? pb.files.getUrl(r, fileField) : undefined

    return {
      nameEn,
      nameNe,
      quoteEn,
      quoteNe,
      image,
    }
  })
}
