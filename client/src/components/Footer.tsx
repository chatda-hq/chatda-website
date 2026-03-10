/*
 * Minimal footer — just copyright line. All content removed per user request.
 */
export default function Footer() {
  return (
    <footer
      className="py-8"
      style={{ backgroundColor: "#08081A" }}
    >
      <div className="container">
        <p
          className="text-xs text-center"
          style={{ color: "rgba(255,255,255,0.2)" }}
        >
          &copy; {new Date().getFullYear()} Chatda. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
