import React, { useContext, useEffect, useRef } from "react";

import { History } from "@caviardeul/types";
import { SettingsContext } from "@caviardeul/utils/settings";

const HistoryContainer: React.FC<{
  history: History;
  selectedWord: string | null;
  onSelectionChange: (world: string) => void;
}> = ({ history, selectedWord, onSelectionChange }) => {
  const { settings } = useContext(SettingsContext);
  const selectedRow = useRef<HTMLTableRowElement>(null);
  useEffect(() => {
    if (selectedRow.current) {
      selectedRow.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }, [selectedRow, selectedWord]);

  return (
    <div className="guess-history">
      <table>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>ניחוש</th>
            <th>מופעים</th>
          </tr>
        </thead>
        <tbody>
          {history
            // capture original index
            .map<[string, number, number]>(([word, count], i) => [word, count, i])
            .filter(([_, count, i]) =>
                !settings?.hideZeroHits ||
                count > 0 ||
                i === history.length - 1
            )
            .map(([word, count, i]) => {
              const isClickable = count > 0;
              const isSelectedWord = word === selectedWord;
              return (
                <tr
                  key={i}
                  className={
                    (isSelectedWord ? "selected " : "") +
                    (isClickable ? "clickable " : "")
                  }
                  onClick={() => onSelectionChange(word)}
                  ref={isSelectedWord ? selectedRow : null}
                >
                  <td>{i + 1}</td>
                  <td>{word}</td>
                  <td>{count}</td>
                </tr>
              );
            })
            .reverse()}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryContainer;
