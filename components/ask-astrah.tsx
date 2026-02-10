import { Plus, SendHorizonal } from "lucide-react";
import React from "react";

const AskAstrah = ({ placeholder }: { placeholder: string }) => {
  return (
    <div className=" w-full  h-fit   ">
      <div
        className={
          " w-full h-full rounded-[26px] bg-linear-to-l shadow-xl from-primary/35  via-white/10 to-white/30 px-px pb-px   group-hover:-translate-y-1"
        }
      >
        <div className="w-full relative h-40 md:h-75 flex items-end rounded-[25px] shadow-[inset_0_0px_50px_rgba(255,255,255,0.1)]  bg-card p-2.5 md:p-5.5 ">
          <div className="absolute  h-1/3 -top-1 left-0 w-full scale-x-105 bg-linear-to-b from-background via-background to-transparent" />

          <div className=" shadow-[inset_0_0px_50px_rgba(255,255,255,0.05)] bg-white/5 h-28 md:h-30 p-2 md:p-3 w-full  flex flex-col justify-between items-end border rounded-2xl border-white/12 ">
            <div className="flex gap-3 w-full">
              <Plus size={26} className="shrink-0" />
              <p className=" text-muted-foreground max-md:text-sm">
                {placeholder}
              </p>
            </div>
            <div className="w-fit flex items-end justify-end ">
              <button className=" bg-cyan-600 py-1.5 px-3.5 md:px-4.5 md:py-2 rounded-xl shadow-[inset_0_0px_20px_rgba(255,255,255,0.3)]   ">
                <SendHorizonal
                  size={22}
                  className="text-white rtl:rotate-180"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskAstrah;
