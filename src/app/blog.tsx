import React from "react";
import "./blog.css";

// SVG Icons
const SaveIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="133" height="139" viewBox="0 0 133 139" fill="none">
    <g filter="url(#filter0_d_1_1006)">
      <path d="M46.45 40.3C47.0023 40.3 47.45 40.7477 47.45 41.3V51.9C47.45 52.4523 47.8977 52.9 48.45 52.9H84.25C84.8023 52.9 85.25 52.4523 85.25 51.9V41.3C85.25 40.7477 85.6977 40.3 86.25 40.3H91.5721C93.2983 40.3 94.7 41.7018 94.7 43.4279V93.8721C94.6992 94.7014 94.3694 95.4965 93.7829 96.0829C93.1965 96.6693 92.4014 96.9992 91.5721 97H41.128C40.2986 96.9992 39.5035 96.6693 38.9171 96.0829C38.3307 95.4965 38.0008 94.7014 38 93.8721V43.4279C38 41.7018 39.4018 40.3 41.128 40.3H46.45ZM53.75 35C53.75 34.4477 54.1977 34 54.75 34H77.95C78.5023 34 78.95 34.4477 78.95 35V45.6C78.95 46.1523 78.5023 46.6 77.95 46.6H54.75C54.1977 46.6 53.75 46.1523 53.75 45.6V35Z" fill="url(#paint0_linear_1_1006)" shapeRendering="crispEdges"/>
      <path d="M46.4502 38.2998C48.1069 38.2999 49.4501 39.6431 49.4502 41.2998V50.9004H83.25V41.2998C83.2501 39.643 84.5932 38.2998 86.25 38.2998H91.5723C94.4029 38.2999 96.7001 40.5971 96.7002 43.4277V93.874C96.6988 95.233 96.1582 96.5361 95.1973 97.4971C94.2363 98.458 92.9332 98.9986 91.5742 99H41.126C39.7669 98.9986 38.4639 98.4581 37.5029 97.4971C36.5419 96.5361 36.0014 95.2331 36 93.874V43.4277C36.0001 40.5971 38.2972 38.2998 41.1279 38.2998H46.4502ZM77.9502 32C79.607 32.0001 80.9502 33.3432 80.9502 35V45.5996C80.9502 47.2564 79.607 48.5995 77.9502 48.5996H54.75C53.0931 48.5996 51.75 47.2565 51.75 45.5996V35C51.75 33.3431 53.0931 32 54.75 32H77.9502Z" stroke="#12110F" strokeOpacity="0.08" strokeWidth="4" shapeRendering="crispEdges"/>
    </g>
    <defs>
      <filter id="filter0_d_1_1006" x="0" y="0" width="132.7" height="139" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="17"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1006"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_1006" result="shape"/>
      </filter>
      <linearGradient id="paint0_linear_1_1006" x1="66.35" y1="34" x2="66.35" y2="97" gradientUnits="userSpaceOnUse">
        <stop stopColor="white"/>
        <stop offset="1" stopColor="#E0E0E0"/>
      </linearGradient>
    </defs>
  </svg>
);

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="139" height="139" viewBox="0 0 139 139" fill="none">
    <g filter="url(#filter0_d_849_133)">
      <path d="M69.5 34C86.888 34 101 48.112 101 65.5C101 82.888 86.888 97 69.5 97C52.112 97 38 82.888 38 65.5C38 48.112 52.112 34 69.5 34ZM73.65 65.5C73.0977 65.5 72.65 65.0523 72.65 64.5V53.9C72.65 53.3477 72.2023 52.9 71.65 52.9H67.35C66.7977 52.9 66.35 53.3477 66.35 53.9V64.5C66.35 65.0523 65.9023 65.5 65.35 65.5H59.3142C58.4233 65.5 57.9771 66.5771 58.6071 67.2071L68.7929 77.3929C69.1834 77.7834 69.8166 77.7834 70.2071 77.3929L80.3929 67.2071C81.0229 66.5771 80.5767 65.5 79.6858 65.5H73.65Z" fill="url(#paint0_linear_849_133)" shapeRendering="crispEdges"/>
      <path d="M69.5 32C87.9926 32 103 47.0074 103 65.5C103 83.9926 87.9926 99 69.5 99C51.0074 99 36 83.9926 36 65.5C36 47.0074 51.0074 32 69.5 32ZM68.3496 64.5C68.3496 66.1569 67.0065 67.5 65.3496 67.5H61.7285L69.5 75.2715L77.2715 67.5H73.6504C71.9935 67.5 70.6504 66.1569 70.6504 64.5V54.9004H68.3496V64.5Z" stroke="#12110F" strokeOpacity="0.08" strokeWidth="4" shapeRendering="crispEdges"/>
    </g>
    <defs>
      <filter id="filter0_d_849_133" x="0" y="0" width="139" height="139" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="17"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_849_133"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_849_133" result="shape"/>
      </filter>
      <linearGradient id="paint0_linear_849_133" x1="69.5" y1="34" x2="69.5" y2="97" gradientUnits="userSpaceOnUse">
        <stop stopColor="white"/>
        <stop offset="1" stopColor="#E0E0E0"/>
      </linearGradient>
    </defs>
  </svg>
);

