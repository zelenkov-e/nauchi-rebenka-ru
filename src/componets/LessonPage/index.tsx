// src/components/LessonPage.tsx
import Head from "next/head";
import styles from "./LessonPage.module.scss";

interface LessonPageProps {
  title: string;
  description: string;
  videoUrl: string;
  children: React.ReactNode;
}

export default function LessonPage({ title, description, videoUrl, children }: LessonPageProps) {
  return (
    <>
      <Head>
        <title>{title} — nauchi-rebenka.ru</title>
        <meta name="description" content={description} />
      </Head>
      <div className={styles.container}>
        <h1>{title}</h1>
        <p>{description}</p>
        {children}
        <h2>Видео-объяснение</h2>
        <p>⭐⭐⭐⭐⭐ Рейтинг 5.0</p>
        <div className={styles.videoWrapper}>
          <iframe
            width="100%"
            height="315"
            src={videoUrl}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p style={{ fontSize: "0.8rem", color: "#666" }}>Видео встроено с YouTube. Все права принадлежат их правообладателям.</p>
      </div>
    </>
  );
}
