
export default function Hero() {
  return (
    <main className="w-full overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen w-full flex items-center justify-center">

        {/* Background dots */}
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(#c7d2fe_1px,transparent_1px)]
            bg-size-[18px_18px]
            opacity-40
          "
        ></div>

        <div className="relative z-10 w-full max-w-5xl text-center px-4 sm:px-6">

          {/* Logo */}
          <div className="mx-auto mb-6 w-32 h-12 rounded-xl bg-white shadow flex items-center justify-center text-xl font-bold">
            LAKSHYA
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            World’s First AI-Powered
            <br />
            <span className="text-indigo-600">Career Recommendation Website</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Social Media AI that edits, creates, and manages all in one place.
            <br />10x Growth. Automated.
          </p>

          {/* CTA */}
          <button
            className="
              mt-8 relative px-7 py-3 rounded-xl 
              bg-indigo-600 text-white font-medium
              shadow-[0_8px_0_#4338ca,0_20px_30px_rgba(79,70,229,0.4)]
              active:translate-y-1
              active:shadow-[0_4px_0_#4338ca,0_10px_20px_rgba(79,70,229,0.3)]
              transition-all duration-200
            "
          >
            Get Started for Free
          </button>

          {/* Floating Icons */}
          <div className="relative mt-14 flex justify-center gap-8">

            <img src="/images/instagram.webp" alt="Instagram"
              className="w-14 h-14 object-contain drop-shadow-xl float-slow -translate-y-2 rotate-6" />

            <img src="/images/linkedin.webp" alt="LinkedIn"
              className="w-12 h-12 object-contain drop-shadow-2xl float-medium translate-y-1 -rotate-6" />

            <img src="/images/youtube.webp" alt="YouTube"
              className="w-16 h-16 object-contain drop-shadow-xl float-fast -translate-y-3 rotate-3" />

            <img src="/images/tiktok.webp" alt="TikTok"
              className="w-14 h-14 object-contain drop-shadow-2xl float-medium translate-y-2 -rotate-3" />

            <img src="/images/x.jpg" alt="X"
              className="w-12 h-12 object-contain drop-shadow-xl float-slow -translate-y-1 rotate-6" />
          </div>
        </div>
      </section>

      {/* ================= WHAT YOU GET ================= */}
<section className="relative py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-4xl md:text-5xl font-bold">
      What You <span className="text-indigo-600">Get</span>
    </h2>

    <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
      A complete AI-powered career guidance ecosystem designed for students,
      counselors, and institutions.
    </p>

    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        "Profile Creation – Enter academic details, interests, skills, and city.",
        "AI Career Recommendation – Get suitable, alternate & future-proof careers.",
        "Skill Gap Analysis – Identify existing and missing skills.",
        "Learning Roadmap – Courses, certifications & practice plans.",
        "Resume Scoring – Strengths, weaknesses & missing keywords.",
        "Job Readiness Score – Percentage readiness for chosen careers.",
        "Career Comparison Tool – Compare two career options easily.",
        "AI Career Chatbot – Instant answers for student queries.",
        "Internship & Course Suggestions – Best platforms & opportunities."
      ].map((text, i) => (
        <div
          key={i}
          className="
            bg-white rounded-2xl p-6
            shadow-[0_10px_30px_rgba(0,0,0,0.08)]
            hover:-translate-y-1 transition
            text-left
          "
        >
          {/* Image placeholder */}
          <div className="w-full h-36 bg-slate-100 rounded-xl flex items-center justify-center text-gray-400 mb-5">
            IMAGE
          </div>

          <p className="text-gray-700 text-sm leading-relaxed">
            {text}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
{/* ================= FOR WHO ================= */}
<section className="py-24 bg-linear-to-b from-slate-50 to-white">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-4xl md:text-5xl font-bold">
      Built <span className="text-indigo-600">For</span>
    </h2>

    <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-10">

      {/* Counselor */}
      <div className="bg-white p-8 rounded-2xl shadow-lg w-64 text-center">
        <div className="w-16 h-16 mx-auto mb-4 bg-slate-100 rounded-xl flex items-center justify-center">
          ICON
        </div>
        <h3 className="font-semibold text-lg">Counselor</h3>
      </div>

      {/* Student (MAIN) */}
      <div className="bg-white p-10 rounded-3xl shadow-[0_20px_50px_rgba(79,70,229,0.35)] w-72 text-center scale-105">
        <div className="w-20 h-20 mx-auto mb-4 bg-indigo-600 text-white rounded-2xl flex items-center justify-center">
          ICON
        </div>
        <h3 className="font-semibold text-xl">Student</h3>
      </div>

      {/* College */}
      <div className="bg-white p-8 rounded-2xl shadow-lg w-64 text-center">
        <div className="w-16 h-16 mx-auto mb-4 bg-slate-100 rounded-xl flex items-center justify-center">
          ICON
        </div>
        <h3 className="font-semibold text-lg">College</h3>
      </div>

    </div>
  </div>
</section>


      {/* ================= ABOUT SECTION ================= */}
      <section className="py-24 bg-linear-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-4xl md:text-5xl font-bold">
              About <span className="text-indigo-600">Quso AI</span>
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Quso AI helps creators and businesses scale effortlessly using
              intelligent automation — from content creation to analytics.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              One dashboard. Total control. Real growth.
            </p>

            <button
              className="
                mt-8 px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium
                shadow-[0_6px_0_#4338ca,0_15px_30px_rgba(79,70,229,0.4)]
                hover:-translate-y-0.5 transition
              "
            >
              Learn More
            </button>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-12 text-center text-gray-400">
            DASHBOARD / IMAGE PLACEHOLDER
          </div>
        </div>
      </section>
      {/* ================= FAQ ================= */}
<section className="py-24 bg-white">
  <div className="max-w-5xl mx-auto px-6">
    <h2 className="text-4xl md:text-5xl font-bold text-center">
      Frequently Asked <span className="text-indigo-600">Questions</span>
    </h2>

    <div className="mt-14 space-y-6">
      {[
        ["Is this platform free for students?", "Yes, students can access core features for free."],
        ["How accurate are AI career recommendations?", "They are based on skills, interests, and market trends."],
        ["Can colleges use this platform?", "Yes, institutions get analytics and student insights."],
        ["Does this replace career counselors?", "No, it assists counselors with AI-driven insights."],
      ].map(([q, a], i) => (
        <div
          key={i}
          className="bg-slate-50 p-6 rounded-xl shadow-sm"
        >
          <h4 className="font-semibold">{q}</h4>
          <p className="mt-2 text-gray-600 text-sm">{a}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* ================= FOOTER ================= */}
<footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

    <div>
      <h3 className="text-white font-semibold mb-4">Our Product</h3>
      <ul className="space-y-2 text-sm">
        <li>Career Guidance</li>
        <li>AI Recommendations</li>
        <li>Skill Analysis</li>
        <li>Learning Roadmaps</li>
      </ul>
    </div>

    <div>
      <h3 className="text-white font-semibold mb-4">Legal</h3>
      <ul className="space-y-2 text-sm">
        <li>Privacy Policy</li>
        <li>Terms & Conditions</li>
        <li>Disclaimer</li>
      </ul>
    </div>

    <div>
      <h3 className="text-white font-semibold mb-4">More</h3>
      <ul className="space-y-2 text-sm">
        <li>About Us</li>
        <li>Contact</li>
        <li>FAQs</li>
      </ul>
    </div>

    <div>
      <h3 className="text-white font-semibold mb-4">Social Media</h3>
      <ul className="space-y-2 text-sm">
        <li>LinkedIn</li>
        <li>Instagram</li>
        <li>Twitter (X)</li>
        <li>YouTube</li>
      </ul>
    </div>
  </div>

  <p className="mt-10 text-center text-sm text-slate-400">
    © {new Date().getFullYear()} Quso AI. All rights reserved.
  </p>
</footer>


    </main>
  );
}