// Arrow icon for "View all"
const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

interface BlogPost {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  image: string; // path to image
  icon: "save" | "download";
}

const posts: BlogPost[] = [
  {
    id: 1,
    category: "PRODUCTIVITY",
    title: "5 Ways to Streamline and Improve Your Team's Workflow and Efficiency.",
    excerpt: "Discover how to cut inefficiencies and boost productivity with these proven strategies. From task prioritization to automation, we've got you covered.",
    image: "SKYYY.png",
    icon: "save",
  },
  {
    id: 2,
    category: "PRODUCTIVITY",
    title: "The 5-Minute Rule: How to Overcome Procrastination",
    excerpt: "Struggling to get started? Learn how this simple method can help you brea...",
    image: "/images/blog-2.jpg",
    icon: "save",
  },
  {
    id: 3,
    category: "COLLABORATION",
    title: "Building a High-Trust Team in a Remote World",
    excerpt: "Remote work doesn't have to mean disconnected teams. Discover pr...",
    image: "/images/blog-3.jpg",
    icon: "download",
  },
  {
    id: 4,
    category: "PROJECT MANAGEMENT",
    title: "The Hidden Cost of Poor Task Management (And How to Fix It)",
    excerpt: "Missed deadlines and unclear priorities can cost your business...",
    image: "/images/blog-4.jpg",
    icon: "save",
  },
  {
    id: 5,
    category: "REMOTE WORK",
    title: "Asynchronous Workflows: The Future of Team Efficiency",
    excerpt: "Not everyone needs to be online at the same time. Learn how async...",
    image: "/images/blog-5.jpg",
    icon: "download",
  },
];

// ── Hero Card (first, wide) ──────────────────────────────────────────────────
const HeroCard: React.FC<{ post: BlogPost }> = ({ post }) => (
  <article className="blog-hero-card">
    {/* Left: image panel */}
    <div
      className="blog-hero-card__image"
      style={{ backgroundImage: `url(${post.image})` }}
    >
      <div className="blog-card__icon-wrap blog-card__icon-wrap--hero">
        <SaveIcon />
      </div>
    </div>

    {/* Right: text panel */}
    <div className="blog-hero-card__body">
      <div>
        <p className="blog-card__category">{post.category}</p>
        <h2 className="blog-hero-card__title">{post.title}</h2>
        <p className="blog-hero-card__excerpt">{post.excerpt}</p>
      </div>
    </div>
  </article>
);

// ── Small Card ───────────────────────────────────────────────────────────────
const SmallCard: React.FC<{ post: BlogPost }> = ({ post }) => (
  <article className="blog-small-card">
    {/* Left: image panel */}
    <div
      className="blog-small-card__image"
      style={{ backgroundImage: `url(${post.image})` }}
    >
      <div className="blog-card__icon-wrap blog-card__icon-wrap--small">
        {post.icon === "save" ? <SaveIcon /> : <DownloadIcon />}
      </div>
    </div>

    {/* Right: text panel */}
    <div className="blog-small-card__body">
      <div>
        <p className="blog-card__category">{post.category}</p>
        <h3 className="blog-small-card__title">{post.title}</h3>
        <p className="blog-small-card__excerpt">{post.excerpt}</p>
      </div>
    </div>
  </article>
);

// ── Section ──────────────────────────────────────────────────────────────────
const BlogSection: React.FC = () => {
  const [hero, ...rest] = posts;
  const row1 = rest.slice(0, 2);
  const row2 = rest.slice(2, 4);

  return (
    <section className="blog-section">
      {/* Header */}
      <div className="blog-section__header">
        <div className="blog-section__eyebrow">
          <span className="blog-section__dot" />
          <span className="blog-section__eyebrow-text">What's New?</span>
        </div>
        <div className="blog-section__title-row">
          <h1 className="blog-section__title">
            <span className="blog-section__title--accent">Insights</span>{" "}
            from the Clouuds.
          </h1>
          <button className="blog-section__view-all">
            View all <ArrowRight />
          </button>
        </div>
      </div>

      {/* Hero card */}
      <HeroCard post={hero} />

      {/* Grid rows */}
      <div className="blog-grid">
        {[...row1, ...row2].map((post) => (
          <SmallCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
