export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(to_bottom_right,#f0f0f0,#ffffff)] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-indigo-600 mb-4">404</h1>
          <div className="h-1 w-32 bg-indigo-600 mx-auto mb-8"></div>
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Oops! The page you're looking for seems to have wandered off into
            the digital void.
          </p>
        </div>

        <div className="flex justify-center">
          <a
            href="/"
            className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Go Home
          </a>
        </div>

        <div className="mt-12 text-gray-500">
          <p className="text-sm">
            Lost? Try using the navigation menu or search for what you need.
          </p>
        </div>
      </div>
    </div>
  );
}
