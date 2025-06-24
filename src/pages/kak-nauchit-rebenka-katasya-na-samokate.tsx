import LessonPage from "../componets/LessonPage";
import MainLayout from "../componets/MainLayout/MainLayout";

export const metadata = {
  title: "Как научить ребёнка кататься на самокате — Пошагово",
  description: "Научите ребёнка кататься на самокате безопасно и весело. Лучший возраст, выбор самоката, пошаговая инструкция и видео.",
  videoUrl: "https://www.youtube.com/embed/hRMNq1dycmY",
};

export default function KatasyaNaSamokatePage() {
  return (
    <MainLayout>
      <LessonPage title={metadata.title} description={metadata.description} videoUrl={metadata.videoUrl}>
        <section>
          <h1>Как научить ребёнка кататься на самокате</h1>
          <p>Самокат развивает координацию, баланс и уверенность. Главное — подобрать правильный момент и подходящую модель.</p>

          <h2>Когда начинать?</h2>
          <p>С 2–3 лет — трёхколёсный самокат с устойчивой базой. С 4–5 лет можно пробовать двухколёсные модели.</p>

          <h2>Выбор самоката:</h2>
          <ul>
            <li>🛴 Тормоз сзади</li>
            <li>🧤 Резиновые ручки и нескользящая платформа</li>
            <li>🎒 Лёгкий вес, регулируемая высота руля</li>
          </ul>

          <h2>Обучение:</h2>
          <ul>
            <li>🏁 Начинайте на ровной поверхности</li>
            <li>🦺 Обязательно шлем и защита</li>
            <li>🦶 Покажите, какой ногой отталкиваться</li>
            <li>🔁 Практикуйтесь понемногу каждый день</li>
          </ul>
        </section>
      </LessonPage>
    </MainLayout>
  );
}
