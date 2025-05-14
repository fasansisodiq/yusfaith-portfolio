import { GoDotFill } from "react-icons/go";

const Challenges = ({ title, description, challenges, conclusion }) => {
  return (
    <section className="pt-24">
      <div className="space-y-4 lg:space-y-10 mb-6 lg:mb-24">
        <h3 className="text-2xl lg:text-5xl font-semibold">{title}</h3>

        <p className="text-base lg:text-2xl w-full lg:max-w-[612px]">
          {description}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {challenges.map((challenge, index) => (
          <div
            key={index}
            className="relative border border-white p-6 rounded-xl space-y-4"
          >
            <GoDotFill
              color="#fff"
              className="absolute top-4 left-4 size-6 lg:size-8"
            />
            <h4 className="text-lg lg:text-2xl font-semibold mt-8">
              {challenge.title}
            </h4>
            <p className="text-base">{challenge.description}</p>
          </div>
        ))}
      </div>
      <p className="text-base lg:text-2xl w-full lg:max-w-[748px]">
        {conclusion}
      </p>
    </section>
  );
};

export default Challenges;
