"use client";

import { motion } from "framer-motion";
import { MessageSquare, Shield, Zap, Users, Video, Cloud, Lock, Globe } from "lucide-react";

const features = [
  {
    icon: <MessageSquare className="h-10 w-10" />,
    title: "Smart Messaging",
    description: "AI-powered chat with smart replies and multilingual translation.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Shield className="h-10 w-10" />,
    title: "Bank-Grade Security",
    description: "End-to-end encryption with advanced threat protection.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: <Video className="h-10 w-10" />,
    title: "HD Video Calls",
    description: "Crystal clear video meetings with virtual backgrounds.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: <Cloud className="h-10 w-10" />,
    title: "Cloud Storage",
    description: "Unlimited file sharing with smart organization.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: "Team Spaces",
    description: "Dedicated workspaces for teams with custom permissions.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: <Lock className="h-10 w-10" />,
    title: "Access Control",
    description: "Granular permissions and role-based access management.",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: <Zap className="h-10 w-10" />,
    title: "Instant Sync",
    description: "Real-time synchronization across all your devices.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: <Globe className="h-10 w-10" />,
    title: "Global Network",
    description: "Distributed servers ensuring minimal latency worldwide.",
    gradient: "from-cyan-500 to-blue-500",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-950/20 to-background" />
      
      <div className="container relative mx-auto sm:max-w-2xl md:max-w-4xl lg:max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Powerful Features
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need for seamless communication in one place.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="card-hover"
            >
              <div className="relative group rounded-xl border bg-gradient-to-b from-white/5 to-transparent p-6 h-full">
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.gradient} mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}