import { HtmlFieldTarget } from "@/types/formats";

export const htmlToCsv = (html: string, targets: HtmlFieldTarget, flags: string = "") => {
  let regex_string = "";

  for (let target = targets; true; ) {
    regex_string += `[\\s\\S]*?<${target.tag}`;
    regex_string += target.meta.class ? `.*?class="${target.meta.class}"` : "";
    regex_string += target.captureMeta ? `.*?${target.captureMeta}="([\\s\\S]+?)"` : "";
    regex_string += ".*?>";
    regex_string += target.captureContent ? `([\\s\\S]+?)</${target.tag}>` : "";

    if (target.nestedFields) {
      target = target.nestedFields;
    } else {
      break;
    }
  }

  const regex = new RegExp(regex_string, flags);
};
