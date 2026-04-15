import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
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
    MapPin,
    Menu,
    X,
    LayoutDashboard,
    UserCheck,
    Vote,
    Mail as MailIcon,
    Settings,
    BarChart3,
    Shield,
    Bell,
    PieChart,
    Activity,
    Star,
    ThumbsUp,
    MessageSquare,
    Send,
    Edit,
    Trash2,
    Plus,
    Save
} from "lucide-react";

// Types
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
    votes?: number;
}

interface Voter {
    id: string;
    name: string;
    email: string;
    phone: string;
    voter_id: string;
    has_voted: boolean;
    voted_for?: string;
    registered_at: string;
}

interface Vote {
    id: string;
    nomination_id: string;
    nominee_name: string;
    voter_name: string;
    voter_email: string;
    category: string;
    timestamp: string;
}

interface EmailTemplate {
    id: string;
    name: string;
    subject: string;
    content: string;
    type: 'approval' | 'rejection' | 'reminder' | 'custom';
    last_used?: string;
}

const AdminDashboard = () => {
    // State Management
    const [activeTab, setActiveTab] = useState('nominees');
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    
    // Data States
    const [nominations, setNominations] = useState<Nomination[]>([]);
    const [voters, setVoters] = useState<Voter[]>([]);
    const [votes, setVotes] = useState<Vote[]>([]);
    const [emailTemplates, setEmailTemplates] = useState<EmailTemplate[]>([]);
    const [approvedNominations, setApprovedNominations] = useState<Nomination[]>([]);
    
    // UI States
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState<string>("all");
    const [categoryFilter, setCategoryFilter] = useState<string>("all");
    const [selectedNomination, setSelectedNomination] = useState<Nomination | null>(null);
    const [showDetailsModal, setShowDetailsModal] = useState(false);
    const [showEmailModal, setShowEmailModal] = useState(false);
    const [selectedTemplate, setSelectedTemplate] = useState<EmailTemplate | null>(null);
    const [emailRecipients, setEmailRecipients] = useState<string[]>([]);
    
    // Data Fetching
    const fetchAllData = async () => {
        try {
            setRefreshing(true);
            const [nomRes, voterRes, voteRes, templateRes] = await Promise.all([
                axios.get("http://localhost:5000/api/admin/nominations"),
                axios.get("http://localhost:5000/api/admin/voters"),
                axios.get("http://localhost:5000/api/admin/votes"),
                axios.get("http://localhost:5000/api/admin/email-templates")
            ]);
            
            setNominations(nomRes.data?.data || []);
            setApprovedNominations(nomRes.data?.data?.filter((n: Nomination) => n.status === 'approved') || []);
            setVoters(voterRes.data?.data || []);
            setVotes(voteRes.data?.data || []);
            setEmailTemplates(templateRes.data?.data || []);
        } catch (error) {
            console.error("Error fetching data:", error);
            // Set mock data for demo if API fails
            setMockData();
        } finally {
            setLoading(false);
            setRefreshing(false);
        }
    };
    
    const setMockData = () => {
        setNominations(mockNominations);
        setApprovedNominations(mockNominations.filter(n => n.status === 'approved'));
        setVoters(mockVoters);
        setVotes(mockVotes);
        setEmailTemplates(mockEmailTemplates);
    };
    
    useEffect(() => {
        fetchAllData();
    }, []);
    
    // Computed Data
    const categories = [...new Set((nominations || []).map(n => n.category))];
    
    const filteredNominations = (nominations || []).filter(n => {
        const matchesSearch = 
            (n.full_name || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
            (n.email || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
            (n.nomination_id || "").toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === "all" || n.status === statusFilter;
        const matchesCategory = categoryFilter === "all" || n.category === categoryFilter;
        return matchesSearch && matchesStatus && matchesCategory;
    });
    
    const stats = {
        totalNominees: nominations.length,
        pendingNominees: nominations.filter(n => n.status === 'pending').length,
        approvedNominees: nominations.filter(n => n.status === 'approved').length,
        rejectedNominees: nominations.filter(n => n.status === 'rejected').length,
        totalVoters: voters.length,
        totalVotes: votes.length,
        voterTurnout: voters.length > 0 ? ((votes.length / voters.length) * 100).toFixed(1) : 0,
        activeCategories: categories.length
    };
    
    // Sidebar Navigation Items
    const navItems = [
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, color: '#D4AF37' },
        { id: 'nominees', label: 'Nominees', icon: Users, color: '#3B82F6', badge: stats.pendingNominees },
        { id: 'approved', label: 'Approved Nominees', icon: CheckCircle, color: '#10B981' },
        { id: 'voters', label: 'Voters', icon: UserCheck, color: '#8B5CF6' },
        { id: 'votes', label: 'Votes & Analytics', icon: Vote, color: '#F59E0B' },
        { id: 'email-templates', label: 'Email Templates', icon: MailIcon, color: '#EF4444' },
        { id: 'settings', label: 'Settings', icon: Settings, color: '#6B7280' }
    ];
    
    // Render Functions for Different Tabs
    const renderDashboard = () => (
        <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard 
                    title="Total Nominees" 
                    value={stats.totalNominees} 
                    icon={Users} 
                    color="#3B82F6"
                    trend="+12%"
                />
                <StatCard 
                    title="Total Voters" 
                    value={stats.totalVoters} 
                    icon={UserCheck} 
                    color="#8B5CF6"
                    trend="+8%"
                />
                <StatCard 
                    title="Votes Cast" 
                    value={stats.totalVotes} 
                    icon={Vote} 
                    color="#F59E0B"
                    trend="+23%"
                />
                <StatCard 
                    title="Voter Turnout" 
                    value={`${stats.voterTurnout}%`} 
                    icon={PieChart} 
                    color="#10B981"
                    trend="+5%"
                />
            </div>
            
            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">Nomination Status Distribution</h3>
                    <div className="space-y-3">
                        {[
                            { label: 'Pending', value: stats.pendingNominees, color: '#F59E0B' },
                            { label: 'Under Review', value: nominations.filter(n => n.status === 'under_review').length, color: '#3B82F6' },
                            { label: 'Approved', value: stats.approvedNominees, color: '#10B981' },
                            { label: 'Rejected', value: stats.rejectedNominees, color: '#EF4444' }
                        ].map(item => (
                            <div key={item.label}>
                                <div className="flex justify-between text-sm mb-1">
                                    <span>{item.label}</span>
                                    <span>{item.value}</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div 
                                        className="h-2 rounded-full transition-all duration-500"
                                        style={{ 
                                            width: `${(item.value / stats.totalNominees) * 100}%`,
                                            backgroundColor: item.color 
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                    <div className="space-y-4">
                        {votes.slice(0, 5).map((vote, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                    <ThumbsUp className="w-5 h-5 text-green-600" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium">{vote.voter_name} voted for {vote.nominee_name}</p>
                                    <p className="text-xs text-gray-500">{new Date(vote.timestamp).toLocaleString()}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* Top Categories */}
            <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Top Voting Categories</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {categories.slice(0, 4).map(cat => {
                        const catVotes = votes.filter(v => v.category === cat).length;
                        return (
                            <div key={cat} className="text-center p-4 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-lg">
                                <Star className="w-8 h-8 text-[#D4AF37] mx-auto mb-2" />
                                <p className="font-semibold text-sm">{cat}</p>
                                <p className="text-2xl font-bold text-[#D4AF37]">{catVotes}</p>
                                <p className="text-xs text-gray-500">votes</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
    
    const renderNominees = () => (
        <div className="space-y-6">
            {/* Filters */}
            <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search nominees..."
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
                        Showing {filteredNominations.length} of {nominations.length} nominees
                    </div>
                </div>
            </div>
            
            {/* Nominees Table */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gradient-to-r from-[#0B1A2F] to-[#132C42] text-[#F5E6C4]">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold">ID</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold">Name</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold">Contact</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold">Category</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold">Votes</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {filteredNominations.map((nomination, index) => (
                                <motion.tr 
                                    key={nomination.nomination_id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="hover:bg-gray-50 transition-colors"
                                >
                                    <td className="px-6 py-4">
                                        <span className="font-mono text-sm">{nomination.nomination_id}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="font-medium text-gray-900">{nomination.full_name}</div>
                                        {nomination.designation && (
                                            <div className="text-sm text-gray-500">{nomination.designation}</div>
                                        )}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm">{nomination.email}</div>
                                        <div className="text-sm text-gray-500">{nomination.mobile}</div>
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
                                        <span className="font-semibold text-[#D4AF37]">{nomination.votes || 0}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => {
                                                    setSelectedNomination(nomination);
                                                    setShowDetailsModal(true);
                                                }}
                                                className="p-1 hover:bg-gray-100 rounded transition-colors"
                                                title="View Details"
                                            >
                                                <Eye className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setEmailRecipients([nomination.email]);
                                                    setShowEmailModal(true);
                                                }}
                                                className="p-1 hover:bg-gray-100 rounded transition-colors"
                                                title="Send Email"
                                            >
                                                <Mail className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
    
    const renderVoters = () => (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 border-b">
                <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Voters Management</h3>
                    <button className="flex items-center gap-2 px-4 py-2 bg-[#D4AF37] text-[#0B1A2F] rounded-lg hover:bg-[#F5E6C4] transition-colors">
                        <Plus className="w-4 h-4" />
                        Add Voter
                    </button>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Voter ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Voted For</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {voters.map((voter) => (
                            <tr key={voter.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 text-sm font-mono">{voter.voter_id}</td>
                                <td className="px-6 py-4 font-medium">{voter.name}</td>
                                <td className="px-6 py-4 text-sm">{voter.email}</td>
                                <td className="px-6 py-4">
                                    {voter.has_voted ? (
                                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                                            <CheckCircle className="w-3 h-3" /> Voted
                                        </span>
                                    ) : (
                                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                                            <Clock className="w-3 h-3" /> Pending
                                        </span>
                                    )}
                                </td>
                                <td className="px-6 py-4 text-sm">{voter.voted_for || '-'}</td>
                                <td className="px-6 py-4">
                                    <button className="text-blue-600 hover:text-blue-800 mr-3">
                                        <Edit className="w-4 h-4" />
                                    </button>
                                    <button className="text-red-600 hover:text-red-800">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
    
    const renderVotesAnalytics = () => (
        <div className="space-y-6">
            {/* Voting Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg p-6 text-white">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold">Total Votes Cast</h3>
                        <BarChart3 className="w-8 h-8 opacity-80" />
                    </div>
                    <p className="text-4xl font-bold">{stats.totalVotes}</p>
                    <p className="text-sm opacity-80 mt-2">Out of {stats.totalVoters} registered voters</p>
                </div>
                
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg p-6 text-white">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold">Voter Turnout</h3>
                        <TrendingUp className="w-8 h-8 opacity-80" />
                    </div>
                    <p className="text-4xl font-bold">{stats.voterTurnout}%</p>
                    <p className="text-sm opacity-80 mt-2">Participation rate</p>
                </div>
                
                <div className="bg-gradient-to-br from-[#D4AF37] to-[#B8941E] rounded-xl shadow-lg p-6 text-white">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold">Active Categories</h3>
                        <Award className="w-8 h-8 opacity-80" />
                    </div>
                    <p className="text-4xl font-bold">{stats.activeCategories}</p>
                    <p className="text-sm opacity-80 mt-2">Categories with nominees</p>
                </div>
            </div>
            
            {/* Vote Distribution by Category */}
            <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Vote Distribution by Category</h3>
                <div className="space-y-4">
                    {categories.map(category => {
                        const categoryVotes = votes.filter(v => v.category === category).length;
                        const percentage = (categoryVotes / stats.totalVotes) * 100;
                        return (
                            <div key={category}>
                                <div className="flex justify-between text-sm mb-1">
                                    <span>{category}</span>
                                    <span>{categoryVotes} votes ({percentage.toFixed(1)}%)</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-3">
                                    <div 
                                        className="h-3 rounded-full transition-all duration-500"
                                        style={{ width: `${percentage}%`, backgroundColor: '#D4AF37' }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            
            {/* Recent Votes Table */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6 border-b">
                    <h3 className="text-lg font-semibold">Recent Voting Activity</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Timestamp</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Voter</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nominee</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {votes.slice().reverse().map((vote) => (
                                <tr key={vote.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 text-sm">{new Date(vote.timestamp).toLocaleString()}</td>
                                    <td className="px-6 py-4">
                                        <div className="font-medium">{vote.voter_name}</div>
                                        <div className="text-sm text-gray-500">{vote.voter_email}</div>
                                    </td>
                                    <td className="px-6 py-4 font-medium">{vote.nominee_name}</td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex px-2 py-1 bg-[#D4AF37]/10 rounded-full text-xs">
                                            {vote.category}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
    
    const renderEmailTemplates = () => (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">Email Templates</h3>
                <button className="flex items-center gap-2 px-4 py-2 bg-[#D4AF37] text-[#0B1A2F] rounded-lg hover:bg-[#F5E6C4] transition-colors">
                    <Plus className="w-4 h-4" />
                    Create Template
                </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {emailTemplates.map((template) => (
                    <div key={template.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h4 className="text-lg font-semibold">{template.name}</h4>
                                    <p className="text-sm text-gray-500">{template.subject}</p>
                                </div>
                                <div className="flex gap-2">
                                    <button className="p-1 hover:bg-gray-100 rounded" title="Edit">
                                        <Edit className="w-4 h-4" />
                                    </button>
                                    <button className="p-1 hover:bg-gray-100 rounded" title="Delete">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-4 mb-4">
                                <p className="text-sm text-gray-600 line-clamp-3">{template.content}</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-xs text-gray-500">
                                    Type: {template.type}
                                </span>
                                <button className="flex items-center gap-2 px-3 py-1 bg-[#D4AF37]/10 text-[#D4AF37] rounded-lg hover:bg-[#D4AF37] hover:text-white transition-colors text-sm">
                                    <Send className="w-3 h-3" />
                                    Use Template
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
    
    const renderApprovedNominees = () => (
        <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl shadow-lg p-6 text-white">
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-2xl font-bold">{stats.approvedNominees} Approved Nominees</h3>
                        <p className="mt-2 opacity-90">These nominees are eligible for voting</p>
                    </div>
                    <CheckCircle className="w-16 h-16 opacity-50" />
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {approvedNominations.map((nominee) => (
                    <div key={nominee.nomination_id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center">
                                    <Award className="w-6 h-6 text-[#D4AF37]" />
                                </div>
                                <span className="text-xs text-gray-500">{nominee.nomination_id}</span>
                            </div>
                            <h4 className="text-lg font-semibold mb-1">{nominee.full_name}</h4>
                            <p className="text-sm text-gray-600 mb-2">{nominee.category}</p>
                            <p className="text-sm text-gray-500 mb-4">{nominee.email}</p>
                            <div className="flex justify-between items-center pt-4 border-t">
                                <span className="text-2xl font-bold text-[#D4AF37]">{nominee.votes || 0}</span>
                                <span className="text-sm text-gray-500">votes</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
    
    // Helper Components
    const StatCard = ({ title, value, icon: Icon, color, trend }: any) => (
        <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl shadow-lg p-6"
        >
            <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-lg" style={{ backgroundColor: color + '20' }}>
                    <Icon className="w-6 h-6" style={{ color }} />
                </div>
                {trend && (
                    <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded-full">
                        {trend}
                    </span>
                )}
            </div>
            <p className="text-3xl font-bold text-gray-800">{value}</p>
            <p className="text-sm text-gray-600 mt-1">{title}</p>
        </motion.div>
    );
    
    const getStatusBadge = (status: string) => {
        const config: any = {
            pending: { color: "bg-yellow-100 text-yellow-800", icon: Clock },
            approved: { color: "bg-green-100 text-green-800", icon: CheckCircle },
            rejected: { color: "bg-red-100 text-red-800", icon: XCircle },
            under_review: { color: "bg-blue-100 text-blue-800", icon: Eye }
        };
        const { color, icon: Icon } = config[status] || config.pending;
        return (
            <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${color}`}>
                <Icon className="w-3 h-3" />
                {status.replace('_', ' ')}
            </span>
        );
    };
    
    const Sidebar = () => (
        <motion.div 
            initial={{ width: sidebarOpen ? 280 : 80 }}
            animate={{ width: sidebarOpen ? 280 : 80 }}
            className="bg-gradient-to-b from-[#0B1A2F] to-[#132C42] h-screen sticky top-0 overflow-y-auto shadow-xl"
        >
            <div className="p-4 flex items-center justify-between border-b border-white/10">
                {sidebarOpen && (
                    <div className="flex items-center gap-2">
                        <Award className="w-8 h-8 text-[#D4AF37]" />
                        <span className="text-white font-bold">Admin Panel</span>
                    </div>
                )}
                <button 
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                    {sidebarOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
                </button>
            </div>
            
            <nav className="p-4 space-y-2">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                            activeTab === item.id 
                                ? 'bg-[#D4AF37] text-[#0B1A2F]' 
                                : 'text-white/70 hover:bg-white/10 hover:text-white'
                        }`}
                    >
                        <item.icon className="w-5 h-5" />
                        {sidebarOpen && (
                            <>
                                <span className="flex-1 text-left">{item.label}</span>
                                {item.badge > 0 && (
                                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                                        {item.badge}
                                    </span>
                                )}
                            </>
                        )}
                    </button>
                ))}
            </nav>
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
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar />
            
            <div className="flex-1 overflow-x-hidden">
                {/* Header */}
                <div className="bg-white shadow-sm sticky top-0 z-10">
                    <div className="px-8 py-4 flex justify-between items-center">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 capitalize">
                                {activeTab.replace('-', ' ')}
                            </h2>
                            <p className="text-sm text-gray-500 mt-1">
                                Welcome back! Here's what's happening with your awards today.
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <button
                                onClick={fetchAllData}
                                disabled={refreshing}
                                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
                                Refresh
                            </button>
                            <div className="relative">
                                <button className="p-2 hover:bg-gray-100 rounded-lg">
                                    <Bell className="w-5 h-5 text-gray-600" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Main Content */}
                <div className="p-8">
                    {activeTab === 'dashboard' && renderDashboard()}
                    {activeTab === 'nominees' && renderNominees()}
                    {activeTab === 'voters' && renderVoters()}
                    {activeTab === 'votes' && renderVotesAnalytics()}
                    {activeTab === 'email-templates' && renderEmailTemplates()}
                    {activeTab === 'approved' && renderApprovedNominees()}
                </div>
            </div>
            
            {/* Modals */}
            {showDetailsModal && selectedNomination && (
                <Modal onClose={() => setShowDetailsModal(false)}>
                    <ModalHeader>Nomination Details</ModalHeader>
                    <ModalBody>
                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm text-gray-500">Nomination ID</label>
                                    <p className="font-mono">{selectedNomination.nomination_id}</p>
                                </div>
                                <div>
                                    <label className="text-sm text-gray-500">Status</label>
                                    <div>{getStatusBadge(selectedNomination.status)}</div>
                                </div>
                            </div>
                            <div>
                                <label className="text-sm text-gray-500">Full Name</label>
                                <p className="font-medium">{selectedNomination.full_name}</p>
                            </div>
                            <div>
                                <label className="text-sm text-gray-500">Email</label>
                                <p>{selectedNomination.email}</p>
                            </div>
                            <div>
                                <label className="text-sm text-gray-500">Mobile</label>
                                <p>{selectedNomination.mobile}</p>
                            </div>
                            <div>
                                <label className="text-sm text-gray-500">Category</label>
                                <p>{selectedNomination.category}</p>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <button className="px-4 py-2 bg-[#D4AF37] text-[#0B1A2F] rounded-lg hover:bg-[#F5E6C4]">
                            Update Status
                        </button>
                        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                            Close
                        </button>
                    </ModalFooter>
                </Modal>
            )}
            
            {showEmailModal && (
                <Modal onClose={() => setShowEmailModal(false)}>
                    <ModalHeader>Send Email</ModalHeader>
                    <ModalBody>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-2">Recipients</label>
                                <div className="bg-gray-50 rounded-lg p-2">
                                    {emailRecipients.map(email => (
                                        <span key={email} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm mr-2 mb-2">
                                            {email}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Subject</label>
                                <input type="text" className="w-full border rounded-lg px-3 py-2" placeholder="Email subject" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Message</label>
                                <textarea rows={6} className="w-full border rounded-lg px-3 py-2" placeholder="Write your message here..."></textarea>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <button className="px-4 py-2 bg-[#D4AF37] text-[#0B1A2F] rounded-lg hover:bg-[#F5E6C4]">
                            <Send className="w-4 h-4 inline mr-2" />
                            Send Email
                        </button>
                        <button onClick={() => setShowEmailModal(false)} className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                            Cancel
                        </button>
                    </ModalFooter>
                </Modal>
            )}
        </div>
    );
};

// Modal Components
const Modal = ({ children, onClose }: { children: React.ReactNode; onClose: () => void }) => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={onClose}>
        <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
        >
            {children}
        </motion.div>
    </div>
);

const ModalHeader = ({ children }: { children: React.ReactNode }) => (
    <div className="sticky top-0 bg-gradient-to-r from-[#0B1A2F] to-[#132C42] p-6 text-white">
        <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">{children}</h2>
        </div>
    </div>
);

const ModalBody = ({ children }: { children: React.ReactNode }) => (
    <div className="p-6">{children}</div>
);

const ModalFooter = ({ children }: { children: React.ReactNode }) => (
    <div className="flex justify-end gap-3 p-6 border-t">{children}</div>
);

// Mock Data for Demo
const mockNominations: Nomination[] = [
    {
        nomination_id: "BEE2026001",
        full_name: "Dr. Sarah Johnson",
        email: "sarah.johnson@example.com",
        mobile: "9876543210",
        category: "Best Teacher",
        status: "approved",
        college: "MIT University",
        designation: "Professor",
        created_at: "2024-01-15",
        votes: 245
    },
    {
        nomination_id: "BEE2026002",
        full_name: "Prof. Michael Chen",
        email: "michael.chen@example.com",
        mobile: "9876543211",
        category: "Research Excellence",
        status: "pending",
        college: "Stanford University",
        designation: "Research Director",
        created_at: "2024-01-20",
        votes: 0
    },
    {
        nomination_id: "BEE2026003",
        full_name: "Dr. Emily Rodriguez",
        email: "emily.r@example.com",
        mobile: "9876543212",
        category: "Best Teacher",
        status: "approved",
        college: "Harvard University",
        designation: "Associate Professor",
        created_at: "2024-01-18",
        votes: 189
    }
];

const mockVoters: Voter[] = [
    {
        id: "1",
        name: "John Doe",
        email: "john@example.com",
        phone: "9876543213",
        voter_id: "VOT2024001",
        has_voted: true,
        voted_for: "BEE2026001",
        registered_at: "2024-01-10"
    },
    {
        id: "2",
        name: "Jane Smith",
        email: "jane@example.com",
        phone: "9876543214",
        voter_id: "VOT2024002",
        has_voted: false,
        registered_at: "2024-01-11"
    }
];

const mockVotes: Vote[] = [
    {
        id: "1",
        nomination_id: "BEE2026001",
        nominee_name: "Dr. Sarah Johnson",
        voter_name: "John Doe",
        voter_email: "john@example.com",
        category: "Best Teacher",
        timestamp: "2024-01-25T10:30:00"
    }
];

const mockEmailTemplates: EmailTemplate[] = [
    {
        id: "1",
        name: "Approval Template",
        subject: "Congratulations! Your Nomination has been Approved",
        content: "Dear {{name}},\n\nWe are pleased to inform you that your nomination has been approved...",
        type: "approval"
    },
    {
        id: "2",
        name: "Rejection Template",
        subject: "Update on your Nomination",
        content: "Dear {{name}},\n\nThank you for your interest...",
        type: "rejection"
    },
    {
        id: "3",
        name: "Voting Reminder",
        subject: "Reminder: Cast Your Vote!",
        content: "Dear {{name}},\n\nDon't forget to cast your vote for the upcoming awards...",
        type: "reminder"
    }
];

export default AdminDashboard;