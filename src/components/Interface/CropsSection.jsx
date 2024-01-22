export const CropsSection = () => {
  return (
    <div className="flex flex-col items-end text justify-center h-full">
      <div className="max-w-3xl mb-20">
        <h2 className="font-display text-5xl mb-3">Посевное размещение</h2>
        <p>
          Создаем органический интерес к бренду путем размещения контента на
          различных онлайн-платформах. Эта услуга позволяет вашему бренду
          активно взаимодействовать с потенциальной аудиторией и создавать
          долгосрочные связи с клиентами.
        </p>
      </div>
      <div className="flex flex-col gap-4 items-end">
        <CropsCard>
          Аудиторский анализ: Мы изучаем вашу целевую аудиторию и определяем
          ключевые платформы и сообщества, в которых она активна.
        </CropsCard>
        <CropsCard>
          Распределение контента: Мы активно участвуем в диалогах и обсуждениях,
          размещаем информацию о вашем бренде и продуктах на различных
          платформах, где ваша целевая аудитория активна.
        </CropsCard>
        <CropsCard>
          Мы поддерживаем коммуникацию с пользователями, отвечаем на их вопросы,
          стимулируем обсуждение и содействуем развитию позитивного отношения к
          вашему бренду.
        </CropsCard>
        <CropsCard>
          Мы отслеживаем реакцию аудитории, анализируем эффективность контента и
          вносим корректировки для улучшения результатов.
        </CropsCard>
      </div>
    </div>
  );
};

export const CropsCard = ({ children, className }) => {
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
