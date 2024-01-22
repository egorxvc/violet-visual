export const HeaderSection = () => {
  return (
    <>
      <header className="py-8 flex justify-center w-full absolute top-8">
        <nav className="flex justify-center items-center gap-20">
          {[
            ["О нас", "/dashboard"],
            ["Услуги", "/team"],
            ["Блогеры", "/projects"],
            ["Контакты", "/reports"],
          ].map(([title, url], index) => (
            <a
              href={url}
              key={index}
              className="font-sans font-light text-base text-black transition duration-200 ease-in-out hover:text-infra-red"
            >
              {title}
            </a>
          ))}
          <a
            href="/"
            className="bg-gradient-to-br  from-begonia to-infra-red h-8 px-8 leading-8 text-base text-white rounded-full"
          >
            Связь
          </a>
        </nav>
      </header>
      <div className="h-full w-full flex justify-center items-center relative -z-10">
        <h1 className="font-display text-[120px] uppercase leading-[100px] flex flex-col w-max">
          <span className="w-full">
            Age<span className="invisible">n</span>cy
          </span>
          <span className="flex">
            <span className="invisible">AgA</span>gen
            <span className="invisible">c</span>y
          </span>
        </h1>
      </div>
    </>
  );
};
