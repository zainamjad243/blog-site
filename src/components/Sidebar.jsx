export const SidebarSearchForm = () => (
  <div className="widget search-widget">
    <form onSubmit={e => e.preventDefault()} aria-label="Search blog posts">
      <input type="search" placeholder="Search..." aria-label="Search" />
      <button type="submit" aria-label="Submit search">🔍</button>
    </form>
  </div>
);

const categories = ['Productivity', 'Travel', 'Lifestyle', 'Technology', 'Wellness'];
const popularPosts = [
  { title: 'How to Start a Blog in 2025', date: 'July 10, 2025' },
  { title: 'Productivity Hacks for Writers', date: 'July 18, 2025' },
  { title: 'The Art of Mindful Living', date: 'July 8, 2025' },
];

const Sidebar = ({ showSearchForm }) => (
  <aside className="sidebar">
    {showSearchForm && <SidebarSearchForm />}
    <div className="widget categories-widget">
      <h4>Categories</h4>
      <ul>
        {categories.map(cat => <li key={cat}><a href="#">{cat}</a></li>)}
      </ul>
    </div>
    <div className="widget popular-widget">
      <h4>Popular Posts</h4>
      <ul>
        {popularPosts.map(post => <li key={post.title}><a href="#">{post.title}</a> <span>{post.date}</span></li>)}
      </ul>
    </div>
    <div className="widget newsletter-widget">
      <h4>Newsletter</h4>
      <form onSubmit={e => e.preventDefault()} aria-label="Sign up for newsletter">
        <input type="email" placeholder="Your email" aria-label="Email address" required />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  </aside>
);

export default Sidebar; 