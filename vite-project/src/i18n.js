import i18next from "i18next";
import i18nextBrowserLanguagedetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18next.use(i18nextBrowserLanguagedetector).use(initReactI18next).init({
    fallbackLng: 'en',
    debug: true,
    returnObjects: true,
    resources: {
        en: {
            translation: {
                greeting: 'Welcome to Visa',
                navbar: {
                    home: 'Home',
                    evolution: 'Evolution',
                    utilities: 'Utilities',
                    contact: 'Contact us'
                },
                description: {
                    line1: `Introducing Visa's groundbreaking Financial Art Expenditure.`,
                    l0: `Enter Visa Utilities, an arsenal of tools revolutionizing financial ecosystems:`,
                    l1: `  DAO Establishment`,
                    l2: `  Double Close Loop`,
                    l3: '  Passive ModelLabs',
                    l4: '  Parallel Proof Methodologies',
                    l5: '  Alpha Function Integration',
                    l6: '  Seamless Web3 Interaction',
                    l7: '  Encrypted DNA Security',
                    l8: '  Innovative Saving Yield Models',
                    l9: '  Automated Market Making Solution',
                    para: `Through DAOs and Double Close Loop mechanisms, Visa pioneers a new frontier, navigating the digital age with ease.Alpha Functions and Web3 interaction deepen the commitment to innovation, while Encrypted DNA fortifies security and prosperity.`,
                    para1: `With Automated Market Making, liquidity provision reaches unprecedented heights, inviting individuals from all walks of life to join the journey towards financial empowerment.Visa's legacy lies not just in transactions, but in transforming lives, one innovation at a time.`,
                    whitepaper: `View white paper`,
                },
                evolution: {
                    w: 'Wisdom',
                    r: 'Reward',
                    tokenB: 'Token Burn',
                    rev: 'Revolution',
                    revolution: `Visa's Financial Art Expenditure revolutionizes finance, offering freedom and joy amid economic uncertainty. Through the Creation Contract, tokens incentivize engagement, with 50% converted to USDT for participants and the rest destroyed to enhance liquidity.`,
                    wisdom: `There was a time when dark forces tried to hunt down the universe, but all disappeared when humanity began to evolve and wisdom began to fill the earth. In the 19th century, things began to change, and the world began to combat evil to gain liberty and freedom. Then came the development of blockchain, the final ultimate to redeem mankind.`,
                    reward: `Reward Distribution becomes the cornerstone, with 70% flowing to token holders, 5% nurturing a Decentralized Autonomous Organization (DAO), and 25% rewarding LP contributors. Yet, every transaction bears a 4% gas fee, redistributing 3% to LP and 1% to the DAO.`,
                    token: `Token Burning becomes an hourly ritual, with a 0.1% mechanism consuming tokens within the LP, symbolizing a perpetual renewal of value. Visa's mission crystallizes: to pave a path towards wealth liberation and individual autonomy, leveraging community consensus and cutting-edge tech to redefine financial empowerment.`,
                },
                blockchain: {
                    heading: `The blockchain is the sure path to financial freedom`,
                    buy: `Acquire tokens now`,
                    future: `Do you want to secure a future of financial freedom?`,
                    buytokens: `Buy tokens`,
                }
            },

        },
        chi: {
            translation: {
                greeting: '歡迎來到維薩',
                description: {
                    line1: `介紹 Visa 開創性的金融藝術支出。`,
                    l0: `Visa Utilities 是一個徹底改變金融生態系統的工具庫：`,
                    l1: `  DAO 建立`,
                    l2: `  雙閉環`,
                    l3: '  被動模型實驗室',
                    l4: '  並行證明方法',
                    l5: '  阿爾法函數積分',
                    l6: '  無縫 Web3 交互',
                    l7: '  加密 DNA 安全',
                    l8: '  創新的儲蓄收益率模型',
                    l9: '  自動化做市解決方案',
                    para: '透過 DAO 和雙閉環機制，Visa 開拓了新領域，輕鬆駕馭數位時代。 Alpha Functions 和 Web3 互動加深了對創新的承諾，而加密 DNA 則增強了安全性和繁榮。',
                    para1: `透過自動化做市，流動性供應達到前所未有的高度，邀請各行各業的個人加入金融賦權之旅。 Visa 的遺產不僅在於交易，還在於改變生活，一次一項創新.`,
                    whitepaper: `看白皮書`,
                },
                navbar: {
                    home: '家',
                    evolution: '演化',
                    utilities: '公用事業',
                    contact: '接觸'
                },
                evolution: {
                    w: '智慧',
                    r: '報酬',
                    rev: `革命`,
                    revolution: `在金融創新領域，Visa開創性的金融藝術支出就像一盞希望的燈塔，超越傳統界限，迎來前所未有的自由。在一個充滿經濟不確定性的世界中，Visa 的富有遠見的舉措提供了一個身臨其境的冒險體驗，模糊了現實與想像之間的界限，承諾無限的快樂和滿足。這場革命的核心是創世合約，其中 13319191 億代幣作為創世合約。隨著用戶的參與，所售代幣的 50% 會轉換為 USDT，獎勵所有參與者，而另一半則會被隆重銷毀，為流動性池提供燃料。`,
                    tokenB: '代幣銷毀',
                    wisdom: `曾經有一段時間，黑暗勢力試圖追捕宇宙，但當人類開始進化、智慧開始遍佈地球時，一切都消失了。 19世紀，事情開始發生變化，世界開始與邪惡作鬥爭，以獲得自由和自由。隨後區塊鏈的發展，拯救人類的最終終極。這場革命的核心是創世合約，其中 13319191 億代幣作為創世合約。隨著用戶的參與，所售代幣的 50% 會轉換為 USDT，獎勵所有參與者，而另一半則被隆重銷毀，為流動性池提供燃料。`,
                    reward: `獎勵分配成為基石，其中 70% 流向代幣持有者，5% 培育去中心化自治組織（DAO），25% 獎勵 LP 貢獻者。然而，每筆交易都需要支付 4% 的汽油費，其中 3% 重新分配給 LP，1% 分配給 DAO。`,
                    token: `代幣燃燒成為每小時的儀式，以 0.1% 的機制消耗 LP 內的代幣，象徵價值的永久更新。 Visa 的使命明確：為財富解放和個人自主鋪路，利用社區共識和尖端技術重新定義金融賦權。`,
                },
                blockchain: {
                    heading: `區塊鏈是實現財務自由的必經之路`,
                    buy: `立即取得代幣`,
                    future: `您想確保財務自由的未來嗎？`,
                    buytokens: `購買代幣`,
                }
            },
        },

    },
})