import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Calendar, 
    ExternalLink, 
    ChevronLeft, 
    ChevronRight,
    Image as ImageIcon,
    Users,
    Award,
    Camera,
    X
} from 'lucide-react';

interface GalleryYear {
    year: string;
    title: string;
    part?: string;
    driveLink: string;
    coverImage: string;
    description: string;
    imageCount: number;
    highlights: string[];
}

const Gallery: React.FC = () => {
    const [selectedYear, setSelectedYear] = useState<string | null>(null);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const galleryData: GalleryYear[] = [
        
        {
            year: '2025',
            title: 'BEE Awards 2025',
            driveLink: 'https://drive.google.com/drive/folders/1y9CqQJxpy_Ty7GVZJF6n_YHsZw_aro6Q',
            coverImage: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            description: 'Third edition celebrating excellence in education with over 500 attendees and 50 award categories.',
            imageCount: 300,
            highlights: ['Keynote Sessions', 'Workshops', 'Excellence Awards']
        }
    ];

    const handleViewGallery = (driveLink: string) => {
        window.open(driveLink, '_blank', 'noopener noreferrer');
    };

    const years = ['2023', '2024', '2025'];
    const filteredGalleries = selectedYear 
        ? galleryData.filter(g => g.year === selectedYear)
        : galleryData;

    // Mock gallery images for lightbox (in real app, these would come from your backend/Drive API)
    const mockImages = [
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ];

    const openLightbox = (index: number) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-[#0B1A2F] to-[#132C42] text-white py-20">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#D4AF37] rounded-full opacity-10 blur-3xl"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#D4AF37] rounded-full opacity-10 blur-3xl"></div>
                </div>
                
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
                            <span className="text-[#D4AF37]">Gallery</span>
                        </h1>
                        <p className="text-xl text-[#F5E6C4] leading-relaxed">
                            Relive the memorable moments from past BEE Awards ceremonies. 
                            Browse through our collection of photos from 2023 to 2025.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Year Filter */}
            <section className="container mx-auto px-4 py-12">
                <div className="flex justify-center gap-4 mb-12">
                    <button
                        onClick={() => setSelectedYear(null)}
                        className={`px-6 py-3 rounded-full font-semibold transition-all ${
                            selectedYear === null
                                ? 'bg-[#D4AF37] text-[#0B1A2F]'
                                : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                        }`}
                    >
                        All Years
                    </button>
                    {years.map(year => (
                        <button
                            key={year}
                            onClick={() => setSelectedYear(year)}
                            className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${
                                selectedYear === year
                                    ? 'bg-[#D4AF37] text-[#0B1A2F]'
                                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                            }`}
                        >
                            <Calendar className="w-4 h-4" />
                            {year}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredGalleries.map((gallery, index) => (
                        <motion.div
                            key={`${gallery.year}-${gallery.part || ''}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
                        >
                            {/* Cover Image */}
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={gallery.coverImage}
                                    alt={gallery.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                                
                                {/* Year Badge */}
                                <div className="absolute top-4 left-4 bg-[#D4AF37] text-[#0B1A2F] px-4 py-2 rounded-full font-bold">
                                    {gallery.year} {gallery.part && `- Part ${gallery.part}`}
                                </div>
                                
                                {/* Image Count */}
                                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                                    <Camera className="w-4 h-4" />
                                    {gallery.imageCount}+
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-2xl font-heading font-bold text-[#0B1A2F] mb-3">
                                    {gallery.title}
                                </h3>
                                
                                <p className="text-gray-600 mb-4">
                                    {gallery.description}
                                </p>

                                {/* Highlights */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {gallery.highlights.map((highlight, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                                        >
                                            {highlight}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3">
                                    <button
                                        onClick={() => handleViewGallery(gallery.driveLink)}
                                        className="flex-1 bg-[#D4AF37] text-[#0B1A2F] px-4 py-3 rounded-lg font-semibold hover:bg-[#F5E6C4] transition-colors flex items-center justify-center gap-2 group"
                                    >
                                        <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                        View Gallery
                                    </button>
                                    
                                    <button
                                        onClick={() => openLightbox(index % mockImages.length)}
                                        className="px-4 py-3 border-2 border-[#D4AF37] text-[#D4AF37] rounded-lg hover:bg-[#D4AF37] hover:text-[#0B1A2F] transition-colors"
                                    >
                                        <ImageIcon className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Featured Moments */}
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-heading font-bold text-center text-[#0B1A2F] mb-4">
                        Featured <span className="text-[#D4AF37]">Moments</span>
                    </h2>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        Highlights from our previous editions that capture the essence of BEE Awards
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Stat 1 */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white rounded-xl shadow-lg p-8 text-center"
                        >
                            <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Camera className="w-8 h-8 text-[#D4AF37]" />
                            </div>
                            <div className="text-4xl font-bold text-[#0B1A2F] mb-2">850+</div>
                            <p className="text-gray-600">Photos Across 3 Editions</p>
                        </motion.div>

                        {/* Stat 2 */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 }}
                            className="bg-white rounded-xl shadow-lg p-8 text-center"
                        >
                            <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="w-8 h-8 text-[#D4AF37]" />
                            </div>
                            <div className="text-4xl font-bold text-[#0B1A2F] mb-2">1500+</div>
                            <p className="text-gray-600">Attendees</p>
                        </motion.div>

                        {/* Stat 3 */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-xl shadow-lg p-8 text-center"
                        >
                            <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Award className="w-8 h-8 text-[#D4AF37]" />
                            </div>
                            <div className="text-4xl font-bold text-[#0B1A2F] mb-2">120+</div>
                            <p className="text-gray-600">Award Categories</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-[#0B1A2F] to-[#132C42] text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-heading font-bold mb-6">
                        Ready to Be Part of <span className="text-[#D4AF37]">BEE Awards 2026?</span>
                    </h2>
                    <p className="text-xl text-[#F5E6C4] mb-8 max-w-2xl mx-auto">
                        Join the legacy of excellence. Nominate yourself or your institution today.
                    </p>
                    <a
                        href="/nominate"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#0B1A2F] font-heading font-semibold text-lg rounded-full hover:bg-[#F5E6C4] transition-all hover:scale-105 shadow-lg"
                    >
                        Nominate Now
                        <ExternalLink className="w-5 h-5" />
                    </a>
                </div>
            </section>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {lightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
                        onClick={() => setLightboxOpen(false)}
                    >
                        <button
                            className="absolute top-4 right-4 text-white hover:text-[#D4AF37] transition-colors z-10"
                            onClick={() => setLightboxOpen(false)}
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <button
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#D4AF37] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            onClick={(e) => {
                                e.stopPropagation();
                                setCurrentImageIndex((prev) => (prev - 1 + mockImages.length) % mockImages.length);
                            }}
                        >
                            <ChevronLeft className="w-12 h-12" />
                        </button>

                        <button
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#D4AF37] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            onClick={(e) => {
                                e.stopPropagation();
                                setCurrentImageIndex((prev) => (prev + 1) % mockImages.length);
                            }}
                        >
                            <ChevronRight className="w-12 h-12" />
                        </button>

                        <motion.img
                            key={currentImageIndex}
                            src={mockImages[currentImageIndex]}
                            alt={`Gallery image ${currentImageIndex + 1}`}
                            className="max-h-[90vh] max-w-[90vw] object-contain"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            onClick={(e) => e.stopPropagation()}
                        />

                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
                            {currentImageIndex + 1} / {mockImages.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;