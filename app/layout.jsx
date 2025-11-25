export const metadata = {
  title: "Fotografia – About Giulia",
  description: "Professional photography portfolio website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black">{children}</body>
    </html>
  );
}