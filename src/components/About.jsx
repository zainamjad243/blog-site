import aboutPhoto from '../assets/pic1.jpg';

const About = () => (
  <section className="about-section">
    <h1>About Waleed SEO</h1>
    <p>
      Waleed SEO is dedicated to providing insightful articles, practical tips, and the latest trends in SEO, blogging, and digital marketing. Our mission is to empower bloggers, entrepreneurs, and businesses to grow their online presence and achieve their goals.
    </p>
    <div className="about-author">
      <img src={aboutPhoto} alt="Author portrait" className="about-author-img" />
      <div>
        <h2>Meet the Author</h2>
        <p>
          Hi, I'm Waleed, a passionate digital marketer and SEO specialist with over 10 years of experience helping brands succeed online. I believe in sharing knowledge and building a supportive community for all content creators.
        </p>
      </div>
    </div>
    <div className="about-list">
      <h3>What You'll Find on Waleed SEO:</h3>
      <ul>
        <li>Proven SEO strategies and tips</li>
        <li>Comprehensive guides for bloggers</li>
        <li>Latest trends in digital marketing</li>
        <li>Actionable advice for growing your audience</li>
        <li>Community stories and expert interviews</li>
      </ul>
    </div>
  </section>
);

export default About; 