import pb from "@/lib/pocketbase";

const BANNERS_COLLECTION = "NinjaInfosys_Banner";

export async function getBannerByImgName(imgName: string): Promise<string | null> {
  try {
    const records: any[] = await pb.collection(BANNERS_COLLECTION).getFullList();
    const target = imgName.toLowerCase();

    const match = records.find((r: any) => {
      const name =
        (r.ImgName ??
          r.imgName ??
          r.imgname ??
          "").toString().toLowerCase();
      return name === target;
    });

    
    if (!match) return null;

    const file =
      match.Banner_Image ??
      match.banner_image ??
      match.BannerImage ??
      match.bannerImage;

    if (!file) return null;

    return pb.files.getUrl(match, file);
  } catch (e) {
    console.error("Error fetching banner by ImgName:", e);
    return null;
  }
}
