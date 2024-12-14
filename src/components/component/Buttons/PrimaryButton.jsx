const PrimaryButton = ({ className, children, content, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} make_center bg-white rounded-[5px] h-[50px] w-[200px]`}
    >
      {content}
    </button>
  );
};

export default PrimaryButton;
