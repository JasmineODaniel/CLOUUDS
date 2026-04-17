import React from "react";
import "./blog.css";

// SVG Icons
const SaveIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="133" height="139" viewBox="0 0 133 139" fill="none">
    <g filter="url(#filter0_d_855_131)">
      <path d="M46.45 40.3C47.0023 40.3 47.45 40.7477 47.45 41.3V51.9C47.45 52.4523 47.8977 52.9 48.45 52.9H84.25C84.8023 52.9 85.25 52.4523 85.25 51.9V41.3C85.25 40.7477 85.6977 40.3 86.25 40.3H91.5721C93.2983 40.3 94.7 41.7018 94.7 43.428V93.8721C94.6992 94.7014 94.3694 95.4965 93.7829 96.0829C93.1965 96.6693 92.4014 96.9992 91.5721 97H41.128C40.2986 96.9992 39.5035 96.6693 38.9171 96.0829C38.3307 95.4965 38.0008 94.7014 38 93.8721V43.428C38 41.7018 39.4018 40.3 41.128 40.3H46.45ZM53.75 35C53.75 34.4477 54.1977 34 54.75 34H77.95C78.5023 34 78.95 34.4477 78.95 35V45.6C78.95 46.1523 78.5023 46.6 77.95 46.6H54.75C54.1977 46.6 53.75 46.1523 53.75 45.6V35Z" fill="url(#paint0_linear_855_131)" shapeRendering="crispEdges"/>
      <path d="M46.4502 38.2998C48.1069 38.2999 49.4501 39.6431 49.4502 41.2998V50.9004H83.25V41.2998C83.2501 39.643 84.5932 38.2998 86.25 38.2998H91.5723C94.4029 38.2999 96.7001 40.5971 96.7002 43.4277V93.874C96.6988 95.233 96.1582 96.5361 95.1973 97.4971C94.2363 98.458 92.9332 98.9986 91.5742 99H41.126C39.7669 98.9986 38.4639 98.4581 37.5029 97.4971C36.5419 96.5361 36.0014 95.2331 36 93.874V43.4277C36.0001 40.5971 38.2972 38.2998 41.1279 38.2998H46.4502ZM77.9502 32C79.607 32.0001 80.9502 33.3432 80.9502 35V45.5996C80.9502 47.2564 79.607 48.5995 77.9502 48.5996H54.75C53.0931 48.5996 51.75 47.2565 51.75 45.5996V35C51.75 33.3431 53.0931 32 54.75 32H77.9502Z" stroke="#12110F" strokeOpacity="0.08" strokeWidth="4" shapeRendering="crispEdges"/>
    </g>
    <defs>
      <filter id="filter0_d_855_131" x="0" y="0" width="132.7" height="139" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="17"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_855_131"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_855_131" result="shape"/>
      </filter>
      <linearGradient id="paint0_linear_855_131" x1="66.35" y1="34" x2="66.35" y2="97" gradientUnits="userSpaceOnUse">
        <stop stopColor="white"/>
        <stop offset="1" stopColor="#E0E0E0"/>
      </linearGradient>
    </defs>
  </svg>
);

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="131" height="141" viewBox="0 0 131 141" fill="none">
    <g filter="url(#filter0_d_855_132)">
      <path d="M47.6533 48.6497C47.6533 48.6494 47.6535 48.6491 47.6537 48.6489C52.6739 44.6267 58.9173 42.4397 65.35 42.45C71.7224 42.45 77.6038 44.5511 82.3391 48.1012C82.7468 48.4068 83.3193 48.3766 83.6796 48.0163L86.9166 44.7794C87.3071 44.3888 87.9402 44.3888 88.3308 44.7794L91.3707 47.8192C91.7612 48.2098 91.7612 48.8429 91.3707 49.2335L88.1332 52.4709C87.7731 52.831 87.7428 53.4031 88.0479 53.8108C91.0612 57.8374 92.9526 62.598 93.5198 67.6059C94.1207 72.9103 93.2117 78.2767 90.8974 83.0873C88.5831 87.898 84.9575 91.9575 80.4379 94.7986C75.9183 97.6397 70.6884 99.1469 65.35 99.1469C60.0116 99.1469 54.7817 97.6397 50.2621 94.7986C45.7425 91.9575 42.117 87.898 39.8026 83.0873C37.4883 78.2767 36.5793 72.9103 37.1802 67.6059C37.7475 62.5981 39.6387 57.8376 42.6519 53.8111C42.9571 53.4032 42.9267 52.831 42.5664 52.4709L39.3299 49.2366C38.9391 48.8461 38.939 48.2128 39.3296 47.8222L42.3693 44.7825C42.7598 44.392 43.3929 44.392 43.7835 44.7825L47.6515 48.6505C47.6521 48.6512 47.6533 48.6507 47.6533 48.6497ZM69.5 67.65C68.9477 67.65 68.5 67.2023 68.5 66.65V56.4012C68.5 55.4461 67.2892 55.0345 66.7072 55.7918L53.9871 72.3406C53.4816 72.9983 53.9504 73.95 54.7799 73.95H61.2C61.7523 73.95 62.2 74.3977 62.2 74.95V85.1849C62.2 86.1397 63.4105 86.5514 63.9926 85.7946L76.7118 69.2597C77.2176 68.6021 76.7488 67.65 75.9192 67.65H69.5ZM52.75 34C52.75 33.4477 53.1977 33 53.75 33H76.95C77.5023 33 77.95 33.4477 77.95 34V38.3C77.95 38.8523 77.5023 39.3 76.95 39.3H53.75C53.1977 39.3 52.75 38.8523 52.75 38.3V34Z" fill="url(#paint0_linear_855_132)" shapeRendering="crispEdges"/>
      <path d="M65.3516 40.9502C71.9135 40.9505 77.9843 43.0691 82.9131 46.6611L85.8555 43.7188L86.0459 43.5469C86.9623 42.7996 88.2848 42.7997 89.2012 43.5469L89.3916 43.7188L92.4316 46.7588C93.4076 47.735 93.4076 49.3177 92.4316 50.2939L89.4883 53.2363C92.5219 57.4062 94.4286 62.2985 95.0107 67.4375C95.6433 73.0224 94.6856 78.6723 92.249 83.7373C89.8123 88.8024 85.995 93.0769 81.2363 96.0684C76.4776 99.0598 70.9705 100.646 65.3496 100.646C59.7289 100.646 54.2225 99.0597 49.4639 96.0684C44.7052 93.0769 40.8879 88.8025 38.4512 83.7373C36.0145 78.6723 35.0569 73.0224 35.6895 67.4375C36.2716 62.2989 38.1777 57.407 41.2109 53.2373L38.2695 50.2979C37.2928 49.3217 37.2923 47.7383 38.2686 46.7617L41.3086 43.7217C42.2848 42.7455 43.8674 42.7457 44.8438 43.7217L47.7842 46.6621C52.8749 42.9483 59.0251 40.9407 65.3496 40.9502H65.3516ZM55.7949 72.4502H61.2002C62.5808 72.4503 63.7002 73.5695 63.7002 74.9502V83.7139L74.9023 69.1504H69.5C68.1194 69.1504 67.0002 68.0309 67 66.6504V57.8721L55.7949 72.4502ZM46.7275 47.4688C46.6794 47.5059 46.6334 47.5459 46.5898 47.5889L46.5908 47.5898C46.63 47.5505 46.672 47.5136 46.7158 47.4785L46.7275 47.4688ZM76.9502 31.5L77.2061 31.5127C78.4665 31.6409 79.4502 32.7057 79.4502 34V38.2998C79.4502 39.6805 78.3308 40.7997 76.9502 40.7998H53.75C52.3693 40.7998 51.25 39.6805 51.25 38.2998V34C51.25 32.6193 52.3693 31.5 53.75 31.5H76.9502Z" stroke="#12110F" strokeOpacity="0.08" strokeWidth="3" shapeRendering="crispEdges"/>
    </g>
    <defs>
      <filter id="filter0_d_855_132" x="0" y="0" width="130.7" height="140.147" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="17"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_855_132"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_855_132" result="shape"/>
      </filter>
      <linearGradient id="paint0_linear_855_132" x1="65.35" y1="33" x2="65.35" y2="99.1469" gradientUnits="userSpaceOnUse">
        <stop stopColor="white"/>
        <stop offset="1" stopColor="#E0E0E0"/>
      </linearGradient>
    </defs>
  </svg>
);

const TwoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="124" height="124" viewBox="0 0 124 124" fill="none">
    <g filter="url(#filter0_d_855_227)">
      <path d="M82.3899 41.1722H84.2505C85.7003 41.1722 86.8755 42.3475 86.8755 43.7972V62.1721C86.8755 63.6219 85.7003 64.7971 84.2505 64.7971H79.5151C79.1922 64.7971 78.8891 64.6411 78.7014 64.3783L68.0587 49.4786C66.7531 47.6508 64.4294 46.8561 62.278 47.5015L55.7542 49.4586C53.9042 50.0136 51.899 49.5081 50.5333 48.1424L49.7648 47.3738C48.5934 46.2025 48.7865 44.2524 50.1648 43.3336L64.3425 33.8817C66.0724 32.7286 68.3194 32.7047 70.0734 33.8208L80.9808 40.7618C81.4019 41.0298 81.8909 41.1722 82.3899 41.1722ZM44.9461 62.9459L40.7047 66.6572C39.4673 67.7397 39.5186 69.6806 40.8115 70.6968L54.306 81.2994C55.5662 82.2896 57.4118 81.9292 58.2069 80.5376L60.0546 77.3042C61.1833 75.3289 60.9114 72.8514 59.381 71.168L52.2879 63.3654C50.3636 61.2486 47.099 61.0622 44.9461 62.9459ZM47.9796 40.0574C48.6581 39.605 48.3379 38.5474 47.5224 38.5474H39.625C38.1753 38.5474 37 39.7226 37 41.1724V60.9013C37 61.8844 37.2754 62.8337 37.7774 63.6507C37.849 63.7672 38.009 63.7839 38.1119 63.6938L42.3532 59.9826C46.1207 56.6861 51.834 57.0124 55.2014 60.7168L62.2948 68.5193C64.9728 71.4651 65.4487 75.8008 63.4734 79.2577L62.3366 81.2472C62.0317 81.7808 62.2789 82.468 62.8876 82.5534C64.0524 82.7167 65.2651 82.4883 66.3186 81.8562L77.8928 74.9117C79.2063 74.1235 79.5686 72.3826 78.6787 71.1357L64.8536 51.7671C64.5271 51.3102 63.9461 51.1116 63.4083 51.2729L56.8845 53.23C53.6471 54.2013 50.1379 53.3167 47.748 50.9266L46.9794 50.1581C44.0511 47.2298 44.5339 42.3545 47.9796 40.0574Z" fill="url(#paint0_linear_855_227)" shapeRendering="crispEdges"/>
      <path d="M47.5225 37.0469C49.822 37.0469 50.7249 40.0301 48.8115 41.3057C46.1536 43.0778 45.7811 46.8387 48.04 49.0977L48.8086 49.8662C50.8083 51.8659 53.7444 52.6055 56.4531 51.793L62.9775 49.8359L63.1943 49.7803C64.2107 49.5614 65.267 49.9228 65.9365 50.7178L66.0742 50.8945V50.8955L79.8994 70.2646C81.2976 72.2239 80.729 74.9595 78.665 76.1982H78.6641L67.0908 83.1426C65.7362 83.9554 64.1761 84.2488 62.6797 84.0391C61.7995 83.9157 61.1598 83.3324 60.877 82.626C60.6045 81.9455 60.6581 81.1612 61.0342 80.5029L62.1709 78.5137C63.8237 75.6211 63.4253 71.9931 61.1846 69.5283L54.0918 61.7256C51.2741 58.626 46.4933 58.353 43.3408 61.1113L39.0996 64.8223C38.3684 65.4623 37.1047 65.4211 36.499 64.4355C35.854 63.3857 35.5 62.1652 35.5 60.9014V41.1719C35.5003 38.8939 37.347 37.0469 39.625 37.0469H47.5225ZM43.958 61.8174C46.7259 59.3956 50.9233 59.635 53.3975 62.3564L60.4912 70.1592C62.4586 72.3236 62.8086 75.5092 61.3574 78.0488L59.5088 81.2822C58.2592 83.4685 55.3591 84.0344 53.3789 82.4785L39.8848 71.876C37.8534 70.2795 37.7721 67.2298 39.7168 65.5283L43.958 61.8174ZM63.5107 32.6338C65.7348 31.1513 68.6238 31.1207 70.8789 32.5557L81.7861 39.4961C81.9662 39.6108 82.1759 39.6718 82.3896 39.6719H84.251C86.5289 39.6721 88.3758 41.519 88.376 43.7969V62.1719C88.376 64.4499 86.529 66.2966 84.251 66.2969H79.5156C78.7082 66.2969 77.9497 65.907 77.4805 65.25L66.8379 50.3506C65.9635 49.1265 64.4501 48.5505 62.998 48.8633L62.709 48.9385L56.1855 50.8955C53.8071 51.609 51.2286 50.959 49.4727 49.2031L48.7041 48.4346C46.8634 46.594 47.1672 43.5299 49.333 42.0859L63.5107 32.6338Z" stroke="#12110F" strokeOpacity="0.08" strokeWidth="3" shapeRendering="crispEdges"/>
    </g>
    <defs>
      <filter id="filter0_d_855_227" x="0" y="0" width="123.876" height="123.604" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="17"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_855_227"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_855_227" result="shape"/>
      </filter>
      <linearGradient id="paint0_linear_855_227" x1="61.9378" y1="33" x2="61.9378" y2="82.6043" gradientUnits="userSpaceOnUse">
        <stop stopColor="white"/>
        <stop offset="1" stopColor="#E0E0E0"/>
      </linearGradient>
    </defs>
  </svg>
);

