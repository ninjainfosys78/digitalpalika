import "server-only";
import pb from "@/lib/pocketbase";

export type PostMeta = {
  slug: string;
  title: string;
  deck: string;
  readTime: string;
  kicker: string;
  date: string;
  image: string;
  excerpt: string;
};

const BLOGS_COLLECTION = "Ninja_Blogs";

function getImageUrl(record: any): string {
  if (!record.Image) return "";
  return pb.files.getURL(record, record.Image);
}

function calculateReadTime(content: string): string {
  if (!content) return "";
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

function buildExcerpt(content: string, maxLen = 220): string {
  const plain = content.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
  if (!plain) return "";
  if (plain.length <= maxLen) return plain;
  return plain.slice(0, maxLen) + "...";
}

export async function getAllPostsMeta(): Promise<PostMeta[]> {
  const records = await pb.collection(BLOGS_COLLECTION).getFullList({
    sort: "-Published_date",
  });

  const posts: PostMeta[] = records.map((r: any) => {
    const content: string = r.Content ?? "";
    const rawSlug = r.Slug || r.Title || "insight";
    const slug = rawSlug.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-");

    return {
      slug: slug,
      title: r.Title ?? "",
      deck: "",
      readTime: r.ReadTime || calculateReadTime(content),
      kicker: r.Kicker ?? "",
      date: r.Published_date ?? "",
      image: getImageUrl(r),
      excerpt: buildExcerpt(content),
    };
  });

  // Ensure mandatory topics are present (fallback if not in DB)
  const mandatorySlugs = [
    "what-can-data-really-do-turning-numbers-into-decisions",
    "scaling-reliability-multi-region-architecture",
    "the-choreography-of-change",
    "from-paper-to-platform",
  ];
  mandatorySlugs.forEach((mSlug, idx) => {
    if (!posts.some((p) => p.slug === mSlug)) {
      let title = "";
      let date = "2024-12-12";
      let readTime = "5 min read";
      let image = "/assets/insights/newspaper.jpg";
      let excerpt = "...";

      if (mSlug.includes("data-really-do")) {
        title = "What Can Data Really Do: Turning Numbers Into Decisions That Matter";
        date = "2026-10-20";
        readTime = "5 min read";
        image = "/assets/insights/newspaper.jpg";
        excerpt = "Data is no longer something that lives quietly in a spreadsheet. It is the invisible signal that lets two planes change course...";
      } else if (mSlug.includes("scaling-reliability")) {
        title = "What Scaling Reliability: What Enterprises Forget About Multi-Region Architecture";
        date = "2026-10-18";
        readTime = "7 min read";
        image = "/assets/insights/choreography-change.jpg";
        excerpt = "Intelligent systems are transforming how we plan, book, and experience journeys.";
      } else if (mSlug === "the-choreography-of-change") {
        title = "The choreography of change";
        date = "2024-12-12";
        readTime = "4 min read";
        image = "/assets/insights/choreography-change.jpg";
        excerpt = "Understanding the delicate balance of organizational change...";
      } else if (mSlug === "from-paper-to-platform") {
        title = "From Paper to Platform: How Digital E-Palika Modernized Municipal Governance";
        date = "2025-01-14";
        readTime = "8 min read";
        image = "/assets/insights/newspaper.jpg";
        excerpt = "Building reliable digital platforms from manual processes...";
      }

      posts.push({
        slug: mSlug,
        title,
        deck: "",
        readTime,
        kicker: "Insight",
        date,
        image,
        excerpt,
      });
    }
  });

  // Sort by date descending
  posts.sort((a, b) => {
    const dA = new Date(a.date).getTime() || 0;
    const dB = new Date(b.date).getTime() || 0;
    return dB - dA;
  });

  return posts;
}

export async function getPostBySlug(slug: string): Promise<{
  meta: PostMeta;
  content: string;
} | null> {
  try {
    const record: any = await pb
      .collection(BLOGS_COLLECTION)
      .getFirstListItem(`Slug = "${slug}"`);

    const content: string = record.Content ?? "";

    const meta: PostMeta = {
      slug: record.Slug,
      title: record.Title ?? "",
      deck: "",
      readTime: record.ReadTime || calculateReadTime(content),
      kicker: record.Kicker ?? "",
      date: record.Published_date ?? "",
      image: getImageUrl(record),
      excerpt: buildExcerpt(content),
    };

    return { meta, content };
  } catch {
    // Fallback for mandatory items if DB record is missing
    if (slug.includes("data-really-do")) {
      return {
        meta: {
          slug: slug,
          title: "What Can Data Really Do: Turning Numbers Into Decisions That Matter",
          deck: "",
          readTime: "5 min read",
          kicker: "Insight",
          date: "2026-10-20",
          image: "/assets/insights/newspaper.jpg",
          excerpt: "Data is no longer something that lives quietly in a spreadsheet...",
        },
        content: "Data is no longer something that lives quietly in a spreadsheet. It is the push notification that tells you your parcel has arrived. It is the invisible signal that lets two planes change course and avoid each other in the sky. Every second, millions of such tiny events are created. When you connect them, they stop being 'data' and start becoming decisions.",
      };
    }
    if (slug.includes("scaling-reliability")) {
      return {
        meta: {
          slug: slug,
          title: "What Scaling Reliability: What Enterprises Forget About Multi-Region Architecture",
          deck: "",
          readTime: "7 min read",
          kicker: "Insight",
          date: "2026-10-18",
          image: "/assets/insights/choreography-change.jpg",
          excerpt: "Intelligent systems are transforming how we plan, book, and experience journeys.",
        },
        content: "Scaling reliability is about more than just redundant servers. It is about understanding the choreography of systems across regions. This article explores why enterprises often fail at multi-region architecture and how to get it right.",
      };
    }
    if (slug === "from-paper-to-platform") {
      return {
        meta: {
          slug: "from-paper-to-platform",
          title: "From Paper to Platform: How Digital E-Palika Modernized Municipal Governance",
          deck: "",
          readTime: "8 min read",
          kicker: "Insight",
          date: "2025-01-14",
          image: "/assets/insights/newspaper.jpg",
          excerpt: "Building reliable digital platforms from manual processes...",
        },
        content: "Detailed case study on how E-Palika transformed municipal governance by moving from paper files to a integrated digital platform.",
      };
    }
    if (slug === "the-choreography-of-change") {
      return {
        meta: {
          slug: "the-choreography-of-change",
          title: "The choreography of change",
          deck: "",
          readTime: "4 min read",
          kicker: "Insight",
          date: "2024-12-12",
          image: "/assets/insights/choreography-change.jpg",
          excerpt: "Understanding the delicate balance of organizational change...",
        },
        content: "Change is not just a decision, it is a dance. This insight explores how to lead teams through transition with precision and empathy.",
      };
    }
    return null;
  }
}
