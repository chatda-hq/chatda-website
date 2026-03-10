/*
 * Minimal footer — just copyright line with gradient top border.
 */
export default function Footer() {
  return (
    <footer
      className="relative py-8"
      style={{ backgroundColor: "#08081A" }}
    >
      {/* Gradient top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(0,217,166,0.3) 30%, rgba(124,107,240,0.25) 70%, transparent 100%)",
        }}
      />
      <div className="container">
        <p
          className="text-xs text-center"
          style={{ color: "rgba(255,255,255,0.25)" }}
        >
          &copy; {new Date().getFullYear()} Chatda. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
