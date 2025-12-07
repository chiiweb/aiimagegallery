import React, { useState } from 'react';

export default function AIGallery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const openModal = (src) => {
    setModalImage(src);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const galleryItems = [
    {
      id: 1,
      src: 'neural.love.webp',
      alt: 'Cozy cabin interior',
      tag: 'Midjourney',
      title: 'Warmth in Winter',
      prompt: 'cozy log cabin interior, large windows overlooking snowy pine forest, fireplace with warm flames, comfortable armchair with blanket, soft ambient lighting, winter wonderland view',
      featured: true
    },
    {
      id: 2,
      src: 'adobefireflyimage.jpg',
      alt: 'Wolf portrait',
      tag: 'DALL-E 3',
      title: 'Piercing Gaze',
      prompt: 'cinematic portrait of gray wolf with piercing blue eyes, snowfall, dramatic lighting, photorealistic'
    },
    {
      id: 3,
      src: 'adobeflux.1.jpg',
      alt: 'Fantasy island',
      tag: 'Stable Diffusion',
      title: 'Celestial Haven',
      prompt: 'fantasy floating island with glowing crystals, waterfalls, ancient trees, mystical atmosphere, concept art'
    },
    {
      id: 4,
      src: 'huggingfacespaces.jpg',
      alt: 'Anime city',
      tag: 'NovelAI',
      title: 'Neon Reflections',
      prompt: 'anime style, girl in rainy tokyo street at night, neon signs, cinematic lighting, melancholic atmosphere'
    },
    {
      id: 5,
      src: 'gemini.jpg',
      alt: 'Fantasy knight',
      tag: 'Midjourney',
      title: 'Storm Sentinel',
      prompt: 'dark fantasy knight with ornate armor and red cape, mountain peak, dramatic storm, epic composition'
    },
    {
      id: 6,
      src: 'perchance.jpg',
      alt: 'Enchanted forest',
      tag: 'DALL-E 3',
      title: 'Ancient Wisdom',
      prompt: 'enchanted forest with giant trees, glowing golden runes, mystical pathway, sunbeams, magical particles'
    },
    {
      id: 7,
      src: 'deepai.jpg',
      alt: 'Robot lab',
      tag: 'Stable Diffusion',
      title: 'Future Laboratory',
      prompt: 'futuristic robot scientist in lab coat, glowing test tubes, modern laboratory, photorealistic rendering'
    },
    {
      id: 8,
      src: 'adobe.jpg',
      alt: 'Lion',
      tag: 'Midjourney',
      title: 'Regal Majesty',
      prompt: 'powerful male lion with magnificent mane, desert landscape, golden hour, professional wildlife photography'
    },
    {
      id: 9,
      src: 'bingimagecreator.jpg',
      alt: 'Cyberpunk',
      tag: 'NovelAI',
      title: 'Neon Dreams',
      prompt: 'cyberpunk city street, flying cars, neon signs, wet reflective ground, futuristic architecture'
    },
    {
      id: 10,
      src: 'craiyon.jpg',
      alt: 'Cottage',
      tag: 'DALL-E 3',
      title: 'Enchanted Dwelling',
      prompt: 'whimsical storybook cottage in forest, thatched roof, glowing windows, fireflies, fantasy illustration'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Montserrat:wght@300;400;500;600&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Montserrat', sans-serif;
        }
        
        .playfair {
          font-family: 'Playfair Display', serif;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes zoomIn {
          from { transform: translate(-50%, -50%) scale(0.9); opacity: 0; }
          to { transform: translate(-50%, -50%) scale(1); opacity: 1; }
        }
        
        .modal-enter {
          animation: fadeIn 0.3s ease;
        }
        
        .modal-content-enter {
          animation: zoomIn 0.3s ease;
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/98 backdrop-blur-md px-8 md:px-16 py-5 flex justify-between items-center z-50 border-b border-gray-200">
        <div className="playfair text-3xl font-bold tracking-wider text-gray-800">
          AI GALLERY
        </div>
        <ul className="flex gap-6 md:gap-10 list-none">
          {['Home', 'Gallery', 'About', 'Contact'].map(item => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 text-xs uppercase tracking-widest font-medium hover:text-gray-800 transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="mt-20 px-8 md:px-16 py-24 bg-gradient-to-br from-gray-50 to-gray-200 text-center">
        <h1 className="playfair text-5xl md:text-7xl font-bold text-gray-800 mb-5 tracking-tight">
          Artificial Artistry
        </h1>
        <p className="text-lg text-gray-600 font-light tracking-widest uppercase">
          Exploring AI-Generated Imagery
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-20">
        <div className="text-center mb-16">
          <h2 className="playfair text-5xl font-semibold mb-4 text-gray-800">
            Featured Collection
          </h2>
          <p className="text-sm text-gray-400 tracking-widest uppercase">
            Ten Unique Creations from Leading AI Models
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          {galleryItems.map(item => (
            <div 
              key={item.id}
              className={`bg-white overflow-hidden transition-all duration-400 border border-gray-100 hover:transform hover:-translate-y-1 hover:shadow-2xl ${
                item.featured ? 'md:col-span-2' : ''
              }`}
            >
              <div className={`w-full overflow-hidden relative bg-gray-50 ${
                item.featured ? 'h-96 md:h-[600px]' : 'h-96 md:h-[450px]'
              }`}>
                <img 
                  src={item.src}
                  alt={item.alt}
                  onClick={() => openModal(item.src)}
                  className="w-full h-full object-cover transition-transform duration-600 cursor-pointer hover:scale-105"
                />
              </div>
              <div className="p-9 bg-white">
                <span className="inline-block text-xs tracking-widest uppercase text-white bg-gray-800 px-5 py-2 mb-5 font-semibold">
                  {item.tag}
                </span>
                <h3 className="playfair text-2xl font-semibold text-gray-800 mb-4 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 font-light">
                  <span className="font-medium text-gray-800">Prompt:</span> {item.prompt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 text-center py-16 text-xs tracking-widest uppercase">
        <p>AI Gallery © 2024 — Showcasing the Future of Digital Art</p>
      </footer>

      {/* Modal */}
      {modalOpen && (
        <div 
          className="fixed inset-0 z-[2000] bg-black/95 modal-enter"
          onClick={closeModal}
        >
          <span className="absolute top-8 right-12 text-white text-5xl font-light cursor-pointer hover:text-gray-400 transition-colors">
            &times;
          </span>
          <img 
            src={modalImage}
            alt="Modal view"
            className="block max-w-[90%] max-h-[90%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 modal-content-enter"
          />
        </div>
      )}
    </div>
  );
}
