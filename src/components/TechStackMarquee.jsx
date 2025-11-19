"use client";

import React from "react";
import { cn } from "@/lib/utils";

const techStack = [
  "AWS",
  "Azure",
  "Kubernetes",
  "Docker",
  "Terraform",
  "ArgoCD",
  "GitHub Actions",
  "Prometheus",
  "Grafana",
  "Python",
  "Go",
  "Helm",
  "Ansible",
  "Datadog",
  "New Relic",
];

export default function TechStackMarquee() {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-deep-charcoal via-card-dark to-deep-charcoal py-8 border-y border-gold/20">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid-size opacity-30"></div>

      <div className="relative flex">
        {/* First set of items */}
        <div className="flex animate-marquee whitespace-nowrap">
          {techStack.map((tech, idx) => (
            <div
              key={`tech-1-${idx}`}
              className="mx-8 flex items-center gap-3"
            >
              <span className="font-mono text-gold text-2xl font-bold tracking-wider">
                {tech}
              </span>
              <span className="text-gold/40 text-3xl">•</span>
            </div>
          ))}
        </div>

        {/* Duplicate set for seamless loop */}
        <div className="flex animate-marquee whitespace-nowrap" aria-hidden="true">
          {techStack.map((tech, idx) => (
            <div
              key={`tech-2-${idx}`}
              className="mx-8 flex items-center gap-3"
            >
              <span className="font-mono text-gold text-2xl font-bold tracking-wider">
                {tech}
              </span>
              <span className="text-gold/40 text-3xl">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient fades on sides */}
      <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-deep-charcoal to-transparent"></div>
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-deep-charcoal to-transparent"></div>
    </div>
  );
}
