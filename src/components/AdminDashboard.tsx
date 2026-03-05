import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import {
    Users,
    CheckCircle,
    XCircle,
    Clock,
    Download,
    Filter,
    Search,
    Eye,
    ChevronLeft,
    ChevronRight,
    BarChart3,
    PieChart,
    TrendingUp,
    Award,
    Mail,
    Phone,
    MapPin,
    Calendar,
    User,
    BookOpen
} from 'lucide-react';

interface Nomination {
    id: number;
    nomination_id: string;
    full_name: string;
    email: string;
    mobile: string;
    gender: string;
    college: string;
    designation: string;
    experience_years: number;
    category: string;
    status: 'pending' | 'approved' | 'rejected' | 'withdrawn';
    created_at: string;
    updated_at: string;
    last_login: string | null;
}

interface Stats {
    overview: {
        total_nominations: number;
        pending_count: number;
        approved_count: number;
        rejected_count: number;
        withdrawn_count: number;
        total_categories: number;
        first_nomination: string;
        latest_nomination: string;
    };
    categoryWise: Array<{
        category: string;
        count: number;
        pending: number;
        approved: number;
    }>;
    recentActivity: Array<{
        date: string;
        nominations: number;
    }>;
    genderDistribution: Array<{
        gender: string;
        count: number;
    }>;
}

