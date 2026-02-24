import React from 'react'
import './Blog.css'
const Blog = () => {
  return (
    <div className="container">
      <section className="r1">
        <div className="s1">
          <p className="s2">BEAUTY JOURNAL</p>
          <h1>
            Beauty Blog, Tips & <span>Vedhashree Stories</span>
          </h1>
          <p className="s3">
            Discover professional beauty tips, bridal preparation guides and the
            latest trends we follow at our parlour. Perfect for brides, party
            looks and everyday glow lovers.
          </p>

          <div className="s4">
            <span>New articles every month</span>
            <span>Bridal -Hair - Skin - Mehendi</span>
          </div>
        </div>

        <div className="s5">
          <h3>Parlour Announcements & Offers</h3>
          <p>
            Stay updated with special bridal packages, festive discounts and
            limited-time combo offers from Vedhashree Beauty Care.
          </p>
          <ul>
            <li>Bridal package bookings open for this season.</li>
            <li>Weekday facial offers – perfect for quick pampering.</li>
            <li>Contact us for customized bridal & family combos.</li>
          </ul>
          <small>*For latest offers, call the parlour number on our Contact page.</small>
        </div>
      </section>
<section className="content">
        <div className="l1">
          <h2>Latest from the Studio</h2>
          <p className="p1">
            Handpicked tips and real-life learnings from our work with brides
            and clients at Vedhashree.
          </p>

          <div className="card">
            <div className="k1">
              <span className="k2">Bridal Beauty</span>
              <span className="k3">Featured</span>
              <span className="k4">5 min read - Jan 2026</span>
            </div>
            <h3>Top 7 Bridal Makeup Trends for This Wedding Season</h3>
            <p>
              From soft glam to classic traditional looks, explore the most
              loved bridal styles that make you camera-ready and flawless all day.
            </p>
            <a href="#">Read more </a>
          </div>

          <div className="card">
            <div className="k1">
              <span className="k2">Hair Care</span>
              <span className="k3">Pro Tip</span>
              <span className="k4">4 min read - Jan 2026</span>
            </div>
            <h3>How to Keep Your Hair Healthy After Styling</h3>
            <p>
              Frequent styling can damage hair if not cared for properly. Here
              are expert-approved tips from our stylists to maintain shine and strength.
            </p>
            <a href="#">Read more </a>
          </div>

          <div className="card">
            <div className="k1">
              <span className="k2">Skin & Facials</span>
              <span className="k3">Guide</span>
              <span className="k4">6 min read - Dec 2025</span>
            </div>
            <h3>Pre-Bridal Skin Care Routine You Should Start Now</h3>
            <p>
              Glowing skin doesn’t happen overnight. Follow this simple routine
              3 months before your big day for naturally radiant skin.
            </p>
           <a href="#">Read more </a>
          </div>
        </div>

        <div className="l2">
          <div className="sidebar-card">
            <h4>Quick Beauty Suggestions</h4>
            <ul>
              <li>Always do a makeup trial at least 2–3 weeks before the event.</li>
              <li>Bring your blouse and jewellery for a perfect hairstyle trial.</li>
              <li>Avoid experimenting with new facials just days before functions.</li>
              <li>Keep hair and skin hydrated – water helps!</li>
              <li>For long events, ask for touch-up friendly products.</li>
            </ul>
          </div>

          <div className="highlight-card">
            <h4>Bridal Booking Slots Filling Fast</h4>
            <p>
              Secure your preferred dates for engagement, mehendi and wedding
              day looks. Customized packages available.
            </p>
          </div>

          <div className="sidebar-card">
            <h4>Want your question answered?</h4>
            <p>
              Parlour tips can be updated based on what clients ask most. You
              can add your own blog content here later easily.
            </p>
          </div>
        </div>
      </section>
      </div>
  )
}

export default Blog
