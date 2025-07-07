import { Inter } from "next/font/google";
import styles from "./../styles/Home.module.scss";
import { FaReadme, FaBicycle, FaUtensilSpoon, FaDoorClosed } from "react-icons/fa";
import { RiDrinks2Fill, RiSpeakFill } from "react-icons/ri";
import { MdToys } from "react-icons/md";

import { GiHalfBodyCrawling, GiCookingPot, GiNoseSide, GiLargeDress, GiToothbrush, GiKickScooter } from "react-icons/gi";

import { useRouter } from "next/router";
import Fab from "../../src/componets/common/Fab";
import { IoMail } from "react-icons/io5";
import MainLayout from "../../src/componets/MainLayout/MainLayout";
import Separator from "../componets/common/Separator";

const inter = Inter({ subsets: ["latin"] });

const PAGES = [
  { title: "ползать", icon: <GiHalfBodyCrawling />, path: "/kak-nauchit-rebenka-polzat", describtion: "Как научить ребёнка ползать" },
  { title: "есть ложкой", icon: <FaUtensilSpoon />, path: "/kak-nauchit-rebenka-est-lozhkoy", describtion: "Как научить ребёнка есть ложкой" },
  { title: "говорить", icon: <RiSpeakFill />, path: "/kak-nauchit-rebenka-govorit", describtion: "Как научить ребёнка говорить" },
  {
    title: "ходить на горшок",
    icon: <GiCookingPot />,
    path: "/kak-nauchit-rebenka-hodit-na-gorshok",
    describtion: "Как научить ребёнка ходить на горшок",
  },
  { title: "cморкаться", icon: <GiNoseSide />, path: "/kak-nauchit-rebenka-smorkatsya", describtion: "Как научить ребёнка cморкаться" },
  {
    title: "пить из трубочки",
    icon: <RiDrinks2Fill />,
    path: "/kak-nauchit-rebenka-pity-s-trubochki",
    describtion: "Как научить ребёнка пить с трубочки",
  },
  { title: "читать", icon: <FaReadme />, path: "/kak-nauchit-rebenka-chitat", describtion: "Как научить ребёнка читать" },
  {
    title: "закрывать дверь",
    icon: <FaDoorClosed />,
    path: "/kak-nauchit-rebenka-zakryvat-dver",
    describtion: "Как научить ребёнка закрывать дверь",
  },
  { title: "одеваться", icon: <GiLargeDress />, path: "/kak-nauchit-rebenka-odevatsya", describtion: "Как научить ребёнка одеваться" },
  { title: "чистить зубы", icon: <GiToothbrush />, path: "/kak-nauchit-rebenka-chistit-zuby", describtion: "Как научить ребёнка чистить зубы" },
  { title: "убирать игрушки", icon: <MdToys />, path: "/kak-nauchit-rebenka-ubirat-igrushki", describtion: "Как научить ребёнка убирать игрушки" },

  {
    title: "кататься на самокате",
    icon: <GiKickScooter />,
    path: "/kak-nauchit-rebenka-katasya-na-samokate",
    describtion: "Как научить ребёнка кататься на самокате",
  },
  {
    title: "кататься на велосипеде",
    icon: <FaBicycle />,
    path: "/kak-nauchit-rebenka-katatsya-na-velosipede",
    describtion: "Как научить ребёнка кататься на велосипеде",
  },
];

const HeaderProps = {
  title: "nauchi-rebenka.ru — Советы и видео, как развивать навыки у детей",
  description:
    "Пошаговые инструкции, видеоуроки и советы для родителей: как обучать ребёнка важным бытовым и социальным навыкам — от чтения до уборки игрушек.",
  keywords:
    "развитие ребёнка, советы для родителей, как научить ребёнка, раннее развитие, навыки для детей, обучение детей дома, детское развитие по шагам",
};

export default function Home() {
  const router = useRouter();

  const handleClick = (path: string) => {
    const eventName = path.replace(/^\//, "");

    if (typeof window !== "undefined" && (window as any).umami) {
      (window as any).umami.track(eventName);
    }

    router.push(path);
  };

  return (
    <MainLayout {...HeaderProps}>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.hero}>
          <div>
            <h1>Научите ребёнка важным жизненным навыкам</h1>
            <p>На нашем сайте вы найдёте пошаговые инструкции, видеоуроки и советы по обучению детей от простых до сложных умений.</p>
          </div>
        </div>
        <Separator />
        <div className={styles.grid}>
          {PAGES.map((page) => (
            <div key={page.title} className={styles.card} onClick={() => handleClick(page.path)}>
              <div className={styles.cardIcon}>{page.icon}</div>
              <h2>{page.title}</h2>
              <p>{page.describtion}</p>
            </div>
          ))}
        </div>
        <Fab onClick={() => router.push("/about")} icon={<IoMail />} />
      </main>
    </MainLayout>
  );
}
