import { UIEventHandler, useRef } from "react";

class ScrollDescriptor {
  left = 0;
  top = 0;
  scrollHeight = 0; // 完整高度
  offsetHeight = 0; //

  scrollToBottomHandlers: Array<Function> = [];

  triggerScrollToBottom() {
    this.scrollToBottomHandlers.forEach((h) => h());
  }

  onScrollToBottom(handler: Function) {
    this.scrollToBottomHandlers.push(handler);

    return () => {
      this.scrollToBottomHandlers = this.scrollToBottomHandlers.filter(
        (h) => h !== handler
      );
    };
  }

  update(
    left: number,
    right: number,
    scrollHeight: number,
    offsetHeight: number
  ) {
    this.left = left;
    this.top = right;
    this.scrollHeight = scrollHeight;
    this.offsetHeight = offsetHeight;

    if (this.bottomReached()) {
      this.triggerScrollToBottom();
    }
  }

  bottomReached() {
    return this.top + this.offsetHeight >= this.scrollHeight;
  }
}

export const useScroll = () => {
  const scrollInfo = useRef(new ScrollDescriptor());

  const scrollHandler: UIEventHandler<HTMLDivElement> = (e) => {
    const scroller = e.currentTarget;
    const left = e.currentTarget.scrollLeft;
    const top = e.currentTarget.scrollTop;

    scrollInfo.current.update(
      left,
      top,
      scroller.scrollHeight,
      scroller.offsetHeight
    );
  };

  return {
    onScroll: scrollHandler,
    info: scrollInfo.current,
  };
};
