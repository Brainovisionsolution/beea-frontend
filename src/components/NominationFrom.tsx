import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Upload, CheckCircle, AlertCircle, Search } from 'lucide-react';

// Define interfaces for type safety
interface FormData {
    fullName: string;
    email: string;
    mobile: string;
    gender: string;
    college: string;
    designation: string;
    experienceYears: string;
    category: string;
    achievements: string;
    address: string;
    photo: File | null;
}

// UPDATED: SuccessResponse interface - now matches backend response
interface SuccessResponse {
    email: string;
    fullName: string;
    expiresIn: string;
}

interface ApiError {
    response?: {
        data?: {
            message?: string;
        };
    };
    message?: string;
}

const NominationForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        email: '',
        mobile: '',
        gender: '',
        college: '',
        designation: '',
        experienceYears: '',
        category: '',
        achievements: '',
        address: '',
        photo: null
    });

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<SuccessResponse | null>(null);
    const [step, setStep] = useState<number>(1);
    const [categorySearch, setCategorySearch] = useState<string>('');

    const categories: string[] = [
        // 🔷 General / Existing
        'Best Educational Institution',
        'Outstanding Teacher Award',
        'Innovative Teaching Methodology',
        'Research Excellence Award',
        'Young Achiever Award',
        'Lifetime Achievement Award',
        'Best Engineering College',
        'Best Management Institute',

        // 🏫 College Awards
        'Overall Excellence in Education',
        'Academic Excellence',
        'Innovation in Teaching & Learning',
        'Best in Research & Development',
        'Student Support & Welfare Excellence',
        'Outstanding Infrastructure & Facilities',
        'Industry Collaboration & Placements',
        'Social Impact & Community Engagement',
        'Sustainable Green Campus Initiative',

        // 👤 Individual Awards
        'Samarpana Acharya Lifetime Achievement Award',
        'Bhisma Acharya Individual Award',
        'Sadhya Acharya Industry Collaboration Award',
        'Jyestha Acharya Individual Award',
        'Uttama Adhyapika Individual Award',
        'Kalpa Acharya Individual Award',
        'Yuva Acharya Individual Award',
        'Niyukti Acharya Individual Award',
        'Ananta Acharya Leadership Award',
        'Shakti Acharya Empowerment Award',
        'Shraddha Acharya Student Success Award',
        'Udyam Acharya Entrepreneurship Award',
        'Anveshana Acharya Research Mentorship Award',
        'Vidya Ratna – Jewel of Education Award',
        'Buddhiman Guru – Wise Teacher Award',
        'Guru Shreshta – Greatest Teacher Award',
        'Vidya Vibhushan – Ornament of Learning Award',
        'Shiksha Samrat – Emperor of Education Award'
    ];

    // Filter categories based on search
    const filteredCategories = categories.filter(category =>
        category.toLowerCase().includes(categorySearch.toLowerCase())
    );

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const file = e.target.files?.[0];
        if (file && file.type.startsWith('image/')) {
            setFormData(prev => ({ ...prev, photo: file }));
            setError('');
        } else {
            setError('Please select a valid image file');
            e.target.value = ''; // Reset file input
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setLoading(true);
        setError('');
        
        try {
            const formDataToSend = new FormData();
            (Object.keys(formData) as Array<keyof FormData>).forEach(key => {
                const value = formData[key];
                if (value !== null && value !== '') {
                    if (key === 'photo' && value instanceof File) {
                        formDataToSend.append(key, value);
                    } else if (typeof value === 'string') {
                        formDataToSend.append(key, value);
                    }
                }
            });

            const response = await axios.post<{ success: boolean; data: SuccessResponse }>(
                '/api/nominations/submit',
                formDataToSend,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );
            setSuccess(response.data.data);
            setStep(2);
            
        } catch (err) {
            const error = err as ApiError;
            setError(error.response?.data?.message || error.message || 'Submission failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    // COMPLETELY UPDATED: Success UI for step 2
    if (step === 2 && success) {
        return (
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-xl"
            >
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
                        <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>

                    <h2 className="text-3xl font-bold text-[#0B1A2F] mb-2">
                        Verification Email Sent!
                    </h2>

                    <p className="text-gray-600">
                        Please check your email to complete your nomination.
                    </p>
                </div>

                <div className="bg-gradient-to-r from-[#0B1A2F] to-[#132C42] text-[#F5E6C4] p-6 rounded-xl mb-6 text-center">
                    <p className="text-lg">
                        Verification email sent to
                    </p>

                    <p className="text-xl font-bold text-[#D4AF37] mt-2">
                        {success.email}
                    </p>

                    <p className="text-sm mt-4">
                        Click the verification link in your email to confirm your nomination.
                    </p>
                </div>

                <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-blue-500 mt-0.5" />
                    <div>
                        <p className="font-semibold text-blue-800">
                            Important
                        </p>

                        <p className="text-sm text-blue-600">
                            Your nomination will only be completed after email verification.
                        </p>
                    </div>
                </div>

                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-500">
                        Didn't receive the email? Check your spam folder or{' '}
                        <button 
                            onClick={() => window.location.reload()} 
                            className="text-[#D4AF37] hover:underline font-semibold"
                        >
                            try again
                        </button>
                    </p>
                </div>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-4xl mx-auto p-6"
        >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-[#0B1A2F] to-[#132C42] p-8 text-center">
                    <h1 className="text-3xl font-bold text-[#D4AF37] mb-2">BEE Awards 2026</h1>
                    <p className="text-[#F5E6C4]">Nomination Form</p>
                </div>

                <form onSubmit={handleSubmit} className="p-8">
                    {error && (
                        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                            <AlertCircle className="w-5 h-5 text-red-500" />
                            <p className="text-red-600">{error}</p>
                        </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Personal Information */}
                        <div className="col-span-2">
                            <h3 className="text-lg font-semibold text-[#0B1A2F] mb-4 pb-2 border-b-2 border-[#D4AF37]">
                                Personal Information
                            </h3>
                        </div>

                        <div>
                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                                Full Name *
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                Email Address *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-2">
                                Mobile Number *
                            </label>
                            <input
                                type="tel"
                                id="mobile"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">
                                Gender *
                            </label>
                            <select
                                id="gender"
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        {/* Professional Information */}
                        <div className="col-span-2 mt-4">
                            <h3 className="text-lg font-semibold text-[#0B1A2F] mb-4 pb-2 border-b-2 border-[#D4AF37]">
                                Professional Information
                            </h3>
                        </div>

                        <div className="col-span-2">
                            <label htmlFor="college" className="block text-sm font-medium text-gray-700 mb-2">
                                College/Institution Name *
                            </label>
                            <input
                                type="text"
                                id="college"
                                name="college"
                                value={formData.college}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label htmlFor="designation" className="block text-sm font-medium text-gray-700 mb-2">
                                Designation *
                            </label>
                            <input
                                type="text"
                                id="designation"
                                name="designation"
                                value={formData.designation}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label htmlFor="experienceYears" className="block text-sm font-medium text-gray-700 mb-2">
                                Years of Experience *
                            </label>
                            <input
                                type="number"
                                id="experienceYears"
                                name="experienceYears"
                                value={formData.experienceYears}
                                onChange={handleChange}
                                required
                                min="0"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                            />
                        </div>

                        <div className="col-span-2">
                            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                                Nomination Category *
                            </label>
                            
                            {/* Category Search Input */}
                            <div className="relative mb-2">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Search className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search categories..."
                                    value={categorySearch}
                                    onChange={(e) => setCategorySearch(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                                />
                            </div>
                            
                            {/* Category Select with increased height and scroll */}
                            <select
                                id="category"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                required
                                size={8}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent overflow-y-auto"
                                style={{ maxHeight: '200px' }}
                            >
                                <option value="">Select Category</option>
                                {filteredCategories.length > 0 ? (
                                    filteredCategories.map(cat => (
                                        <option key={cat} value={cat} className="py-1">
                                            {cat}
                                        </option>
                                    ))
                                ) : (
                                    <option disabled>No categories found</option>
                                )}
                            </select>
                            
                            {/* Category count and selection info */}
                            <div className="mt-2 text-sm text-gray-500 flex justify-between items-center">
                                <span>
                                    {filteredCategories.length} category {filteredCategories.length === 1 ? 'available' : 'categories available'}
                                </span>
                                {formData.category && (
                                    <span className="text-[#D4AF37] font-medium">
                                        Selected: {formData.category}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="col-span-2">
                            <label htmlFor="achievements" className="block text-sm font-medium text-gray-700 mb-2">
                                Key Achievements (Max 500 words)
                            </label>
                            <textarea
                                id="achievements"
                                name="achievements"
                                value={formData.achievements}
                                onChange={handleChange}
                                rows={4}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                                placeholder="Please highlight your key achievements, contributions, and reasons for nomination..."
                            />
                        </div>

                        <div className="col-span-2">
                            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                                Address
                            </label>
                            <textarea
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                rows={3}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                            />
                        </div>

                        <div className="col-span-2">
                            <label htmlFor="photo" className="block text-sm font-medium text-gray-700 mb-2">
                                Upload Photo (Max 5MB) *
                            </label>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#D4AF37] transition-colors">
                                <input
                                    type="file"
                                    id="photo"
                                    name="photo"
                                    onChange={handleFileChange}
                                    accept="image/*"
                                    required
                                    className="hidden"
                                />
                                <label htmlFor="photo" className="cursor-pointer">
                                    <Upload className="w-12 h-12 mx-auto text-gray-400 mb-2" />
                                    <p className="text-sm text-gray-600">
                                        {formData.photo ? formData.photo.name : 'Click to upload or drag and drop'}
                                    </p>
                                    <p className="text-xs text-gray-500 mt-1">
                                        PNG, JPG, GIF up to 5MB
                                    </p>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full px-8 py-4 bg-[#D4AF37] text-[#0B1A2F] font-semibold rounded-lg transition-all ${
                                loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#F5E6C4] hover:scale-105'
                            }`}
                        >
                            {loading ? (
                                <span className="flex items-center justify-center gap-2">
                                    <div className="w-5 h-5 border-2 border-[#0B1A2F] border-t-transparent rounded-full animate-spin" />
                                    Processing...
                                </span>
                            ) : (
                                'Submit Nomination'
                            )}
                        </button>
                        <p className="text-xs text-gray-500 text-center mt-4">
                            * Required fields. By submitting, you agree to our terms and conditions.
                        </p>
                    </div>
                </form>
            </div>
        </motion.div>
    );
};

export default NominationForm;