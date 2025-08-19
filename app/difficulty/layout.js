export default function DifficultyLayout({ children }) {
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
