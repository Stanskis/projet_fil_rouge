const mbImages = {
    1:'app/src/assets/cpu/amd_5_7k.webp',
    2:'app/src/assets/cpu/amd_7_7k.webp',
    3:'app/src/assets/cpu/amd_9_7k.webp',
    4:'app/src/assets/cpu/intel-i5.webp',
    5:'app/src/assets/cpu/intel-i7.webp',
    6:'app/src/assets/cpu/intel-i9.webp',
    default: 'app/src/assets/picture_grey.svg',
}

export default function getImages({product}){
    const {name} = product;

    let imageUrl;

    if (name.includes('Ryzen 5')){
        imageUrl = mbImages[1];
    } else if(name.includes('Ryzen 7')){
        imageUrl = mbImages[2];
    }else if(name.includes('Ryzen 9')){
        imageUrl = mbImages[3];
    }else if(name.includes('i5')){
        imageUrl = mbImages[4];
    } else if(name.includes('i7')){
        imageUrl = mbImages[5];
    }else if(name.includes('i9')){
        imageUrl = mbImages[6];
    }else {
        imageUrl = mbImages.default;
    }

    return (
        <div>
            <img style={{ width: '80px' }} src={imageUrl} alt={name}/>
        </div>
    )
}