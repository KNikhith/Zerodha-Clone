import React from "react";

function BrokerageContent({ data }) {
  return (
    <table className="brokerageTable">
      <thead>
        <tr className="border-bottom">
          {data.columns.map((col, idx) => (
            <th key={idx}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, rowIdx) => (
          <tr key={rowIdx} className="">
            <td className="label">{row.label}</td>
            {row.values.map((val, colIdx) => (
              <td key={colIdx} className="value">
                {val.split("\n").map((line, lineIdx) => {
                  if (
                    line.trim().startsWith("<li>") &&
                    line.trim().endsWith("</li>")
                  ) {
                    return (
                      <ul
                        className="mt-2 mb-0"
                        key={lineIdx}
                        dangerouslySetInnerHTML={{ __html: line }}
                      ></ul>
                    );
                  }
                  return (
                    <React.Fragment key={lineIdx}>
                      {line}
                      {lineIdx < val.split("\n").length - 1 && <br />}
                    </React.Fragment>
                  );
                })}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BrokerageContent;
