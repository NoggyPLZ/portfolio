
type Project = {
    title: string;
    client: string;
    skills: string;
    body: string;
    images:{
        image_1: string;
        image_2: string;
        image_3: string;
    }
    link?: string;
}

const projects: Project[] = [
    {
        title: 'RITE AID CAREERS',
        client: 'Rite Aid',
        skills: 'Design, Branding, Front-End using HTML & CSS',
        body: "Through my team at BlueTractor and in communication with the client Rite-Aid, we used the branding standard of Rite-Aid to bring their careers site into a more modern design. Keeping a clean aesthetic, I was able to accent items using their green brand color while letting the blue act as a more dominant color. Included on pages was an input field to search for Jobs using job title and search location as params.",
        images:{
            image_1: './riteaid/rite-aid-site01.webp',
            image_2: './riteaid/rite-aid-site02.webp',
            image_3: './riteaid/rite-aid-site03.webp',
        }
    },
    {
        title: 'SUR LA LUNE',
        client: 'Heidi Thomas',
        skills: 'Design, Branding, Front-End using HTML & CSS',
        body: "The redesign of the Sur La Lune site was an enormous challenge, but my team at BlueTractor was able to create a beautiful fairy tale themed site. The site featured a sprawling library of around 50 fairy tales each having 8 pages of annotations, illustrations, and more pages of related tales.",
        images:{
            image_1: './surlalune/sur-la-lune01.webp',
            image_2: './surlalune/sur-la-lune02.webp',
            image_3: './surlalune/sur-la-lune03.webp',
        }
    },
    {
        title: 'RYMAN CAREERS',
        client: 'Ryman Hospitality Properties',
        skills: 'Design, Branding, Front-End using HTML & CSS',
        body: "Capturing the rustic typesetting theme of a Nashville printing press, my team at BlueTractor created a careers site for the Ryman properties. Covering around 6 different properties in locations all over Tennessee and even Florida, the site helped RHP reach potential employees in properties such as Ole Red, Grand Ole Opry, Ryman Auditorium, and more.",
        images:{
            image_1: './ryman/ryman01.webp',
            image_2: './ryman/ryman02.webp',
            image_3: './ryman/ryman03.webp',
        }
    },
    {
        title: 'TSC CAREERS',
        client: 'Tractor Supply Co.',
        skills: 'Design, Branding, Front-End using HTML & CSS',
        body: 'Write some body copy here please if you would please.',
        images:{
            image_1: './tsc-careers/tsc-careers01.webp',
            image_2: './tsc-careers/tsc-careers02.webp',
            image_3: './tsc-careers/tsc-careers03.webp',
        }
    },
]


export default projects;