export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer 
      data-aos="fade-up"
      className="bg-wedera-dark text-white py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="font-body text-sm text-white/80">
            © {currentYear} Wedera. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 