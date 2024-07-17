export const dynamic = "force-dynamic";

import Footer from "@/components/Reuseable/Footer";
import "@/styles/globals.css";

import "@fontsource/anek-bangla";

import "@fontsource/anek-bangla/400.css";

export const metadata = {
  title: "TrackED",
  description:
    "A secure platform that issues academic documents with unique IDs linked to national IDs, facilitating efficient and reliable verification processes for employers, institutions, and individuals.",
};

const Rootlayout = ({ children }) => {
  return (
    <html>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default Rootlayout;
