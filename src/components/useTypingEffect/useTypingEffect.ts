// File: /hooks/useTypingEffect.ts

import { useState, useEffect } from "react";

function useTypingEffect(
  strings: string[],
  typingSpeed: number,
  backspaceSpeed: number,
  loop: boolean
) {
  const [currentString, setCurrentString] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const current = strings[loopIndex % strings.length];
      const isLastCharacter = currentIndex === current.length;

      if (isDeleting) {
        setCurrentString(current.slice(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      } else {
        setCurrentString(current.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }

      if (!isDeleting && isLastCharacter) {
        setTimeout(() => setIsDeleting(true), 1500); // Pause before deleting
      } else if (isDeleting && currentIndex === 0) {
        setIsDeleting(false);
        setLoopIndex(loopIndex + 1);
      }
    };

    const timeout = setTimeout(
      handleTyping,
      isDeleting ? backspaceSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    currentIndex,
    isDeleting,
    loopIndex,
    strings,
    typingSpeed,
    backspaceSpeed,
  ]);

  return currentString;
}

export default useTypingEffect;
