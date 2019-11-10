export interface HtmlFieldTarget {
  captureContent?: boolean;
  captureMeta?: string;
  meta: {
    class?: string;
  };
  nestedFields?: HtmlFieldTarget;
  tag: string;
}
