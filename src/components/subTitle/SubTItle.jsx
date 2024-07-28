import "./SubTitle.css";

const SubTitle = ({ children }) => {
  return (
    <div>
      <h2 className="sub-title">{children}</h2>
    </div>
  );
};

export default SubTitle;
