"use client";

import { useState, useEffect } from "react";

function useTypingEffect(
  strings: string[],
  typingSpeed: number = 100,
  backspaceSpeed: number = 50,
  loop: boolean = true
) {
  const [currentString, setCurrentString] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [loopIndex, setLoopIndex] = useState<number>(0);

  useEffect(() => {
    const handleTyping = () => {
      const current = strings[loopIndex % strings.length];
      const isLastCharacter = currentIndex === current.length;
      const isFirstCharacter = currentIndex === 0;

      if (isDeleting) {
        setCurrentString(current.slice(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      } else {
        setCurrentString(current.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }

      if (!isDeleting && isLastCharacter) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && isFirstCharacter) {
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
