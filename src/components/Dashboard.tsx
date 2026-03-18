import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
    User,
    Mail,
    Phone,
    Award,
    BookOpen,
    MapPin,
    Calendar,
    Clock,
    CheckCircle,
    XCircle,
    AlertCircle,
    LogOut,
    Settings,
    Download,
    Edit
} from 'lucide-react';

const Dashboard = () => {
    const [userData, setUserData] = useState(null);
    const [nomination, setNomination] = useState(null);
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetchDashboardData();
    }, []);

    const fetchDashboardData = async () => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(
            '/api/user/dashboard',
            {
                headers: { Authorization: `Bearer ${token}` },
                withCredentials: true
            }
        );

        if (response.data.success) {
            setUserData(response.data.data.user);
            setNomination(response.data.data.nomination);
            setActivities(response.data.data.activities);
        }
    } catch (err) {
        setError('Failed to load dashboard data');
        if (err.response?.status === 401) {
            navigate('/login');
        }
    } finally {
        setLoading(false);
    }
};

    const handleLogout = async () => {
    try {
        await axios.post(
            '/api/auth/logout',
            {},
            { withCredentials: true }
        );

        localStorage.removeItem('user');
        localStorage.removeItem('token');

        navigate('/login');
    } catch (error) {
        console.error('Logout failed:', error);
    }
};

    const getStatusBadge = (status) => {
        const statusConfig = {
            pending: { color: 'bg-yellow-100 text-yellow-800', icon: Clock },
            approved: { color: 'bg-green-100 text-green-800', icon: CheckCircle },
            rejected: { color: 'bg-red-100 text-red-800', icon: XCircle },
            withdrawn: { color: 'bg-gray-100 text-gray-800', icon: AlertCircle }
        };

        const config = statusConfig[status] || statusConfig.pending;
        const Icon = config.icon;

        return (
            <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${config.color}`}>
                <Icon className="w-4 h-4" />
                {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
        );
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0B1A2F] to-[#132C42]">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-[#F5E6C4]">Loading your dashboard...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-gradient-to-r from-[#0B1A2F] to-[#132C42] text-white shadow-lg">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-bold text-[#D4AF37]">BEE Awards 2026</h1>
                            <p className="text-sm text-[#F5E6C4]">Nominee Dashboard</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => navigate('/profile')}
                                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                            >
                                <Settings className="w-5 h-5" />
                            </button>
                            <button
                                onClick={handleLogout}
                                className="flex items-center gap-2 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 rounded-lg transition-colors"
                            >
                                <LogOut className="w-4 h-4" />
                                <span>Logout</span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-6 py-8">
                {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                        <AlertCircle className="w-5 h-5 text-red-500" />
                        <p className="text-red-600">{error}</p>
                    </div>
                )}

                <div className="grid md:grid-cols-3 gap-6">
                    {/* Profile Summary */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:col-span-1"
                    >
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="bg-gradient-to-r from-[#D4AF37] to-[#F5E6C4] p-6 text-center">
                                <div className="w-24 h-24 mx-auto bg-[#0B1A2F] rounded-full flex items-center justify-center mb-4">
                                    {nomination?.photo_path ? (
    <img
        src={
            nomination.photo_path.startsWith("http")
                ? nomination.photo_path
                : `/uploads/${nomination.photo_path}`
        }
        alt={nomination.full_name}
        className="w-full h-full rounded-full object-cover"
    />
) : (
    <User className="w-12 h-12 text-[#D4AF37]" />
)}
                                </div>
                                <h2 className="text-xl font-bold text-[#0B1A2F]">{nomination?.full_name}</h2>
                                <p className="text-sm text-[#0B1A2F] opacity-80">{nomination?.designation}</p>
                            </div>
                            <div className="p-6 space-y-4">
                                <div className="flex items-center gap-3">
                                    <Mail className="w-5 h-5 text-[#D4AF37]" />
                                    <span className="text-sm text-gray-600">{nomination?.email}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-[#D4AF37]" />
                                    <span className="text-sm text-gray-600">{nomination?.mobile}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <BookOpen className="w-5 h-5 text-[#D4AF37]" />
                                    <span className="text-sm text-gray-600">{nomination?.college}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MapPin className="w-5 h-5 text-[#D4AF37]" />
                                    <span className="text-sm text-gray-600">{nomination?.address || 'Address not provided'}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Main Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="md:col-span-2 space-y-6"
                    >
                        {/* Nomination Status Card */}
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h3 className="text-lg font-semibold text-[#0B1A2F] mb-4 flex items-center gap-2">
                                <Award className="w-5 h-5 text-[#D4AF37]" />
                                Nomination Status
                            </h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="p-4 bg-gray-50 rounded-lg">
                                    <p className="text-sm text-gray-500 mb-1">Nomination ID</p>
                                    <p className="text-lg font-mono font-bold text-[#D4AF37]">{nomination?.nomination_id}</p>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-lg">
                                    <p className="text-sm text-gray-500 mb-1">Status</p>
                                    <div>{getStatusBadge(nomination?.status)}</div>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-lg">
                                    <p className="text-sm text-gray-500 mb-1">Category</p>
                                    <p className="font-medium">{nomination?.category}</p>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-lg">
                                    <p className="text-sm text-gray-500 mb-1">Experience</p>
                                    <p className="font-medium">{nomination?.experience_years} Years</p>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-lg">
                                    <p className="text-sm text-gray-500 mb-1">Submitted On</p>
                                    <p className="font-medium flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-[#D4AF37]" />
                                        {new Date(nomination?.created_at).toLocaleDateString()}
                                    </p>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-lg">
                                    <p className="text-sm text-gray-500 mb-1">Last Updated</p>
                                    <p className="font-medium flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-[#D4AF37]" />
                                        {new Date(nomination?.updated_at).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Achievements */}
                        {nomination?.achievements && (
                            <div className="bg-white rounded-xl shadow-lg p-6">
                                <h3 className="text-lg font-semibold text-[#0B1A2F] mb-4">Key Achievements</h3>
                                <p className="text-gray-600 whitespace-pre-line">{nomination.achievements}</p>
                            </div>
                        )}

                        {/* Recent Activity */}
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h3 className="text-lg font-semibold text-[#0B1A2F] mb-4">Recent Activity</h3>
                            <div className="space-y-4">
                                {activities.length > 0 ? (
                                    activities.map((activity, index) => (
                                        <div key={index} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                                            <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                                            <div className="flex-1">
                                                <p className="font-medium">{activity.action}</p>
                                                <p className="text-sm text-gray-500">
                                                    {new Date(activity.date).toLocaleString()}
                                                </p>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-gray-500 text-center py-4">No recent activity</p>
                                )}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4">
                            <button
                                onClick={() => navigate('/edit-nomination')}
                                className="flex items-center gap-2 px-6 py-3 bg-[#D4AF37] text-[#0B1A2F] font-semibold rounded-lg hover:bg-[#F5E6C4] transition-colors"
                            >
                                <Edit className="w-4 h-4" />
                                Edit Nomination
                            </button>
                            <button
                                onClick={() => window.print()}
                                className="flex items-center gap-2 px-6 py-3 border-2 border-[#D4AF37] text-[#D4AF37] font-semibold rounded-lg hover:bg-[#D4AF37] hover:text-[#0B1A2F] transition-colors"
                            >
                                <Download className="w-4 h-4" />
                                Download Details
                            </button>
                        </div>
                    </motion.div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;