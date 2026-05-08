export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Cloud Management
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          Calculate the Real Cost of{" "}
          <span className="text-[#58a6ff]">Cloud Outages</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Monitor cloud service uptime, quantify business impact in dollars, and generate audit-ready reports for SLA negotiations and insurance claims — automatically.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Free Trial — $199/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-6 max-w-xl mx-auto">
          {[
            ["99.9%", "Uptime Tracked"],
            ["$2.4M", "Avg Claims Filed"],
            ["500+", "Cloud Services"]
          ].map(([stat, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
              <div className="text-2xl font-extrabold text-[#58a6ff]">{stat}</div>
              <div className="text-xs text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <div className="text-sm font-semibold text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$199</div>
          <div className="text-[#8b949e] mb-6">/month · cancel anytime</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited cloud service monitoring",
              "Real-time outage cost calculations",
              "SLA & insurance-ready PDF reports",
              "Webhook & API integrations",
              "Historical trending & dashboards",
              "Priority email support"
            ].map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold mt-0.5">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-4 rounded-lg text-lg transition-colors"
          >
            Get Started Now
          </a>
          <p className="text-xs text-[#8b949e] mt-4">14-day free trial. No credit card required.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            [
              "How does the cost calculation work?",
              "You configure your revenue model — hourly revenue, employee costs, SLA penalties, and custom cost factors. When an outage is detected via API polling or webhooks, the calculator multiplies downtime duration by your cost model to produce a precise dollar impact figure."
            ],
            [
              "Which cloud providers are supported?",
              "AWS, Azure, Google Cloud, Cloudflare, Fastly, and 500+ other services via status page APIs. You can also add custom services using our webhook endpoint for any provider that supports outage notifications."
            ],
            [
              "Are the reports accepted for insurance claims?",
              "Yes. Reports include timestamped outage logs, cost breakdowns, and supporting data formatted to meet common cyber insurance and business interruption claim requirements. Many customers have successfully used them for six-figure claims."
            ]
          ].map(([q, a]) => (
            <div key={q as string} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Cloud Cost Outage Calculator. All rights reserved.
      </footer>
    </main>
  );
}
