import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { 
    Download, 
    Search, 
    Filter, 
    ChevronDown,
    Eye,
    CheckCircle,
    XCircle,
    Clock,
    Award,
    Users,
    FileText,
    TrendingUp,
    RefreshCw,
    AlertCircle,
    Mail,
    Phone,
    Calendar,
    MapPin
} from "lucide-react";

interface Nomination {
    nomination_id: string;
    full_name: string;
    email: string;
    mobile: string;
    category: string;
    status: 'pending' | 'approved' | 'rejected' | 'under_review';
    college?: string;
    designation?: string;
    created_at?: string;
}

const AdminDashboard = () => {
    const [nominations, setNominations] = useState<Nomination[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState<string>("all");
    const [categoryFilter, setCategoryFilter] = useState<string>("all");
    const [selectedNomination, setSelectedNomination] = useState<Nomination | null>(null);
    const [showDetailsModal, setShowDetailsModal] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    const fetchNominations = async () => {
        try {
            setRefreshing(true);
            const res = await axios.get(
                "http://localhost:5000/api/admin/nominations"
            );
            setNominations(res.data.data);
        } catch (error) {
            console.error("Error fetching nominations:", error);
        } finally {
            setLoading(false);
            setRefreshing(false);
        }
    };

    useEffect(() => {
        fetchNominations();
    }, []);

    const downloadExcel = () => {
        window.open(
            "http://localhost:5000/api/admin/nominations-excel"
        );
    };

    // Get unique categories for filter
    const categories = [...new Set(nominations.map(n => n.category))];

    // Filter nominations
    const filteredNominations = nominations.filter(n => {
        const matchesSearch = 
            n.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            n.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            n.nomination_id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            n.mobile.includes(searchTerm);
        
        const matchesStatus = statusFilter === "all" || n.status === statusFilter;
        const matchesCategory = categoryFilter === "all" || n.category === categoryFilter;
        
        return matchesSearch && matchesStatus && matchesCategory;
    });

    // Statistics
    const stats = {
        total: nominations.length,
        pending: nominations.filter(n => n.status === 'pending').length,
        approved: nominations.filter(n => n.status === 'approved').length,
        underReview: nominations.filter(n => n.status === 'under_review').length,
        rejected: nominations.filter(n => n.status === 'rejected').length
    };

    const getStatusBadge = (status: string) => {
        const statusConfig = {
            pending: { color: "bg-yellow-100 text-yellow-800 border-yellow-200", icon: Clock },
            approved: { color: "bg-green-100 text-green-800 border-green-200", icon: CheckCircle },
            rejected: { color: "bg-red-100 text-red-800 border-red-200", icon: XCircle },
            under_review: { color: "bg-blue-100 text-blue-800 border-blue-200", icon: Eye }
        };
        
        const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.pending;
        const Icon = config.icon;
        
        return (
            <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border ${config.color}`}>
                <Icon className="w-3 h-3" />
                {status.replace('_', ' ').toUpperCase()}
            </span>
        );
    };

    const StatCard = ({ title, value, icon: Icon, color }: any) => (
        <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl shadow-lg p-6 border-l-4"
            style={{ borderColor: color }}
        >
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm text-gray-600 mb-1">{title}</p>
                    <p className="text-3xl font-bold text-gray-800">{value}</p>
                </div>
                <div className="p-3 rounded-lg" style={{ backgroundColor: color + '20' }}>
                    <Icon className="w-6 h-6" style={{ color }} />
                </div>
            </div>
        </motion.div>
    );

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-[#0B1A2F] to-[#132C42] flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#D4AF37] border-t-transparent mx-auto mb-4"></div>
                    <p className="text-[#F5E6C4] text-lg">Loading dashboard...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#0B1A2F] to-[#132C42] sticky top-0 z-10 shadow-lg">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Award className="w-8 h-8 text-[#D4AF37]" />
                            <h1 className="text-2xl font-bold text-[#F5E6C4]">Admin Dashboard</h1>
                        </div>
                        <div className="flex items-center gap-4">
                            <button
                                onClick={fetchNominations}
                                disabled={refreshing}
                                className="flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/20 text-[#F5E6C4] rounded-lg hover:bg-[#D4AF37]/30 transition-all"
                            >
                                <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
                                Refresh
                            </button>
                            <button
                                onClick={downloadExcel}
                                className="flex items-center gap-2 px-4 py-2 bg-[#D4AF37] text-[#0B1A2F] rounded-lg hover:bg-[#F5E6C4] transition-all font-semibold"
                            >
                                <Download className="w-4 h-4" />
                                Export Excel
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-8">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
                    <StatCard title="Total Nominations" value={stats.total} icon={Users} color="#0B1A2F" />
                    <StatCard title="Pending" value={stats.pending} icon={Clock} color="#F59E0B" />
                    <StatCard title="Under Review" value={stats.underReview} icon={Eye} color="#3B82F6" />
                    <StatCard title="Approved" value={stats.approved} icon={CheckCircle} color="#10B981" />
                    <StatCard title="Rejected" value={stats.rejected} icon={XCircle} color="#EF4444" />
                </div>

                {/* Filters */}
                <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search by name, email, ID..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                            />
                        </div>

                        <div className="relative">
                            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <select
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                                className="w-full pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent appearance-none"
                            >
                                <option value="all">All Status</option>
                                <option value="pending">Pending</option>
                                <option value="under_review">Under Review</option>
                                <option value="approved">Approved</option>
                                <option value="rejected">Rejected</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        </div>

                        <div className="relative">
                            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <select
                                value={categoryFilter}
                                onChange={(e) => setCategoryFilter(e.target.value)}
                                className="w-full pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent appearance-none"
                            >
                                <option value="all">All Categories</option>
                                {categories.map(cat => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        </div>

                        <div className="text-right text-sm text-gray-500">
                            Showing {filteredNominations.length} of {nominations.length} nominations
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gradient-to-r from-[#0B1A2F] to-[#132C42] text-[#F5E6C4]">
                                <tr>
                                    <th className="px-6 py-4 text-left text-sm font-semibold">Nomination ID</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold">Full Name</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold">Contact</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold">Category</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {filteredNominations.length === 0 ? (
                                    <tr>
                                        <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                                            <AlertCircle className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                                            <p className="text-lg font-medium">No nominations found</p>
                                            <p className="text-sm">Try adjusting your filters</p>
                                        </td>
                                    </tr>
                                ) : (
                                    filteredNominations.map((nomination, index) => (
                                        <motion.tr 
                                            key={nomination.nomination_id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            className="hover:bg-gray-50 transition-colors"
                                        >
                                            <td className="px-6 py-4">
                                                <span className="font-mono text-sm font-medium text-[#0B1A2F]">
                                                    {nomination.nomination_id}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="font-medium text-gray-900">{nomination.full_name}</div>
                                                {nomination.designation && (
                                                    <div className="text-sm text-gray-500">{nomination.designation}</div>
                                                )}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex flex-col gap-1">
                                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                                        <Mail className="w-3 h-3" />
                                                        {nomination.email}
                                                    </div>
                                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                                        <Phone className="w-3 h-3" />
                                                        {nomination.mobile}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex px-3 py-1 bg-[#D4AF37]/10 text-[#0B1A2F] rounded-full text-xs font-medium">
                                                    {nomination.category}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                {getStatusBadge(nomination.status)}
                                            </td>
                                            <td className="px-6 py-4">
                                                <button
                                                    onClick={() => {
                                                        setSelectedNomination(nomination);
                                                        setShowDetailsModal(true);
                                                    }}
                                                    className="flex items-center gap-2 px-3 py-1 text-[#0B1A2F] hover:bg-[#D4AF37] rounded-lg transition-colors"
                                                >
                                                    <Eye className="w-4 h-4" />
                                                    View
                                                </button>
                                            </td>
                                        </motion.tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Details Modal */}
            {showDetailsModal && selectedNomination && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                    <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                    >
                        <div className="sticky top-0 bg-gradient-to-r from-[#0B1A2F] to-[#132C42] p-6 text-white">
                            <div className="flex items-center justify-between">
                                <h2 className="text-2xl font-bold">Nomination Details</h2>
                                <button 
                                    onClick={() => setShowDetailsModal(false)}
                                    className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                                >
                                    <XCircle className="w-6 h-6" />
                                </button>
                            </div>
                        </div>

                        <div className="p-6 space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm text-gray-500">Nomination ID</p>
                                    <p className="font-mono font-semibold">{selectedNomination.nomination_id}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Status</p>
                                    <div>{getStatusBadge(selectedNomination.status)}</div>
                                </div>
                            </div>

                            <div className="border-t pt-4">
                                <h3 className="font-semibold mb-3">Personal Information</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-sm text-gray-500">Full Name</p>
                                        <p className="font-medium">{selectedNomination.full_name}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Email</p>
                                        <p className="font-medium">{selectedNomination.email}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Mobile</p>
                                        <p className="font-medium">{selectedNomination.mobile}</p>
                                    </div>
                                    {selectedNomination.college && (
                                        <div>
                                            <p className="text-sm text-gray-500">College</p>
                                            <p className="font-medium">{selectedNomination.college}</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="border-t pt-4">
                                <h3 className="font-semibold mb-3">Nomination Details</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-sm text-gray-500">Category</p>
                                        <p className="font-medium">{selectedNomination.category}</p>
                                    </div>
                                    {selectedNomination.created_at && (
                                        <div>
                                            <p className="text-sm text-gray-500">Submitted On</p>
                                            <p className="font-medium">
                                                {new Date(selectedNomination.created_at).toLocaleDateString()}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="flex gap-3 pt-4">
                                <button className="flex-1 px-4 py-2 bg-[#D4AF37] text-[#0B1A2F] rounded-lg hover:bg-[#F5E6C4] transition-colors font-semibold">
                                    Update Status
                                </button>
                                <button className="px-4 py-2 border-2 border-[#D4AF37] text-[#D4AF37] rounded-lg hover:bg-[#D4AF37] hover:text-[#0B1A2F] transition-colors">
                                    Contact Nominee
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;