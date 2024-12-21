const PrimaryButton = ({ className, children, content, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} make_center rounded-[5px] h-[50px]`}
    >
      {content}
    </button>
  );
};

export default PrimaryButton;
