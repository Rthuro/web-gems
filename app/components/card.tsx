
import Link from 'next/link';
import Image from 'next/image';
import { WebConfig } from '../config/webs';
import { ArrowUpRight } from 'lucide-react';

interface CardProps {
    web: WebConfig;
    type: 'flex' | 'grid';
}

export const Card = ({ web, type }: CardProps) => {
    return (
        <div className='flex flex-col  bg-white'>
            {web.img ? (
                <Image
                    src={web.img}
                    alt={web.title}
                    className={` md:h-75 border border-zinc-200 object-contain bg-zinc-100 ${type === 'flex' ? 'h-50 w-100 md:w-140' : 'h-36 md:w-full'}`}
                />
            ): (
                <iframe
                    src={web.url}
                    title={web.title}
                    loading="lazy"
                className={`h-50 md:h-75 border border-zinc-200 ${type === 'flex' ? 'w-140' : ' md:w-full'}`}
            /> )}
            <Link href={web.url} target='_blank' className=' text-zinc-800 px-2 py-3 font-semibold hover:underline flex items-center font-heading text-sm gap-1 w-full'>
                {web.title} 
                <ArrowUpRight size={16} />   
            </Link>
            <div className='flex flex-wrap gap-2 px-3 mb-3'>
                {web.types.map((type) => (
                    <span
                        key={type}
                        className='px-3 py-1 text-xs font-medium bg-zinc-50 text-zinc-600 border border-zinc-200 rounded-md'
                    >
                        {type}
                    </span>
                ))}
            </div>
        </div>
    );
};