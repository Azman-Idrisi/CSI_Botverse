export default function ChatbotLayout({ children }) {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: 'url("/gradient.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {children}
    </div>
  );
}
