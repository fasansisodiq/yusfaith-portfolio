import glassTexture from "../../../assests/backgrounds/glassTexture.png";

const data = [
  {
    id: 1,
    num: "2",
    txt: "years experience",
  },
  {
    id: 2,
    num: "4",
    txt: "projects experience",
  },
  {
    id: 3,
    num: "50+",
    txt: "positive reviews",
  },
];

function AboutMe() {
  return (
    <section
      id="aboutMe"
      className="w-full h-fit flex flex-col gap-5 md:pt-12 lg:pt-24 mb-24"
    >
      <h1 className="self-start  font-semibold text-2xl lg:text-5xl">
        About me
      </h1>
      <p className="w-full md:max-w-3xl pb-5 text-xl">
        I'm Abdul-Raheem Yuusuf, UI/UX designer with experience in designing
        user interfaces, creating prototypes, and conducting user research. I
        have a creative approach to problem-solving and loves collaborating with
        developers, and other designers.
      </p>
      <div className="w-full flex flex-col md:flex-row md:justify-between items-center gap-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="relative w-full rounded-xl overflow-hidden"
          >
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                backgroundImage: `url(${glassTexture})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                overflow: "hidden",
                opacity: 0.5,
              }}
            />
            <div className="relative flex flex-col gap-6 p-6 bg-white/40 hover:bg-white/60 hover:backdrop-blur-sm shadow-white hover:shadow-[inset_0_-5px_10px_0_rgba(0,0,0,0.5)] transition-all duration-500 ease-in-out">
              <span className="text-xl lg:text-3xl">{item.num}</span>
              <span className="text-xl lg:text-3xl capitalize">{item.txt}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutMe;
