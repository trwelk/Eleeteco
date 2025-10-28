import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            404
          </h1>
        </div>
        
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Sorry, we couldn't find the page you're looking for.
            The page might have been moved or doesn't exist.
          </p>
          
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all hover:scale-105 shadow-lg font-medium"
            >
              Return to Homepage
            </Link>
            
            <div className="mt-6">
              <p className="text-sm text-gray-500 mb-3">Quick Links:</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/services" className="text-blue-600 hover:text-blue-800 font-medium">
                  Our Services
                </Link>
                <Link href="/about" className="text-blue-600 hover:text-blue-800 font-medium">
                  About Us
                </Link>
                <Link href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <p className="mt-8 text-gray-500 text-sm">
          If you believe this is an error, please{' '}
          <Link href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">
            contact us
          </Link>
        </p>
      </div>
    </div>
  );
}

