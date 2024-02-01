import {motion} from "framer-motion";
import {useRef} from "react";
import {useScroll} from "@react-three/drei";
import {useFrame} from "@react-three/fiber";

export const AdvertiseSection = () => {
  const containerRef = useRef();
  const data = useScroll()
  useFrame((state, delta, frame) => {
    const range = data.range(2/data.pages, 1.5/data.pages);
    const range2 = data.range(4.5/data.pages, 1/data.pages);
    // containerRef.current.style.opacity = range;
    // Изменяем цвет фона в зависимости от позиции скролла
    document.body.style.backgroundColor = `rgb(${255 - range * 255}, ${255 - range * 255}, ${255 - range * 255})`;
    document.body.style.color = `rgb(${range * 255}, ${range * 255}, ${range * 255})`;

    if (range2 > 0) {
      document.body.style.backgroundColor = `rgb(${range2 * 255}, ${range2 * 255}, ${range2 * 255})`;
      document.body.style.color = `rgb(${255 - range2 * 255}, ${255 - range2 * 255}, ${255 - range2 * 255})`;
    }
  })
  return (
    <>
      <div ref={containerRef} className="flex flex-col justify-center justify-items-center h-full w-full">
        <h2 className="font-display text-5xl mb-3">
          Рекламное размещение у блогеров
        </h2>
        <p className="max-w-2xl mb-8">
          Наша цель - создать подлинные и привлекательные рекламные сообщения,
          которые будут резонировать с аудиторией блогеров и вести к увеличению
          узнаваемости вашего бренда и продуктов.
        </p>
        <div className="flex flex-col gap-3">
          <motion.div className={`flex w-8/12 flex-1 p-[3px] min-h-16 border-[3px] border-begonia backdrop-blur-md bg-opacity-25 bg-black transition`}
          >
            <p className="py-2 px-4 bg-clip-text text-transparent bg-gradient-to-br from-begonia to-infra-red">
              Подбор популярных блогеров. Мы поможем выбрать блогеров, чей
              контент соответствует вашей целевой аудитории и ценностям бренда.
            </p>
          </motion.div>
          <div
              className={`flex w-8/12 flex-1 p-[3px] min-h-16 border-[3px] border-begonia backdrop-blur-md bg-opacity-25 bg-black transition`}
          >
            <p className="py-2 px-4 bg-clip-text text-transparent bg-gradient-to-br from-begonia to-infra-red">
              Поможем разработать креативное рекламное содержание, которое будет
              наиболее эффективно сочетаться с контентом блогера.
            </p>
          </div>
          <div
              className={`flex w-8/12 flex-1 p-[3px] min-h-16 border-[3px] border-begonia backdrop-blur-md bg-opacity-25 bg-black transition`}
          >
            <p className="py-2 px-4 bg-clip-text text-transparent bg-gradient-to-br from-begonia to-infra-red">
              Отслеживание и отчетность: Мы следим за результатами и предоставляем подробные отчеты о реакции аудитории на рекламу у блогеров.
            </p>
          </div>
          <div
              className={`flex w-8/12 flex-1 p-[3px] min-h-16 border-[3px] border-begonia backdrop-blur-md bg-opacity-25 bg-black transition`}
          >
            <p className="py-2 px-4 bg-clip-text text-transparent bg-gradient-to-br from-begonia to-infra-red">
              Анализируем результаты и вносим коррективы для максимизации
              эффективности рекламной кампании.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
