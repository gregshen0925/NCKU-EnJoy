import { NextPage } from "next";
import Head from "next/head";
// import { useAccount } from 'wagmi'
import Claim from "../Claim";



interface Props {

}

const Home: NextPage<Props> = (props: Props) => {

    // const UnclaimCryptoAmount = getUnclaimCryptoAmountFromContract
    // const UnclaimStockAmount = getUnclaimStockAmountFromContract
    const unclaimCryptoAmount = 0
    const unclaimStockAmount = 0


    return (
        <div className="text-center">
            <Head>
                <title>EnJoy Prediction</title>
            </Head>
            <div className="pt-10 flex text-white justify-center text-xl md:text-3xl">預測明天NASDAQ或BTC明天是漲或跌的小遊戲</div>
            <div className="text-[#43c08c] font-semibold py-2 px-10 text-left space-y-2">
                <div>1. 最低1USDT、最高5USDT，贏的一邊獲得另一邊的籌碼，使用前請先學習如何使用區塊鏈錢包並切換到Polygon鏈！</div>
                <div>2. 此App初衷是讓大家在體驗刺激小遊戲的同時，可以學習看K線、操作錢包，後續也會放上創建錢包、增加Polygon鏈的教學</div>
                <div>3. Info那一頁會再補上各位預測排名，看看誰是預測高手</div>
                <div>4. 最後會讓所有使用者可以mint有自己資訊的Soulbound NFT，並結合每日抽卡功能，讓大家認識更多金融科技、區塊鏈的朋友。</div>
            </div>
            {/* <div>
                {(unclaimCryptoAmount || unclaimStockAmount) && <Claim unclaimCrypto={unclaimCryptoAmount} unclaimStock={unclaimStockAmount} />}
            </div> */}
            <div>黑色的字，想不到吧</div>
        </div>
    )
}

export default Home
