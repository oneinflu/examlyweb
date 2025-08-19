import { motion } from 'framer-motion';
import Link from 'next/link';

export function CTASection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with brand gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary/70" />
      
      {/* Animated background shapes */}
      <motion.div
        className="absolute inset-0 opacity-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
      >
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </motion.div>

      <div className="relative container mx-auto px-4 text-center">
        {/* Animated heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-8"
        >
          Join us in reshaping education
        </motion.h2>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
          <Link
            href="/become-partner"
            className="inline-flex items-center px-8 py-3 text-lg font-semibold text-primary bg-white rounded-full hover:bg-gray-100 transition-colors duration-200"
          >
            Become a Partner
          </Link>
          <Link
            href="/why-examly"
            className="inline-flex items-center px-8 py-3 text-lg font-semibold text-white border-2 border-white rounded-full hover:bg-white/10 transition-colors duration-200"
          >
            Explore Features
          </Link>
        </div>
      </div>
    </section>
  );
}