"use client";

import { Mail, ArrowRight } from 'lucide-react';
import { motion } from "framer-motion";

export default function HexMailAnnouncement() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 mb-24">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></span>
            Ürünlerimiz
        </h2>
        
        <a
            href="https://hexmail.hexstudio.com.tr"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
            {/* Ambient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10 flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                <Mail size={24} className="text-white" />
            </div>
            <div>
                <h3 className="font-bold text-gray-900 text-xl leading-tight mb-1 flex items-center gap-3">
                HexMail AI 
                <span className="text-[10px] font-bold tracking-wider uppercase bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full border border-blue-200">
                    Live v1.0
                </span>
                </h3>
                <p className="text-sm text-gray-500 font-medium">Gmail deneyiminizi yapay zeka ile güçlendirin. Yerel ve güvenli.</p>
            </div>
            </div>

            <div className="relative z-10 hidden sm:flex items-center gap-2 text-gray-600 font-semibold group-hover:text-blue-600 transition-colors pr-2">
            <span>Şimdi İncele</span>
            <div className="w-8 h-8 rounded-full bg-gray-50 group-hover:bg-blue-100 flex items-center justify-center transition-colors">
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </div>
            </div>
        </a>
      </motion.div>
    </div>
  );
}
