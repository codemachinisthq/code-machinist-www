"use client";

import { motion } from "framer-motion";
import { GitBranch, Link2, AtSign } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { TEAM_MEMBERS } from "@/lib/constants";

export function TeamSection() {
  return (
    <section className="py-24 sm:py-32 bg-bg-base" aria-labelledby="team-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <Badge variant="outline" className="mb-4 border-brand-cyan/40 bg-brand-cyan/10 text-brand-cyan">
            The Team
          </Badge>
          <h2
            id="team-heading"
            className="font-display text-3xl sm:text-4xl font-bold text-text-primary"
          >
            The Minds Behind{" "}
            <span className="gradient-text">Code Machinist</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-text-secondary">
            Senior engineers and designers who have shipped products used by millions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member, i) => (
            <motion.article
              key={member.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 + i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group text-center"
            >
              <div className="relative mb-4 inline-block">
                <Avatar className="size-24 mx-auto ring-2 ring-bg-border group-hover:ring-brand-blue/40 transition-all duration-300">
                  <AvatarFallback
                    className={`bg-linear-to-br ${member.gradient} text-white text-xl font-bold`}
                  >
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
              </div>
              <h3 className="font-display text-base font-semibold text-text-primary">{member.name}</h3>
              <p className="text-sm text-brand-blue mb-2">{member.role}</p>
              <p className="text-xs text-text-muted leading-relaxed mb-4">{member.bio}</p>
              <div className="flex items-center justify-center gap-2">
                {member.socials.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    aria-label={`${member.name} on LinkedIn`}
                    className="size-8 flex items-center justify-center rounded-lg border border-bg-border text-text-muted hover:border-brand-blue hover:text-brand-blue transition-colors"
                  >
                    <Link2 className="size-3.5" />
                  </a>
                )}
                {member.socials.github && (
                  <a
                    href={member.socials.github}
                    aria-label={`${member.name} on GitHub`}
                    className="size-8 flex items-center justify-center rounded-lg border border-bg-border text-text-muted hover:border-brand-blue hover:text-brand-blue transition-colors"
                  >
                    <GitBranch className="size-3.5" />
                  </a>
                )}
                {member.socials.twitter && (
                  <a
                    href={member.socials.twitter}
                    aria-label={`${member.name} on Twitter`}
                    className="size-8 flex items-center justify-center rounded-lg border border-bg-border text-text-muted hover:border-brand-blue hover:text-brand-blue transition-colors"
                  >
                    <AtSign className="size-3.5" />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
