import { useEffect, useState } from "react";

export function Typer({ words }: { words: string[] }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex % words.length] ?? "";
    const timeout = setTimeout(
      () => {
        if (!deleting && text === word) return setDeleting(true);
        if (deleting && text === "") {
          setDeleting(false);
          return setWordIndex(wordIndex + 1);
        }
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
      },
      !deleting && text === word ? 1600 : deleting ? 40 : 80,
    );

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words]);

  return (
    <span className="typing-word text-accent" aria-label="web, desktop, and mobile applications">
      <span aria-hidden="true">
        {text}
        <span className="caret">_</span>
      </span>
    </span>
  );
}
