export const metadata = {
  title: 'Albatros.studio',
  description:
    'Collectif creatif base en Belgique, nous developpons des projets culturels et creatifs.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
