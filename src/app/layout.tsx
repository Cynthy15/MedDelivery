import '@/app/globals.css';
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata = {
  title: "Med Delivery System | Fast & Reliable Medicine Delivery",
  description:
    "Order medicines online and get fast, safe, and reliable delivery from trusted pharmacies.",
  keywords: [
    "medicine delivery",
    "online pharmacy",
    "med delivery system",
    "healthcare app",
    "drug delivery",
  ],
  openGraph: {
    title: "Med Delivery System",
    description: "Fast and reliable medicine delivery platform.",
    type: "website",
    url: "https://your-domain.com",
    images: ["/assets/med-delivery-preview.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body>
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  );
}
