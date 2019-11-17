import { writeFileSync } from "fs";

export const saveAsCsv = (file_name: string, column_names: string[], row_data: string[][]): void => {
  writeFileSync(`${file_name}.csv`, `${column_names.join(",")}\n${row_data.map((row) => row.join(",")).join("\n")}`);
};
