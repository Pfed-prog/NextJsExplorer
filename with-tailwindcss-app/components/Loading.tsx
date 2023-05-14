export const Loading = () => {
  return (
    <div className="h-screen bg-sky-100">
      <div className="flex justify-center items-center h-full">
        <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2 ">
          <div className="border-t-transparent border-solid animate-spin rounded-full border-blue-400 border-8 h-64 w-64" />
        </div>
      </div>
    </div>
  );
};
