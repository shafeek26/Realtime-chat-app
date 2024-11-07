"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager at TechCorp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    content:
      "ChatFlow has revolutionized our team communication. The AI features and real-time collaboration tools have increased our productivity by 40%.",
  },
  {
    name: "Michael Chen",
    role: "Lead Developer at StartupX",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    content:
      "The security features are unmatched. As a tech lead, I appreciate the attention to detail in encryption and data protection. Simply outstanding!",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director at CreativeHub",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    content:
      "From video calls to file sharing, everything works seamlessly. It's like having a virtual office that fits in your pocket. Game-changing!",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
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
            Loved by Teams Worldwide
          </h2>
          <p className="text-muted-foreground text-lg">
            Join thousands of satisfied users who&apos;ve transformed their communication.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="h-full bg-gradient-to-b from-white/5 to-transparent border-white/10">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-primary mb-4 opacity-50" />
                  <p className="text-lg mb-6">{testimonial.content}</p>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12 border-2 border-primary">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>
                        {testimonial.name.split(" ").map((n) => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}