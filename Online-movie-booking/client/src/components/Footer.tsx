import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
         <footer className="bg-primary text-primary-foreground py-6 px-6 md:px-10 lg:px-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <Link to="/privacy-policy" className="text-2xl font-bold">
            PrivacyPolicy
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/terms-of-condition" className="hover:underline">
            TermsOfCondition
            </Link>
            <Link to="/showtime" className="hover:underline">
              Showtimes
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer