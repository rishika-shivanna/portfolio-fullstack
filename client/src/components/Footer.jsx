import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-zinc-200 py-6">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-zinc-600 text-sm">
          Built with <Heart className="h-3 w-3 inline text-red-500" /> by{" "}
          <span className="font-semibold text-indigo-700">Rishika Shivanna</span> • 
          <a 
            href="https://github.com/rishika-shivanna" 
            target="_blank" 
            rel="noreferrer"
            className="text-purple-600 hover:text-purple-800 ml-2 transition-colors"
          >
            GitHub ↗
          </a>
          • © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}