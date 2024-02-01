import {useRef} from "react";
import {useScroll} from "@react-three/drei";
import {useFrame} from "@react-three/fiber";

export const ServiceSection = () => {
  const containerRef = useRef();

  const data = useScroll()
  useFrame((state, delta, frame) => {
    const opacity = 1 - data.range(2.75/data.pages, 0.25/data.pages);
    containerRef.current.style.opacity = opacity
    console.log(opacity);
  })
  return (
    <>
      <div className="flex flex-col justify-center justify-items-center h-full" ref={containerRef}>
        <h2 className="font-display text-5xl uppercase text-center mb-32">
          Наши Услуги
        </h2>
        <div className="flex gap-3">
          <ServiceCard title="Размещение у блогеров">
            <div>
              <p className="mb-2">
                Поможем реализовать эффективную рекламную кампанию с блогерами:
              </p>
              <ul className="flex flex-col  gap-2 list-disc list-inside">
                <li>Подберём лидеров мнений с нужной ЦА.</li>
                <li>
                  Придумаем креативный заход и порекомендуем сплит площадок для
                  размещения
                </li>
                <li>
                  Протестируем ваши гипотезы и поможем осуществить самые смелые
                  идеи!
                </li>
              </ul>
            </div>
          </ServiceCard>
          <ServiceCard title="Посевное размещение">
            <div>
              Каким бы ни был инфоповод, мы поможем о нём рассказать вашей ЦА
              через размещения в тематических каналах.
              <br />
              Подберём каналы в подходящих категориях, продумаем формат
              интеграции, подготовим материалы и проконтролируем выходы.
            </div>
          </ServiceCard>
          <ServiceCard title="Стратегии и подходы">
            <div>
              Не можете решиться на работу с блогерами? Не знаете в чём
              эффективность промо через посевы? Затрудняетесь ответить нужны ли
              бренду амбассадоры? Мы ответим на все эти и множество других
              вопросов. Подготовим подход к работе с блогерами или пропишем
              полноценную стратегию на квартал/полгода/год.
            </div>
          </ServiceCard>
        </div>
      </div>
    </>
  );
};

export const ServiceCard = ({ title, children }) => {
  return (
    <>
      <div
        className="flex-1 flex flex-col items-start border px-6 py-9 pb-0 min-h-0 backdrop-blur-md transition duration-500
        bg-white bg-opacity-25 box-content shadow-none hover:border-begonia hover:shadow-extend group translate-y-[0] hover:-translate-y-4"
      >
        <h3 className="text-3xl mb-6">{title}</h3>
        <p className="flex transition mb-6">
          {children}
        </p>
        <div className="mt-auto overflow-hidden pb-6">
          <a href="#"
             className="bg-gradient-to-br from-begonia to-infra-red px-16 py-[10px]  rounded-full inline-flex text-white transition duration-500 opacity-0 transform  translate-y-[100%] group-hover:-translate-y-[0] group-hover:opacity-100">
            Связь
          </a>
        </div>
      </div>
    </>
  );
};
