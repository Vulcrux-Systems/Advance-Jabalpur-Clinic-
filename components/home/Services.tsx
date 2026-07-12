'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Smile, Zap, Activity, Sparkles, Heart, Star } from 'lucide-react'
import Image from 'next/image'
import { services } from '@/lib/data/services'

const serviceImages: Record<string, string> = {
  orthodontics: '/images/orthodontics.png',
  implants: '/images/implants.png',
  cosmetic: '/images/cosmetic.png',
  invisalign: '/images/invisalign.png',
}

const iconMap: Record<string, React.ReactNode> = {
  'Smile': <Smile size={32} />,
  'Tooth': <Zap size={32} />,
  'Activity': <Activity size={32} />,
  'Sparkles': <Sparkles size={32} />,
  'Heart': <Heart size={32} />,
  'Sun': <Star size={32} />,
}

export function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="text-sm font-semibold text-teal-600 bg-teal-100 px-4 py-2 rounded-full inline-block mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Complete Dental Care Under One Roof
          </h2>
          <p className="text-gray-600 text-lg">
            From orthodontics to cosmetic dentistry, we offer comprehensive dental solutions with world-class technology.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="group cursor-pointer"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg h-full overflow-hidden flex flex-col">
                {/* Image Section */}
                <div className="relative h-48 bg-gray-200 overflow-hidden">
                  {serviceImages[service.id as keyof typeof serviceImages] && (
                    <Image
                      src={serviceImages[service.id as keyof typeof serviceImages]}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  )}
                </div>

                {/* Content Section */}
                <div className="p-8 flex-1 flex flex-col">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    {iconMap[service.icon]}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed flex-1">
                    {service.description}
                  </p>

                  {/* Link */}
                  <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                    <span>Learn More</span>
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
