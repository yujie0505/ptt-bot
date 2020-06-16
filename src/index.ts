import { Promise } from "bluebird";

import { BOARD_TARGETS, CRAWLING_CONCURRENCY, GOSSIPING_BOARD, PAGE_BEGIN, PAGE_END } from "@/constants/board";
import { saveAsCsv } from "@/lib/file";
import { Formatter } from "@/lib/formatter";
import { CrawlerService } from "@/services/crawler";

(async function() {
  const service = new CrawlerService({ Cookie: "over18=1" });
  const boardParser = new Formatter(BOARD_TARGETS[GOSSIPING_BOARD]);

  try {
    await Promise.map(
      new Array(PAGE_END - PAGE_BEGIN + 1),
      (_, index) =>
        service.getContentInBoard(GOSSIPING_BOARD, PAGE_BEGIN + index).then((html) => {
          if (html) {
            saveAsCsv(`res/${PAGE_BEGIN + index}`, ["link", "post title"], boardParser.format(html));
          } else {
            console.log(`Invalid content: page ${PAGE_BEGIN + index}`);
          }
        }),
      { concurrency: CRAWLING_CONCURRENCY },
    );
  } catch (err) {
    throw err;
  }
})();
