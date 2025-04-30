'use client';

import { motion } from 'framer-motion';
import ServiceCard from "../_components/serviceCard";
import { Link } from 'react-scroll';

export default function Services() {
  const content = [
    {
      title: 'Analyse des Données & Data',
      description: 'gagnez en efficacité grâce à des solutions d\'intelligence artificielle adaptés à vos processus métier',
      options: [
        'Analyse de données avancée',
        'Visualisation de données interactive',
        'Machine Learning et IA',
        'Big Data Processing'
      ],
      image: '/public/assets/dataimage.png',
      isImageRight: false,
    },
    {
      title: 'Développement Web & Logiciel',
      description: 'Nous concevons des applications web et logiciels alliant ergonomie, performance et réactivité pour une expérience utilisateur optimale',
      options: [
        'Developpement Front-End moderne et reactif',
        'Developpement Back-End robuste et evolutif',
        'Applications web progressives (PWA)',
        'Intégration Site Wordpress et CMS',
      ],
      image: '/assets/dev.png',
      isImageRight: true,
    },
    {
      title: 'UI & UX Design',
      description: 'Nous concevons des interfaces modernes et faciles à utiliser pour offrir la meilleure expérience à vos utilisateurs.',
      options: [
        'Designs attractifs et intuitifs',
        'Creation de logo',
        'Creation de maquettes interactives',
        'Coherence visuelle et ergonomique',
      ],
      image: '/assets/ui.png',
      isImageRight: true,
    },
    {
      title: 'Infographie & Multimédia',
      description: 'Donnez vie à vos idées avec nos services créatifs. De la conception graphique à la production multimédia, nous créons du contenu qui captive.',
      options: [
        'Design graphique professionnel',
        'Production vidéo et animation',
        'Identité visuelle et branding',
        'Contenu pour réseaux sociaux'
      ],
      image: '/assets/infography.png',
      isImageRight: false,
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-30 blur-3xl" />
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-purple-100 rounded-full opacity-30 blur-3xl" />
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-green-100 rounded-full opacity-30 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 rounded-full text-blue-600 bg-blue-50 text-sm font-medium mb-4">
              Nos Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Solutions Numériques Innovantes
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Découvrez nos solutions qui vous permetre de maximiser votre efficacité et des couts reduit
            </p>
          </motion.div>
        </div>

        <div className="space-y-24">
          {content.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
                <ServiceCard {...service} index={index} />
            </motion.div>
          ))}
        </div>

        
        <motion.div 
          className="text-center mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link to='contactus' smooth={true} duration={'500'} className="cursor-pointer inline-flex items-center px-8 py-4 rounded-lg bg-primary text-white font-medium hover:bg-fourth transition-colors duration-200 shadow-lg hover:shadow-xl">
            Démarrer votre projet
          </Link>
        </motion.div>
      </div>
    </div>
  );
}