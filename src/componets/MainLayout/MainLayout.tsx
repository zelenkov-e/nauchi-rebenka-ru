"use client";

import React, { ReactNode } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "./MainLayout.module.scss";
import { useRouter } from "next/router";
import Chip from "../common/Chip";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

interface Props {
  children: ReactNode;
  title?: string;
  description?: string;
}

const PAGES = [
  { title: "о нас", path: "/about" },
  { title: "поддержи проект", path: "/support" },
  { title: "конфиденциальность", path: "/policy" },
];

const MainLayout = ({ children, title = "Nauchi Rebenka", description = "Как научить ребёнка важным навыкам" }: Props) => {
  const router = useRouter();

  const handleClick = (path: string) => {
    router.push(path);
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
      </Head>
      <div className={styles.layout}>
        {router.pathname !== "/" && (
          <header className={styles.header}>
            <Link href="/">
              <Chip>
                <MdOutlineArrowBackIosNew size={24} color="black" />
                на главную
              </Chip>
            </Link>
          </header>
        )}
        <main className={styles.main}>{children}</main>
        <footer className={styles.footer}>
          <p>&copy; {new Date().getFullYear()} nauchi-rebenka.ru</p>
          <div className={styles.footerLinks}>
            {PAGES.map((page) => (
              <div key={page.title} className={styles.card} onClick={() => handleClick(page.path)}>
                <p>{page.title}</p>
              </div>
            ))}
          </div>
        </footer>
      </div>
    </>
  );
};

export default MainLayout;
