import { BOARD_TARGETS, GOSSIPING_BOARD } from "@/constants/board";
import { Formatter } from "@/lib/formatter";
import { CrawlerService } from "@/services/crawler";

(async function() {
  const service = new CrawlerService({ Cookie: "over18=1" });
  const boardParser = new Formatter(BOARD_TARGETS[GOSSIPING_BOARD]);

  try {
    const html = await service.getContentInBoard(GOSSIPING_BOARD);

    if (!html) {
      return;
    }

    console.log(boardParser.format(html));
  } catch (err) {
    throw err;
  }
})();
