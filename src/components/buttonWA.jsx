const ButtonWA = ({ text }) => {
  const handleClick = () => {
    window.open("https://wa.me/6581181595", "_blank");
  };

  return (
    <button 
      onClick={handleClick}
      className="bg-gray-800 bg-gray-800 text-white px-4 py-2 rounded-md transition-colors hover:scale-110 transition transform duration-300 inline-block"
    >
      {text || "Contact Us"}
    </button>
  );
};

export default ButtonWA;