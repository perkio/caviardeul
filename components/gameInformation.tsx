import React from "react";
import { History } from "../types";
import ExternalLink from "./externalLink";

const GameInformation: React.FC<{ history: History; pageName: string }> = ({
  history,
  pageName,
}) => {
  const nbTrials = history.length;
  const accuracy = Math.round(
    (history.filter(([_, count]) => count > 0).length / nbTrials) * 100
  );
  const shareLink = `http://twitter.com/share?text=${encodeURIComponent(
    "J'ai déchiffré le Caviardeul du jour en " +
      nbTrials +
      " coup" +
      (nbTrials > 1 ? "s" : "") +
      " !"
  )}&url=${encodeURIComponent(
    "https://caviardeul.julienc.io/"
  )}&hashtags=caviardeul`;
  return (
    <div className="game-information">
      <h2>Bravo&nbsp;!</h2>
      <p>
        Vous avez déchiffré la page du jour en {nbTrials} coup
        {nbTrials > 1 ? "s" : ""} avec une précision de {accuracy}%.
      </p>
      <ul>
        <li>
          Voir la page originale{" "}
          <ExternalLink href={`https://fr.wikipedia.org/wiki/${pageName}`}>
            sur Wikipédia
          </ExternalLink>
        </li>
        <li>
          Partager <ExternalLink href={shareLink}>sur Twitter</ExternalLink>
        </li>
      </ul>
      <p>Revenez demain pour une nouvelle page à déchffrer&nbsp;!</p>
    </div>
  );
};

export default GameInformation;