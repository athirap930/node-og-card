"use client";

export default function WhatsappShareButton() {
  const url = "https://node-og-card.vercel.app/car";
  const text =
    "Car – Cars are one of the most important modes of transportation in modern life.";

  return (
    <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
      {/* WhatsApp */}
      <a
        href={`https://wa.me/?text=${encodeURIComponent(text + " " + url)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button style={btnStyle("#25D366")}>WhatsApp</button>
      </a>

      {/* X / Twitter */}
      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
          url
        )}&text=${encodeURIComponent(text)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button style={btnStyle("#000000")}>X</button>
      </a>

      {/* LinkedIn */}
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          url
        )}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button style={btnStyle("#0077B5")}>LinkedIn</button>
      </a>

      {/* Facebook */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url
        )}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button style={btnStyle("#1877F2")}>Facebook</button>
      </a>
    </div>
  );
}

function btnStyle(color: string) {
  return {
    padding: "10px 16px",
    backgroundColor: color,
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
  };
}
