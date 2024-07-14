"use client";

import ReusableHeader from "@/components/Header/ReusableHeader";
import { useState } from "react";


function Layout({ children }) {
  const [Upgrade, setUpgrade] = useState(false);
  const [giveFeedback, setGiveFeedback] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  function handleSetUpgrade() {
    setUpgrade((prev) => !prev);
  }

  return (
    <section>
      <header
        className="sticky top-0 w-full  bg-white shadow-md "
        style={{
          zIndex: 1000,
        }}
      >
        <ReusableHeader
          logo="/assets/temologo.png"
          middleItems={[
            { href: "/Personal/", text: "Home", premium: false },
            { href: "/Personal/Jobs", text: "Jobs", premium: true },
          ]}
          name={"T"}
          type={4}
          handleSetUpgrade={handleSetUpgrade}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
        />
      </header>
      {children}
    </section>
  );
}

export default Layout;
