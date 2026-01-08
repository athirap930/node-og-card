"use client";

export default function WhatsappShareButton() {
  const shareUrl = "https://node-og-card.vercel.app/car";
  const message = `Check this out 🚗 ${shareUrl}`;

  const handleShare = () => {
    window.open(
      `https://wa.me/?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <button
      onClick={handleShare}
      style={{
        marginTop: "24px",
        padding: "12px 24px",
        backgroundColor: "#25D366",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        fontSize: "16px",
        cursor: "pointer",
      }}
    >
      Share on WhatsApp
    </button>
  );
}
