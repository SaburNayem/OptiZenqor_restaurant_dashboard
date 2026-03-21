import { ReactNode } from "react";

import { Panel } from "@/components/ui/panel";

interface Column<T> {
  header: string;
  render: (item: T) => ReactNode;
  className?: string;
}

export function DataTable<T>({
  title,
  description,
  columns,
  rows
}: {
  title: string;
  description?: string;
  columns: Column<T>[];
  rows: T[];
}) {
  return (
    <Panel className="overflow-hidden p-0">
      <div className="border-b border-stone-100 px-5 py-4">
        <h4 className="text-lg font-semibold text-ink">{title}</h4>
        {description ? <p className="mt-1 text-sm text-stone-600">{description}</p> : null}
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-stone-100">
          <thead className="bg-stone-50">
            <tr>
              {columns.map((column) => (
                <th key={column.header} className="px-5 py-3 text-left text-xs uppercase tracking-[0.2em] text-stone-500">
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100 bg-white">
            {rows.map((row, index) => (
              <tr key={index} className="align-top">
                {columns.map((column) => (
                  <td key={column.header} className={`px-5 py-4 text-sm text-stone-700 ${column.className ?? ""}`}>
                    {column.render(row)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Panel>
  );
}
