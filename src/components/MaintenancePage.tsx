import Image from 'next/image';
import { motion } from 'framer-motion';

export default function MaintenancePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 p-4">
      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Image
            src="/projects/brand-logo.png"
            alt="PulseBit Logo"
            width={150}
            height={150}
            className="mx-auto"
          />
        </motion.div>

         <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
        >
          {/* We&apos;ll Be Back Soon! */}
          ShutDown Site !
        </motion.h1>

       {/* <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-gray-300 text-lg mb-8"
        >
          We&apos;re currently performing scheduled maintenance to improve your experience.
          Thank you for your patience!
        </motion.p> */}

        {/* <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8"
        >
          <h2 className="text-xl font-semibold text-blue-400 mb-4">Estimated Downtime</h2>
          <p className="text-gray-300">
            We expect to be back online within a few hours.
            Please check back later.
          </p>
        </motion.div> */}

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-gray-400 text-sm"
        >
          For urgent inquiries, please contact us at:
          <a 
            href="mailto:support@pulsebit.tech" 
            className="text-blue-400 hover:text-blue-300 ml-2 transition-colors duration-300"
          >
            support@pulsebit.tech
          </a>
        </motion.div>
      </div>
    </div>
  );
}