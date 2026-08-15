"use client"
import { webs, categories } from "./config/webs";
import { Section } from "./components/section"; 
import { useState } from "react";
import { Card } from "./components/card";
import { RotateCw } from "lucide-react";

export default function Home() {
  const gems = webs.filter((web) => web.isFeatured);
  const [filter, setFilter] = useState("");
  
  return (
   <div className="flex">
        <div
            className="
              w-4 md:w-10
              bg-[repeating-linear-gradient(135deg,transparent_0,transparent_7px,rgba(0,0,0,0.12)_8px,transparent_9px)]
              border-r border-black/10
            "
          />
          <main className="w-[calc(100%-16px)] md:w-[calc(100%-80px)] min-h-screen flex flex-col gap-6 mb-6">
            <div className="flex flex-col gap-1 px-4 pb-4 mt-6 border-b  border-zinc-200 border-w-4">
              <p className="text-3xl font-bold font-heading text-zinc-800">Website Gems</p>
              <p className="text-zinc-600 text-sm">Websites worth a second look</p>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-zinc-400 text-sm mx-4">
              <span className="cursor-pointer hover:text-zinc-900 hover:p-2 hover:bg-zinc-100 rounded-full transition-all duration-200 -mr-2" onClick={() => setFilter("")}>
                  <RotateCw size={13} />
              </span>
              <p>
                Filters: </p>
            {categories.map((c , i) => (
            <button key={i} type="button"
            onClick={() => setFilter(c)}
            className={`
                hover:text-zinc-900
                ${filter === c ? "text-zinc-900 font-medium" : ""}
            `}>
                {c}
            </button>
            ))}

        </div>
        {filter == '' ? (
          <div className="flex flex-col gap-6 px-2 md:px-12">
              {categories.map((category) => (
                <Section 
                  key={category} 
                  section={category} 
                  type="flex"
                  webs={gems.filter((web) => web.category === category)} 
                />
              ))}
            </div>
        ): (
          <div className="grid grid-cols-2 md:grid-cols-3 px-2 md:px-6 py-4 gap-2 bg-[radial-gradient(rgba(148,163,184,0.18)_1px,transparent_1px)] bg-[size:10px_10px] border-y border-zinc-200 ">
            {webs.filter((web) => web.category === filter).map((web, i) => (
                <Card key={i} web={web} type="grid" />
            ))}
          </div>
        )}
            
            
          </main>
          <div
            className="
              w-4 md:w-10
              bg-[repeating-linear-gradient(135deg,transparent_0,transparent_7px,rgba(0,0,0,0.12)_8px,transparent_9px)]
              border-l border-black/10
            "
          />
   </div>
  );
}
