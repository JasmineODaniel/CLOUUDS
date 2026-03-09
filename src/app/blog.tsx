import "./blog.css";

const posts = [
  {
    bg: "linear-gradient(180deg, #87CEEB 0%, #B0E0E6 100%)",
    category: "Product",
    title: "Clouuds will show you something you didn't think was possible",
    excerpt: "A deep dive into how the latest updates are reshaping the way teams collaborate and ship.",
    author: "Sarah K.",
    date: "Mar 4, 2025",
  },
  {
    bg: "linear-gradient(135deg, #c9d6ff, #e2e2e2)",
    category: "Engineering",
    title: "Behind the build: how we scaled to 100k teams",
    excerpt: "The architectural decisions that let us grow fast without breaking things.",
    author: "Marco R.",
    date: "Feb 20, 2025",
  },
  {
    bg: "linear-gradient(180deg, #FFB347 0%, #FFCC02 100%)",
    category: "Culture",
    title: "Async-first: why we stopped scheduling so many meetings",
    excerpt: "A look at our internal practices and how they made it into the product itself.",
    author: "Priya L.",
    date: "Jan 31, 2025",
  },
  {
    bg: "linear-gradient(135deg, #2C3E50, #3D5A80)",
    category: "Tips",
    title: "5 workflow patterns the best teams use",
    excerpt: "",
    author: "Team Clouuds",
    date: "Jan 14, 2025",
  },
  {
    bg: "linear-gradient(135deg, #a8edea, #fed6e3)",
    category: "Design",
    title: "Why we redesigned the task view from scratch",
    excerpt: "",
    author: "Jess T.",
    date: "Dec 10, 2024",
  },
  {
    bg: "linear-gradient(135deg, #ffecd2, #fcb69f)",
    category: "Product",
    title: "Introducing Comments 2.0: threaded, resolved, searchable",
    excerpt: "",
    author: "Alex M.",
    date: "Nov 28, 2024",
  },
];

export function Blog() {
  return (
    <section className="blog-section" id="blog">
      <div className="blog-container">
        <div className="blog-header">
          <div>
            <div className="blog-badge">
              <span className="blog-badge-text">Blog</span>
            </div>
            <h2 className="blog-title">Insights from the Clouds.</h2>
          </div>
          <a href="#" className="blog-view-all">View all posts →</a>
        </div>

        <div className="blog-grid">
          {posts.map((post) => (
            <div key={post.title} className="blog-card">
              {/* Replace divs below with actual <img> tags */}
              <div
                className="blog-card-image-placeholder"
                style={{ background: post.bg }}
              >
                [ Image ]
              </div>
              <div className="blog-card-body">
                <div className="blog-card-category">{post.category}</div>
                <div className="blog-card-title">{post.title}</div>
                {post.excerpt && (
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                )}
                <div className="blog-card-meta">
                  <div className="blog-card-author-avatar"></div>
                  <span className="blog-card-author">{post.author}</span>
                  <span className="blog-card-date">{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}