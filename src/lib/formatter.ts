import { HtmlFieldTarget } from "@/types/formats";

export class Formatter {
  private pattern: RegExp;

  constructor(targets: HtmlFieldTarget, flags: string = "g") {
    let regex_string = "";

    for (let target: HtmlFieldTarget | undefined = targets; target; target = target.nestedFields) {
      regex_string += `[\\s\\S]*?<${target.tag}`;
      regex_string += target.meta.class ? `.*?class="${target.meta.class}"` : "";
      regex_string += target.captureMeta ? `.*?${target.captureMeta}="([\\s\\S]+?)"` : "";
      regex_string += ".*?>";
      regex_string += target.captureContent ? `([\\s\\S]+?)</${target.tag}>` : "";
    }

    this.pattern = new RegExp(regex_string, flags);
  }

  public format(raw_data: string): string[][] {
    const matched: string[][] = [];

    for (let match; (match = this.pattern.exec(raw_data)); ) {
      matched.push(match.slice(1));
    }

    return matched;
  }
}
