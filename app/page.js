const styles = {
  page: {
    margin: 0,
    minHeight: '100vh',
    display: 'grid',
    placeItems: 'center',
    padding: 24,
    color: '#1b1b1b',
    background:
      'radial-gradient(circle at 20% 10%, #efe7d7 0, transparent 40%), radial-gradient(circle at 80% 90%, #e7efe7 0, transparent 45%), #f4f1ea',
    fontFamily: 'Avenir Next, Segoe UI, Roboto, sans-serif',
  },
  card: {
    width: '100%',
    maxWidth: 680,
    background: '#fffdf8',
    border: '1px solid #ded8ce',
    borderRadius: 16,
    padding: 28,
    boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
  },
  h1: {
    margin: '0 0 8px',
    fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
    letterSpacing: '0.01em',
  },
  p: {
    margin: '0 0 16px',
    lineHeight: 1.6,
    color: '#5f5a52',
  },
  meta: {
    borderTop: '1px solid #ded8ce',
    paddingTop: 16,
    marginTop: 8,
  },
  label: {
    color: '#1b1b1b',
    fontWeight: 600,
  },
  link: {
    color: '#0b6e4f',
    textDecoration: 'none',
  },
  footer: {
    marginTop: 20,
    fontSize: '0.9rem',
    color: '#5f5a52',
  },
};

export default function Page() {
  return (
    <main style={styles.page}>
      <section style={styles.card}>
        <h1 style={styles.h1}>Albatros.studio</h1>
        <p style={styles.p}>
          Collectif creatif base en Belgique, nous developpons des projets culturels
          et creatifs.
        </p>

        <div style={styles.meta} aria-label="Informations de contact">
          <p style={styles.p}>
            <span style={styles.label}>Contact : </span>
            <a style={styles.link} href="mailto:contact@albatros.studio">
              contact@albatros.studio
            </a>
          </p>
          <p style={styles.p}>
            <span style={styles.label}>Localisation : </span>
            Belgique
          </p>
        </div>

        <footer style={styles.footer}>Mentions legales disponibles sur demande.</footer>
      </section>
    </main>
  );
}
