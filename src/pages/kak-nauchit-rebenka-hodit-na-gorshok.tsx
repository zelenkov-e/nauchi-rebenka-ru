import LessonPage from "../componets/LessonPage";
import MainLayout from "../componets/MainLayout/MainLayout";

export const metadata = {
  title: "Как приучить ребёнка к горшку — Мягкий подход без стресса",
  description: "Узнайте, как начать приучение ребёнка к горшку: когда начинать, какие горшки лучше выбрать, ошибки и советы от родителей.",
  videoUrl: "https://www.youtube.com/embed/ngtdu-3vYZg",
};

export default function HoditNaGorshokPage() {
  return (
    <MainLayout>
      <LessonPage title={metadata.title} description={metadata.description} videoUrl={metadata.videoUrl}>
        <section>
          <h1>Как приучить ребёнка к горшку</h1>
          <p>Обучение горшку — важный этап в развитии самостоятельности. Главное — спокойствие, поддержка и уважение к ребёнку.</p>

          <h2>Когда начинать?</h2>
          <p>Обычно — с 18 до 30 месяцев, когда ребёнок может контролировать процессы и умеет снимать/надевать одежду.</p>

          <h2>Подготовка:</h2>
          <ul>
            <li>🪑 Выберите удобный горшок или насадку на унитаз</li>
            <li>📚 Покажите книги/мультфильмы на эту тему</li>
            <li>🧸 «Посади медвежонка» — игровой пример</li>
          </ul>

          <h2>Советы:</h2>
          <ul>
            <li>⏰ Сажайте по утрам, перед сном, после еды</li>
            <li>🗣 Объясняйте, что происходит, без осуждения</li>
            <li>🎉 Хвалите не за результат, а за попытку</li>
          </ul>
        </section>
      </LessonPage>
    </MainLayout>
  );
}
