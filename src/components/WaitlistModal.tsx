import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import confetti from "canvas-confetti";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  who_are_you: string;
  what_bothers_you: string;
  solution_in_mind: string;
  open_question: string;
  pain_scale: number;
  tried_alternatives: string;
  email: string;
}

export const WaitlistModal = ({ isOpen, onClose }: WaitlistModalProps) => {
  const [step, setStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    who_are_you: "",
    what_bothers_you: "",
    solution_in_mind: "",
    open_question: "",
    pain_scale: 5,
    tried_alternatives: "",
    email: "",
  });

  const totalSteps = 8;
  const progress = ((step + 1) / (totalSteps + 1)) * 100;

  const validateStep = (currentStep: number): boolean => {
    switch (currentStep) {
      case 1:
        if (formData.name.trim().length < 2) {
          alert("Please enter your name (at least 2 characters)");
          return false;
        }
        return true;
      case 2:
        if (formData.who_are_you.trim().length < 3) {
          alert("Please describe yourself (at least 3 characters)");
          return false;
        }
        return true;
      case 3:
        if (formData.what_bothers_you.trim().length < 10) {
          alert("Please share your frustration (at least 10 characters)");
          return false;
        }
        return true;
      case 8:
        if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          alert("Please enter a valid email address");
          return false;
        }
        return true;
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const triggerConfetti = () => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      zIndex: 9999,
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
        colors: ["#2D6A4F", "#52B788", "#40E0D0"],
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    fire(0.2, {
      spread: 60,
    });

    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  const handleSubmit = async () => {
    if (!validateStep(8)) return;

    setIsLoading(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycby35Y3EVGtw4aVQT8Y51JFb-jRByMNpZ8m5Lii0HhxMfp1nU-0l_aJRH-zuNydKiqjE3g/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      setIsLoading(false);
      setIsSuccess(true);
      triggerConfetti();

      setTimeout(() => {
        setIsSuccess(false);
        setStep(0);
        setFormData({
          name: "",
          who_are_you: "",
          what_bothers_you: "",
          solution_in_mind: "",
          open_question: "",
          pain_scale: 5,
          tried_alternatives: "",
          email: "",
        });
        onClose();
      }, 4000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsLoading(false);
      alert("Something went wrong. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-2xl bg-card rounded-2xl shadow-2xl animate-scale-in max-h-[90vh] overflow-y-auto">
        {!isSuccess && !isLoading && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-muted rounded-full transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        {/* Progress Bar */}
        {step > 0 && !isLoading && !isSuccess && (
          <div className="sticky top-0 bg-card border-b border-border p-4 z-10">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-muted-foreground">
                Step {step} of {totalSteps}
              </span>
              <span className="text-xs text-muted-foreground">
                {Math.round(progress)}% Complete
              </span>
            </div>
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full transition-all duration-300 ease-out"
                style={{
                  width: `${progress}%`,
                  background: "var(--gradient-primary)",
                }}
              />
            </div>
          </div>
        )}

        <div className="p-8">
          {isLoading ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 border-4 border-muted border-b-primary rounded-full animate-spin mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">
                Saving your response...
              </h3>
              <p className="text-muted-foreground">Just a moment</p>
            </div>
          ) : isSuccess ? (
            <div className="text-center py-16">
              <div className="text-8xl mb-4 animate-bounce-subtle">🎉</div>
              <h3 className="text-4xl font-bold mb-4">You're In!</h3>
              <p className="text-lg text-muted-foreground mb-2">
                Your response has been saved.
              </p>
              <p className="text-primary font-semibold">
                ✉️ Check your email in 2 minutes for a welcome message!
              </p>
            </div>
          ) : (
            <>
              {/* Step 0: Welcome */}
              {step === 0 && (
                <div className="text-center py-8">
                  <div
                    className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center text-5xl"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    🎯
                  </div>
                  <h2 className="text-3xl font-bold mb-4">
                    We Need Your Help Building SkinIQ
                  </h2>
                  <p className="text-lg text-muted-foreground mb-4">
                    We're creating an AI-powered solution to end skincare
                    confusion. Your insights will directly shape what we build.
                  </p>
                  <p className="text-muted-foreground mb-8">
                    This takes just 2 minutes. You'll get early access when we
                    launch.
                  </p>
                  <Button
                    onClick={handleNext}
                    className="w-full text-lg py-6 rounded-xl font-bold shadow-lg"
                    style={{ background: "var(--gradient-cta)" }}
                  >
                    I'm In - Let's Start
                  </Button>
                </div>
              )}

              {/* Step 1: Name */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">What's your name?</h2>
                    <p className="text-sm text-muted-foreground">
                      We'll use this to personalize your experience
                    </p>
                  </div>
                  <Input
                    autoFocus
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    onKeyPress={(e) => e.key === "Enter" && handleNext()}
                    className="text-lg p-6 rounded-xl"
                  />
                  <div className="flex justify-between items-center pt-4">
                    <Button
                      variant="ghost"
                      onClick={handleBack}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      ← Back
                    </Button>
                    <Button
                      onClick={handleNext}
                      className="rounded-xl px-8"
                      style={{ background: "var(--gradient-cta)" }}
                    >
                      Next →
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 2: Self-Description */}
              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">
                    How would you describe yourself?
                  </h2>
                  <Input
                    autoFocus
                    placeholder="e.g., skincare beginner, overwhelmed by choices..."
                    value={formData.who_are_you}
                    onChange={(e) =>
                      setFormData({ ...formData, who_are_you: e.target.value })
                    }
                    onKeyPress={(e) => e.key === "Enter" && handleNext()}
                    className="text-lg p-6 rounded-xl"
                  />
                  <div className="flex justify-between items-center pt-4">
                    <Button
                      variant="ghost"
                      onClick={handleBack}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      ← Back
                    </Button>
                    <Button
                      onClick={handleNext}
                      className="rounded-xl px-8"
                      style={{ background: "var(--gradient-cta)" }}
                    >
                      Next →
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 3: Main Frustration */}
              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">
                    What frustrates you MOST about skincare?
                  </h2>
                  <Textarea
                    autoFocus
                    placeholder="Be specific - what keeps you from having clear, healthy skin?"
                    value={formData.what_bothers_you}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        what_bothers_you: e.target.value,
                      })
                    }
                    className="text-lg p-6 rounded-xl min-h-[120px]"
                  />
                  <div className="flex justify-between items-center pt-4">
                    <Button
                      variant="ghost"
                      onClick={handleBack}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      ← Back
                    </Button>
                    <Button
                      onClick={handleNext}
                      className="rounded-xl px-8"
                      style={{ background: "var(--gradient-cta)" }}
                    >
                      Next →
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 4: Solution Ideas */}
              {step === 4 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">
                    Do you have a solution in mind?
                  </h2>
                  <Textarea
                    autoFocus
                    placeholder="What would actually help you? (Optional)"
                    value={formData.solution_in_mind}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        solution_in_mind: e.target.value,
                      })
                    }
                    className="text-lg p-6 rounded-xl min-h-[120px]"
                  />
                  <div className="flex justify-between items-center pt-4">
                    <Button
                      variant="ghost"
                      onClick={handleBack}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      ← Back
                    </Button>
                    <Button
                      onClick={handleNext}
                      className="rounded-xl px-8"
                      style={{ background: "var(--gradient-cta)" }}
                    >
                      Next →
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 5: Additional Thoughts */}
              {step === 5 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">
                    Anything else we should know?
                  </h2>
                  <Textarea
                    autoFocus
                    placeholder="Any other thoughts, frustrations, or ideas? (Optional)"
                    value={formData.open_question}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        open_question: e.target.value,
                      })
                    }
                    className="text-lg p-6 rounded-xl min-h-[120px]"
                  />
                  <div className="flex justify-between items-center pt-4">
                    <Button
                      variant="ghost"
                      onClick={handleBack}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      ← Back
                    </Button>
                    <Button
                      onClick={handleNext}
                      className="rounded-xl px-8"
                      style={{ background: "var(--gradient-cta)" }}
                    >
                      Next →
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 6: Pain Scale */}
              {step === 6 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">
                    How painful is this problem for you?
                  </h2>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Minor annoyance
                      </span>
                      <span className="text-5xl font-bold text-primary">
                        {formData.pain_scale}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        Major problem
                      </span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={formData.pain_scale}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          pain_scale: parseInt(e.target.value),
                        })
                      }
                      className="w-full h-3 bg-muted rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <span key={num}>{num}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-4">
                    <Button
                      variant="ghost"
                      onClick={handleBack}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      ← Back
                    </Button>
                    <Button
                      onClick={handleNext}
                      className="rounded-xl px-8"
                      style={{ background: "var(--gradient-cta)" }}
                    >
                      Next →
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 7: Previous Attempts */}
              {step === 7 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">
                    Have you tried other solutions?
                  </h2>
                  <Textarea
                    autoFocus
                    placeholder="Products, routines, apps, dermatologists... (Optional)"
                    value={formData.tried_alternatives}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        tried_alternatives: e.target.value,
                      })
                    }
                    className="text-lg p-6 rounded-xl min-h-[120px]"
                  />
                  <div className="flex justify-between items-center pt-4">
                    <Button
                      variant="ghost"
                      onClick={handleBack}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      ← Back
                    </Button>
                    <Button
                      onClick={handleNext}
                      className="rounded-xl px-8"
                      style={{ background: "var(--gradient-cta)" }}
                    >
                      Next →
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 8: Email */}
              {step === 8 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">
                      What's your email?
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      💡 You'll get a welcome email in 2 minutes!
                    </p>
                  </div>
                  <Input
                    autoFocus
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
                    className="text-lg p-6 rounded-xl"
                  />
                  <div className="flex justify-between items-center pt-4">
                    <Button
                      variant="ghost"
                      onClick={handleBack}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      ← Back
                    </Button>
                    <Button
                      onClick={handleSubmit}
                      className="rounded-xl px-8 font-bold shadow-lg"
                      style={{ background: "var(--gradient-cta)" }}
                    >
                      Yes, Add Me to Waitlist!
                    </Button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
