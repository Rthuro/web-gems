import { StaticImageData } from 'next/image';
import * as imgs from '../../assets';

export interface WebConfig {
    category: 'Inspo' | 'Illustration' | 'Development' | 'Collections' | 'Resources' | 'Blogs' ,
    title: string,
    img?: StaticImageData,
    url: string,
    description: string,
    isFeatured: boolean,
    types: string[]
}

export const webs: WebConfig[] = [
    {
        category: 'Inspo',
        title: 'Daikendy' ,
        img: imgs.kenneth,
        url: 'https://daikendy.vercel.app/',
        description: 'Portfolio website',
        isFeatured: true,
        types: ['Portfolio']
    },
    {
        category: 'Inspo',
        title: 'Rinkita Dhana' ,
        img: imgs.rinkita,
        url: 'https://rinkitadhana.com/',
        description: 'Portfolio website',
        isFeatured: true,
        types: ['Portfolio']
    },
    {
        category: 'Inspo',
        title: 'Adrianabelarde',
        img: imgs.adrian,
        url: 'https://adrianabelarde.com/',
        description: 'Portfolio website',
        isFeatured: true,
        types: ['Portfolio']
    },
    {
        category: 'Inspo',
        title: 'Calelane',
        img: imgs.cale,
        url: 'https://calelane.com/',
        description: 'Portfolio website',
        isFeatured: true,
        types: ['Portfolio']
    },
    {
        category: 'Inspo',
        title: 'Kons',
        url: 'https://kons.design/'
        description: 'Portfolio website',
        isFeatured: true,
        types: ['Portfolio']
    },
    {
        category: 'Illustration',
        title: 'Bible Strong',
        img: imgs.biblestrong,
        url: 'https://avatars.bible-strong.app/',
        description: 'Avatar generator',
        isFeatured: true,
        types: ['Avatars']
    },
    {
        category: 'Illustration',
        title: 'Humation',
        img: imgs.humation,
        url: 'https://humation.app/avatar',
        description: 'Avatar generator',
        isFeatured: true,
        types: ['Avatars']
    },
    {
        category: 'Illustration',
        title: 'Open Peeps',
        img: imgs.openpeeps,
        url: 'https://blush.design/collections/open-peeps/open-peeps',
        description: 'Open Peeps avatars',
        isFeatured: true,
        types: ['Avatars', 'Library']
    },
    {
        category: 'Illustration',
        title: 'Notion Avatar',
        img: imgs.notionavatar,
        url: 'https://notion-avatar.app/',
        description: 'Notion style avatar generator',
        isFeatured: true,
        types: ['Avatars']
    },
    {
        category: 'Illustration',
        title: 'Avatartion',
        img: imgs.avatartion,
        url: 'https://www.avatartion.com/',
        description: 'Avatar generator',
        isFeatured: false,
        types: ['Avatars']
    },
    {
        category: 'Illustration',
        title: 'CMIYGL',
        img: imgs.id,
        url: 'https://ntho6.github.io/CMIYGL/',
        description: 'ID Generator',
        isFeatured: false,
        types: ['ID']
    },
    {
        category: 'Illustration',
        title: 'Sudo Aquarelle',
        img: imgs.watercolor,
        url: 'https://sudoaquarelle.com/',
        description: 'Watercolor illustration generator',
        isFeatured: false,
        types: ['Watercolor']
    },
    {
        category: 'Illustration',
        title: 'Marucav',
        url: 'https://merucav.netlify.app/',
        description: 'Custom background',
        isFeatured: true,
        types: ['Background', 'Shaders', 'Blobs', 'Texture']
    },
    {
        category: 'Illustration',
        title: 'Pryzm',
        url: 'https://pryzm.design/',
        description: 'create gradient, glass and grain background',
        isFeatured: false,
        types: ['Background', 'Glass', 'Gradient']
    },
    {
        category: 'Development',
        title: 'Dicebear',
        img: imgs.dicebear,
        url: 'https://www.dicebear.com/',
        description: 'Random avatar generator',
        isFeatured: true,
        types: ['Avatars', 'API', 'Generator']
    },
    {
        category: 'Development',
        title: 'beUI',
        img: imgs.beui,
        url: 'https://beui.dev/components/motion/loader',
        description: 'Components',
        isFeatured: true,
        types: ['Components', 'UI']
    },
    {
        category: 'Development',
        title: 'AMicro',
        img: imgs.amicro,
        url: 'https://amicro.vercel.app/',
        description: 'UI components',
        isFeatured: true,
        types: ['UI', 'Components']
    },{
        category: 'Development',
        title: 'Sonaut',
        url: 'https://procedural-sounds.vercel.app/',
        description: 'UI sound kit',
        isFeatured: true,
        types: ['Sound Kit', 'sfx']
    },{
        category: 'Development',
        title: 'ui sfx',
        url: 'https://uisfx.com/',
        description: 'UI sound kit',
        isFeatured: true,
        types: ['Sound Kit', 'sfx']
    },
     {
        category: 'Development',
        title: 'mapcn',
        url: 'https://www.mapcn.dev/',
        description: 'map kit',
        isFeatured: false,
        types: ['Maps', 'Components', 'UI']
    },
     {
        category: 'Development',
        title: 'Great UI',
        url: 'https://www.great-ui.com/components',
        description: 'UI components',
        isFeatured: false,
        types: ['Transition', 'Components', 'UI']
    },
    {
        category: 'Resources',
        title: 'all svg icons',
        img:imgs.allsvg,
        url: 'https://allsvgicons.com/',
        description: 'SVG Icons',
        isFeatured: true,
        types: ['Icons']
    },
    {
        category: 'Resources',
        title: 'SVG Repo',
        img: imgs.svgrepo,
        url: 'https://www.svgrepo.com/',
        description: 'SVG Repo',
        isFeatured: true,
        types: ['Icons']
    },
    {
        category: 'Collections',
        title: 'Lanso [Japanese]',
        img: imgs.lanso,
        url: 'https://lanso.shop/sections/',
        description: 'Collection of sections ',
        isFeatured: true,
        types: ['Sections', 'UI']
    },
];

export const categories = Array.from(new Set(webs.map((web) => web.category)));
