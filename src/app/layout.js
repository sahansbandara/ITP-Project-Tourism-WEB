import ThemeRegistry from '../components/ThemeRegistry';

export const metadata = {
  title: 'Ceylon Escapes | Discover Sri Lanka',
  description: 'Experience the magic of Sri Lanka with Ceylon Escapes. From ancient temples to pristine beaches, lush tea plantations to thrilling wildlife safaris. Book your dream vacation today.',
  keywords: 'Sri Lanka tours, Ceylon travel, Sri Lanka holidays, Sigiriya, Kandy, Galle, wildlife safari, tea plantations',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0 }}>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
