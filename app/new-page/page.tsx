export const metadata = {
  title: "New Page | WhatsApp Preview",
  description: "This page shows title, image and description on WhatsApp",

  openGraph: {
    title: "New Page | WhatsApp Preview",
    description:
      "This page shows title, image and description on WhatsApp",
    url: "https://yourdomain.com/new-page",
    siteName: "WhatsApp OG Demo",
    images: [
      {
        url: "https://yourdomain.com/social-card.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "New Page | WhatsApp Preview",
    description:
      "This page shows title, image and description on WhatsApp",
    images: ["https://yourdomain.com/social-card.jpg"],
  },
};

export default function NewPage() {
  return (
    <main style={{ padding: "40px" }}>
      <h1>WhatsApp OG Preview Page</h1>
      <p>Share this page link on WhatsApp.</p>
    </main>
  );
}
