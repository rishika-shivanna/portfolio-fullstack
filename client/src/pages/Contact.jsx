import { useState } from "react";
import {
  Mail,
  Linkedin,
  Github,
  Download,
  Copy,
  Check,
  FileText,
} from "lucide-react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function driveViewUrl(fileId) {
  return `https://drive.google.com/file/d/${fileId}/view`;
}
function driveDownloadUrl(fileId) {
  return `https://drive.google.com/uc?export=download&id=${fileId}`;
}
function extractDriveFileId(url) {
  if (!url || typeof url !== "string") return "";
  const m = url.match(/\/d\/([^/]+)/) || url.match(/[?&]id=([^&]+)/);
  return m ? m[1] : "";
}

function ContactCard({
  tone = "indigo",
  icon,
  title,
  value,
  hint,
  actionLabel,
  href,
  copyValue,
  children,
}) {
  const toneMap = {
  indigo: {
    cardBg: "bg-white/70",
    barSolid: "bg-indigo-600",
    bg: "from-indigo-50 to-blue-50",
    btn: "bg-indigo-600 hover:bg-indigo-700",
    ring: "ring-indigo-200",
    icon: "text-indigo-600",
    text: "text-zinc-900",
  },
  emerald: {
    cardBg: "bg-white/70",
    barSolid: "bg-emerald-600",
    bg: "from-emerald-50 to-teal-50",
    btn: "bg-emerald-600 hover:bg-emerald-700",
    ring: "ring-emerald-200",
    icon: "text-emerald-600",
    text: "text-zinc-900",
  },
  // 🔴 FULL RED GITHUB CARD
  rose: {
    cardBg: "bg-rose-50",
    barSolid: "bg-rose-400",
    bg: "from-red-200 to-red-200",
    btn: "bg-rose-500 hover:bg-rose-600 text-white",
    ring: "ring-red-300",
    icon: "text-rose-500",
    text: "text-black",
  },
  violet: {
    cardBg: "bg-white/70",
    barSolid: "bg-violet-600",
    bg: "from-violet-50 to-fuchsia-50",
    btn: "bg-violet-600 hover:bg-violet-700",
    ring: "ring-violet-200",
    icon: "text-violet-600",
    text: "text-zinc-900",
  },
};



  
  


  const t = toneMap[tone] || toneMap.indigo;
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(copyValue || value || "");
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  }

  return (
<div
  className={cn(
    "rounded-3xl border border-zinc-200 shadow-sm overflow-hidden",
    t.cardBg
  )}
>
      {/* 🔴 SOLID TOP BAR */}
      <div className={cn("h-1.5 w-full", t.barSolid)} />
<div
  className={cn(
    "p-6",
    tone === "rose" ? "bg-transparent" : "bg-gradient-to-r",
    t.bg
  )}
>

        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4 min-w-0">
            <div
              className={cn(
                "h-12 w-12 rounded-2xl bg-white grid place-items-center ring-1",
                t.ring
              )}
            >
              <span className={cn("h-5 w-5", t.icon)}>{icon}</span>
            </div>

            <div className="min-w-0">
              <div className="text-lg font-extrabold text-zinc-900">
                {title}
              </div>
              <div className="mt-1 text-zinc-700 truncate">{value}</div>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={onCopy}
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-800 hover:bg-zinc-50 transition"
                >
                  {copied ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                  {copied ? "Copied" : "Copy"}
                </button>

                {hint && (
                  <span className="text-sm text-zinc-500">{hint}</span>
                )}
              </div>

              {children && <div className="mt-4">{children}</div>}
            </div>
          </div>

          {href && (
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className={cn(
                "shrink-0 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-extrabold text-white transition",
                t.btn
              )}
            >
              {actionLabel}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ContactCards({
  email = "rshivanna@binghamton.edu",
  linkedin = "https://www.linkedin.com/in/rishika-shivanna/",
  github = "https://github.com/rishika-shivanna",
  resumeUrl = "https://drive.google.com/file/d/1d60ctfGQpKWvjoGiE2UQb4FsG1B5jdSR/view",
}) {
  const fileId = extractDriveFileId(resumeUrl);

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <ContactCard
        tone="indigo"
        icon={<Mail />}
        title="Email"
        value={email}
        hint="Best way to reach me"
        actionLabel="Send"
        href={`mailto:${email}`}
        copyValue={email}
      />

      <ContactCard
        tone="emerald"
        icon={<Linkedin />}
        title="LinkedIn"
        value={linkedin.replace(/^https?:\/\//, "")}
        hint="Connect & message"
        actionLabel="Open"
        href={linkedin}
        copyValue={linkedin}
      />

      {/* 🔴 FULL RED GITHUB CARD */}
      <ContactCard
        tone="rose"
        icon={<Github />}
        title="GitHub"
        value={github.replace(/^https?:\/\//, "")}
        hint="Projects & code"
        actionLabel="Open"
        href={github}
        copyValue={github}
      />

      <ContactCard
        tone="violet"
        icon={<FileText />}
        title="Resume"
        value="Download PDF"
        hint="Google Drive"
        actionLabel="Open"
        href={driveViewUrl(fileId)}
        copyValue={driveViewUrl(fileId)}
      >
        <div className="flex flex-wrap gap-3">
          <a
            href={driveViewUrl(fileId)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-800 hover:bg-zinc-50 transition"
          >
            <FileText className="h-4 w-4" />
            Open in Drive
          </a>

          <a
            href={driveDownloadUrl(fileId)}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-800 hover:bg-zinc-50 transition"
          >
            <Download className="h-4 w-4" />
            Download PDF
          </a>
        </div>
      </ContactCard>
    </div>
  );
}
