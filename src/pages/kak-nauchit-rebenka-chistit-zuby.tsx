import LessonPage from "../componets/LessonPage";
import MainLayout from "../componets/MainLayout/MainLayout";

export const metadata = {
  title: "Как научить ребёнка чистить зубы — Советы и игры",
  description:
    "Узнайте, как приучить ребёнка к регулярной чистке зубов: с какого возраста начинать, как сделать это привычкой, и весёлые игровые методы.",
  videoUrl: "https://www.youtube.com/embed/Ydd-TMsA9cM",
};

export default function ChistitZubyPage() {
  return (
    <MainLayout>
      <LessonPage title={metadata.title} description={metadata.description} videoUrl={metadata.videoUrl}>
        <section>
          <h1>Как научить ребёнка чистить зубы</h1>
          <p>Зубная щётка — не враг, если подойти с игрой. Привить ребёнку привычку чистить зубы — важный шаг в гигиеническом воспитании.</p>

          <h2>Когда начинать?</h2>
          <p>Уже с появлением первого зуба можно использовать силиконовый напальчник. С 2 лет — обучающие зубные щётки и пасты без фтора.</p>

          <h2>Игровые подходы:</h2>
          <ul>
            <li>🦷 Чистим зубы куклам и динозаврам</li>
            <li>🎵 Включаем песенку на 2 минуты — время чистки</li>
            <li>🪥 Ребёнок «помогает» родителю, потом наоборот</li>
          </ul>

          <h2>Полезные советы:</h2>
          <ul>
            <li>📆 Установите рутину: утром и вечером</li>
            <li>🙌 Хвалите за каждую попытку</li>
            <li>🎨 Позвольте выбрать щётку и пасту самому</li>
          </ul>
        </section>
      </LessonPage>
    </MainLayout>
  );
}
