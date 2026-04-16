import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Upload, CheckCircle, AlertCircle, Linkedin, User, Mail, Phone, MapPin, Building, Briefcase, Calendar } from 'lucide-react';

// Define interfaces for type safety
interface FormData {
    fullName: string;
    email: string;
    mobile: string;
    gender: string;
    college: string;
    designation: string;
    experienceYears: string;
    address: string;
    linkedinProfile: string;
    photo: File | null;
}

interface SuccessResponse {
    email: string;
    fullName: string;
    nominationId: string;
    expiresIn: string;
}

interface ApiError {
    response?: {
        data?: {
            message?: string;
            errors?: Record<string, string>;
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
        address: '',
        linkedinProfile: '',
        photo: null
    });

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
    const [success, setSuccess] = useState<SuccessResponse | null>(null);
    const [step, setStep] = useState<number>(1);

    const validateForm = (): boolean => {
        const errors: Record<string, string> = {};

        if (!formData.fullName.trim()) errors.fullName = 'Full name is required';
        if (!formData.email.trim()) errors.email = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = 'Invalid email format';
        if (!formData.mobile.trim()) errors.mobile = 'Mobile number is required';
        else if (!/^[0-9]{10}$/.test(formData.mobile.replace(/[^0-9]/g, ''))) errors.mobile = 'Invalid mobile number (10 digits required)';
        if (!formData.gender) errors.gender = 'Gender is required';
        if (!formData.college.trim()) errors.college = 'College/Institution name is required';
        if (!formData.designation.trim()) errors.designation = 'Designation is required';
        if (!formData.experienceYears) errors.experienceYears = 'Years of experience is required';
        else if (isNaN(Number(formData.experienceYears)) || Number(formData.experienceYears) < 0) errors.experienceYears = 'Valid years of experience required';
        if (!formData.address.trim()) errors.address = 'Address is required';
        if (!formData.photo) errors.photo = 'Photo is required';
        else if (formData.photo.size > 5 * 1024 * 1024) errors.photo = 'Photo must be less than 5MB';
        else if (!formData.photo.type.startsWith('image/')) errors.photo = 'File must be an image';

        setFieldErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear field error when user starts typing
        if (fieldErrors[name]) {
            setFieldErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.type.startsWith('image/')) {
                if (file.size <= 5 * 1024 * 1024) {
                    setFormData(prev => ({ ...prev, photo: file }));
                    setFieldErrors(prev => ({ ...prev, photo: '' }));
                    setError('');
                } else {
                    setFieldErrors(prev => ({ ...prev, photo: 'Photo size should be less than 5MB' }));
                    e.target.value = '';
                }
            } else {
                setFieldErrors(prev => ({ ...prev, photo: 'Please select a valid image file (JPEG, PNG, GIF)' }));
                e.target.value = '';
            }
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }
        
        setLoading(true);
        setError('');
        
