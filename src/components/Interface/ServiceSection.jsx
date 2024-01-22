export const ServiceSection = () => {
  return (
    <>
      <div className="flex flex-col justify-center justify-items-center h-full">
        <h2 className="font-display text-5xl uppercase text-center mb-11">
          Наши Услуги
        </h2>
        <div className="flex gap-3">
          <ServiceCard title="Размещение у блогеров">
            Поможем разработать креативное рекламное содержание, которое будет
            наиболее эффективно сочетаться с контентом блогера.
          </ServiceCard>
          <ServiceCard title="Посевное размещение">
            Создаем органический интерес к бренду путем размещения контента на
            различных онлайн-платформах. Эта услуга позволяет вашему бренду
            активно взаимодействовать с потенциальной аудиторией и создавать
            долгосрочные связи с клиентами.
          </ServiceCard>
          <ServiceCard title="Может ещё что-то?">
            Поможем разработать креативное рекламное содержание, которое будет
            наиболее эффективно сочетаться с контентом блогера.
          </ServiceCard>
        </div>
      </div>
    </>
  );
};

export const ServiceCard = ({ title, children }) => {
  return (
      <>
        <div className="flex-1 border px-6 py-9 pb-0 min-h-0 backdrop-blur-md bg-white bg-opacity-25">
          <h3 className="text-3xl mb-6">{title}</h3>
          <p className="mb-auto flex">{children}</p>
          <a href="#" className="mb-6 mt-6 block">
            Связь
          </a>
        </div>
      </>
  );
};
