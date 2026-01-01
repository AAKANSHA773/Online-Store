const ShimmerUI = () => {
  return (
    <main className="mx-auto max-w-6xl p-6">
      <div className="grid gap-8 md:grid-cols-2 animate-pulse">
        <div className="h-96 w-full rounded-xl bg-gray-200" />
        <div>
          <div className="h-6 w-3/4 rounded bg-gray-200" />
          <div className="mt-4 h-4 w-full rounded bg-gray-100" />
          <div className="mt-2 h-4 w-5/6 rounded bg-gray-100" />
          <div className="mt-2 h-4 w-4/6 rounded bg-gray-100" />
          <div className="mt-6 h-5 w-1/3 rounded bg-gray-100" />
          <div className="mt-6 h-10 w-1/2 rounded bg-gray-200" />
        </div>
      </div>
    </main>
  
  );
};

export default ShimmerUI;
