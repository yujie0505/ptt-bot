import { GOSSIPING_BOARD } from "@/constants/board";
import { CrawlerService } from "@/services/crawler";

const service = new CrawlerService({ Cookie: "over18=1" });

service.getContentInBoard(GOSSIPING_BOARD);
