import Head from "next/head";
import { useRouter } from "next/router";
import React, { FormEvent, useCallback, useState } from "react";

import Loader from "@caviardeul/components/loader";
import { useCreateCustomGame } from "@caviardeul/hooks/article";
import { CustomGameCreation } from "@caviardeul/types";
import { copyToClipboard } from "@caviardeul/utils/clipboard";
import { BASE_URL } from "@caviardeul/utils/config";

const NewCustomGame: React.FC = () => {
  const [pageId, setPageId] = useState("");
  const [gameId, setArticleId] = useState<string | null>(null);
  const [pageName, setPageName] = useState("");
  const mutation = useCreateCustomGame();
  const gameUrl = gameId ? BASE_URL + "/custom/" + gameId : "";
  const router = useRouter();

  const title = "רדקטעל - צור משחק מותאם אישית";

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      setPageId(newValue);
    },
    []
  );

  const handleCopyToClipboard = useCallback(async (content: string) => {
    await copyToClipboard(content);
  }, []);

  const handlePaste = useCallback(
    (event: React.ClipboardEvent<HTMLInputElement>) => {
      let newValue = event.clipboardData.getData("text");
      if (newValue) {
        newValue = newValue.split("/").pop() || "";
        newValue = newValue.split(/[#?]/).shift() || "";
        newValue = decodeURI(newValue);
      }
      setPageId(newValue);
      event.preventDefault();
    },
    []
  );

  const handleSubmissionCreated = useCallback(
    async ({ articleId, pageName }: CustomGameCreation) => {
      setArticleId(articleId);
      setPageName(pageName);
      await handleCopyToClipboard(gameUrl);
    },
    [handleCopyToClipboard, gameUrl]
  );

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      if (gameId) {
        return;
      }
      mutation.mutate(pageId, {
        onSuccess: handleSubmissionCreated,
      });
    },
    [gameId, handleSubmissionCreated, mutation, pageId]
  );

  const handleReset = useCallback(() => {
    setArticleId(null);
    setPageId("");
    setPageName("");
    mutation.reset();
  }, [mutation]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta key="og:title" property="og:title" content={title} />
        <meta key="twitter:title" name="twitter:title" content={title} />
      </Head>
      <main id="new-custom-game">
        <div className="left-container">
          <h1>צור משחק מותאם אישית</h1>

          <form onSubmit={handleSubmit}>
            <p>
              הזן את הכתובת של המאמר בויקיפדיה:
            </p>
            <p>
              <label className="url-input">
                <input
                  type="text"
                  placeholder="משחק"
                  readOnly={!!gameId}
                  value={pageId}
                  onChange={handleChange}
                  onPaste={handlePaste}
                  required
                />
                <span dir="ltr">he.wikipedia.org/wiki/</span>
              </label>
              <input
                type="submit"
                disabled={!pageId.length || mutation.isLoading || !!gameId}
                value="צור"
              />
            </p>
            {mutation.isLoading && <Loader />}
            {mutation.isError && (
              <p>
                לא ניתן ליצור משחק עבור מאמר זה
              </p>
            )}
          </form>
          {gameId && (
            <>
              <p>הנה הקישור למשחק המותאם אישית שלך:</p>
              <div className="url-copy">
                <input
                  type="button"
                  value="העתק"
                  onClick={() => handleCopyToClipboard(gameUrl)}
                />
                <input type="text" readOnly value={gameUrl} />
                <input
                  type="button"
                  value="פתח"
                  onClick={async () => {
                    await router.push(gameUrl);
                  }}
                />
              </div>
              <p>
                הכותרת היא &laquo;&nbsp;{pageName}&nbsp;&raquo;.
              </p>
              <div>
                <input
                  type="button"
                  value="צור משחק אחר"
                  onClick={handleReset}
                />
              </div>
            </>
          )}
        </div>
        <div className="right-container">
          <h1>משחק מותאם אישית</h1>

          <p>
            משחקים מותאמים אישית הם משחקים לשיתוף, שנוצרו
            ממאמר ויקיפדיה לבחירתך.
          </p>

          <ol>
            <li>בחרו מאמר בויקיפדיה</li>
            <li>הזינו את כתובתו בעמוד זה</li>
            <li>שתפו את הקישור למשחק!</li>
          </ol>

          <p>
            טיפ: הימנעו ממאמרים קצרים מדי שיכולים להיות יותר
            קשים לפענוח.
          </p>
        </div>
      </main>
    </>
  );
};

export default NewCustomGame;
