import React from 'react';
import { Clock, ArrowRight, BookOpen } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogData';

export default function BlogSection({ onSelectPost }) {
  return (
    <section id="blog" className="blog-section">
      <div className="container">
        <div className="text-center">
          <span className="section-tag">Knowledge & Insights</span>
          <h2 className="section-title">
            Industry <span>Insights</span>
          </h2>
          <p className="section-subtitle">
            Perspectives on translation quality, enterprise operational efficiency, and regional market localization.
          </p>
        </div>

        <div className="blog-grid">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-image-wrapper">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  width={400} 
                  height={200} 
                  loading="lazy" 
                  decoding="async" 
                />
                <span className="blog-category-badge" style={{ backgroundColor: '#0D9488' }}>
                  {post.category}
                </span>
              </div>

              <div className="blog-content">
                <div className="blog-meta-row">
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                    <BookOpen size={13} style={{ color: '#0D9488' }} />
                    {post.date}
                  </span>
                  <span>•</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                    <Clock size={13} />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-summary">{post.summary}</p>

                <div style={{ marginTop: 'auto' }}>
                  <button
                    type="button"
                    className="blog-read-more-link"
                    onClick={() => onSelectPost && onSelectPost(post)}
                    aria-label={`Read topic overview for ${post.title}`}
                  >
                    <span>Read Topic Overview</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: 20 }}>
          <p style={{ fontSize: '0.8rem', color: '#64748b' }}>
            * Articles represent draft topics and thought-leadership previews curated for IBS.
          </p>
        </div>
      </div>
    </section>
  );
}
