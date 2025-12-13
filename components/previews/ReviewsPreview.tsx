"use client";

import { motion } from "framer-motion";

const reviews = [
  { id: 1, stars: 5, text: "Amazing customer service! Got my issue resolved in minutes.", platform: "Google", customer: "Jane D.", replied: true },
  { id: 2, stars: 4, text: "Good product, but shipping was a bit slow.", platform: "Shopify", customer: "Mark T.", replied: false },
  { id: 3, stars: 2, text: "Disappointed with the quality. Not as advertised.", platform: "TikTok Shop", customer: "Lisa W.", replied: false },
  { id: 4, stars: 5, text: "Best purchase I've made this year!", platform: "Amazon", customer: "Chris P.", replied: true },
];

const platformColors: Record<string, string> = {
  Google: "from-blue-400 to-blue-600",
  Shopify: "from-emerald-400 to-green-600",
  "TikTok Shop": "from-pink-400 to-rose-600",
  Amazon: "from-orange-400 to-amber-600",
};

export function ReviewsPreview() {
  return (
    <motion.div
      key="reviews"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.32, ease: "easeOut" }}
      className="w-full max-w-3xl mx-auto"
    >
      <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 via-rose-500 to-red-500 shadow-lg flex items-center justify-center">
              <span className="text-white text-sm">⭐</span>
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Customer Reviews</div>
              <div className="text-xs text-gray-400">12 reviews need response</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-300 text-xs">
              4.2 avg rating
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 p-4 border-b border-white/5">
          <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
            <div className="text-lg font-semibold text-white">156</div>
            <div className="text-xs text-gray-400">Total reviews</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
            <div className="text-lg font-semibold text-emerald-400">89%</div>
            <div className="text-xs text-gray-400">Positive</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
            <div className="text-lg font-semibold text-amber-400">7%</div>
            <div className="text-xs text-gray-400">Neutral</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
            <div className="text-lg font-semibold text-red-400">4%</div>
            <div className="text-xs text-gray-400">Negative</div>
          </div>
        </div>

        {/* Review list */}
        <div className="p-4 space-y-3 max-h-[280px] overflow-y-auto">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="p-4 border border-white/5 rounded-xl bg-white/5"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="text-yellow-400 text-sm">
                    {"★".repeat(review.stars)}{"☆".repeat(5 - review.stars)}
                  </div>
                  <span className={`px-2 py-0.5 rounded-full bg-gradient-to-r ${platformColors[review.platform]} text-white text-xs`}>
                    {review.platform}
                  </span>
                </div>
                <span className="text-xs text-gray-500">{review.customer}</span>
              </div>
              <p className="text-sm text-gray-300 mb-3">{review.text}</p>
              <div className="flex items-center justify-between">
                {review.replied ? (
                  <span className="text-xs text-emerald-400">✓ Responded</span>
                ) : (
                  <button className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-rose-300 to-sky-400 text-black text-xs font-semibold">
                    Generate AI response
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

