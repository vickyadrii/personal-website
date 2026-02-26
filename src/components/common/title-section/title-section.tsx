type Props = {
  title: string;
  description?: string;
  note?: string;
};

const TitleSection = ({ title, description, note }: Props) => {
  return (
    <div className="space-y-1">
      <h2 className="md:text-xl text-lg font-bold">{title}</h2>
      <p className="md:text-base text-sm text-primary-dark-500 md:leading-7 leading-6">{description}</p>
      <span className="text-primary-dark-500 font-normal text-xs">{note}</span>
    </div>
  );
};

export default TitleSection;
