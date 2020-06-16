import { HtmlFieldTarget } from "@/types/formats";

export const CRAWLING_CONCURRENCY: number = 20;

export const PTT_URL: string = "https://www.ptt.cc";

export const GOSSIPING_BOARD: string = "GOSSIPING_BOARD";

export const PAGE_BEGIN: number = 1;
export const PAGE_END: number = 20873;

export const BOARDS: { [key: string]: string } = {
  [GOSSIPING_BOARD]: "/bbs/Gossiping",
};

export const BOARD_TARGETS: { [key: string]: HtmlFieldTarget } = {
  [GOSSIPING_BOARD]: {
    tag: "div",
    meta: {
      class: "r-ent",
    },
    nestedFields: {
      tag: "div",
      meta: {
        class: "title",
      },
      nestedFields: {
        tag: "a",
        meta: {},
        captureContent: true,
        captureMeta: "href",
      },
    },
  },
};
