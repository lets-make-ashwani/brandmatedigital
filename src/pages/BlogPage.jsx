import React, { useState } from 'react'
import FinalCTA from '../components/FinalCTA/FinalCTA'
import './BlogPage.css'

function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = ['All', 'Marketing', 'SEO', 'E-Commerce', 'Development']

  const articles = [
    {
      id: 1,
      title: 'The Future of Digital Media Buying in 2026',
      category: 'Marketing',
      date: 'June 12, 2026',
      readTime: '6 min read',
      author: 'Vikalp Srivastava',
      excerpt: 'Discover how AI-driven programmatic bidding is reshaping how brands target their online consumer audience and optimize ad budgets.',
      icon: '📈'
    },
    {
      id: 2,
      title: 'Unlocking E-Commerce Conversion Optimization',
      category: 'E-Commerce',
      date: 'May 28, 2026',
      readTime: '5 min read',
      author: 'Performance Team',
      excerpt: 'Simple layout and checkout design guidelines that can significantly improve your online store conversion rates and reduce cart abandonment.',
      icon: '🛒'
    },
    {
      id: 3,
      title: 'Why Core Web Vitals Determine Google Search Rank',
      category: 'SEO',
      date: 'May 15, 2026',
      readTime: '8 min read',
      author: 'SEO Specialist',
      excerpt: 'Search engines continue to prioritize page speed and responsiveness. Here is our essential checklist to improve your technical metrics.',
      icon: '⚡'
    },
    {
      id: 4,
      title: 'The Role of UGC in Modern Brand Storytelling',
      category: 'Marketing',
      date: 'April 24, 2026',
      readTime: '4 min read',
      author: 'Creative Director',
      excerpt: 'User-generated content creates authentic brand connection. Learn how to launch your first UGC campaign and build viral community loops.',
      icon: '🎥'
    },
    {
      id: 5,
      title: 'Protecting Customer Data: Cyber Security 101',
      category: 'Development',
      date: 'March 10, 2026',
      readTime: '7 min read',
      author: 'Security Architect',
      excerpt: 'Security is non-negotiable for modern enterprise web portals. Audit your system against modern vulnerabilities with this direct guide.',
      icon: '🔒'
    },
    {
      id: 6,
      title: 'Scaling Mobile Applications to Millions of Users',
      category: 'Development',
      date: 'February 18, 2026',
      readTime: '10 min read',
      author: 'Tech Lead',
      excerpt: 'An inside look at distributed systems design, backend API load balancing, and performance tuning for scale under Vite and Node.js.',
      icon: '📱'
    }
  ]

  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === 'All' || article.category === activeCategory
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="blog-page">
      <header className="blog-hero">
        <div className="container">
          <span className="section-badge dark">Our Insights</span>
          <h1>Knowledge Hub & <span className="highlight">Digital Strategy</span></h1>
          <p className="blog-hero-subtitle">
            Explore industry leading strategies, technical deep-dives, and performance marketing optimization guides.
          </p>
          
          <div className="blog-search-bar">
            <span className="search-icon">🔍</span>
            <input 
              type="text" 
              placeholder="Search articles, keywords, or topics..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </header>

      <section className="blog-list-section">
        <div className="container">
          <div className="blog-categories">
            {categories.map(cat => (
              <button 
                key={cat} 
                className={`category-pill ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {filteredArticles.length > 0 ? (
            <div className="blog-grid">
              {filteredArticles.map((art, idx) => (
                <article key={art.id} className="blog-card animate-on-scroll visible" style={{ animationDelay: `${idx * 0.08}s` }}>
                  <div className="blog-card-header">
                    <span className="blog-tag">{art.category}</span>
                    <span className="blog-read-time">{art.readTime}</span>
                  </div>
                  <div className="blog-card-icon">{art.icon}</div>
                  <div className="blog-card-body">
                    <h3>{art.title}</h3>
                    <p>{art.excerpt}</p>
                  </div>
                  <div className="blog-card-footer">
                    <div className="blog-author">
                      <span className="author-avatar">{art.author[0]}</span>
                      <div>
                        <span className="author-name">{art.author}</span>
                        <span className="article-date">{art.date}</span>
                      </div>
                    </div>
                    <button className="read-more-btn">Read Article →</button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <h3>No articles found</h3>
              <p>Try refining your search query or choosing another category.</p>
            </div>
          )}
        </div>
      </section>

      <FinalCTA />
    </div>
  )
}

export default BlogPage
