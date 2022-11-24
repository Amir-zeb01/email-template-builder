import React, { useState } from "react";
import { Drawer, Header } from "../components";

export default function Layout({ children }) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="main_layout">
      {/* BACKGROUND OVERLAY */}
      <button
        type="button"
        onClick={() => setOpenMenu(false)}
        className={`${openMenu ? "open " : ""}border-0 bg_overlay_28`}
      ></button>
      {/* DRAWER */}
      <Drawer closeMenu={() => setOpenMenu(false)} open={openMenu} />
      {/* DRAWER END */}

      {/* PAGE */}
      <div className="primary_container" aria-label="page">
        {/* HEADER */}
        <Header openMenu={() => setOpenMenu(true)} />
        {/* HEADER END */}

        {/* CONTENT */}
        <main className="main_content" aria-label="content">
          {children}
        </main>
        {/* CONTENT END */}
      </div>
    </div>
  );
}
