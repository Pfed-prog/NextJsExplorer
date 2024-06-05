const Tooltip = ({ content, children }) => {
  return (
    <div className="relative group inline-block">
      {children}
      <div className="absolute left-0 z-10 hidden mt-1 p-2 bg-white border rounded-lg shadow-lg group-hover:block text-black">
        {content}
      </div>
    </div>
  );
};

export default Tooltip;
