import { codeCopiedToast } from "@/components/elements/toast/Toast";

// TODO: get user prefence of whether he wants hex or hsl or rbg or rgba etx and then copy
export default (code) => {
  navigator.clipboard.writeText(code);
  codeCopiedToast();
};
