import { useState, useEffect, useRef } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How does it help me simplify expenses in large groups?",
    answer:
      "You can add your friends to a group and after they accept invitation then anyone can create bills.",
  },
  {
    question: "Are transactions secure?",
    answer:
      "Yes, we do not manage wallets for you. You keep the key, not us ;)",
  },
  {
    question: "What currencies are supported?",
    answer:
      "Currently Currencies on Stellar or Wrapped Stellar are supported.",
  },
  {
    question: "Is there a fee for transactions?",
    answer:
      "Currently there's no fee for transactions. But we may charge a small fees, something as small as 0.05% per transaction or a fixed subscription.",
  },
  {
    question: "Can I instantiate recurring payments here?",
    answer:
      "We'll add the ability to set a timeline and let custom recurring transactions run.",
  },
  {
    question: "Is it available worldwide?",
    answer: "Yes, you can send money to anyone, anywhere globally",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const faqRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const hasScrolledDown = useRef(false);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        hasScrolledDown.current = true;

        if (faqRef.current && isElementInViewport(faqRef.current)) {
          setIsVisible(true);
          window.removeEventListener("scroll", handleScroll);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    const isElementInViewport = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.top <=
          (window.innerHeight || document.documentElement.clientHeight)
      );
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasScrolledDown.current) {
          setIsVisible(true);
          observer.unobserve(entry.target);
          window.removeEventListener("scroll", handleScroll);
        }
      },
      {
        threshold: 0.1,
      }
    );

    window.addEventListener("scroll", handleScroll, { passive: true });

    if (faqRef.current) {
      observer.observe(faqRef.current);
    }

    return () => {
      if (faqRef.current) {
        observer.unobserve(faqRef.current);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={faqRef}
      className={`max-w-3xl mx-auto mb-24 transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h2
        className="text-4xl mb-12 font-semibold bg-clip-text text-transparent text-center"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(243 244 246) 0%, rgb(199 203 209) 55%, rgb(30 30 30) 90%)",
        }}
      >
        We've got the answers
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`rounded-3xl transition-colors duration-200 ease-in-out ${
              openIndex === index ? "bg-[#1d1c1ca8]" : ""
            }`}
          >
            <button
              className="w-full px-6 py-4 flex justify-between items-center text-left"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-light text-lg text-zinc-300">
                {faq.question}
              </span>
              {openIndex === index ? (
                <Minus className="w-5 h-5 text-gray-400 transition-transform duration-200" />
              ) : (
                <Plus className="w-5 h-5 text-gray-400 transition-transform duration-200" />
              )}
            </button>

            <div
              className={`grid overflow-hidden transition-all duration-200 ease-in-out ${
                openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-4 text-zinc-500">{faq.answer}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
