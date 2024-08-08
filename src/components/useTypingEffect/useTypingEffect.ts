"use client";

import { useState, useEffect, useCallback } from "react";

function useTypingEffect(
  strings: string[],
  typingSpeed: number = 100,
  backspaceSpeed: number = 50,
  pauseDuration: number = 1500,
  loop: boolean = true
) {
  const [currentString, setCurrentString] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [loopIndex, setLoopIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const getCurrentWord = useCallback(() => strings[loopIndex % strings.length], [strings, loopIndex]);

  useEffect(() => {
    const handleTyping = () => {
      const current = getCurrentWord();
      const isLastCharacter = currentIndex === current.length;
      const isFirstCharacter = currentIndex === 0;

      if (isPaused) {
        setIsPaused(false);
        setIsDeleting(true);
        return;
      }

      if (isDeleting) {
        setCurrentString(current.slice(0, currentIndex - 1));
        setCurrentIndex((prev) => prev - 1);
      } else {
        setCurrentString(current.slice(0, currentIndex + 1));
        setCurrentIndex((prev) => prev + 1);
      }

      if (!isDeleting && isLastCharacter) {
        setIsPaused(true);
      } else if (isDeleting && isFirstCharacter) {
        setIsDeleting(false);
        setLoopIndex((prev) => prev + 1);
      }
    };

    let timeout: NodeJS.Timeout;
    if (isPaused) {
      timeout = setTimeout(handleTyping, pauseDuration);
    } else {
      timeout = setTimeout(
        handleTyping,
        isDeleting ? backspaceSpeed : typingSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [
    currentIndex,
    isDeleting,
    loopIndex,
    isPaused,
    strings,
    typingSpeed,
    backspaceSpeed,
    pauseDuration,
    getCurrentWord
  ]);

  return currentString;
}

export default useTypingEffect;