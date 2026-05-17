import pb from "@/lib/pocketbase";

export type AboutGeneralData = {
  whoTitle: string | null;
  whoDesc: string | null;
  coreTitle: string | null;
  principlesTitle: string | null;
  storyTitle: string | null;
  storyDesc: string | null;
  storySubtitle: string | null;
  storyFooter: string | null;
  leadershipSubtitle?: string | null;
  leadershipTitle?: string | null;
  leadershipHighlight?: string | null;
};

export type PrincipleItem = {
  title: string;
  body: string;
};

export type TimelineEvent = {
  year: string;
  title: string;
  text: string;
};

export type FeatureItem = {
  icon: string;
  title: string;
  desc: string;
};

export type CorePillarItem = {
  icon: string;
  title: string;
  body: string;
};

// Helper to safely get field from PocketBase record with case insensitivity
function getField(record: any, key: string): string {
  if (!record) return "";
  const lowerKey = key.toLowerCase();
  for (const rKey of Object.keys(record)) {
    if (rKey.toLowerCase() === lowerKey) {
      return record[rKey] || "";
    }
  }
  return "";
}

/**
 * Fetches general titles/subtitles for the about page from PocketBase collection "Ninja_about_general".
 * Falls back gracefully to null on error.
 */
export async function getAboutGeneral(lang: "en" | "ne"): Promise<AboutGeneralData | null> {
  try {
    const record = await pb.collection("Ninja_about_general").getFirstListItem("");
    if (!record) return null;

    const isEn = lang === "en";
    return {
      whoTitle: getField(record, isEn ? "who_we_are_title_en" : "who_we_are_title_ne"),
      whoDesc: getField(record, isEn ? "who_we_are_desc_en" : "who_we_are_desc_ne"),
      coreTitle: getField(record, isEn ? "core_title_en" : "core_title_ne"),
      principlesTitle: getField(record, isEn ? "principles_title_en" : "principles_title_ne"),
      storyTitle: getField(record, isEn ? "story_title_en" : "story_title_ne"),
      storyDesc: getField(record, isEn ? "story_desc_en" : "story_desc_ne"),
      storySubtitle: getField(record, isEn ? "story_subtitle_en" : "story_subtitle_ne"),
      storyFooter: getField(record, isEn ? "story_footer_en" : "story_footer_ne"),
      leadershipSubtitle: getField(record, isEn ? "leadership_subtitle_en" : "leadership_subtitle_ne"),
      leadershipTitle: getField(record, isEn ? "leadership_title_en" : "leadership_title_ne"),
      leadershipHighlight: getField(record, isEn ? "leadership_highlight_en" : "leadership_highlight_ne"),
    };
  } catch (e) {
    console.error("Error fetching Ninja_about_general:", e);
    return null;
  }
}

/**
 * Fetches engineering principles list from PocketBase collection "about_principles".
 * Falls back gracefully to an empty array on error.
 */
export async function getPrinciples(lang: "en" | "ne"): Promise<PrincipleItem[]> {
  try {
    const records = await pb.collection("about_principles").getFullList({
      sort: "order,created",
    });

    const isEn = lang === "en";
    return records.map((record: any) => ({
      title: getField(record, isEn ? "title_en" : "title_ne"),
      body: getField(record, isEn ? "body_en" : "body_ne"),
    }));
  } catch (e) {
    return [];
  }
}

/**
 * Fetches the milestones timeline from PocketBase collection "Ninja_about_timeline".
 * Falls back gracefully to an empty array on error.
 */
export async function getTimeline(lang: "en" | "ne"): Promise<TimelineEvent[]> {
  try {
    const records = await pb.collection("Ninja_about_timeline").getFullList({
      sort: "year,created",
    });

    const isEn = lang === "en";
    return records.map((record: any) => ({
      year: getField(record, "year"),
      title: getField(record, isEn ? "title_en" : "title_ne"),
      text: getField(record, isEn ? "description_en" : "description_ne"),
    }));
  } catch (e) {
    console.error("Error fetching Ninja_about_timeline:", e);
    return [];
  }
}

/**
 * Fetches company features list from PocketBase collection "about_features".
 * Falls back gracefully to an empty array on error.
 */
export async function getFeatures(lang: "en" | "ne"): Promise<FeatureItem[]> {
  try {
    const records = await pb.collection("about_features").getFullList({
      sort: "order,created",
    });

    const isEn = lang === "en";
    return records.map((record: any) => ({
      icon: getField(record, "icon"),
      title: getField(record, isEn ? "title_en" : "title_ne"),
      desc: getField(record, isEn ? "description_en" : "description_ne"),
    }));
  } catch (e) {
    return [];
  }
}

/**
 * Fetches core pillars list from PocketBase collection "about_core".
 * Falls back gracefully to an empty array on error.
 */
export async function getCorePillars(lang: "en" | "ne"): Promise<CorePillarItem[]> {
  try {
    const records = await pb.collection("about_core").getFullList({
      sort: "order,created",
    });

    const isEn = lang === "en";
    return records.map((record: any) => ({
      icon: getField(record, "icon"),
      title: getField(record, isEn ? "title_en" : "title_ne"),
      body: getField(record, isEn ? "description_en" : "description_ne"),
    }));
  } catch (e) {
    return [];
  }
}
