type CaseStudy = {
    title: string;
    hero: string;
    facts: {
        large:string;
        small:string;
    }[];
    copyAbove: string;
    copyBelow: string;
    images:{
        large: string[];
        small: string[];
    };
    colors: string[];
    banner:{
        image: string;
        copy: string;
    }
    brandImage: string;
};

export const caseStudyArr: CaseStudy[] = [
    {
        title: 'Rite Aid',
        hero: 'heroimg',
        facts: [
            {
                large:'2,400+',
                small:'locations',
            },
            {
                large:'50,000',
                small:'associates',
            },
            {
                large:'1,500',
                small:'open roles',
            },
        ],
        copyAbove: '',
        copyBelow: '',
        images:{
            large: ['...','...'],
            small: ['...','...'],
        },
        colors: ['#003DA7','#77C926'],
        banner:{
            image: '...',
            copy: '...',
        },
        brandImage: '...',
    },
]