        try {
            const formDataToSend = new FormData();

            // ✅ Correct mapping (VERY IMPORTANT)
            formDataToSend.append("full_name", formData.fullName);
            formDataToSend.append("email", formData.email);
            formDataToSend.append("mobile", formData.mobile);
            formDataToSend.append("gender", formData.gender);
            formDataToSend.append("college", formData.college);
            formDataToSend.append("designation", formData.designation);
            formDataToSend.append("experience_years", formData.experienceYears);
            formDataToSend.append("address", formData.address);
            formDataToSend.append("linkedin_profile", formData.linkedinProfile);

            // ✅ Phase 1 default category (no UI needed)
            formDataToSend.append("category", "Phase1");

            // ✅ File
            if (formData.photo) {
                formDataToSend.append("photo", formData.photo);
            }

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
            if (error.response?.data?.errors) {
                setFieldErrors(error.response.data.errors);
            }
            setError(error.response?.data?.message || error.message || 'Submission failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    // Success UI for step 2
    if (step === 2 && success) {
        return (
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-2xl mx-auto p-8 rounded-2xl shadow-xl"
                style={{ backgroundColor: '#0A1628' }}
            >
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
                        <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>

                    <h2 className="text-3xl font-bold mb-2" style={{ color: '#FFFFFF' }}>
                        Verification Email Sent!
                    </h2>

                    <p className="text-sm" style={{ color: '#B8C5D6' }}>
                        Please check your email to complete your nomination.
                    </p>
                </div>

                <div className="p-6 rounded-xl mb-6 text-center" style={{ 
                    background: 'linear-gradient(135deg, rgba(212,175,55,0.1) 0%, rgba(245,230,196,0.05) 100%)',
                    border: '1px solid rgba(212, 175, 55, 0.2)'
                }}>
                    <p className="text-sm" style={{ color: '#B8C5D6' }}>
                        Verification email sent to
                    </p>

                    <p className="text-xl font-bold mt-2" style={{ color: '#D4AF37' }}>
                        {success.email}
                    </p>

                    <p className="text-xs mt-4" style={{ color: '#B8C5D6' }}>
                        Nomination ID: <span className="font-mono">{success.nominationId}</span>
                    </p>

                    <p className="text-xs mt-2" style={{ color: '#B8C5D6' }}>
                        Verification link expires in {success.expiresIn}
                    </p>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg" style={{ background: 'rgba(212, 175, 55, 0.05)', border: '1px solid rgba(212, 175, 55, 0.15)' }}>
                    <AlertCircle className="w-5 h-5 mt-0.5" style={{ color: '#D4AF37' }} />
                    <div>
                        <p className="font-semibold" style={{ color: '#FFFFFF' }}>
                            Important
                        </p>

                        <p className="text-xs" style={{ color: '#B8C5D6' }}>
                            Your nomination will only be completed after email verification.
                            Please check your email within 24 hours.
                        </p>
                    </div>
                </div>

                <div className="mt-6 text-center">
                    <p className="text-xs" style={{ color: '#B8C5D6' }}>
                        Didn't receive the email? Check your spam folder or{' '}
                        <button 
                            onClick={() => window.location.reload()} 
                            className="hover:underline font-semibold"
                            style={{ color: '#D4AF37' }}
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
            <div className="rounded-2xl shadow-xl overflow-hidden" style={{ backgroundColor: '#0A1628', border: '1px solid rgba(212, 175, 55, 0.15)' }}>
                <div className="p-8 text-center" style={{ 
                    background: 'linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(245,230,196,0.03) 100%)',
                    borderBottom: '1px solid rgba(212, 175, 55, 0.15)'
                }}>
                    <h1 className="text-3xl font-bold mb-2" style={{ 
                        background: 'linear-gradient(135deg, #D4AF37 0%, #F5E6C4 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    }}>BEE Awards 2026</h1>
                    <p className="text-sm" style={{ color: '#B8C5D6' }}>Phase 1: Basic Information (All fields are mandatory)</p>
                </div>

                <form onSubmit={handleSubmit} className="p-8">
                    {error && (
                        <div className="mb-6 p-4 rounded-lg flex items-center gap-3" style={{ background: 'rgba(220, 38, 38, 0.1)', border: '1px solid rgba(220, 38, 38, 0.3)' }}>
                            <AlertCircle className="w-5 h-5" style={{ color: '#ef4444' }} />
                            <p className="text-sm" style={{ color: '#ef4444' }}>{error}</p>
                        </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Personal Information */}
                        <div className="col-span-2">
                            <h3 className="text-lg font-semibold mb-4 pb-2 border-b-2 flex items-center gap-2" style={{ color: '#FFFFFF', borderColor: '#D4AF37' }}>
                                <User className="w-5 h-5" style={{ color: '#D4AF37' }} />
                                Personal Information
                            </h3>
                        </div>

                        <div>
                            <label htmlFor="fullName" className="block text-sm font-medium mb-2" style={{ color: '#B8C5D6' }}>
                                Full Name *
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                                className={`w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all outline-none ${fieldErrors.fullName ? 'border-red-500' : ''}`}
                                style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(212, 175, 55, 0.2)', color: '#FFFFFF' }}
                                placeholder="Enter your full name"
                            />
                            {fieldErrors.fullName && <p className="text-red-500 text-xs mt-1">{fieldErrors.fullName}</p>}
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: '#B8C5D6' }}>
                                <div className="flex items-center gap-2">
                                    <Mail className="w-4 h-4" style={{ color: '#D4AF37' }} />
                                    Email Address *
                                </div>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className={`w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all outline-none ${fieldErrors.email ? 'border-red-500' : ''}`}
                                style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(212, 175, 55, 0.2)', color: '#FFFFFF' }}
                                placeholder="you@example.com"
                            />
                            {fieldErrors.email && <p className="text-red-500 text-xs mt-1">{fieldErrors.email}</p>}
                        </div>

                        <div>
                            <label htmlFor="mobile" className="block text-sm font-medium mb-2" style={{ color: '#B8C5D6' }}>
                                <div className="flex items-center gap-2">
                                    <Phone className="w-4 h-4" style={{ color: '#D4AF37' }} />
                                    Mobile Number *
                                </div>
                            </label>
                            <input
                                type="tel"
                                id="mobile"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                required
                                className={`w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all outline-none ${fieldErrors.mobile ? 'border-red-500' : ''}`}
                                style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(212, 175, 55, 0.2)', color: '#FFFFFF' }}
                                placeholder="9876543210"
                            />
                            {fieldErrors.mobile && <p className="text-red-500 text-xs mt-1">{fieldErrors.mobile}</p>}
                        </div>

                        <div>
                            <label htmlFor="gender" className="block text-sm font-medium mb-2" style={{ color: '#B8C5D6' }}>
                                Gender *
                            </label>
                            <select
                                id="gender"
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                required
                                className={`w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all outline-none ${fieldErrors.gender ? 'border-red-500' : ''}`}
                                style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(212, 175, 55, 0.2)', color: '#FFFFFF' }}
                            >
                                <option value="" style={{ backgroundColor: '#0A1628' }}>Select Gender</option>
                                <option value="male" style={{ backgroundColor: '#0A1628' }}>Male</option>
                                <option value="female" style={{ backgroundColor: '#0A1628' }}>Female</option>
                                <option value="other" style={{ backgroundColor: '#0A1628' }}>Other</option>
                            </select>
                            {fieldErrors.gender && <p className="text-red-500 text-xs mt-1">{fieldErrors.gender}</p>}
                        </div>

                        {/* Professional Information */}
                        <div className="col-span-2 mt-4">
                            <h3 className="text-lg font-semibold mb-4 pb-2 border-b-2 flex items-center gap-2" style={{ color: '#FFFFFF', borderColor: '#D4AF37' }}>
                                <Building className="w-5 h-5" style={{ color: '#D4AF37' }} />
                                Professional Information
                            </h3>
                        </div>

                        <div className="col-span-2">
                            <label htmlFor="college" className="block text-sm font-medium mb-2" style={{ color: '#B8C5D6' }}>
                                College/Institution Name *
                            </label>
                            <input
                                type="text"
                                id="college"
                                name="college"
                                value={formData.college}
                                onChange={handleChange}
                                required
                                className={`w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all outline-none ${fieldErrors.college ? 'border-red-500' : ''}`}
                                style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(212, 175, 55, 0.2)', color: '#FFFFFF' }}
                                placeholder="Name of your college or institution"
                            />
                            {fieldErrors.college && <p className="text-red-500 text-xs mt-1">{fieldErrors.college}</p>}
                        </div>

                        <div>
                            <label htmlFor="designation" className="block text-sm font-medium mb-2" style={{ color: '#B8C5D6' }}>
                                <div className="flex items-center gap-2">
                                    <Briefcase className="w-4 h-4" style={{ color: '#D4AF37' }} />
                                    Designation *
                                </div>
                            </label>
                            <input
                                type="text"
                                id="designation"
                                name="designation"
                                value={formData.designation}
                                onChange={handleChange}
                                required
                                className={`w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all outline-none ${fieldErrors.designation ? 'border-red-500' : ''}`}
                                style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(212, 175, 55, 0.2)', color: '#FFFFFF' }}
                                placeholder="e.g., Professor, HOD, Director"
                            />
                            {fieldErrors.designation && <p className="text-red-500 text-xs mt-1">{fieldErrors.designation}</p>}
                        </div>

                        <div>
                            <label htmlFor="experienceYears" className="block text-sm font-medium mb-2" style={{ color: '#B8C5D6' }}>
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" style={{ color: '#D4AF37' }} />
                                    Years of Experience *
                                </div>
                            </label>
                            <input
                                type="number"
                                id="experienceYears"
                                name="experienceYears"
                                value={formData.experienceYears}
                                onChange={handleChange}
                                required
                                min="0"
                                step="0.5"
                                className={`w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all outline-none ${fieldErrors.experienceYears ? 'border-red-500' : ''}`}
                                style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(212, 175, 55, 0.2)', color: '#FFFFFF' }}
                                placeholder="Total years of experience"
                            />
                            {fieldErrors.experienceYears && <p className="text-red-500 text-xs mt-1">{fieldErrors.experienceYears}</p>}
                        </div>

                        {/* LinkedIn Profile */}
                        <div className="col-span-2">
                            <label htmlFor="linkedinProfile" className="block text-sm font-medium mb-2" style={{ color: '#B8C5D6' }}>
                                <div className="flex items-center gap-2">
                                    <Linkedin className="w-4 h-4" style={{ color: '#D4AF37' }} />
                                    LinkedIn Profile URL *
                                </div>
                            </label>
                            <input
                                type="url"
                                id="linkedinProfile"
                                name="linkedinProfile"
                                value={formData.linkedinProfile}
                                onChange={handleChange}
                                required
                                className={`w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all outline-none ${fieldErrors.linkedinProfile ? 'border-red-500' : ''}`}
                                style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(212, 175, 55, 0.2)', color: '#FFFFFF' }}
                                placeholder="https://www.linkedin.com/in/username"
                            />
                            {fieldErrors.linkedinProfile && <p className="text-red-500 text-xs mt-1">{fieldErrors.linkedinProfile}</p>}
                            <p className="text-xs mt-1" style={{ color: '#B8C5D6', opacity: 0.6 }}>Required - Helps verify your professional background</p>
                        </div>

                        {/* Address */}
                        <div className="col-span-2">
                            <label htmlFor="address" className="block text-sm font-medium mb-2" style={{ color: '#B8C5D6' }}>
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4" style={{ color: '#D4AF37' }} />
                                    Address *
                                </div>
                            </label>
                            <textarea
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                                rows={3}
                                className={`w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all outline-none resize-vertical ${fieldErrors.address ? 'border-red-500' : ''}`}
                                style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(212, 175, 55, 0.2)', color: '#FFFFFF' }}
                                placeholder="Your complete address"
                            />
                            {fieldErrors.address && <p className="text-red-500 text-xs mt-1">{fieldErrors.address}</p>}
                        </div>

                        {/* Photo Upload */}
                        <div className="col-span-2">
                            <label htmlFor="photo" className="block text-sm font-medium mb-2" style={{ color: '#B8C5D6' }}>
                                Upload Photo (Max 5MB) *
                            </label>
                            <div className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors hover:border-opacity-50 ${fieldErrors.photo ? 'border-red-500' : ''}`} style={{ borderColor: 'rgba(212, 175, 55, 0.3)' }}>
                                <input
                                    type="file"
                                    id="photo"
                                    name="photo"
                                    onChange={handleFileChange}
                                    accept="image/jpeg,image/png,image/jpg,image/gif"
                                    required
                                    className="hidden"
                                />
                                <label htmlFor="photo" className="cursor-pointer block">
                                    <Upload className="w-12 h-12 mx-auto mb-2" style={{ color: '#B8C5D6' }} />
                                    <p className="text-sm" style={{ color: '#B8C5D6' }}>
                                        {formData.photo ? formData.photo.name : 'Click to upload or drag and drop'}
                                    </p>
                                    <p className="text-xs mt-1" style={{ color: '#B8C5D6', opacity: 0.6 }}>
                                        PNG, JPG, GIF up to 5MB
                                    </p>
                                </label>
                            </div>
                            {fieldErrors.photo && <p className="text-red-500 text-xs mt-1">{fieldErrors.photo}</p>}
                        </div>
                    </div>

                    <div className="mt-8">
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full px-8 py-4 font-semibold rounded-lg transition-all ${
                                loading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
                            }`}
                            style={{ 
                                background: 'linear-gradient(135deg, #D4AF37 0%, #F5E6C4 100%)',
                                color: '#0A1628'
                            }}
                        >
                            {loading ? (
                                <span className="flex items-center justify-center gap-2">
                                    <div className="w-5 h-5 border-2 border-[#0A1628] border-t-transparent rounded-full animate-spin" />
                                    Submitting...
                                </span>
                            ) : (
                                'Submit Nomination'
                            )}
                        </button>
                        <p className="text-xs text-center mt-4" style={{ color: '#B8C5D6', opacity: 0.6 }}>
                            All fields are mandatory. By submitting, you agree to our terms and conditions.
                        </p>
                    </div>
                </form>
            </div>
        </motion.div>
    );
};

export default NominationForm;