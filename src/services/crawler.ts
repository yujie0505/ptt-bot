import request from "request";
import { BOARDS, PTT_URL } from "@/constants/board";

export class CrawlerService {
  public static instance: CrawlerService | null = null;
  private headers: request.Headers = {};

  constructor(headers?: request.Headers) {
    if (!CrawlerService.instance) {
      CrawlerService.instance = this;
    }

    CrawlerService.instance.headers = headers || {};

    return CrawlerService.instance;
  }

  public getContentInBoard(board_name: string, page?: number): Promise<string | void> {
    return new Promise((resolve, reject) =>
      request(
        { url: `${PTT_URL}/${BOARDS[board_name]}/index${page || ""}.html`, headers: this.headers },
        (err, _, body) => (err ? reject(err) : resolve(body)),
      ),
    );
  }
}
