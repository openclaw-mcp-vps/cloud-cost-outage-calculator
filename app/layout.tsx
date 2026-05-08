import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cloud Cost Outage Calculator",
  description: "Calculate business impact cost of cloud service outages for SLA negotiations and insurance claims."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c3f9afe1-1207-437a-ad5b-74b2df864536"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
