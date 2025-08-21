import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, User, Star, Gift, Wallet } from "lucide-react";

const vipPlans = Array.from({ length: 20 }, (_, i) => {
  const price = i === 0 ? 5 : i * 5 + (i % 2 === 0 ? 4 : 6);
  return {
    id: i + 1,
    price,
    daily: (price * 0.2).toFixed(2),
    invite: "1.00$",
    tasks: "1.00$",
  };
});

function HomeScreen() {
  return (
    <div className="p-4 text-center">
      <motion.div animate={{ opacity: [0, 1], y: [20, 0] }} className="text-xl font-bold">
        مرحبًا بك في <span className="text-purple-600">BKS Cincos</span> 🚀
      </motion.div>
      <div className="mt-6 space-y-2">
        <Link to="/deposit" className="block bg-green-500 text-white px-4 py-3 rounded-xl w-full shadow">
          💰 إيداع
        </Link>
        <button className="bg-blue-500 text-white px-4 py-3 rounded-xl w-full shadow">
          💵 سحب
        </button>
      </div>
    </div>
  );
}

function VipScreen() {
  const navigate = useNavigate();
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">🚀 الخطط VIP</h2>
      <div className="grid grid-cols-1 gap-4">
        {vipPlans.map((plan) => (
          <motion.div whileHover={{ scale: 1.02 }} key={plan.id} className="border p-4 rounded-xl shadow-lg bg-white">
            <h3 className="font-bold text-purple-700">خطة VIP {plan.id}</h3>
            <p>السعر: {plan.price}$</p>
            <p>الربح اليومي: {plan.daily}$</p>
            <p>دعوة صديق: {plan.invite}</p>
            <p>المهام والإعلانات: {plan.tasks}</p>
            <button
              className="mt-3 bg-purple-600 text-white px-3 py-2 rounded-lg shadow"
              onClick={() => navigate("/deposit")}
            >
              اشترك الآن
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const cryptoList = [
  { name: "USDT (TRC20)", addr: "TLsGeELYfexmuhK6g3TVQ44AAt5kxZN3gb" },
  { name: "Bitcoin (BTC)", addr: "bc1qlvx4tzwzvm66p0ukfykkv4zsqq7ywug65282u2" },
  { name: "BNB (BEP20)", addr: "0x83c317eab7f9d70cf1f98ca8cd30fce09d7fe18e" },
  { name: "Ethereum (ERC20)", addr: "0x83c317eab7f9d70cf1f98ca8cd30fce09d7fe18e" },
];

function DepositScreen() {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">💳 طرق الإيداع</h2>
      {cryptoList.map((c, i) => (
        <motion.div key={i} whileHover={{ scale: 1.01 }} className="border p-3 rounded-xl mb-3 bg-white shadow">
          <p className="font-bold">{c.name}</p>
          <p className="text-xs break-all">{c.addr}</p>
          <button
            className="mt-2 bg-green-500 text-white px-3 py-1 rounded-lg"
            onClick={() => navigator.clipboard.writeText(c.addr)}
          >
            نسخ
          </button>
        </motion.div>
      ))}
      <p className="text-gray-600 text-sm mt-4">
        انسخ العنوان → أرسل من محفظتك → أدخل TxHash → انتظر التأكيد ✅
      </p>
    </div>
  );
}

function ProfileScreen() {
  return (
    <div className="p-4 text-center">
      <h2 className="text-lg font-bold">👤 الملف الشخصي</h2>
      <p>User ID: 123456</p>
      <p>Email: user@example.com</p>
    </div>
  );
}

function BottomTabs() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-purple-500 to-blue-500 text-white flex justify-around py-2">
      <Link to="/" className="flex flex-col items-center">
        <Home size={22} /> الرئيسية
      </Link>
      <Link to="/vip" className="flex flex-col items-center">
        <Star size={22} /> VIP
      </Link>
      <Link to="/deposit" className="flex flex-col items-center">
        <Wallet size={22} /> إيداع
      </Link>
      <Link to="/tasks" className="flex flex-col items-center">
        <Gift size={22} /> مهام
      </Link>
      <Link to="/profile" className="flex flex-col items-center">
        <User size={22} /> أنا
      </Link>
    </nav>
  );
}

export default function App() {
  return (
    <Router>
      <div dir="rtl" className="min-h-screen pb-16">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/vip" element={<VipScreen />} />
          <Route path="/deposit" element={<DepositScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/tasks" element={<div className="p-4">📌 قسم المهام</div>} />
        </Routes>
        <BottomTabs />
      </div>
    </Router>
  );
}
