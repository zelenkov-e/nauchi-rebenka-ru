import LessonPage from "../componets/LessonPage";
import MainLayout from "../componets/MainLayout/MainLayout";

export const metadata = {
  title: "Как научить ребёнка ползать — Этапы и упражнения",
  description:
    "Узнайте, как помочь ребёнку начать ползать. Возраст, этапы, упражнения, стимуляция движений, советы родителям. Всё о развитии моторики малыша.",
  videoUrl: "https://www.youtube.com/embed/uFAtmlyN7i0",
};

export default function ChitatPage() {
  return (
    <MainLayout>
      <LessonPage title={metadata.title} description={metadata.description} videoUrl={metadata.videoUrl}>
        <section>
          <h1>Как научить ребёнка ползать</h1>
          <p>
            Ползание — важнейший этап в развитии координации, силы и пространственного восприятия. Оно укрепляет мышцы, подготавливает к ходьбе и
            помогает ребёнку исследовать мир.
          </p>

          <h2>Когда дети начинают ползать?</h2>
          <p>Большинство детей начинают ползать в возрасте от 6 до 9 месяцев. Но важно помнить: каждый ребёнок развивается в своём темпе.</p>

          <h2>Первые признаки готовности к ползанию:</h2>
          <ul>
            <li>Ребёнок уверенно держит голову лёжа на животе</li>
            <li>Начинает перекатываться со спины на живот</li>
            <li>Пытается тянуться к игрушке, опираясь на ручки</li>
          </ul>

          <h2>Упражнения, которые помогут:</h2>
          <ul>
            <li>Выкладывание на живот 3–5 раз в день</li>
            <li>Игры с яркими игрушками чуть вне зоны досягаемости</li>
            <li>«Тоннель» из подушек или полотенец для ползания</li>
            <li>Зеркало на полу — ребёнок ползёт к своему отражению</li>
          </ul>

          <h2>Что важно учитывать:</h2>
          <ul>
            <li>Создайте безопасное пространство для движения</li>
            <li>Не ограничивайте ребёнка ходунками или долгое время в кроватке</li>
            <li>Хвалите малыша за каждое движение вперёд</li>
          </ul>
        </section>
      </LessonPage>
    </MainLayout>
  );
}
