import Head from "next/head";
import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";

import IntroductionModal from "@caviardeul/components/introductionModal";
import Navbar from "@caviardeul/components/navbar";
import SettingsManager from "@caviardeul/components/settingsManager";
import SettingsModal from "@caviardeul/components/settingsModal";
import UserManager from "@caviardeul/components/userManager";
import { BASE_URL } from "@caviardeul/utils/config";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showSettingsModal, setShowSettingsModal] = useState(false);

  const handleShowSettingsModal = useCallback(() => {
    setShowSettingsModal(true);
  }, []);

  const handleCloseSettingsModal = useCallback(() => {
    setShowSettingsModal(false);
  }, []);

  const router = useRouter();

  const title = "רדקטעל - משחק פענוח מאמר ויקיפדיה יומי";
  const description =
    "שחק כל יום ומצא את המאמר המוסתר מויקיפדיה";
  const url = `${BASE_URL}${router.asPath}`;
  const imageUrl = `${BASE_URL}/caviardeul.png`;
  const imageAlt =
    "צילום מסך של המשחק בו מגלים מילים בהדרגה ממאמר מוסתר על מנת לגלות את הכותרת שלו";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta key="description" name="description" content={description} />
        <meta name="author" content="@xperki" />
        <meta name="google-site-verification" content="DFEgMiHtc0UMOIVRTNO1OFFWleYhaCzE63lYlQ1ITIY" />

        <meta key="og:title" property="og:title" content={title} />
        <meta property="og:site_name" content="רדקטעל" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:alt" content={imageAlt} />
        <meta property="og:url" content={url} />
        <meta
          key="og:description"
          property="og:description"
          content={description}
        />

        <meta key="twitter:title" name="twitter:title" content={title} />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={description}
        />
        <meta property="twitter:domain" content="redactle.vercel.app" />
        <meta property="twitter:url" content={url} />
        <meta name="twitter:creator" content="@xperki" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:image:alt" content={imageAlt} />

        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#ddd" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="רדקטעל" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" /> 

        <link rel="icon" type="image/png" sizes="196x196" href="/icons/favicon-196.png" />
        <link rel="manifest" href="/manifest.json" />

        <link rel="apple-touch-icon" href="/icons/apple-icon-180.png" />
        <link rel="apple-touch-startup-image" href="/icons/apple-splash-2048-2732.jpg" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/icons/apple-splash-2732-2048.jpg" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />
        <link rel="apple-touch-startup-image" href="/icons/apple-splash-1668-2388.jpg" media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/icons/apple-splash-2388-1668.jpg" media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />
        <link rel="apple-touch-startup-image" href="/icons/apple-splash-1536-2048.jpg" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/icons/apple-splash-2048-1536.jpg" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />
        <link rel="apple-touch-startup-image" href="/icons/apple-splash-1668-2224.jpg" media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/icons/apple-splash-2224-1668.jpg" media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />
        <link rel="apple-touch-startup-image" href="/icons/apple-splash-1620-2160.jpg" media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/icons/apple-splash-2160-1620.jpg" media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />
        <link rel="apple-touch-startup-image" href="/icons/apple-splash-1290-2796.jpg" media="(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/icons/apple-splash-2796-1290.jpg" media="(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" />
        <link rel="apple-touch-startup-image" href="/icons/apple-splash-1179-2556.jpg" media="(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/icons/apple-splash-2556-1179.jpg" media="(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" />
        <link rel="apple-touch-startup-image" href="/icons/apple-splash-1284-2778.jpg" media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/icons/apple-splash-2778-1284.jpg" media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" />
        <link rel="apple-touch-startup-image" href="/icons/apple-splash-1170-2532.jpg" media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/icons/apple-splash-2532-1170.jpg" media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" />
        <link rel="apple-touch-startup-image" href="/icons/apple-splash-1125-2436.jpg" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/icons/apple-splash-2436-1125.jpg" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" />
        <link rel="apple-touch-startup-image" href="/icons/apple-splash-1242-2688.jpg" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/icons/apple-splash-2688-1242.jpg" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" />
        <link rel="apple-touch-startup-image" href="/icons/apple-splash-828-1792.jpg" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/icons/apple-splash-1792-828.jpg" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />
        <link rel="apple-touch-startup-image" href="/icons/apple-splash-1242-2208.jpg" media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/icons/apple-splash-2208-1242.jpg" media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" />
        <link rel="apple-touch-startup-image" href="/icons/apple-splash-750-1334.jpg" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/icons/apple-splash-1334-750.jpg" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />
        <link rel="apple-touch-startup-image" href="/icons/apple-splash-640-1136.jpg" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/icons/apple-splash-1136-640.jpg" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />

      </Head>

      <UserManager>
        <Navbar onShowSettingsModal={handleShowSettingsModal} />

        <SettingsManager>
          {children}

          <SettingsModal
            open={showSettingsModal}
            onClose={handleCloseSettingsModal}
          />
          <IntroductionModal />
        </SettingsManager>
      </UserManager>
    </>
  );
};

export default Layout;
