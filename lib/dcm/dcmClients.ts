import type { ClientItem } from "@/lib/siteData";

export const DCM_BASE_URL = "https://ninjainfosys.app.eshasan.com/api/public/dcm/digitalpalika";
export const DEFAULT_CLIENT_IMAGE = "/emblemofNepal.png";
const LOCATION_PROVINCE_SEPARATOR = "|";

export interface DcmSubContent {
  id: string;
  name: string;
  eng_name: string | null;
  description: string | null;
}

// Admins enter "<district> | <province>" in the sub-content description, e.g. "Rolpa | Lumbini Province".
function splitLocationAndProvince(description: string | null) {
  const [location = "", province = ""] = (description ?? "").split(LOCATION_PROVINCE_SEPARATOR);
  return { location: location.trim(), province: province.trim() };
}

export function toClientItem(item: DcmSubContent, index: number): ClientItem {
  const { location, province } = splitLocationAndProvince(item.description);
  return {
    id: index + 1,
    image: DEFAULT_CLIENT_IMAGE,
    name: { ne: item.name, en: item.eng_name || item.name },
    location,
    province,
  };
}
