import React from "react";
import { cn } from "@/lib/utils";

type EmojiIconProps = {
  src: string;
  alt?: string;
  size?: number | string; // px ou em
  className?: string;
};

const EmojiIcon = ({ src, alt = "ícone", size = "1em", className }: EmojiIconProps) => {
  const dimension = typeof size === "number" ? `${size}px` : size;
  return (
    <img
      src={src}
      alt={alt}
      draggable={false}
      className={cn("inline-block align-text-bottom select-none", className)}
      style={{ height: dimension, width: dimension }}
    />
  );
};

export default EmojiIcon;