"use client";

import ReusableHeader from "@/components/Header/ReusableHeader";
import { useState } from "react";
import styled from "styled-components";

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
            { href: "/Admin/", text: "Home", premium: false },
            { href: "/Admin/User", text: "User", premium: false },
            { href: "/Admin/Documents", text: "Documents", premium: false },
            { href: "/Admin/Feedback", text: "Feedback", premium: false },
            { href: "/Admin/Premium", text: "Premium", premium: true },
          ]}
          name={"T"}
          type={2}
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
