import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.jpg';

const posts = [
  {
    img: p1,
    alt: 'SEO strategy planning on a laptop',
    title: "10 Proven Strategies to Boost Your Website's SEO in 2023",
    excerpt: 'Discover actionable SEO strategies to increase your website traffic and rankings this year.',
    date: 'July 20, 2025',
  },
  {
    img: p2,
    alt: 'Keyword research tools and notes',
    title: 'The Ultimate Guide to Keyword Research: Unlocking SEO Success',
    excerpt: 'Master keyword research with this comprehensive guide and unlock your site’s SEO potential.',
    date: 'July 18, 2025',
  },
  {
    img: p3,
    alt: 'Building high-quality backlinks illustration',
    title: 'How to Create High-Quality Backlinks: A Step-by-Step Approach',
    excerpt: 'Learn how to build powerful backlinks that drive authority and boost your search rankings.',
    date: 'July 15, 2025',
  },
];

const FeaturedPosts = () => (
  <section className="featured-posts">
    <h2>Featured Posts</h2>
    <div className="featured-grid">
      {posts.map(post => (
        <article className="featured-card" key={post.title}>
          <img src={post.img} alt={post.alt} />
          <div className="featured-content">
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <time>{post.date}</time>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default FeaturedPosts; 