export const InfoCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-4 rounded-2xl">
      <div className="w-13 h-13 rounded-lg">
        <img src={icon} />
      </div>
      <h2 className="text-xl font-semibold mt-4">{title}</h2>
      <p className="text-sm text-secondary">{description}</p>
    </div>
  );
};
