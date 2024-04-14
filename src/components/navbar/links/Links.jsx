"use client";

import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/NavLink";
import Image from "next/image";
import { handleLogout } from "@/lib/action";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Create",
    path: "/create"
  }
];

const Links = ({ session }) => {
  const [open, setOpen] = useState(false);

  const name = () => {
    const username = session?.user?.username
    const i = username.indexOf('@')
    const name = username.substring(0, i)
    return name
  }
  

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session?.user ? (
          <>
            <div className={styles.user}>{session.user?.isAdmin && <NavLink item={{ title: "Admin Pannel", path: "/admin" }} />}</div>
            <form action={handleLogout} className={styles.top_right}>
              <span className={styles.username}>Welcome <b>{name()}</b>,</span>
              <button className={styles.logout}>Logout</button>
            </form>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <Image
        className={styles.menuButton}
        src="/menu.png"
        alt=""
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;