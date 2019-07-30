console.log('YAY Isurus!!!');

const topHat = {
    type: 'Top',
    color: 'Black',
    size: 14,
};

const baseballHat = {
    type: 'Baseball Cap',
    color: 'Blue',
    size: 12,
};

function hatReadableSize(hatData, hatMore) {
    const maxSizeSmall = 12;
    const maxSizeMedium = 18;
    const maxSizeLarge = 24;
    const maxSizeXLarge = 30;

    if (hatData.size <= maxSizeSmall) {
        return 'Small';
    } else if (hatData.size > maxSizeSmall
        && hatData.size <= maxSizeMedium
    ) {
        return 'Medium';
    } else if (hatData.size > maxSizeMedium 
        && hatData.size <= maxSizeLarge
    ) {
        return 'Large';
    } else if (hatData.size > maxSizeLarge
        && hatData.size <= maxSizeXLarge
    ) {
        return 'X-Large';
    }
}

function changeHatSize(hatData) {
    hatData.size = hatData.size + 2;
}

changeHatSize(baseballHat);
console.log('baseballHat size: ', baseballHat.size);

console.log('topHat is: ', hatReadableSize(topHat));
console.log('baseballHat is: ', hatReadableSize(baseballHat));
console.log('concat is: ', baseballHat);

console.log(topHat.type);
console.log(topHat['size']);

function randoFunction (propertyKey) {
    console.log(topHat[propertyKey]);
}
randoFunction('size');

