import {Picture} from "astro:assets";

export const BloggersSection = () => {
  return (
    <div className="flex flex-col justify-center justify-items-center h-full w-full">
      <h2 className="font-display text-5xl mb-3">
        Наши блогеры
        <br />
        на эксклюзиве
      </h2>
      <div className="grid grid-cols-2 grid-rows-2 gap-y-10 my-20">
        <BloggerCard
          imgSrc="/violet-visual/medias/blogger1.png"
          name="tatoshe4ka"
          count="2.2 Млн"
        />
        <BloggerCard
          imgSrc="/violet-visual/medias/blogger2.png"
          name="evgeniya.khudyakova"
          count="1.7 Млн"
        />
        <BloggerCard
          imgSrc="/violet-visual/medias/blogger3.png"
          name="_fenik_"
          count="357 Тыс"
        />
        <BloggerCard
          imgSrc="/violet-visual/medias/blogger4.png"
          name="yanains"
          count="185 Тыс"
        />
      </div>
      <div className="max-w-2xl flex flex-col gap-6 items-start">
        <p>
          Откройте для своего бренда уникальные возможности с нашими
          эксклюзивными блогерами, воплощающими стиль, креатив и влияние в
          каждой публикации.
        </p>
        <a
          href="/"
          className="bg-gradient-to-br from-begonia to-infra-red h-8 px-8 leading-8 text-base text-white rounded-full"
        >
          Связь
        </a>
      </div>
    </div>
  );
};

export const BloggerCard = ({ imgSrc, name, count }) => {
  return (
    <div className={`flex items-center gap-9`}>
      <div className=" flex rounded-full bg-gradient-to-br from-begonia to-infra-red p-1">
        <img
          src={imgSrc}
          alt={name}
          width={169}
          height={169}
          className="rounded-full border-4"
        />
      </div>
      <div className="flex flex-col text-black">
        <span className="text-xl">@{name}</span>
        <span className="text-3xl font-bold">{count}</span>
      </div>
    </div>
  );
};
