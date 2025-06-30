type Images = {
    image_1: string;
    image_2: string;
    image_3: string;
}

type WorkImageProps = {
    images:Images;
}

export default function WorksImages(props: WorkImageProps){
    const {image_1, image_2, image_3} = props.images;

    return (
        <div className="flex flex-col gap-8 basis-8/12 md:order-1 order-2">
            <img src={image_1} className="rounded-4xl max-w-full" />
            <div className="flex flex-row gap-8">
                <img src={image_2} className="w-1/2  rounded-4xl" />
                <img src={image_3} className="w-1/2  rounded-4xl" />
            </div>
         </div>
    )
}