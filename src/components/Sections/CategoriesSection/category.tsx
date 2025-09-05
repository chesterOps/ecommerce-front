import "./Category.css";

interface CategoryProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  icon: React.ReactElement;
}

const Category = ({ title, icon, ...rest }: CategoryProps) => {
  return (
    <div className="category-card2" {...rest}>
      <div>{icon}</div>
      <h3>{title}</h3>
    </div>
  );
};

export default Category;
