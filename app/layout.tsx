import "./globals.css";
import { Audiowide, Rajdhani } from "next/font/google";

const AudiowideFont = Audiowide({
  weight: "400",
  subsets: ["latin"],
  variable: '--font-audiowide'
});
const RajdhaniFont = Rajdhani({
  weight: ["300", "500", "700"],
  subsets: ["latin"],
});

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${RajdhaniFont.className} ${AudiowideFont.variable}`}>
      <body className="bg-gradient-to-bl from-sand-800 via-sand-500 to-sand-700">
        <div
          className="text-foreground"
          style={{
            backgroundImage: "url('/wall-light.webp')",
            backgroundSize: "50px",
          }}
        >
          <main className="min-h-screen flex flex-col p-6 md:p-12">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
