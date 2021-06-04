function CustomButton({ insideText, Icon }) {
  return (
    <button className="flex font-mainFont bg-mainColor text-white py-2 px-3 rounded-md hover:bg-hoverMainColor focus:outline-none">
      <Icon className="w-6 h-6 mr-1" />
      <p className="">{insideText}</p>
    </button>
  );
}

export default CustomButton;
