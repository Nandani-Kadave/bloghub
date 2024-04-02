import React from 'react';

function Readblog() {
  return (
    <div>
      <div className="read-container">
        <header className="grid-container">
          <h1 id="read-head">Your Blog Title</h1>
        </header>
        <section className="read-grid-container">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAS1BMVEVHcEzVBhLkCBPbBxKwBQ6xBg/FBhCtBQ7oCBPiBxLkCBOlBA7iBxTkCBPxCBSXAw3kCBOUAw3lCBJtAAuDAQynBQ6xBg+xBRDjBxJ6RmETAAAAGXRSTlMA//+Xgf////9NuP9m0xr/gn7zcf/MtjhOS7LcjwAAAMtJREFUeAF10MESgzAIRVFUCVZqMTW2/f8v7RjYtMNjlcUZbgaKGcZrpus5cx/6nTL2wUCWDm4YeGOFgNlXYKD+iTsG/s0NAolvPhBg88ZOFQAtfcWTquRALBpVEYhzH5YDNvYGBNo6WM4mOZDmjdI0B2zqK5ohEA1FQJufe2iSA2lnNDQHbMezAzYIpmgAoPXRwWKSA6nkjaIQ7GMfywFXioZKDmaiLRoQ3L2BAXmDMVj9FALBzVdg4I2x/IPzNc3z+3p+9n1at4F8vruuDABTzZR7AAAAAElFTkSuQmCC" alt="Blogger Name - Profile Picture" className="read-profile-pic" />
          <div className="read-info">
            <h2>Your Name</h2>
            <p>Uploaded: March 30, 2024</p>
          </div>
          <div className="read-social">
            <a href="#"><i className="fas fa-thumbs-up"></i> Like</a>
            <a href="#"><i className="fas fa-share-alt"></i> Share</a>
            <a href="#"><i className="fas fa-comments"></i> Comments</a>
          </div>
        </section>
        <article className="read-blog-content">
          <h2>Introduction</h2>
          <p>Write your introduction here. Talk about yourself, your interests, and your experience as a blogger.</p>
          <p>This is where you write the main content of your blog post. Feel free to add images, videos, or other elements to enhance your content.</p>
        </article>
        <footer>
          <p>Copyright &copy; 2024 Your Name</p>
        </footer>
      </div>
    </div>
  );
}

export default Readblog;
