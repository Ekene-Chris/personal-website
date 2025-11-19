"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaGithub, FaArrowRight, FaTerminal, FaMapMarkerAlt, FaCircle } from "react-icons/fa";
import { cn } from "@/lib/utils";

const TerminalWindow = () => {
  const [text, setText] = useState("");
  const commands = [
    "$ cd ~/projects/teleios",
    "$ terraform apply --auto-approve",
    "$ kubectl get pods --all-namespaces",
    "$ docker-compose up -d",
    "$ git push origin main",
  ];
  const [commandIndex, setCommandIndex] = useState(0);

  useEffect(() => {
    const command = commands[commandIndex];
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex <= command.length) {
        setText(command.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setCommandIndex((prev) => (prev + 1) % commands.length);
          setText("");
        }, 2000);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [commandIndex]);

  return (
    <div className="h-full w-full bg-black/90 rounded-xl border border-gold/30 p-4 font-mono text-sm overflow-hidden">
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gold/20">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="ml-2 text-gray-400 text-xs">terminal</span>
      </div>
      <div className="text-green-400">
        {text}
        <span className="animate-pulse">_</span>
      </div>
    </div>
  );
};

const StatusCard = () => {
  return (
    <div className="h-full w-full bg-gradient-to-br from-card-dark to-deep-charcoal rounded-xl border border-gold/30 p-6 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <FaCircle className="text-green-500 text-xs animate-pulse" />
          <span className="text-gray-400 font-mono text-sm">ONLINE</span>
        </div>
        <div className="flex items-start gap-2 text-gray-300">
          <FaMapMarkerAlt className="text-gold mt-1" />
          <div>
            <p className="font-mono text-sm">Lagos, Nigeria</p>
            <p className="text-xs text-gray-500 mt-1">Building the future</p>
          </div>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-gold/20">
        <p className="font-mono text-xs text-gray-500">Availability</p>
        <p className="text-sm text-gold font-semibold mt-1">Open to Opportunities</p>
      </div>
    </div>
  );
};

export default function BentoHero() {
  return (
    <section className="min-h-screen bg-deep-charcoal relative overflow-hidden pt-20">
      {/* Background with grid pattern and noise */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid-size opacity-20"></div>
      <div className="absolute inset-0 bg-noise opacity-[0.02]"></div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
          {/* Main Title - Large Cell */}
          <motion.div
            className="lg:col-span-7 bg-gradient-to-br from-card-dark to-deep-charcoal rounded-2xl border border-gold/30 p-8 lg:p-12 relative overflow-hidden group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/5 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <motion.div
                className="inline-block mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <span className="px-4 py-2 bg-gold/20 border border-gold rounded-full text-sm font-mono font-semibold text-gold">
                  DEVOPS ARCHITECT & EDUCATOR
                </span>
              </motion.div>

              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                <span className="text-white">Empowering </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-caput-mortuum to-kombu-green font-mono">
                  African Engineers
                </span>
                <span className="text-white"> Through DevOps Excellence</span>
              </h1>

              <p className="text-xl text-gray-400 mb-8 leading-relaxed max-w-2xl">
                Building the bridge between African talent and global opportunities through technical expertise and strategic upskilling
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="group px-8 py-4 bg-gold text-black rounded-lg font-semibold transition-all duration-300 hover:bg-gold/90 hover:shadow-lg hover:shadow-gold/50 flex items-center gap-2"
                >
                  Work With Me
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/blog"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white hover:text-black text-white rounded-lg font-semibold transition-all duration-300"
                >
                  Explore My Work
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 mt-8 pt-8 border-t border-gold/20">
                <span className="text-gray-500 font-mono text-sm">CONNECT:</span>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/in/ekene-chris"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-gold hover:text-black flex items-center justify-center rounded-lg text-white transition-all duration-300"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://x.com/iamekenechris"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-gold hover:text-black flex items-center justify-center rounded-lg text-white transition-all duration-300"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="https://github.com/Ekene-Chris"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-gold hover:text-black flex items-center justify-center rounded-lg text-white transition-all duration-300"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Profile Image - Medium Cell */}
          <motion.div
            className="lg:col-span-5 lg:row-span-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="h-full min-h-[400px] lg:min-h-[600px] relative group">
              {/* Animated border glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-gold via-caput-mortuum to-gold opacity-75 rounded-2xl blur-xl group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative h-full rounded-2xl overflow-hidden border-2 border-gold/50">
                <Image
                  src="/images/ekene-profile.jpg"
                  alt="Ekene Chris"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                {/* Floating tag */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/80 backdrop-blur-md border border-gold/30 rounded-xl p-4">
                    <p className="font-mono text-gold text-sm">@iamekenechris</p>
                    <p className="text-white font-semibold mt-1">Senior DevOps Engineer</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Terminal Window - Small Cell */}
          <motion.div
            className="lg:col-span-4 h-48 lg:h-auto"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <TerminalWindow />
          </motion.div>

          {/* Status Card - Small Cell */}
          <motion.div
            className="lg:col-span-3 h-48 lg:h-auto"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <StatusCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
