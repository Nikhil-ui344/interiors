import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHeader from '../../components/PageHeader/PageHeader';
import newsData from '../../data/news.json';
import './News.css';

const News = () => {
  return (
    <div className="news-page">
      <PageHeader
        title="News & Insights"
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'News' }
        ]}
      />

      <section className="news-list-section">
        <div className="container">
          <div className="news-grid">
            {newsData.map((article, index) => (
              <motion.article
                key={article.id}
                className="news-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={`/news/${article.id}`} className="news-card-link">
                  <div className="news-card-image">
                    <img src={article.image} alt={article.title} />
                  </div>
                  <div className="news-card-content">
                    <div className="news-card-meta">
                      <span className="news-category">{article.category}</span>
                      <span className="news-date">{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <h3 className="news-card-title">{article.title}</h3>
                    <p className="news-card-excerpt">{article.excerpt}</p>
                    <span className="read-more">Read More →</span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
