import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { WaitlistModal } from "@/components/WaitlistModal";
import {
  Sparkles,
  Target,
  TrendingUp,
  AlertCircle,
  DollarSign,
  Users,
  Beaker,
  BarChart3,
  Shield,
  Zap,
  Lock,
  Globe,
} from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import founderPhoto from "@/assets/founder-photo.png";
import appMockup from "@/assets/app-mockup.png";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Stop Guessing. AI That Understands Your Skin Better Than You Do.
              </h1>
              <p className="text-xl text-muted-foreground">
                Get personalized skincare recommendations backed by artificial
                intelligence and dermatological science—without the confusion,
                contradictions, or wasted money.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: Zap,
                    title: "Skin Analysis in 60 Seconds",
                    description:
                      "Take 4 photos under standard lighting. Our AI analyzes texture, redness, hydration, and breakout patterns instantly.",
                  },
                  {
                    icon: Target,
                    title: "Predictions You Can Trust",
                    description:
                      "Discover which ingredients will work for YOUR skin and which will cause breakouts—with confidence scores so you know what to expect.",
                  },
                  {
                    icon: TrendingUp,
                    title: "Results You'll See",
                    description:
                      "Track your skin's evolution monthly. Watch improvements visualized over time so you know what's actually working.",
                  },
                ].map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ background: "var(--gradient-primary)" }}
                    >
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="text-lg py-6 px-8 rounded-xl font-bold shadow-lg hover:scale-105 transition-transform"
                  style={{ background: "var(--gradient-cta)" }}
                  onClick={() => setIsModalOpen(true)}
                >
                  Start Your Free Skin Analysis
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg py-6 px-8 rounded-xl"
                  onClick={() =>
                    document
                      .getElementById("how-it-works")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  See How It Works
                </Button>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <img
                src={heroImage}
                alt="Person using AI skin analysis on smartphone"
                className="rounded-2xl shadow-2xl"
                style={{ boxShadow: "var(--shadow-strong)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            The Skincare Overwhelm Is Real
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: AlertCircle,
                title: "You're Paralyzed by Choice",
                description:
                  "There are hundreds of skincare products online. Everyone says theirs is 'the best.' Dermatologists recommend different things. Influencers hype products that later break you out. You end up spending hours researching, comparing ingredients, reading conflicting reviews—and still don't know if you're making the right choice.",
                stat: "60% of skincare shoppers report feeling overwhelmed by contradictory information.",
              },
              {
                icon: DollarSign,
                title: "You've Probably Wasted $200+ on Wrong Products",
                description:
                  "You bought that $45 serum everyone raved about. It broke you out. You tried a 'gentle' sunscreen and ended up with cystic acne. Now you have a drawer full of products you can't use, and no way to know which will work before you invest. Every purchase feels like a gamble.",
                stat: "The average person spends $400+ annually on skincare products that don't work for their skin type.",
              },
              {
                icon: Users,
                title: "No Personalization",
                description:
                  "You have combination skin, hormonal breakouts, AND sensitive areas. But every routine guide assumes everyone has the same skin. Products marketed as 'works for all skin types' don't address YOUR specific concerns. You need personalized guidance—but dermatologists cost $200+ per visit and aren't always accessible.",
                stat: "86% of skincare users report that generic recommendations don't work for their specific skin combination.",
              },
            ].map((problem, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-lg transition-shadow"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                <problem.icon className="w-12 h-12 text-destructive mb-4" />
                <h3 className="text-2xl font-bold mb-4">{problem.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {problem.description}
                </p>
                <p className="text-sm italic text-muted-foreground border-l-4 border-primary pl-4">
                  {problem.stat}
                </p>
              </Card>
            ))}
          </div>

          {/* Belief Deconstruction */}
          <div className="mt-20 max-w-4xl mx-auto space-y-12">
            <h3 className="text-3xl font-bold text-center mb-12">
              Why Your Current Approach Isn't Working
            </h3>

            <div className="space-y-8">
              <div>
                <h4 className="text-2xl font-semibold mb-3">
                  "Gut Feeling Isn't Enough"
                </h4>
                <p className="text-lg text-muted-foreground">
                  You can't predict how your skin will respond to a new product
                  just by reading ingredient lists or reviews. Everyone's skin is
                  different. Two people can have the same ingredient cause
                  opposite reactions. Without data on YOUR specific skin, you're
                  essentially guessing.
                </p>
              </div>

              <div>
                <h4 className="text-2xl font-semibold mb-3">
                  "Influencers Aren't Dermatologists"
                </h4>
                <p className="text-lg text-muted-foreground">
                  When a creator raves about a product, they're not considering
                  your skin type, concerns, or sensitivities. What worked for them
                  might trigger your breakouts. And yes—they're often paid to
                  recommend products. There's no neutral, expert source tailored
                  to you.
                </p>
              </div>

              <div>
                <h4 className="text-2xl font-semibold mb-3">
                  "More Research Doesn't Equal Better Decisions"
                </h4>
                <p className="text-lg text-muted-foreground">
                  Spending 3 hours comparing serums doesn't make you more
                  informed. It makes you more overwhelmed. You need expert
                  analysis of YOUR skin—not generic information that applies to
                  everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            What Changes When You Know Your Skin
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: "You Stop Second-Guessing Every Purchase",
                description:
                  "Before you buy anything, you know: 'Will this work for my skin?' Our AI tells you the likelihood it'll work, why it will work, and what ingredients might cause issues. No more buyer's remorse. No more wasted money. Just confident purchases backed by data.",
              },
              {
                icon: TrendingUp,
                title: "Your Skin Actually Improves",
                description:
                  "With recommendations tailored to your specific skin state, you finally see results. Your routine is streamlined (only products that work for you), so you actually stick to it. Track your progress monthly and watch your skin transform.",
              },
              {
                icon: Shield,
                title: "You Finally Understand Your Skin",
                description:
                  "Instead of treating skincare like a mystery, you understand: what your skin actually needs, why certain products don't work, what ingredients help, and how your skin changes seasonally. You're no longer at the mercy of marketing hype.",
              },
            ].map((outcome, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-lg transition-all hover:scale-105"
                style={{
                  background: "var(--gradient-hero)",
                  boxShadow: "var(--shadow-soft)",
                }}
              >
                <outcome.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">{outcome.title}</h3>
                <p className="text-muted-foreground">{outcome.description}</p>
              </Card>
            ))}
          </div>

          {/* Bridge */}
          <div className="mt-20 max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">There's a Better Way</h3>
            <p className="text-xl text-muted-foreground leading-relaxed">
              What if you could get expert skin analysis—the kind dermatologists
              do—instantly from your phone? What if an AI trained on thousands of
              skin types could predict exactly which products will work for YOUR
              skin? What if you could track your skin's progress and adjust your
              routine based on real data?
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="how-it-works" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">
                Meet SkinIQ: The AI That Knows Your Skin
              </h2>
              <p className="text-xl text-muted-foreground">
                Professional skin analysis. Personalized recommendations. No
                guesswork.
              </p>

              <div className="space-y-8 mt-8">
                {[
                  {
                    step: "1",
                    title: "Analyze",
                    description:
                      "Take 4 standardized photos of your face under different lighting. Our AI computer vision technology analyzes texture, redness, hydration, pigmentation, and breakout patterns in seconds. Get a detailed skin report in under 60 seconds.",
                  },
                  {
                    step: "2",
                    title: "Predict",
                    description:
                      "Input any skincare product (or ingredient). Our algorithm predicts how likely it is to work for your skin type, whether it'll cause breakouts, and which skin concerns it addresses. See confidence scores so you know what to expect.",
                  },
                  {
                    step: "3",
                    title: "Track",
                    description:
                      "Take follow-up photos monthly. Watch your skin evolve. See which products actually made a difference. Adjust your routine based on real progress, not hope.",
                  },
                ].map((step) => (
                  <div key={step.step} className="flex gap-4">
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl text-white"
                      style={{ background: "var(--gradient-primary)" }}
                    >
                      {step.step}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src={appMockup}
                alt="SkinIQ app interface mockup"
                className="mx-auto max-w-sm drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Founder Message */}
          <Card
            className="max-w-4xl mx-auto p-8 md:p-12"
            style={{ boxShadow: "var(--shadow-medium)" }}
          >
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <img
                src={founderPhoto}
                alt="Sarah, Founder"
                className="w-32 h-32 rounded-2xl object-cover flex-shrink-0"
              />
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Why We Built This</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I spent $800 on skincare before I realized I was just guessing.
                  Every product promised results but delivered disappointment. I'd
                  break out, waste money, feel frustrated. Then I studied
                  dermatology research and realized: skin analysis should be
                  instant, personalized, and accessible—not expensive or
                  overwhelming.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We trained our AI on thousands of skin analyses from
                  dermatologists. It can now do in seconds what takes a
                  dermatologist 30 minutes. And it costs almost nothing. Your skin
                  deserves expert analysis. You deserve confidence. That's why we
                  built SkinIQ.
                </p>
                <p className="font-semibold">—Sarah, Founder & Skin Scientist</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Features Deep-Dive */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Everything You Need to Understand Your Skin
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Beaker,
                title: "Ingredient Compatibility Predictor",
                description:
                  "Know before you buy if a product will work for your skin. Input any product and see ingredient analysis, breakout risk, and predicted effectiveness.",
              },
              {
                icon: BarChart3,
                title: "Monthly Progress Tracking",
                description:
                  "Compare your skin side-by-side month-to-month. See real improvements visualized. Know exactly which products made the difference.",
              },
              {
                icon: Shield,
                title: "Dermatologist-Validated",
                description:
                  "Our AI was trained and validated by board-certified dermatologists. Recommendations backed by science, not marketing.",
              },
              {
                icon: DollarSign,
                title: "Affordable Expert Access",
                description:
                  "Get personalized skin analysis for the cost of one dermatology visit. Expert guidance accessible to everyone.",
              },
              {
                icon: Lock,
                title: "Privacy First",
                description:
                  "Your skin data is encrypted and never sold. You own your data. We only use it to improve your recommendations.",
              },
              {
                icon: Globe,
                title: "Works for All Skin Types",
                description:
                  "Whether you have acne, sensitivity, dryness, rosacea, or combination concerns—our AI accounts for complex skin profiles.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-lg transition-shadow"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                {
                  stat: "10,000+",
                  label: "skin analyses completed",
                },
                {
                  stat: "92%",
                  label: "of users report more confident product choices",
                },
                {
                  stat: "$180",
                  label: "average savings per year on unnecessary skincare",
                },
              ].map((item, index) => (
                <div key={index} className="text-center md:text-left">
                  <div
                    className="text-5xl font-bold mb-2"
                    style={{
                      background: "var(--gradient-primary)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {item.stat}
                  </div>
                  <div className="text-lg text-muted-foreground">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {[
                {
                  name: "Jamie, 28",
                  quote:
                    "I was spending $400+ monthly on products that didn't work. SkinIQ told me exactly which ingredients would break me out. Now I save money AND have clear skin.",
                },
                {
                  name: "Marcus, 35",
                  quote:
                    "I have sensitive skin and was terrified to try anything new. This AI gave me confidence to experiment safely. I actually found products that work.",
                },
                {
                  name: "Priya, 31",
                  quote:
                    "I thought my skin was just 'broken.' Turns out it was dehydrated, not oily. Complete game-changer for my routine.",
                },
              ].map((testimonial, index) => (
                <Card
                  key={index}
                  className="p-6"
                  style={{ boxShadow: "var(--shadow-soft)" }}
                >
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-yellow-500">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  <p className="font-semibold">— {testimonial.name}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="py-20 text-white"
        style={{ background: "var(--gradient-primary)" }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stop Wasting Money on Products That Don't Work for You
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get your personalized AI skin analysis. Free to start. Results in
            under 60 seconds.
          </p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 text-lg py-6 px-12 rounded-xl font-bold shadow-2xl hover:scale-105 transition-transform"
            onClick={() => setIsModalOpen(true)}
          >
            Get Your Free Skin Analysis Now
          </Button>
          <p className="mt-6 text-sm opacity-75">
            No credit card required. Privacy guaranteed. Dermatologist-validated
            technology.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">SkinIQ</h3>
              <p className="text-muted-foreground">
                AI-powered skin analysis for confident skincare decisions.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#how-it-works" className="hover:text-primary">
                    How it works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Stay Updated</h4>
              <p className="text-muted-foreground mb-4">
                Get skincare tips delivered weekly
              </p>
              <Button
                onClick={() => setIsModalOpen(true)}
                className="w-full rounded-xl"
                style={{ background: "var(--gradient-cta)" }}
              >
                Join Waitlist
              </Button>
            </div>
          </div>

          <div className="border-t pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 SkinIQ. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Waitlist Modal */}
      <WaitlistModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Index;
