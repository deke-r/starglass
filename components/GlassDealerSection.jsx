'use client';

const GlassDealerSection = ({ title, content }) => {
  if (!title || !content) return null; // Gracefully handle missing props

  return (
    <section className="py-5 text-center container">
      <div className="col-md-12">
        <h1 className="mb-4 fw-semibold f_35">{title}</h1>
        {content.split('\n').map((para, i) => (
          <p key={i} className="mb-3 text-muted f_13 fw-semibold">{para.trim()}</p>
        ))}
      </div>
    </section>
  );
};

export default GlassDealerSection;