const AdminDashboard: React.FC = () => {
    const [nominations, setNominations] = useState<Nomination[]>([]);
    const [stats, setStats] = useState<Stats | null>(null);
    const [loading, setLoading] = useState(true);
    const [selectedNomination, setSelectedNomination] = useState<Nomination | null>(null);
    const [viewMode, setViewMode] = useState<'dashboard' | 'list' | 'details'>('dashboard');
    
    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    
    // Filters
    const [statusFilter, setStatusFilter] = useState('all');
    const [categoryFilter, setCategoryFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [categories, setCategories] = useState<string[]>([]);

    useEffect(() => {
        fetchDashboardStats();
        fetchNominations();
    }, [currentPage, statusFilter, categoryFilter, searchQuery]);

    const fetchDashboardStats = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(
                'http://localhost:5000/api/admin/dashboard/stats',
                {
                    headers: { Authorization: `Bearer ${token}` }
                }
            );
            setStats(response.data.data);
        } catch (error) {
            console.error('Failed to fetch stats:', error);
        }
    };

  

    const fetchNominationDetails = async (id: number | string) => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(
                `http://localhost:5000/api/admin/nominations/${id}`,
                {
                    headers: { Authorization: `Bearer ${token}` }
                }
            );
            setSelectedNomination(response.data.data.nomination);
            setViewMode('details');
        } catch (error) {
            console.error('Failed to fetch nomination details:', error);
        }
    };const fetchNominations = async () => {
    setLoading(true);
    try {
        const token = localStorage.getItem('token');
        console.log('Fetching with token:', token);
        
        const response = await axios.get(
            `http://localhost:5000/api/admin/nominations?page=${currentPage}&status=${statusFilter}&category=${categoryFilter}&search=${searchQuery}`,
            {
                headers: { Authorization: `Bearer ${token}` }
            }
        );
        
        console.log('API Response:', response.data);
        
        if (response.data.success) {
            setNominations(response.data.data.nominations);
            setTotalPages(response.data.data.pagination.pages);
            setTotalItems(response.data.data.pagination.total);
            setCategories(response.data.data.filters.categories);
        }
    } catch (error) {
        console.error('Failed to fetch nominations:', error);
        if (error.response) {
            console.error('Error response:', error.response.data);
        }
    } finally {
        setLoading(false);
    }
};

    const updateNominationStatus = async (id: number, status: string) => {
        try {
            const token = localStorage.getItem('token');
            await axios.put(
                `http://localhost:5000/api/admin/nominations/${id}/status`,
                { status },
                {
                    headers: { Authorization: `Bearer ${token}` }
                }
            );
            fetchNominations();
            fetchDashboardStats();
            if (selectedNomination) {
                setSelectedNomination(null);
                setViewMode('list');
            }
        } catch (error) {
            console.error('Failed to update status:', error);
        }
    };

    const exportCSV = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(
                'http://localhost:5000/api/admin/export/csv',
                {
                    headers: { Authorization: `Bearer ${token}` },
                    responseType: 'blob'
                }
            );
            
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'nominations.csv');
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (error) {
            console.error('Failed to export CSV:', error);
        }
    };

    const getStatusBadge = (status: string) => {
        const styles = {
            pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
            approved: 'bg-green-100 text-green-800 border-green-200',
            rejected: 'bg-red-100 text-red-800 border-red-200',
            withdrawn: 'bg-gray-100 text-gray-800 border-gray-200'
        };
        
        const icons = {
            pending: <Clock className="w-4 h-4" />,
            approved: <CheckCircle className="w-4 h-4" />,
            rejected: <XCircle className="w-4 h-4" />,
            withdrawn: <XCircle className="w-4 h-4" />
        };

        return (
            <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border ${styles[status as keyof typeof styles]}`}>
                {icons[status as keyof typeof icons]}
                {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
        );
    };

    if (viewMode === 'details' && selectedNomination) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="min-h-screen bg-gray-50 p-8"
            >
                <div className="max-w-4xl mx-auto">
                    <button
                        onClick={() => setViewMode('list')}
                        className="mb-6 flex items-center gap-2 text-[#0B1A2F] hover:text-[#D4AF37] transition-colors"
                    >
                        <ChevronLeft className="w-5 h-5" />
                        Back to Nominations
                    </button>

                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="bg-gradient-to-r from-[#0B1A2F] to-[#132C42] p-8 text-white">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h1 className="text-3xl font-bold text-[#D4AF37] mb-2">
                                        {selectedNomination.full_name}
                                    </h1>
                                    <p className="text-[#F5E6C4]">{selectedNomination.designation}</p>
                                </div>
                                {getStatusBadge(selectedNomination.status)}
                            </div>
                        </div>

                        <div className="p-8">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <h3 className="text-lg font-semibold text-[#0B1A2F] border-b-2 border-[#D4AF37] pb-2">
                                        Personal Information
                                    </h3>
                                    
                                    <div className="flex items-center gap-3">
                                        <Mail className="w-5 h-5 text-[#D4AF37]" />
                                        <span>{selectedNomination.email}</span>
                                    </div>
                                    
                                    <div className="flex items-center gap-3">
                                        <Phone className="w-5 h-5 text-[#D4AF37]" />
                                        <span>{selectedNomination.mobile}</span>
                                    </div>
                                    
                                    <div className="flex items-center gap-3">
                                        <User className="w-5 h-5 text-[#D4AF37]" />
                                        <span className="capitalize">{selectedNomination.gender}</span>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-lg font-semibold text-[#0B1A2F] border-b-2 border-[#D4AF37] pb-2">
                                        Professional Information
                                    </h3>
                                    
                                    <div className="flex items-center gap-3">
                                        <BookOpen className="w-5 h-5 text-[#D4AF37]" />
                                        <span>{selectedNomination.college}</span>
                                    </div>
                                    
                                    <div className="flex items-center gap-3">
                                        <Award className="w-5 h-5 text-[#D4AF37]" />
                                        <span>{selectedNomination.category}</span>
                                    </div>
                                    
                                    <div className="flex items-center gap-3">
                                        <Calendar className="w-5 h-5 text-[#D4AF37]" />
                                        <span>{selectedNomination.experience_years} years experience</span>
                                    </div>
                                </div>

                                <div className="col-span-2">
                                    <h3 className="text-lg font-semibold text-[#0B1A2F] border-b-2 border-[#D4AF37] pb-2 mb-4">
                                        Nomination Details
                                    </h3>
                                    
                                    <div className="grid md:grid-cols-3 gap-4">
                                        <div className="p-4 bg-gray-50 rounded-lg">
                                            <p className="text-sm text-gray-500">Nomination ID</p>
                                            <p className="font-mono font-bold text-[#D4AF37]">
                                                {selectedNomination.nomination_id}
                                            </p>
                                        </div>
                                        
                                        <div className="p-4 bg-gray-50 rounded-lg">
                                            <p className="text-sm text-gray-500">Submitted On</p>
                                            <p>{new Date(selectedNomination.created_at).toLocaleDateString()}</p>
                                        </div>
                                        
                                        <div className="p-4 bg-gray-50 rounded-lg">
                                            <p className="text-sm text-gray-500">Last Updated</p>
                                            <p>{new Date(selectedNomination.updated_at).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 flex gap-4">
                                <button
                                    onClick={() => updateNominationStatus(selectedNomination.id, 'approved')}
                                    className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                                >
                                    Approve
                                </button>
                                <button
                                    onClick={() => updateNominationStatus(selectedNomination.id, 'rejected')}
                                    className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                                >
                                    Reject
                                </button>
                                <button
                                    onClick={() => updateNominationStatus(selectedNomination.id, 'pending')}
                                    className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
                                >
                                    Mark Pending
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        );
    }

    if (viewMode === 'list') {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="min-h-screen bg-gray-50 p-8"
            >
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h1 className="text-3xl font-bold text-[#0B1A2F]">Nominations</h1>
                            <p className="text-gray-600 mt-1">Total: {totalItems} nominations</p>
                        </div>
                        <div className="flex gap-4">
                            <button
                                onClick={() => setViewMode('dashboard')}
                                className="px-4 py-2 bg-[#0B1A2F] text-white rounded-lg hover:bg-[#132C42] transition-colors"
                            >
                                Back to Dashboard
                            </button>
                            <button
                                onClick={exportCSV}
                                className="flex items-center gap-2 px-4 py-2 bg-[#D4AF37] text-[#0B1A2F] rounded-lg hover:bg-[#F5E6C4] transition-colors"
                            >
                                <Download className="w-4 h-4" />
                                Export CSV
                            </button>
                        </div>
                    </div>

                    {/* Filters */}
                    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                        <div className="grid md:grid-cols-4 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Search
                                </label>
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                    <input
                                        type="text"
                                        placeholder="Search by name, email, ID..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Status
                                </label>
                                <select
                                    value={statusFilter}
                                    onChange={(e) => setStatusFilter(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                                >
                                    <option value="all">All Status</option>
                                    <option value="pending">Pending</option>
                                    <option value="approved">Approved</option>
                                    <option value="rejected">Rejected</option>
                                    <option value="withdrawn">Withdrawn</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Category
                                </label>
                                <select
                                    value={categoryFilter}
                                    onChange={(e) => setCategoryFilter(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                                >
                                    <option value="all">All Categories</option>
                                    {categories.map(cat => (
                                        <option key={cat} value={cat}>{cat}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="flex items-end">
                                <button
                                    onClick={() => {
                                        setStatusFilter('all');
                                        setCategoryFilter('all');
                                        setSearchQuery('');
                                    }}
                                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    Clear Filters
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Nominations Table */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Nomination ID
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Name
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Category
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            College
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Submitted
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {loading ? (
                                        <tr>
                                            <td colSpan={7} className="px-6 py-12 text-center">
                                                <div className="flex justify-center">
                                                    <div className="w-8 h-8 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin"></div>
                                                </div>
                                            </td>
                                        </tr>
                                    ) : nominations.length === 0 ? (
                                        <tr>
                                            <td colSpan={7} className="px-6 py-12 text-center text-gray-500">
                                                No nominations found
                                            </td>
                                        </tr>
                                    ) : (
                                        nominations.map((nomination) => (
                                            <tr key={nomination.id} className="hover:bg-gray-50">
                                                <td className="px-6 py-4 font-mono text-sm">
                                                    {nomination.nomination_id}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="font-medium">{nomination.full_name}</div>
                                                    <div className="text-sm text-gray-500">{nomination.email}</div>
                                                </td>
                                                <td className="px-6 py-4 text-sm">
                                                    {nomination.category}
                                                </td>
                                                <td className="px-6 py-4 text-sm">
                                                    {nomination.college}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {getStatusBadge(nomination.status)}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-500">
                                                    {new Date(nomination.created_at).toLocaleDateString()}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <button
                                                        onClick={() => fetchNominationDetails(nomination.id)}
                                                        className="p-2 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white rounded-lg transition-colors"
                                                    >
                                                        <Eye className="w-4 h-4" />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
                                <button
                                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                    disabled={currentPage === 1}
                                    className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                                >
                                    Previous
                                </button>
                                <span className="text-sm text-gray-700">
                                    Page {currentPage} of {totalPages}
                                </span>
                                <button
                                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                    disabled={currentPage === totalPages}
                                    className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                                >
                                    Next
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen bg-gray-50 p-8"
        >
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-[#0B1A2F]">Admin Dashboard</h1>
                        <p className="text-gray-600 mt-1">Welcome back, Admin</p>
                    </div>
                    <button
                        onClick={() => setViewMode('list')}
                        className="px-6 py-3 bg-[#D4AF37] text-[#0B1A2F] font-semibold rounded-lg hover:bg-[#F5E6C4] transition-colors"
                    >
                        View All Nominations
                    </button>
                </div>

                {/* Stats Cards */}
                {stats && (
                    <div className="grid md:grid-cols-4 gap-6 mb-8">
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-blue-100 rounded-lg">
                                    <Users className="w-6 h-6 text-blue-600" />
                                </div>
                                <span className="text-2xl font-bold">{stats.overview.total_nominations}</span>
                            </div>
                            <h3 className="text-gray-600">Total Nominations</h3>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-yellow-100 rounded-lg">
                                    <Clock className="w-6 h-6 text-yellow-600" />
                                </div>
                                <span className="text-2xl font-bold">{stats.overview.pending_count}</span>
                            </div>
                            <h3 className="text-gray-600">Pending Review</h3>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-green-100 rounded-lg">
                                    <CheckCircle className="w-6 h-6 text-green-600" />
                                </div>
                                <span className="text-2xl font-bold">{stats.overview.approved_count}</span>
                            </div>
                            <h3 className="text-gray-600">Approved</h3>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-purple-100 rounded-lg">
                                    <BarChart3 className="w-6 h-6 text-purple-600" />
                                </div>
                                <span className="text-2xl font-bold">{stats.overview.total_categories}</span>
                            </div>
                            <h3 className="text-gray-600">Categories</h3>
                        </div>
                    </div>
                )}

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Category Distribution */}
                    {stats && (
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h3 className="text-lg font-semibold text-[#0B1A2F] mb-4 flex items-center gap-2">
                                <PieChart className="w-5 h-5 text-[#D4AF37]" />
                                Nominations by Category
                            </h3>
                            <div className="space-y-4">
                                {stats.categoryWise.map((cat) => (
                                    <div key={cat.category}>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="text-gray-600">{cat.category}</span>
                                            <span className="font-semibold">{cat.count}</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-[#D4AF37] h-2 rounded-full"
                                                style={{
                                                    width: `${(cat.count / stats.overview.total_nominations) * 100}%`
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Recent Activity */}
                    {stats && (
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h3 className="text-lg font-semibold text-[#0B1A2F] mb-4 flex items-center gap-2">
                                <TrendingUp className="w-5 h-5 text-[#D4AF37]" />
                                Recent Activity (Last 7 Days)
                            </h3>
                            <div className="space-y-4">
                                {stats.recentActivity.map((activity) => (
                                    <div key={activity.date} className="flex items-center justify-between">
                                        <span className="text-gray-600">
                                            {new Date(activity.date).toLocaleDateString('en-US', {
                                                weekday: 'short',
                                                month: 'short',
                                                day: 'numeric'
                                            })}
                                        </span>
                                        <span className="font-semibold">{activity.nominations} nominations</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default AdminDashboard;