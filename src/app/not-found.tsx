import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-wedera-pastel to-white flex items-center justify-center px-4">
      <div className="max-w-4xl w-full text-center space-y-8">
        {/* Decorative Elements */}
        <div className="relative">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-wedera-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 right-1/2 translate-x-1/2 w-40 h-40 bg-wedera-secondary/10 rounded-full blur-3xl" />
        </div>

        {/* Main Content */}
        <div className="relative">
          <h1 className="font-display text-9xl font-bold text-wedera-primary mb-4">
            404
          </h1>
          <h2 className="font-heading text-3xl md:text-4xl text-neutral-dark mb-6">
            Oops! Halaman Tidak Ditemukan
          </h2>
          <p className="text-neutral-dark/80 text-lg mb-8 max-w-lg mx-auto">
            Sepertinya halaman yang Anda cari telah pergi ke tempat yang lebih baik. 
            Mari kita kembali ke halaman utama.
          </p>
     

          {/* Back to Home Button */}
          <Link 
            href="/"
            className="inline-block bg-wedera-primary hover:bg-wedera-secondary text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Kembali ke Beranda
          </Link>
        </div>

        {/* Decorative Border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-wedera-primary to-transparent" />
      </div>
    </div>
  );
} 