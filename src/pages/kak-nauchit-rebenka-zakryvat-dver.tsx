import LessonPage from "../componets/LessonPage";
import MainLayout from "../componets/MainLayout/MainLayout";

export const metadata = {
  title: "Как научить ребёнка закрывать дверь аккуратно и безопасно",
  description: "Научите ребёнка закрывать дверь правильно: безопасность, последовательность, игровые методы и видеоурок.",
  videoUrl: "https://www.youtube.com/embed/lVJ2wEbyylY",
};

export default function ZakryvatDverPage() {
  return (
    <MainLayout>
      <LessonPage title={metadata.title} description={metadata.description} videoUrl={metadata.videoUrl}>
        <section>
          <h1>Как научить ребёнка закрывать дверь</h1>
          <p>Это не только вопрос порядка, но и безопасности. Ребёнок должен понимать, как не прищемить пальцы.</p>

          <h2>Как объяснить?</h2>
          <ul>
            <li>🚪 Показать, как правильно держать за ручку</li>
            <li>🖐 Проговорить, куда ставить пальцы</li>
            <li>🐻 Практиковать с дверцами шкафов или игрушек</li>
          </ul>

          <h2>Рекомендации:</h2>
          <ul>
            <li>✅ Используйте ограничители хода двери</li>
            <li>🗣 Всегда хвалите за аккуратность</li>
            <li>🎮 Превратите в игру: «закрой медвежонку домик»</li>
          </ul>
        </section>
      </LessonPage>
    </MainLayout>
  );
}
