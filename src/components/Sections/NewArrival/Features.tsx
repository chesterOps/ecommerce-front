import "./Features.css";

interface FeaturesProps {
  title: string;
  description: string;
  Imgsrc: string;
}

const Features = ({ title, description, Imgsrc }: FeaturesProps) => {
  return (
    <div className="feature-card">
      <img src={Imgsrc} alt={title} className="feature-img" />
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );
};

export default Features;
