import { WebConfig } from "../config/webs";
import { Card } from "./card";
interface SectionProps {
    section: WebConfig['category'],
    webs: WebConfig[],
    type: 'flex' | 'grid',
}

export const Section = ({ section, webs, type }: SectionProps) => {
    return (
        <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold font-heading text-zinc-800">{section}</h2>
            <div className="overflow-x-auto w-full py-6 px-4 
    bg-[radial-gradient(rgba(148,163,184,0.18)_1px,transparent_1px)]
    bg-[size:10px_10px] border border-zinc-200 rounded-md scrollbar-none">
                <div className="flex gap-2 w-[2300px]">
                    {webs.map((web, idx) => (
                        <Card key={idx} web={web} type={type} />
                    ))}
                </div>
            </div>
        </div>
    )
}

