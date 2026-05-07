import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
    <div className="hidden sm:block">
      {showButton && (
        <button
          onClick={scrollToTop}
          className="
            fixed bottom-20 right-5 z-50
            w-12 h-12 rounded-full
            bg-red-500 hover:bg-red-600
            text-white shadow-xl
            flex items-center justify-center
            transition-all duration-300
            hover:scale-110
          "
        >
          <ChevronUp size={22} />
        </button>
      )}
    </div>
    </>
  );
}