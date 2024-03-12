import Button from "./Button";
import BookmarkFilled from "../assets/bookmark-filled.svg?react";
import BookmarkOutlined from "../assets/bookmark-outlined.svg?react";
import { HTMLAttributes } from "react";

export type BookmarkButtonProps = HTMLAttributes<HTMLButtonElement> & {
  selected?: boolean;
};

export default function BookmarkButton({
  selected,
  ...props
}: BookmarkButtonProps) {
  return (
    <Button
      {...props}
      variant="link"
      icon={
        selected ? (
          <BookmarkFilled width={30} height={30} />
        ) : (
          <BookmarkOutlined width={30} height={30} />
        )
      }
    >
      {selected ? "Saved Course" : "Save Course"}
    </Button>
  );
}
