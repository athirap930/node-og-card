import type { Metadata } from "next";
import Image from "next/image";
import WhatsappShareButton from "../components/WhatsappShareButton";

export const metadata: Metadata = {
  title: "Car",
  description:
    "Cars are one of the most important modes of transportation in modern life. They provide comfort, speed, and convenience for daily travel. Cars are used for personal, commercial, and emergency purposes. With advancing technology, cars are becoming safer, smarter, and more eco-friendly.",

  openGraph: {
    title: "Car",
    description:
      "Cars are one of the most important modes of transportation in modern life. They provide comfort, speed, and convenience for daily travel. Cars are used for personal, commercial, and emergency purposes. With advancing technology, cars are becoming safer, smarter, and more eco-friendly.",
    url: "https://YOUR-NETLIFY-DOMAIN.netlify.app/car",
    siteName: "Car Info",
    images: [
      {
        url: "https://YOUR-NETLIFY-DOMAIN.netlify.app/social-card.jpg",
        width: 1200,
        height: 630,
        alt: "Car",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Car",
    description:
      "Cars are one of the most important modes of transportation in modern life. They provide comfort, speed, and convenience for daily travel. Cars are used for personal, commercial, and emergency purposes. With advancing technology, cars are becoming safer, smarter, and more eco-friendly.",
    images: ["https://YOUR-NETLIFY-DOMAIN.netlify.app/social-card.jpg"],
  },
};

export default function CarPage() {
  return (
    <main style={{ padding: "40px", maxWidth: "700px", margin: "0 auto" }}>
      <h1>Car</h1>

      <Image
        src="/social-card.jpg"
        alt="Car"
        width={700}
        height={400}
        priority
      />

      <p style={{ marginTop: "16px", lineHeight: "1.6" }}>
        Cars are one of the most important modes of transportation in modern life.
        They provide comfort, speed, and convenience for daily travel. Cars are
        used for personal, commercial, and emergency purposes. With advancing
        technology, cars are becoming safer, smarter, and more eco-friendly.
      </p>

      <WhatsappShareButton />
    </main>
  );
}
