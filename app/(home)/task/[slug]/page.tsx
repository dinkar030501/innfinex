"use client";

import { Footer } from "@/components/footer";
import { TaskHeader } from "@/components/task-page/TaskHeader";
import { TaskContent } from "@/components/task-page/TaskContent";
import { engineeringChallenges, featuredChallenges } from "@/content/taskList";
import { QuickLinks } from "@/components/task-page/QuickLinks";
import { useState } from "react";
import { Leaderboard } from "@/components/task-page/Leaderboard";
import { Timeline } from "@/components/task-page/Timeline";
import { Rules } from "@/components/task-page/Rules";
import { SubmissionGuide } from "@/components/task-page/SubmissionGuide";

const quickLinks = [
  { name: "Overview", href: "#overview" },
  { name: "Leaderboard", href: "#leaderboard" },
  { name: "Timeline", href: "#timeline" },
  { name: "Rules", href: "#rules" },
  { name: "How to Submit", href: "#submission" },
];

export default function TaskPage({ params }: { params: { slug: string } }) {
  const task = [...featuredChallenges, ...engineeringChallenges].find(
    (task) => task.slug === params.slug
  );
  const [activeLink, setActiveLink] = useState(quickLinks[0].name);
  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };
  return (
    <div className="min-h-screen bg-black text-white">
      <main>
        <TaskHeader task={task} />
        <QuickLinks
          activeLink={activeLink}
          quickLinks={quickLinks}
          handleLinkClick={handleLinkClick}
        />
        {activeLink === quickLinks[0].name && <TaskContent task={task} />}
        {activeLink === quickLinks[1].name && <Leaderboard />}
        {activeLink === quickLinks[2].name && <Timeline task={task} />}
        {activeLink === quickLinks[3].name && <Rules task={task} />}
        {activeLink === quickLinks[4].name && <SubmissionGuide task={task} />}
      </main>
    </div>
  );
}
