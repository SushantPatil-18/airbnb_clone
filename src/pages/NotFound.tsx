
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-5xl font-bold text-airbnb-red mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-6">Page not found</h2>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            We can't seem to find the page you're looking for. 
            The page might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>
          <Button asChild className="bg-airbnb-red hover:bg-red-600">
            <Link to="/">Return to homepage</Link>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
