import "./globals.css";

export const metadata = {
  title: "Superior Garage Malaga | Car Servicing & Mechanical Repairs",
  description:
    "Superior Garage is a locally owned Malaga mechanic workshop offering affordable car servicing, diagnostics, brake repairs and general mechanical repairs in Perth WA.",
  keywords: [
    "Malaga mechanic",
    "mechanic Malaga WA",
    "car servicing Malaga",
    "mechanical repairs Malaga",
    "brake repairs Malaga",
    "logbook service Malaga",
    "Perth mechanic",
  ],
  openGraph: {
    title: "Superior Garage Malaga | Car Servicing & Mechanical Repairs",
    description:
      "Locally owned Malaga mechanic workshop. Affordable car servicing, diagnostics, brake repairs and mechanical work across Perth WA.",
    type: "website",
    locale: "en_AU",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#0a0a0b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU">
      <body className="bg-ink-950 text-white antialiased">{children}</body>
    </html>
  );
}