// ThreeIcon — fixed (was unclosed, causing the parse error)
const ThreeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="124" height="124" viewBox="0 0 124 124" fill="none">
    <g filter="url(#filter0_d_three)">
      <rect x="36" y="32" width="52" height="60" rx="6" fill="url(#paint0_linear_three)" shapeRendering="crispEdges"/>
      <rect x="36" y="32" width="52" height="60" rx="6" stroke="#12110F" strokeOpacity="0.08" strokeWidth="3" shapeRendering="crispEdges"/>
      <rect x="46" y="48" width="32" height="3" rx="1.5" fill="#C0C0C0"/>
      <rect x="46" y="56" width="24" height="3" rx="1.5" fill="#C0C0C0"/>
      <rect x="46" y="64" width="28" height="3" rx="1.5" fill="#C0C0C0"/>
    </g>
    <defs>
      <filter id="filter0_d_three" x="0" y="0" width="124" height="124" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="17"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_three"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_three" result="shape"/>
      </filter>
      <linearGradient id="paint0_linear_three" x1="62" y1="32" x2="62" y2="92" gradientUnits="userSpaceOnUse">
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
  image: string;
  icon: "save" | "download" | "two" | "three";
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
    image: "sky1.png",
    icon: "download",
  },
  {
    id: 3,
    category: "COLLABORATION",
    title: "Building a High-Trust Team in a Remote World",
    excerpt: "Remote work doesn't have to mean disconnected teams. Discover pr...",
    image: "SKY2.png",
    icon: "two",
  },
  {
    id: 4,
    category: "PROJECT MANAGEMENT",
    title: "The Hidden Cost of Poor Task Management (And How to Fix It)",
    excerpt: "Missed deadlines and unclear priorities can cost your business...",
    image: "SKY3.png",
    icon: "save",
  },
  {
    id: 5,
    category: "REMOTE WORK",
    title: "Asynchronous Workflows: The Future of Team Efficiency",
    excerpt: "Not everyone needs to be online at the same time. Learn how async...",
    image: "SKY4.png",
    icon: "download",
  },
];

// Helper to pick the right icon component
const PostIcon: React.FC<{ icon: BlogPost["icon"] }> = ({ icon }) => {
  switch (icon) {
    case "save":     return <SaveIcon />;
    case "download": return <DownloadIcon />;
    case "two":      return <TwoIcon />;
    case "three":    return <ThreeIcon />;
    default:         return <SaveIcon />;
  }
};

// ── Hero Card (first, wide) ──────────────────────────────────────────────────
const HeroCard: React.FC<{ post: BlogPost }> = ({ post }) => (
  <article className="blog-hero-card">
    <div
      className="blog-hero-card__image"
      style={{ backgroundImage: `url(${post.image})` }}
    >
      <div className="blog-card__icon-wrap blog-card__icon-wrap--hero">
        <PostIcon icon={post.icon} />
      </div>
    </div>

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
    <div
      className="blog-small-card__image"
      style={{ backgroundImage: `url(${post.image})` }}
    >
      <div className="blog-card__icon-wrap blog-card__icon-wrap--small">
        <PostIcon icon={post.icon} />
      </div>
    </div>

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

      <HeroCard post={hero} />

      <div className="blog-grid">
        {[...row1, ...row2].map((post) => (
          <SmallCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
