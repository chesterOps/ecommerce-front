import "./Category.css";

interface CategoryProps {
  title: string;
  icon: React.ReactElement;
}

const Category = ({ title, icon }: CategoryProps) => {
  return (
    <div className="category-card2 ">
      <div>{icon}</div>
      <h3>{title}</h3>
    </div>
  );
};

export default Category;
