import Link from 'next/link';

export function Navigation() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8 items-center">
            <Link 
              href="/" 
              className="text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link 
              href="/team-builder" 
              className="text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Team Builder
            </Link>
            <Link 
              href="/pokedex" 
              className="text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Collection
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
