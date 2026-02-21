import { useState, useEffect } from 'react';
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, ArrowUp, ArrowRight } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
 
const generateBlogPosts = () => [
  {
    id: 1,
    slug:"best-career-options-after-10th",
    title:  "“Best career after 12th science PCM for girls in India 2026”",
    date: "10 Feb 2026",
    excerpt: "Science, Commerce, Diploma, ITI - complete Mumbai roadmap with colleges & real salaries.",
    fullContent: (
      <>
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            10th Done? Your Complete Roadmap! 🚀
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700">
            90% students confused after 10th. This guide shows ALL options with Mumbai colleges,
            exact fees & 2026 job salaries. 25 minutes of real value!
          </p>
        </section>

        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Science Stream Options 💰</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-primary">PCB (Medical)</h3>
              <ul className="space-y-3 text-sm sm:text-base">
                <li>✅ NEET → MBBS (₹10-50L)</li>
                <li>✅ Nursing → ₹3-5LPA govt</li>
                <li>✅ Pharmacy → ₹4-6LPA</li>
              </ul>
            </div>
            <div className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-primary">PCM (Engineering)</h3>
              <ul className="space-y-3 text-sm sm:text-base">
                <li>✅ IIT JEE → ₹20LPA start</li>
                <li>✅ VJTI Mumbai → ₹8-12LPA</li>
                <li>✅ Thakur College → ₹4-6L fees</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12 sm:mb-16 bg-blue-50 p-6 sm:p-10 rounded-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Quick Jobs: Diploma & ITI ⚡</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl text-sm sm:text-base">
              <thead className="bg-gradient-to-r from-blue-500 to-primary text-white">
                <tr><th className="p-4 text-left font-bold">Course</th><th className="p-4 text-left font-bold">Duration</th><th className="p-4 text-left font-bold">Fees</th><th className="p-4 text-left font-bold">Salary</th></tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-emerald-50"><td className="p-4 font-semibold">Diploma CS</td><td className="p-4">3 yrs</td><td className="p-4">₹15k/yr</td><td className="p-4 text-emerald-600 font-bold">₹4LPA</td></tr>
                <tr className="hover:bg-emerald-50"><td className="p-4 font-semibold">ITI Electrician</td><td className="p-4">2 yrs</td><td className="p-4">₹10k/yr</td><td className="p-4 text-emerald-600 font-bold">₹3.5LPA</td></tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="p-4 bg-emerald-50 rounded-xl text-sm sm:text-base">
              <h4 className="font-bold mb-2">Success:</h4>
              <p>Rahul → ITI → BARC (₹6LPA)</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-xl text-sm sm:text-base">
              <h4 className="font-bold mb-2">Tip:</h4>
              <p>Govt ITI = FREE + stipend!</p>
            </div>
          </div>
        </section>

        {/* More simplified sections... */}
        <div className="p-8 sm:p-12 bg-gray-50 rounded-3xl">
          <div className="max-w-4xl mx-auto space-y-8 text-lg text-gray-700 leading-relaxed">

            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                INTRODUCTION
              </h2>
              <div className="w-20 h-1 bg-gray-400 mx-auto"></div>
            </div>

            <p>
              Making the right choice after class 10 can dramatically shape your future. With the
              education landscape becoming more dynamic and the job market rapidly evolving,
              students and parents often ask one key question: Which are the high paying career streams
              to choose after 10th?
            </p>

            <p>
              This blog is designed to answer that question thoroughly. We'll walk you through the
              most promising career streams available after class 10, backed by up-to-date 2026
              trends, data, job prospects, salaries, and realistic expectations. You'll also find
              real guidance on how to align your choice with your strengths, interests, and long-term goals.
            </p>

            <p>
              Whether you're considering Science, Commerce, Arts/Humanities, vocational diplomas,
              or skill-based paths, this guide is your roadmap to confidence and clarity.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mt-12 mb-6">
              Why Your Choice After 10th Matters in 2026
            </h3>
            <p>
              Choosing the right stream after class 10 isn't just about picking subjects for higher
              secondary school. It's about setting a foundation for future study, skill development,
              employability, and financial stability.
            </p>
            <p>
              In 2026, several important shifts are shaping career opportunities:
            </p>
            <ul className="list-disc ml-6 space-y-2 mb-8">
              <li>Technology and digital skills are driving high-paying roles across industries</li>
              <li>Healthcare and life sciences continue to expand with increasing demand</li>
              <li>Creative, business, and interdisciplinary careers are gaining traction</li>
              <li>Vocational and skill-based pathways offer early entry into good salaried roles</li>
            </ul>
            <p>
              Today's jobs reward not just academic achievement but also adaptability, practical
              skills, and continuous learning.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mt-12 mb-6">
              What Does "High Paying Career Streams" Really Mean?
            </h3>
            <p>
              When we talk about high paying career streams to choose after 10th, we're referring
              to educational paths that have strong earning potential in the years ahead. These can include:
            </p>
            <ul className="list-disc ml-6 space-y-2 mb-8">
              <li>Academic streams that lead to respected professions</li>
              <li>Diplomas and skills courses that lead to early employment</li>
              <li>Emerging tech and digital pathways</li>
              <li>Creative and business-oriented options with growth potential</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-800 mt-12 mb-6">
              Top Academic Streams with High Earning Potential
            </h3>

            <h4 className="text-xl font-bold text-gray-800 mb-4">1. Science Stream (PCM and PCB)</h4>
            <p className="mb-4">
              The Science stream is widely associated with high paying careers, especially when
              combined with focused skill development.
            </p>
            <p><strong>Why it Pays Well:</strong></p>
            <ul className="list-disc ml-6 space-y-1 mb-4">
              <li>Engineering, technology, and research roles are expanding globally</li>
              <li>Healthcare and life sciences remain in strong demand</li>
              <li>Advanced fields like AI, biotechnology, and renewable energy grow fast</li>
            </ul>
            <p><strong>High Paying Careers:</strong></p>
            <ul className="list-disc ml-6 space-y-1 mb-8">
              <li>Engineering (CS, AI, Data Science) → ₹6-12 LPA</li>
              <li>Medicine (MBBS), Nursing, Physiotherapy</li>
              <li>Renewable energy engineer, biotech researcher</li>
            </ul>

            <h4 className="text-xl font-bold text-gray-800 mb-4">2. Commerce Stream</h4>
            <p className="mb-4">
              Commerce leads to some of the most financially rewarding roles in business,
              finance, and management.
            </p>
            <p><strong>High Paying Career Paths:</strong></p>
            <ul className="list-disc ml-6 space-y-1 mb-8">
              <li>Chartered Accountancy (CA) → ₹6-15 LPA</li>
              <li>Corporate finance, investment banking</li>
              <li>Fintech and digital business roles</li>
            </ul>

            <h4 className="text-xl font-bold text-gray-800 mb-4">3. Arts / Humanities Stream</h4>
            <p className="mb-4">
              Arts includes pathways into high-demand careers when paired with modern skills.
            </p>
            <p><strong>High Paying Fields:</strong></p>
            <ul className="list-disc ml-6 space-y-1 mb-8">
              <li>UX/UI design, digital media → ₹4-12 LPA</li>
              <li>Corporate law, judiciary roles</li>
              <li>Journalism, content strategy</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-800 mt-12 mb-6">
              Skill-Based and Vocational Career Streams
            </h3>
            <p className="mb-4">
              Not all high paying paths require traditional 12th → degree steps.
            </p>
            <ul className="list-disc ml-6 space-y-2 mb-8">
              <li><strong>Tech Diplomas:</strong> AI, Web Dev → ₹3.6-8 LPA</li>
              <li><strong>Aviation:</strong> Cabin Crew → ₹3-5 LPA + perks</li>
              <li><strong>Healthcare:</strong> Lab Tech → ₹2.5-6 LPA</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-800 mt-12 mb-6">
              How to Choose Among High Paying Career Streams
            </h3>
            <ol className="list-decimal ml-6 space-y-2 mb-8">
              <li>Self-Assessment: Know your strengths and interests</li>
              <li>Research Careers and Salaries: Look at long-term prospects</li>
              <li>Consider Hybrid Options: Commerce + tech skills</li>
              <li>Be Realistic: High salaries need strong skills</li>
            </ol>

            <h3 className="text-2xl font-bold text-gray-800 mt-12 mb-6">Q&A</h3>
            <div className="space-y-6">
              <div>
                <p><strong>Q1: Can you earn well without 12th?</strong></p>
                <p>A: Yes. Tech diplomas, aviation roles offer good salaries after 10th.</p>
              </div>
              <div>
                <p><strong>Q2: Which stream has highest long-term pay?</strong></p>
                <p>A: Science (tech/medicine), but commerce with certifications is competitive.</p>
              </div>
              <div>
                <p><strong>Q3: Is arts low-paying?</strong></p>
                <p>A: No. UX design, law, digital media offer ₹8-12 LPA with skills.</p>
              </div>
            </div>

          </div>
        </div>

      </>
    )
  },
  {
    id: 2, slug: "top-it-skills-2026", title: "Top IT Skills 2026 (₹6-25LPA)", date: "12 Feb 2026",
    excerpt: "React, AI, Full-Stack - complete roadmap with free resources & projects.",
    fullContent:
      <div className="p-8 sm:p-12 bg-gray-50 rounded-3xl space-y-8">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              Top 15 In-Demand IT Skills 2026
            </h1>
            <p className="text-xl text-gray-600 mb-4">Secure ₹6-25LPA jobs with these skills</p>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </div>

          {/* Preview - First 15 lines */}
          <div className="space-y-6 text-lg text-gray-700 mb-24">
            <p>
              Tech world changing fast! 2026 companies want real skills, not just degrees.
              Learn these 15 skills for high-paying jobs in Mumbai & India.
            </p>
            <p>
              Top skills: <strong>AI/ML (₹15-44L), Cloud (₹8-25L), Full Stack (₹5-23L),
                Cybersecurity (₹7-14L)</strong> - Real salary data 2026.
            </p>
            <ul className="list-disc ml-8 space-y-1 mb-8">
              <li>AI/ML Engineer → ₹21-44 Lakhs</li>
              <li>Cloud Architect → ₹8-25 Lakhs</li>
              <li>DevOps → ₹5-22 Lakhs</li>
              <li>Full Stack → ₹5-23 Lakhs</li>
            </ul>
          </div>

          {/* Full Content */}
          <div className="space-y-12">

            {/* Skill 1-5 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">1-5: Top Paying Skills</h2>
              <div className="space-y-4">
                <div className="p-6 bg-white border rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-xl">1. Artificial Intelligence</h3>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">₹21-44L</span>
                  </div>
                  <p className="text-sm mb-2">Python, TensorFlow, PyTorch | Fraud detection, chatbots</p>
                  <p>AI Engineer, ML Researcher | Free: Coursera Google AI course</p>
                </div>

                <div className="p-6 bg-white border rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-xl">2. Cloud Computing</h3>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">₹8-25L</span>
                  </div>
                  <p className="text-sm mb-2">AWS, Azure, GCP, Docker, Kubernetes</p>
                  <p>Cloud Architect | Free: AWS Free Tier + YouTube tutorials</p>
                </div>

                <div className="p-6 bg-white border rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-xl">3. Full Stack Development</h3>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">₹5-23L</span>
                  </div>
                  <p className="text-sm mb-2">React, Node.js, MongoDB | MERN/MEAN stack</p>
                  <p>Full Stack Developer | Free: freeCodeCamp MERN course</p>
                </div>

                <div className="p-6 bg-white border rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-xl">4. Cybersecurity</h3>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">₹7-14L</span>
                  </div>
                  <p className="text-sm mb-2">Ethical Hacking, Network Security, Penetration Testing</p>
                  <p>Security Analyst | Free: TryHackMe, HackTheBox</p>
                </div>

                <div className="p-6 bg-white border rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-xl">5. Data Science</h3>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">₹7-23L</span>
                  </div>
                  <p className="text-sm mb-2">Python, SQL, Tableau, Power BI</p>
                  <p>Data Analyst | Free: Kaggle courses + datasets</p>
                </div>
              </div>
            </section>

            {/* Skill 6-10 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">6-10: High Demand Skills</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-6 bg-white border rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-xl">6. DevOps</h3>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold">₹5-22L</span>
                  </div>
                  <p className="text-sm">Docker, Jenkins, Kubernetes, CI/CD</p>
                </div>
                <div className="p-6 bg-white border rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-xl">7. Blockchain</h3>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold">₹4-23L</span>
                  </div>
                  <p className="text-sm">Solidity, Ethereum, Smart Contracts</p>
                </div>
                <div className="p-6 bg-white border rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-xl">8. IoT</h3>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold">₹9-34L</span>
                  </div>
                  <p className="text-sm">Raspberry Pi, MQTT, Arduino</p>
                </div>
                <div className="p-6 bg-white border rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-xl">9. Big Data</h3>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold">₹5-22L</span>
                  </div>
                  <p className="text-sm">Hadoop, Spark, Kafka</p>
                </div>
                <div className="p-6 bg-white border rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-xl">10. UI/UX Design</h3>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold">₹4-13L</span>
                  </div>
                  <p className="text-sm">Figma, Adobe XD, Prototyping</p>
                </div>
              </div>
            </section>

            {/* Salary Table */}
            <section className="p-8 bg-white border rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">2026 Salary Comparison</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="p-4 text-left font-bold">Skill</th>
                      <th className="p-4 text-left font-bold">Entry Level</th>
                      <th className="p-4 text-left font-bold">Mid Level</th>
                      <th className="p-4 text-left font-bold">Senior</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="p-4 font-bold">AI/ML</td><td>₹7L</td><td>₹15-25L</td><td>₹34-44L</td></tr>
                    <tr><td className="p-4 font-bold">Cloud</td><td>₹3-8L</td><td>₹10-16L</td><td>₹16-25L</td></tr>
                    <tr><td className="p-4 font-bold">Full Stack</td><td>₹4-7L</td><td>₹8-15L</td><td>₹15-23L</td></tr>
                    <tr><td className="p-4 font-bold">Cybersecurity</td><td>₹3-5L</td><td>₹7-12L</td><td>₹12-14L</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Learning Roadmap */}
            <section className="p-8 bg-white border rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">6 Month Learning Plan</h2>
              <ol className="list-decimal ml-6 space-y-3 text-lg">
                <li><strong>Month 1-2:</strong> Python + Git + Basic Projects</li>
                <li><strong>Month 3-4:</strong> Choose 1 skill (React/AWS/Data Science)</li>
                <li><strong>Month 5:</strong> Build portfolio project + GitHub</li>
                <li><strong>Month 6:</strong> Apply jobs + Freelancing</li>
              </ol>
            </section>

            {/* Interview Tips */}
            <section className="p-8 bg-white border rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Top Interview Questions</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-3">Technical:</h4>
                  <ul className="list-disc ml-6 space-y-1 text-sm">
                    <li>Explain REST vs GraphQL</li>
                    <li>SQL joins with examples</li>
                    <li>Docker vs Kubernetes</li>
                    <li>React hooks lifecycle</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3">Behavioral:</h4>
                  <ul className="list-disc ml-6 space-y-1 text-sm">
                    <li>Toughest bug you fixed?</li>
                    <li>Team conflict resolution?</li>
                    <li>Why this company?</li>
                  </ul>
                </div>
              </div>
            </section>

          </div>

          {/* WhatsApp CTA */}
          <section className="mt-24 p-8 bg-green-50 border-2 border-green-200 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-green-800 mb-4">🚀 Start Learning Today!</h3>
            <p className="text-lg text-green-700 mb-6">Complete roadmap + projects + job guidance</p>
            <a
              href="https://api.whatsapp.com/send?phone=7822058623&text=Hi! IT Skills 2026 roadmap chahiye"
              className="inline-block bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-600"
              target="_blank"
            >
              📱 Get Complete Roadmap on WhatsApp
            </a>
          </section>

        </div>
      </div>
  },
  {
    id: 3,
    slug: "bca-final-year-projects-ideas",
    title: "BCA Final Year Projects",
    date: "18 Feb 2026",
    excerpt: "15 full-stack projects with GitHub links & interview questions.",
    fullContent: (
      <>
        <div className="p-8 sm:p-12 bg-gray-50 rounded-3xl space-y-8">
          <div className="max-w-4xl mx-auto">

            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
                Top 15 BCA Final Year Projects
              </h1>
              <p className="text-xl text-gray-600">Full-stack projects with GitHub links</p>
            </div>

            {/* Initial 10-15 lines preview */}
            <div className="space-y-6 text-lg text-gray-700 mb-20">
              <p>
                BCA final year projects are your ticket to great jobs! Here are 15 full-stack projects
                with complete GitHub code, documentation, and interview questions.
              </p>
              <p>
                Each project includes: Frontend (React/Vue), Backend (Node.js/Python), Database (MongoDB/MySQL),
                Deployment guide, and 20+ interview questions.
              </p>
              <ul className="list-disc ml-8 space-y-1">
                <li>MERN E-commerce (Razorpay integrated)</li>
                <li>Chat App (Socket.io realtime)</li>
                <li>Job Portal (Full CRUD)</li>
                <li>Task Manager (Drag & Drop)</li>
              </ul>
            </div>

            {/* Read Full Guide Button - Hidden in full view */}
            {/* This will be controlled by parent component */}

            {/* Full Content - Hidden initially */}
            <div className="space-y-8 hidden-scroll">

              {/* AI/ML Projects */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">1-5: AI/ML Projects</h2>
                <div className="space-y-4">
                  <div className="p-4 bg-white border rounded-lg">
                    <h4 className="font-bold text-lg mb-1">1. Sentiment Analysis Tool</h4>
                    <p className="text-sm mb-2">Python + Flask + React | GitHub: 2.5k stars</p>
                    <p>Customer review analyzer with dashboard</p>
                  </div>
                  <div className="p-4 bg-white border rounded-lg">
                    <h4 className="font-bold text-lg mb-1">2. Chatbot for Support</h4>
                    <p className="text-sm mb-2">Dialogflow + MERN | Live demo available</p>
                    <p>24/7 customer support automation</p>
                  </div>
                </div>
              </section>

              {/* Web Projects */}
              <section className="mt-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">6-10: Full-Stack Web Apps</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white border rounded-lg">
                    <h4 className="font-bold text-lg mb-1">6. E-commerce Store</h4>
                    <p className="text-sm mb-2">MERN + Razorpay | Complete checkout</p>
                  </div>
                  <div className="p-4 bg-white border rounded-lg">
                    <h4 className="font-bold text-lg mb-1">7. Job Portal</h4>
                    <p className="text-sm mb-2">Next.js + Prisma | Resume parser</p>
                  </div>
                  <div className="p-4 bg-white border rounded-lg">
                    <h4 className="font-bold text-lg mb-1">8. Task Manager</h4>
                    <p className="text-sm mb-2">Vue + Node + DragDrop | Team collab</p>
                  </div>
                  <div className="p-4 bg-white border rounded-lg">
                    <h4 className="font-bold text-lg mb-1">9. Food Delivery</h4>
                    <p className="text-sm mb-2">React Native + Socket.io | Live tracking</p>
                  </div>
                </div>
              </section>

              {/* Advanced Projects */}
              <section className="mt-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">11-15: Advanced Projects</h2>
                <div className="space-y-4">
                  <div className="p-4 bg-white border rounded-lg">
                    <h4 className="font-bold text-lg mb-1">11. Hospital Management</h4>
                    <p className="text-sm mb-2">Java + Spring Boot + MySQL</p>
                  </div>
                  <div className="p-4 bg-white border rounded-lg">
                    <h4 className="font-bold text-lg mb-1">12. Smart Home IoT</h4>
                    <p className="text-sm mb-2">Raspberry Pi + React Dashboard</p>
                  </div>
                  <div className="p-4 bg-white border rounded-lg">
                    <h4 className="font-bold text-lg mb-1">13. Crypto Tracker</h4>
                    <p className="text-sm mb-2">Next.js + CoinGecko API + Charts</p>
                  </div>
                  <div className="p-4 bg-white border rounded-lg">
                    <h4 className="font-bold text-lg mb-1">14. Video Streaming</h4>
                    <p className="text-sm mb-2">Node.js + HLS + React Player</p>
                  </div>
                  <div className="p-4 bg-white border rounded-lg">
                    <h4 className="font-bold text-lg mb-1">15. Exam Portal</h4>
                    <p className="text-sm mb-2">MERN + Proctoring + Timer</p>
                  </div>
                </div>
              </section>

              {/* Interview Prep */}
              <section className="mt-16 p-8 bg-white border rounded-xl">
                <h2 className="text-2xl font-bold text-gray-800 mb-8">🎯 Interview Questions</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold mb-4">Technical:</h4>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li>REST API design principles?</li>
                      <li>MongoDB vs MySQL when?</li>
                      <li>State management in React?</li>
                      <li>JWT authentication flow?</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-4">Project:</h4>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li>Biggest challenge faced?</li>
                      <li>Database optimization?</li>
                      <li>Deployment strategy?</li>
                      <li>Scalability concerns?</li>
                    </ul>
                  </div>
                </div>
              </section>

            </div>

            {/* WhatsApp CTA - Last section */}
            <section className="mt-24 p-8 bg-green-50 border-2 border-green-200 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-green-800 mb-4">🚀 Ready to Build?</h3>
              <p className="text-lg text-green-700 mb-6">
                Get complete source code + documentation + 1:1 support
              </p>
              <a
                href="https://api.whatsapp.com/send?phone=7822058623&text=Hi! BCA Project help - Top 15 projects"
                className="inline-block bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-600"
                target="_blank"
              >
                📱 Get Projects on WhatsApp Now!
              </a>
            </section>

          </div>
        </div>
      </>
    )
  },
  {
    id: 4, slug: "freelance-web-dev-india-tips", title: "Freelance Web Dev India", date: "21 Feb 2026",
    excerpt: "Upwork/Fiverr tips - earn $500/project without experience.",
    fullContent:
      <div className="p-8 sm:p-12 bg-gray-50 rounded-3xl space-y-8">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              38 Freelance Ideas You Can Start Today
            </h1>
            <p className="text-xl text-gray-600">₹500-₹5000/hour - No experience needed</p>
          </div>

          {/* Preview - First 15 lines */}
          <div className="space-y-6 text-lg text-gray-700 mb-24">
            <p>
              36% workforce freelancing! Start today - Data entry (₹500/hr) to Web Dev (₹3000/hr).
            </p>
            <p>
              <strong>Top 5 Easy Start:</strong> Data Entry, Virtual Assistant, Content Writing,
              Graphic Design, Social Media - All beginner friendly!
            </p>
            <ul className="list-disc ml-8 space-y-1">
              <li>Web Developer → ₹2000-5000/hr</li>
              <li>Video Editor → ₹1000-3000/hr</li>
              <li>SEO → ₹800-2500/hr</li>
              <li>Content Writer → ₹300-1000/hr</li>
            </ul>
          </div>

          {/* Full 38 Ideas - Simple List */}
          <div className="space-y-8">

            {/* Top Tech Skills */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Tech Freelancing (High Paying)</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white border rounded-lg">
                  <h4 className="font-bold text-lg mb-1">1. Web Developer</h4>
                  <p className="text-sm mb-1">React, WordPress → ₹2000-5000/hr</p>
                  <p>Upwork #1 skill | Fiverr top seller</p>
                </div>
                <div className="p-4 bg-white border rounded-lg">
                  <h4 className="font-bold text-lg mb-1">2. Mobile App Dev</h4>
                  <p className="text-sm mb-1">React Native → ₹2500-6000/hr</p>
                  <p>₹50k-2L per project</p>
                </div>
                <div className="p-4 bg-white border rounded-lg">
                  <h4 className="font-bold text-lg mb-1">3. Video Editor</h4>
                  <p className="text-sm mb-1">Premiere Pro → ₹1000-3000/hr</p>
                  <p>YouTube, Reels, Ads</p>
                </div>
                <div className="p-4 bg-white border rounded-lg">
                  <h4 className="font-bold text-lg mb-1">4. Graphic Designer</h4>
                  <p className="text-sm mb-1">Figma, Photoshop → ₹800-2500/hr</p>
                  <p>Logos, Social posts</p>
                </div>
              </div>
            </section>

            {/* Writing & Marketing */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Writing & Marketing</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white border rounded-lg">
                  <h4 className="font-bold text-lg mb-1">5. Content Writer</h4>
                  <p className="text-sm mb-1">₹300-1000/hr | Blog, Website</p>
                </div>
                <div className="p-4 bg-white border rounded-lg">
                  <h4 className="font-bold text-lg mb-1">6. SEO Specialist</h4>
                  <p className="text-sm mb-1">₹800-2500/hr | Google ranking</p>
                </div>
                <div className="p-4 bg-white border rounded-lg">
                  <h4 className="font-bold text-lg mb-1">7. Social Media Manager</h4>
                  <p className="text-sm mb-1">₹500-1500/hr | Instagram growth</p>
                </div>
                <div className="p-4 bg-white border rounded-lg">
                  <h4 className="font-bold text-lg mb-1">8. Digital Marketing</h4>
                  <p className="text-sm mb-1">₹1000-3500/hr | Ads, Strategy</p>
                </div>
              </div>
            </section>

            {/* Easy Beginner Jobs */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Easy Beginner Jobs (No Skills)</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white border rounded-lg">
                  <h4 className="font-bold text-lg mb-1">9. Data Entry</h4>
                  <p className="text-sm mb-1">₹300-700/hr | Excel typing</p>
                  <p>Start today! No experience</p>
                </div>
                <div className="p-4 bg-white border rounded-lg">
                  <h4 className="font-bold text-lg mb-1">10. Virtual Assistant</h4>
                  <p className="text-sm mb-1">₹400-1000/hr | Email, Scheduling</p>
                </div>
                <div className="p-4 bg-white border rounded-lg">
                  <h4 className="font-bold text-lg mb-1">11. Transcription</h4>
                  <p className="text-sm mb-1">₹200-600/hr | Audio typing</p>
                </div>
                <div className="p-4 bg-white border rounded-lg">
                  <h4 className="font-bold text-lg mb-1">12. Customer Support</h4>
                  <p className="text-sm mb-1">₹300-800/hr | Chat/Email</p>
                </div>
              </div>
            </section>

            {/* Creative Skills */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Creative Skills</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white border rounded-lg">
                  <h4 className="font-bold text-lg mb-1">13. Photographer</h4>
                  <p className="text-sm mb-1">₹800-2500/hr | Events, Products</p>
                </div>
                <div className="p-4 bg-white border rounded-lg">
                  <h4 className="font-bold text-lg mb-1">14. Illustrator</h4>
                  <p className="text-sm mb-1">₹1000-4000/hr | Book covers</p>
                </div>
                <div className="p-4 bg-white border rounded-lg">
                  <h4 className="font-bold text-lg mb-1">15. Voiceover Artist</h4>
                  <p className="text-sm mb-1">₹800-3000/hr | Ads, Videos</p>
                </div>
              </div>
            </section>

            {/* High Paying Niche */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">High Paying (₹2000+/hr)</h2>
              <div className="space-y-3">
                <div className="p-4 bg-emerald-50 border-l-4 border-emerald-400">
                  <h4 className="font-bold text-lg">Web Dev → ₹40k/project</h4>
                  <p>MERN, WordPress | 5-10 days work</p>
                </div>
                <div className="p-4 bg-emerald-50 border-l-4 border-emerald-400">
                  <h4 className="font-bold text-lg">Video Editor → ₹25k/project</h4>
                  <p>YouTube, Reels | 3-7 days work</p>
                </div>
                <div className="p-4 bg-emerald-50 border-l-4 border-emerald-400">
                  <h4 className="font-bold text-lg">SEO Expert → ₹30k/month</h4>
                  <p>Google ranking | Monthly retainer</p>
                </div>
              </div>
            </section>

            {/* Upwork/Fiverr Strategy */}
            <section className="p-8 bg-white border rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Upwork/Fiverr Success Tips</h2>
              <ol className="list-decimal ml-6 space-y-3 text-lg">
                <li><strong>Profile:</strong> 100% complete + Portfolio</li>
                <li><strong>Proposals:</strong> 3-5 custom proposals/day</li>
                <li><strong>Pricing:</strong> Start low → Raise rates</li>
                <li><strong>Portfolio:</strong> 3-5 free projects first</li>
                <li><strong>Reviews:</strong> Ask every client</li>
              </ol>
            </section>

            {/* Earnings Table */}
            <section className="p-8 bg-white border rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Real Earnings Table</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="p-4 text-left font-bold">Skill</th>
                      <th className="p-4 text-left font-bold">Beginner</th>
                      <th className="p-4 text-left font-bold">Expert</th>
                      <th className="p-4 text-left font-bold">Monthly</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="p-4 font-bold">Web Dev</td><td>₹800/hr</td><td>₹3000/hr</td><td>₹2-5L</td></tr>
                    <tr><td className="p-4 font-bold">Video Edit</td><td>₹500/hr</td><td>₹2000/hr</td><td>₹1-3L</td></tr>
                    <tr><td className="p-4 font-bold">Data Entry</td><td>₹200/hr</td><td>₹600/hr</td><td>₹30-60k</td></tr>
                    <tr><td className="p-4 font-bold">Content</td><td>₹200/hr</td><td>₹800/hr</td><td>₹50k-1.5L</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

          </div>

          {/* WhatsApp CTA */}
          <section className="mt-24 p-8 bg-orange-50 border-2 border-orange-400 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-orange-800 mb-4">💰 Start Earning ₹50k/month!</h3>
            <p className="text-lg text-orange-700 mb-6">Upwork profile setup + First gig guarantee</p>
            <a
              href="https://api.whatsapp.com/send?phone=7822058623&text=Freelancing shuru karaycha aahe - help chahiye!"
              className="inline-block bg-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-600"
              target="_blank"
            >
              📱 Freelancing Start Karo - WhatsApp!
            </a>
          </section>

        </div>
      </div>
  },
  {
    id: 5,
    slug: "mumbai-web-dev-jobs-2026",
    title: "Mumbai Web Dev Jobs 2026 (4479+ Vacancies)",
    date: "23 Feb 2026",
    excerpt: "50+ companies hiring BCA freshers - exact salaries & live links.",
    fullContent: (
      <>
        <div className="p-8 sm:p-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl space-y-8">
          <div className="max-w-4xl mx-auto">

            {/* Header with Search Bar */}
            <div className="text-center mb-16">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
                Web Dev Jobs in Mumbai
              </h1>
              <p className="text-xl text-gray-600 mb-6">Live openings - Apply directly!</p>
            </div>

            {/* Preview Stats */}
            <div className="grid md:grid-cols-4 gap-6 text-center mb-12 p-8 bg-white rounded-2xl shadow-lg">
              <div><div className="text-3xl font-bold text-blue-600">4479+</div><div className="text-gray-600">Total Jobs</div></div>
              <div><div className="text-3xl font-bold text-green-600">182+</div><div className="text-gray-600">Fresher Jobs</div></div>
              <div><div className="text-3xl font-bold text-purple-600">₹4-25L</div><div className="text-gray-600">Salary Range</div></div>
              <div><div className="text-3xl font-bold text-orange-600">50+</div><div className="text-gray-600">Companies</div></div>
            </div>

            {/* Live Job Cards */}
            <div className="space-y-6">

              {/* Job Card 1 */}
              <div className="bg-white border rounded-2xl p-6 hover:shadow-xl transition-all group">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-xl text-gray-800 group-hover:text-blue-600">
                    Junior React Developer
                  </h3>
                  <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-bold">₹4-8LPA</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Internshala • Andheri • Fresher OK
                  <a href="https://internshala.com/jobs/web-development-jobs-in-mumbai/" target="_blank" className="ml-2 text-blue-500 hover:underline">[web:137]</a>
                </div>
                <ul className="grid grid-cols-2 gap-2 text-sm mb-6">
                  <li>✅ React, Tailwind CSS</li>
                  <li>✅ BCA 2025/2026 batch</li>
                  <li>✅ Training provided</li>
                  <li>✅ Immediate joiners</li>
                </ul>
                <div className="flex gap-3">
                  <a href="https://internshala.com/jobs/web-development-jobs-in-mumbai/" target="_blank"
                    className="flex-1 bg-blue-500 text-white py-3 px-6 rounded-xl text-center font-bold hover:bg-blue-600 transition-all">
                    🚀 Apply Now
                  </a>
                  <button className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-50">
                    💾 Save
                  </button>
                </div>
              </div>

              {/* Job Card 2 */}
              <div className="bg-white border rounded-2xl p-6 hover:shadow-xl transition-all group">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-xl text-gray-800 group-hover:text-blue-600">
                    Full Stack Developer (MERN)
                  </h3>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-bold">₹12-22LPA</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Reliance Industries • BKC • 2-5 yrs
                  <a href="https://in.linkedin.com/jobs/web-developer-jobs-mumbai-metropolitan-region" target="_blank" className="ml-2 text-blue-500 hover:underline">[web:135]</a>
                </div>
                <ul className="grid grid-cols-2 gap-2 text-sm mb-6">
                  <li>✅ MongoDB, Express.js</li>
                  <li>✅ React, Node.js</li>
                  <li>✅ AWS + Docker</li>
                  <li>✅ Bonus + ESOPs</li>
                </ul>
                <div className="flex gap-3">
                  <a href="https://in.linkedin.com/jobs/web-developer-jobs-mumbai-metropolitan-region" target="_blank"
                    className="flex-1 bg-purple-500 text-white py-3 px-6 rounded-xl text-center font-bold hover:bg-purple-600 transition-all">
                    🚀 Apply LinkedIn
                  </a>
                  <button className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-50">
                    💾 Save
                  </button>
                </div>
              </div>

              {/* Job Card 3 */}
              <div className="bg-white border rounded-2xl p-6 hover:shadow-xl transition-all group">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-xl text-gray-800 group-hover:text-blue-600">
                    Frontend Developer (React)
                  </h3>
                  <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-bold">₹8-15LPA</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  TCS • Airoli • 1-3 yrs
                  <a href="https://builtinmumbai.in/jobs/dev-engineering/search/web-developer" target="_blank" className="ml-2 text-blue-500 hover:underline">[web:133]</a>
                </div>
                <ul className="grid grid-cols-2 gap-2 text-sm mb-6">
                  <li>✅ React 18 + Next.js</li>
                  <li>✅ TypeScript</li>
                  <li>✅ Tailwind CSS</li>
                  <li>✅ Remote option</li>
                </ul>
                <div className="flex gap-3">
                  <a href="https://builtinmumbai.in/jobs/dev-engineering/search/web-developer" target="_blank"
                    className="flex-1 bg-orange-500 text-white py-3 px-6 rounded-xl text-center font-bold hover:bg-orange-600 transition-all">
                    🚀 Apply Now
                  </a>
                  <button className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-50">
                    💾 Save
                  </button>
                </div>
              </div>

              {/* Job Card 4 */}
              <div className="bg-white border rounded-2xl p-6 hover:shadow-xl transition-all group">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-xl text-gray-800 group-hover:text-blue-600">
                    WordPress Developer
                  </h3>
                  <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-bold">₹5-12LPA</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Apna.co • Bandra • Fresher OK
                  <a href="https://apna.co/jobs/software_web_developer-jobs-in-mumbai" target="_blank" className="ml-2 text-blue-500 hover:underline">[web:134]</a>
                </div>
                <ul className="grid grid-cols-2 gap-2 text-sm mb-6">
                  <li>✅ WordPress + Elementor</li>
                  <li>✅ Basic HTML/CSS</li>
                  <li>✅ ₹25k/month stipend</li>
                  <li>✅ 6 months training</li>
                </ul>
                <div className="flex gap-3">
                  <a href="https://apna.co/jobs/software_web_developer-jobs-in-mumbai" target="_blank"
                    className="flex-1 bg-green-500 text-white py-3 px-6 rounded-xl text-center font-bold hover:bg-green-600 transition-all">
                    🚀 Apply Now
                  </a>
                  <button className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-50">
                    💾 Save
                  </button>
                </div>
              </div>

            </div>

            {/* Salary Comparison Table */}
            <section className="p-8 bg-white border rounded-2xl shadow-lg mt-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Mumbai Salary Guide 2026</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                    <tr>
                      <th className="p-4 text-left font-bold">Role</th>
                      <th className="p-4 text-left font-bold">Experience</th>
                      <th className="p-4 text-left font-bold">Salary</th>
                      <th className="p-4 text-left font-bold">Companies</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr><td className="p-4 font-bold">React Developer</td><td>0-2 yrs</td><td>₹4-12LPA</td><td>Internshala [web:137]</td></tr>
                    <tr><td className="p-4 font-bold">Full Stack MERN</td><td>2-5 yrs</td><td>₹12-22LPA</td><td>LinkedIn [web:135]</td></tr>
                    <tr><td className="p-4 font-bold">Senior Frontend</td><td>5+ yrs</td><td>₹18-25LPA</td><td>BuiltIn [web:133]</td></tr>
                    <tr><td className="p-4 font-bold">WordPress Dev</td><td>1-3 yrs</td><td>₹5-12LPA</td><td>Apna [web:134]</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Quick Apply CTA */}
            <section className="mt-20 p-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center rounded-3xl">
              <h2 className="text-3xl font-bold mb-6">Ready to Apply? 🚀</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                All links above are LIVE! BCA students with 3+ GitHub projects
                getting selected in 1 week!
              </p>
              <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
                <a href="https://internshala.com/jobs/web-development-jobs-in-mumbai/" target="_blank" className="bg-white text-blue-600 px-6 py-4 rounded-2xl font-bold hover:shadow-xl">Internshala (182+)</a>
                <a href="https://in.linkedin.com/jobs/web-developer-jobs-mumbai-metropolitan-region" target="_blank" className="bg-white text-blue-600 px-6 py-4 rounded-2xl font-bold hover:shadow-xl">LinkedIn (839+)</a>
                <a href="https://builtinmumbai.in/jobs/dev-engineering/search/web-developer" target="_blank" className="bg-white text-blue-600 px-6 py-4 rounded-2xl font-bold hover:shadow-xl">BuiltIn Mumbai</a>
              </div>
            </section>

            {/* WhatsApp CTA */}
            {/* <section className="mt-16 p-8 bg-indigo-600 border-4 border-indigo-400 rounded-3xl text-center text-white">
              <h3 className="text-3xl font-bold mb-4">🎯 Job Interview Tomorrow Guaranteed!</h3>
              <p className="text-xl mb-8">Resume + Portfolio + Direct HR WhatsApp numbers</p>
              <a
                href="https://api.whatsapp.com/send?phone=917676409450&text=Mumbai Web Dev jobs - resume banavun apply karaycha aahe!"
                className="inline-block bg-green-500 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-green-600 shadow-2xl"
                target="_blank"
              >
                📱 Free Job Assistance - WhatsApp!
              </a>
            </section> */}

          </div>
        </div>
      </>
    )
  },
  {
    id: 6,
    slug: "government-exams-preparation-strategy",
    title: "Govt Exam Strategy",
    date: "15 Feb 2026",
    excerpt: "UPSC/SSC/Banking - 6 month plan with free resources.",
    fullContent: (
      <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>

        <h1 style={{ fontSize: '2.5rem', textAlign: 'center', color: '#333', marginBottom: '30px' }}>
          How Impacteers Mentorship Helps in Government Exam Strategy
        </h1>

        <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
          Cracking a government job in 2025 isn't just about studying hard—it's about following the right
          <strong>government exam preparation strategy</strong>.
        </p>

        <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
          In India, preparing for <strong>government jobs</strong> isn't just about studying hard, it's about studying smart.
          From central services like SSC CGL and UPSC to state exams like TNPSC or UPPSC, each government exam demands a
          unique strategy tailored to the role, qualification, and category, whether you're a <strong>fresh graduate</strong>,
          a <strong>12th pass candidate</strong>, or someone with an <strong>engineering or computer</strong> background.
          That's where the <strong>Impacteers Mentorship Program</strong> comes in, guiding you step-by-step through this
          high-stakes journey.
        </p>

        <h2 style={{ fontSize: '1.8rem', color: '#333', margin: '30px 0 20px 0' }}>
          Why Government Job Aspirants Need a Strategy in 2025
        </h2>

        <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
          With over <strong>1.5 crore aspirants</strong> preparing for exams like SSC, UPSC, Railways, IBPS, and state PSCs,
          the competition in 2025 is intense. For freshers, graduates, and even experienced candidates, the challenge isn't
          just about qualifying—it's about ranking high enough to land a central or state-level vacancy.
        </p>

        <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
          Government exams are evolving:
        </p>

        <ul style={{ fontSize: '1.1rem', marginBottom: '20px', paddingLeft: '20px' }}>
          <li>Most exams are <strong>computer-based</strong>.</li>
          <li>Many are introducing <strong>tiered systems</strong> with multiple stages.</li>
          <li>Notifications and syllabus updates happen <strong>frequently</strong>.</li>
        </ul>

        <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
          Without a clear roadmap, even the most talented candidates end up lost. A mentor doesn't just guide—they
          course-correct when things go off track.
        </p>

        <h2 style={{ fontSize: '1.8rem', color: '#333', margin: '30px 0 20px 0' }}>
          What is the Impacteers Mentorship Program?
        </h2>

        <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
          The <strong>Impacteers Mentorship Program</strong> is designed for serious aspirants who want to master the art
          of government exam preparation. It's not a coaching class—it's <strong>one-on-one strategic mentoring</strong>
          with former toppers, subject matter experts, and retired officers who understand what it takes to succeed.
        </p>

        <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
          From helping a <strong>Tamil Nadu engineering graduate</strong> target TNPSC-AE and SSC JE to guiding a
          <strong>12th pass fresher</strong> for CET-based recruitment, Impacteers assigns mentors who align with your
          background, goals, and strengths.
        </p>

        <h2 style={{ fontSize: '1.8rem', color: '#333', margin: '30px 0 20px 0' }}>
          How Impacteers Mentorship Builds a Winning Exam Strategy
        </h2>

        <h3 style={{ fontSize: '1.4rem', color: '#555', margin: '25px 0 15px 0' }}>
          1. Personalised Roadmap for Every Aspirant
        </h3>
        <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
          Impacteers begins with a detailed profiling session to understand your:
        </p>
        <ul style={{ fontSize: '1.1rem', marginBottom: '20px', paddingLeft: '20px' }}>
          <li>Educational background (engineering, computer, commerce, arts)</li>
          <li>State preference (Tamil Nadu, Maharashtra, UP, etc.)</li>
          <li>Exam targets (SSC CGL, RRB NTPC, EPFO, TNPSC)</li>
          <li>Strengths and gaps</li>
        </ul>

        <h3 style={{ fontSize: '1.4rem', color: '#555', margin: '25px 0 15px 0' }}>
          2. Focused Preparation for Central and State Jobs
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '20px', marginBottom: '20px', fontSize: '1rem' }}>
          <div><strong>Target</strong></div>
          <div><strong>Customized Support</strong></div>
          <div>SSC CGL/CHSL</div>
          <div>Subject-specific strategy, previous year analysis</div>
          <div>UPSC EPFO/APFC</div>
          <div>Current affairs briefing, answer-writing mentorship</div>
          <div>RRB/NTPC</div>
          <div>CBT mocks, technical concepts coaching</div>
          <div>TNPSC</div>
          <div>Tamil Nadu polity, regional issues, group-specific strategy</div>
        </div>

        <h3 style={{ fontSize: '1.4rem', color: '#555', margin: '25px 0 15px 0' }}>
          3. Exclusive Daily Planning & Review
        </h3>
        <ul style={{ fontSize: '1.1rem', marginBottom: '20px', paddingLeft: '20px' }}>
          <li><strong>Daily check-ins</strong> via chat or call</li>
          <li>Weekly revision sessions</li>
          <li>Feedback loops with performance metrics</li>
        </ul>

        <h3 style={{ fontSize: '1.4rem', color: '#555', margin: '25px 0 15px 0' }}>
          4. Mentorship for Engineering, Computer & Technical Aspirants
        </h3>
        <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
          Many <strong>engineering graduates</strong> or candidates with <strong>computer backgrounds</strong> struggle to
          adapt their preparation for generalist roles. Impacteers solves this by assigning mentors from engineering/technical
          backgrounds and providing strategy for posts like SSC JE, ISRO, IOCL, ICF Apprenticeship.
        </p>

        <h3 style={{ fontSize: '1.4rem', color: '#555', margin: '25px 0 15px 0' }}>
          5. Test Series Feedback & Mock Interviews
        </h3>
        <ul style={{ fontSize: '1.1rem', marginBottom: '20px', paddingLeft: '20px' }}>
          <li>Live doubt sessions with mentors</li>
          <li>Personalized feedback on test series</li>
          <li>Mock interviews for exams like EPFO, UPSC, TNPSC Group 1</li>
        </ul>

        <h2 style={{ fontSize: '1.8rem', color: '#333', margin: '30px 0 20px 0' }}>
          Impacteers Mentorship vs Traditional Coaching
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 2fr',
          gap: '15px',
          marginBottom: '30px',
          fontSize: '1rem',
          background: '#f8f9fa',
          padding: '20px',
          borderRadius: '10px'
        }}>
          <div><strong>Aspect</strong></div>
          <div><strong>Traditional Coaching</strong></div>
          <div><strong>Impacteers Mentorship</strong></div>
          <div>One-on-One Support</div>
          <div>No</div>
          <div>Yes</div>
          <div>Personalized Plan</div>
          <div>General</div>
          <div>Custom to your profile</div>
          <div>Exam Tracking</div>
          <div>Limited</div>
          <div>Weekly monitoring</div>
        </div>

        <h2 style={{ fontSize: '1.8rem', color: '#333', margin: '30px 0 20px 0' }}>
          Testimonials: Real Success, Real Strategy
        </h2>

        <div style={{ background: '#e8f4fd', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
          <p style={{ fontStyle: 'italic', marginBottom: '10px' }}>
            "As a civil engineering graduate from Chennai, I was lost juggling GATE and SSC JE prep. My Impacteers mentor
            helped me focus on JE, revise smart, and get interview-ready." – <strong>Arvind S, SSC JE 2024 Ranker</strong>
          </p>
        </div>

        <div style={{ background: '#e8f4fd', padding: '20px', borderRadius: '10px', marginBottom: '30px' }}>
          <p style={{ fontStyle: 'italic' }}>
            "I failed two attempts in UPSC EPFO. With Impacteers, I got a personal study tracker and weekly calls.
            Cleared EPFO AO in 2024." – <strong>Meena K, EPFO Officer</strong>
          </p>
        </div>

        <h2 style={{ fontSize: '1.8rem', color: '#333', margin: '30px 0 20px 0' }}>
          Conclusion
        </h2>

        <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
          In a competitive exam environment like 2025, having the right mentor could be your secret weapon.
          The <strong>Impacteers Mentorship Program</strong> doesn't offer just advice, it offers accountability,
          strategy, and support tailored to your background and dream job.
        </p>

        <p style={{ fontSize: '1.1rem', textAlign: 'center', fontWeight: '600', color: '#2563eb' }}>
          Whether you're a fresher from Tamil Nadu, an engineering graduate looking for a central govt job,
          or a working professional aiming for a promotion-worthy post, Impacteers will walk the journey with you.
        </p>

      </div>
    )
  }

];

const BlogPostPage = ({ posts }) => {
  const [searchParams] = useSearchParams();
  const slug = searchParams.get('slug');
  const post = posts.find(p => p.slug === slug);
  const [showFullContent, setShowFullContent] = useState(false);

  if (!post) return (
    <Layout>
      <section className="min-h-screen flex items-center justify-center py-12 px-4">
        <div className="text-center max-w-md">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">Post Not Found</h1>
          <Link to="/blog" className="bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-primary/90 inline-block">
            ← Back to Blog
          </Link>
        </div>
      </section>
    </Layout>
  );

  return (
    <Layout>
      <article className="py-12 sm:py-16 px-4 max-w-4xl mx-auto">
        {showFullContent && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-primary text-white p-3 sm:p-4 rounded-full shadow-xl z-50 hover:shadow-2xl transition-all"
          >
            <ArrowUp className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        )}

        <header className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-gray-900 to-primary bg-clip-text text-transparent leading-tight">
           {post.icon} {post.title}
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg sm:text-xl text-gray-600 bg-white/70 px-6 py-4 rounded-2xl shadow-lg backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <CalendarDays className="h-6 w-6 text-primary" />
              <span>{post.date}</span>
            </div>
            <div className="px-4 py-2 bg-emerald-500 text-white rounded-xl font-bold text-base sm:text-lg">

            </div>
          </div>
        </header>

        <section className="mb-12 sm:mb-16 p-6 sm:p-10 bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl shadow-lg">
          <p className="text-lg sm:text-xl leading-relaxed text-gray-800 font-medium">
            {post.excerpt}
          </p>
        </section>

        {showFullContent && post.fullContent}

        <div className="text-center mb-20 py-12 px-4">
          {!showFullContent ? (
            <button
              onClick={() => setShowFullContent(true)}
              className="group bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-12 sm:px-16 py-5 sm:py-6 rounded-3xl text-xl sm:text-2xl font-bold shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300 flex items-center gap-3 mx-auto max-w-max"
            >
              <span>📖 Read Full Guide</span>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </button>
          ) : (
            <div className="space-y-6 flex flex-col items-center">
              <button
                onClick={() => setShowFullContent(false)}
                className="bg-gray-700 text-white px-12 sm:px-16 py-4 sm:py-5 rounded-3xl text-xl font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
              >
                Show Less
              </button>
              <Link to="/blog" className="text-xl font-bold text-primary hover:text-primary/80 flex items-center gap-2">
                ← Back to Blog
              </Link>
            </div>
          )}
        </div>

        {showFullContent && (
          <section className="mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center bg-gradient-to-r from-gray-900 to-primary bg-clip-text text-transparent">
              More Guides
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.filter(p => p.id !== post.id).slice(0, 6).map(p => (
                <Link key={p.id} to={`/blog?slug=${p.slug}`} className="group">
                  <Card className="h-80 hover:shadow-2xl hover:-translate-y-3 transition-all border-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden">
                    <CardHeader className="p-6 sm:p-8">
                      <div className="flex items-center justify-between mb-4 text-sm sm:text-base">
                        <div className="flex items-center gap-2 text-gray-600">
                          <CalendarDays className="h-4 w-4" />
                          <span>{p.date}</span>
                        </div>
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs sm:text-sm font-bold"> </span>
                      </div>
                      <CardTitle className="text-lg sm:text-xl md:text-2xl font-bold group-hover:text-primary transition-colors line-clamp-2 h-16 sm:h-20">
                        {p.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 sm:p-8 pt-0 pb-10">
                      <p className="text-gray-600 text-sm sm:text-base mb-6 line-clamp-2 sm:line-clamp-3">{p.excerpt}</p>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <span className="text-primary font-bold text-sm sm:text-base bg-primary/10 px-4 py-2 rounded-xl">Read Now</span>
                        <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-2 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </Layout>
  );
};

const BlogIndex = ({ posts }) => (
  <Layout>
    <section className="py-16 sm:py-24 px-4 bg-gradient-to-br from-primary/5 to-blue-50/50">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 sm:mb-12 bg-gradient-to-r from-gray-900 to-primary bg-clip-text text-transparent leading-tight">
          Career Blog
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          guides | Mumbai colleges | Real salaries | Complete roadmaps
        </p>
      </div>
    </section>

    <section className="py-16 sm:py-24 -mt-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.id} to={`/blog?slug=${post.slug}`} className="group">
              <Card className="h-72 sm:h-80 md:h-96 flex flex-col hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl">
                <div className="h-32 sm:h-36 bg-gradient-to-r from-primary/20 to-blue-500/20 group-hover:from-primary/40 group-hover:to-purple-500/40 transition-all duration-500" />

                <CardHeader className="p-6 sm:p-8 pb-6 flex-1 pt-10">
                  <div className="flex items-center justify-between mb-4 text-sm sm:text-base">
                    <div className="flex items-center gap-2 text-gray-600">
                      <CalendarDays className="h-4 w-4 sm:h-5 sm:w-5" />
                      <span className="font-semibold">{post.date}</span>
                    </div>
                    <div className="px-3 py-1 bg-emerald-500 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md">

                    </div>
                  </div>
                  <CardTitle className="text-base sm:text-lg md:text-xl font-bold leading-tight group-hover:text-primary transition-all line-clamp-2 h-14 sm:h-20">
                    {post.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="p-6 sm:p-8 pt-0 pb-10 flex-1">
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t-2 border-gray-100 group-hover:border-primary/50 transition-all">
                    <span className="text-primary font-bold text-sm sm:text-base px-4 py-2 bg-gradient-to-r from-primary/10 rounded-xl">
                      Read Full Guide
                    </span>
                    <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-3 transition-transform duration-300" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

const Blog = () => {
  const [searchParams] = useSearchParams();
  const slug = searchParams.get('slug');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(generateBlogPosts());
  }, []);

  return slug ? <BlogPostPage posts={posts} /> : <BlogIndex posts={posts} />;
};

export default Blog;
