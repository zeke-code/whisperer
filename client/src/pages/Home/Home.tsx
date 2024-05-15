function Home() {
  return (
    <div className="min-h-screen fixed top-0 left-0 right-0 z-50 flex items-center justify-center sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-white">
          Share your secrets to everyone, anonymously.
        </h2>
        <p className="mt-2 text-center text-1xl text-white">
          Everyone has skeletons in their closet.
        </p>
        <div className="py-8 px-4 sm:rounded-lg sm:px-10">
    <div className="sm:text-center">
        <div className="flex flex-col items-stretch justify-between">
            <input 
                type="text" 
                placeholder="Nickname" 
                className="mb-2 py-2 px-4 border border-purple-500 
                rounded-md text-sm font-medium text-white 
                focus:outline-none focus:ring-1 focus:ring-purple-600 bg-transparent"
            />
            <input 
                type="text" 
                placeholder="Enter game ID" 
                className="mb-2 py-2 px-4 border border-indigo-500 
                rounded-md text-sm font-medium text-white bg-transparent 
                focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
            <button 
                className="flex-shrink-0 py-2 px-4 border border-transparent 
                rounded-md text-sm font-medium text-white bg-indigo-600 
                hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
                focus:ring-indigo-500 mb-2"
            >
                Join Game
            </button>
            <button className="w-full flex justify-center py-2 px-4 border border-transparent 
            rounded-md text-sm font-medium text-white bg-rose-600 
            hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
            focus:ring-rose-500">
                Create Game
            </button>
        </div>
    </div>
</div>
      </div>
    </div>
  );
}

export default Home;