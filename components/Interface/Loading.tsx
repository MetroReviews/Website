export const Loading = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <i className="fa fa-yin-yang fa-spin fa-2x text-center m-5" />
      <p className="italic">
        <strong>LOADING CONTENT:</strong> please wait...
      </p>
    </div>
  );
};
