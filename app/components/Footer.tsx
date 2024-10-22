export default function Footer() {
  return (
    <footer className=" pb-10 mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-xl">
          <a
            href="/"
            className="text-blue-700 dark:text-blue-500 hover:underline"
          >
            Back
          </a>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} ScoreB. Data powered by ESPN</p>
        </div>
      </div>
    </footer>
  );
}
