export const AdvertiseSection = () => {
  return (
    <>
      <div className="flex flex-col justify-center justify-items-center h-full w-full">
        <h2 className="font-display text-5xl mb-3">
          Рекламное размещение у блогеров
        </h2>
        <p className="max-w-2xl mb-8">
          Наша цель - создать подлинные и привлекательные рекламные сообщения,
          которые будут резонировать с аудиторией блогеров и вести к увеличению
          узнаваемости вашего бренда и продуктов.
        </p>
        <div className="flex flex-col gap-3">
          <AdvertiseCard className="w-7/12">
            Подбор популярных блогеров. Мы поможем выбрать блогеров, чей контент
            соответствует вашей целевой аудитории и ценностям бренда.
          </AdvertiseCard>
          <AdvertiseCard className="ml-auto w-10/12">
            Поможем разработать креативное рекламное содержание, которое будет
            наиболее эффективно сочетаться с контентом блогера.
          </AdvertiseCard>
          <AdvertiseCard className="w-8/12">
            Отслеживание и отчетность: Мы следим за результатами и предоставляем
            подробные отчеты о реакции аудитории на рекламу у блогеров.
          </AdvertiseCard>
          <AdvertiseCard className="ml-auto w-6/12">
            Анализируем результаты и вносим коррективы для максимизации
            эффективности рекламной кампании.
          </AdvertiseCard>
        </div>
      </div>
    </>
  );
};

export const AdvertiseCard = ({ children, className }) => {
  return (
    <>
      <div
        className={`flex w-8/12 flex-1 p-[3px] min-h-16 border-[3px] border-begonia backdrop-blur-md bg-opacity-25 bg-white ${className}`}
      >
        <p className="bg-clip-text text-transparent bg-gradient-to-br from-begonia to-infra-red">
          {children}
        </p>
      </div>
    </>
  );
};
