import LessonPage from "../componets/LessonPage";
import MainLayout from "../componets/MainLayout/MainLayout";

export const metadata = {
  title: "Как научить ребёнка есть ложкой — пошаговое руководство",
  description: "Обучите ребёнка есть ложкой самостоятельно: когда начинать, какие ложки выбрать, практические советы и видео-инструкция.",
  videoUrl: "https://www.youtube.com/embed/paA0dv8SPQw",
};

export default function EstLozhkoyPage() {
  return (
    <MainLayout>
      <LessonPage title={metadata.title} description={metadata.description} videoUrl={metadata.videoUrl}>
        <section>
          <h1>Как научить ребёнка есть ложкой</h1>
          <p>Самостоятельное питание — важный шаг к независимости. Ребёнок может учиться уже с 6–8 месяцев.</p>

          <h2>Что нужно?</h2>
          <ul>
            <li>🥄 Мягкая силиконовая ложка</li>
            <li>🍽️ Нескользящая посуда с присоской</li>
            <li>👶 Слюнявчик с карманом</li>
          </ul>

          <h2>Как учить?</h2>
          <ul>
            <li>💧 Начните с густых каш</li>
            <li>🙌 Позвольте малышу «мазать», это норма</li>
            <li>📣 Хвалите каждую попытку</li>
          </ul>
        </section>
      </LessonPage>
    </MainLayout>
  );
}
