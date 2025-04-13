"use client";
import { MarketBar } from "@/app/components/MarketBar";
import { SwapUI } from "@/app/components/SwapUI";
import { Depth } from "@/app/components/depth/Depth";
import { useParams } from "next/navigation";
import TradingViewWidget from "@/app/components/TradeView";



export default function Page() {
    const { market } = useParams();
    console.log(market);
    return <div className="flex flex-row flex-1">
        <div className="flex flex-col flex-1">
            <MarketBar market={market as string} />
            <div className="flex flex-row h-[520px] border-y border-slate-800">
                <div className="flex flex-col flex-1">
                    {/* <TradeView market={market as string} /> */}
                    <TradingViewWidget market={market as string} />
                </div>
                <div className="flex flex-col w-[250px] overflow-hidden">
                    <Depth market={market as string} /> 
                </div>
            </div>
        </div>
        <div className="w-[10px] flex-col border-slate-800 border-l"></div>
        <div>
            <div className="flex flex-col w-[250px]">
                <SwapUI market={market as string} />
            </div>
        </div>
    </div>
}