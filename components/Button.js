function Button({ text }) {
  return (
    <div>
      <p className="uppercase cursor-pointer font-bold px-8 py-2 text-xs w-full border border-black rounded-full hover:bg-gray-300 text-center">
        {text}
      </p>
    </div>
  );
}

export default Button;
