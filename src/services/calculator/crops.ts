import {mapObjectValues} from '@augment-vir/common';

export type Crop = {
    name: string;
    yield: number;
    fertilityDependence: number;
    isFood?: true | undefined;
};

const cropDefinitions = {
    Wheat: {
        yield: 72,
        fertilityDependence: 90,
        isFood: true,
    },
    'Medicinal Herb': {
        fertilityDependence: 90,
        yield: 94,
    },
    Cabbage: {
        yield: 65,
        fertilityDependence: 70,
        isFood: true,
    },
    Cannabis: {
        yield: 84,
        fertilityDependence: 70,
    },
    Cocoa: {
        yield: 94,
        fertilityDependence: 90,
    },
    Coffee: {
        yield: 94,
        fertilityDependence: 90,
    },
    Cotton: {
        yield: 84,
        fertilityDependence: 70,
    },
    Dye: {
        yield: 84,
        fertilityDependence: 70,
    },
    Grape: {
        yield: 72,
        fertilityDependence: 90,
        isFood: true,
    },
    Tulip: {
        yield: 94,
        fertilityDependence: 90,
    },
    // Rice: {},
    // Melon: {},
    // Blueberry: {},
    // Corn: {},
} satisfies Record<string, Omit<Crop, 'name'>>;

export const allCrops = mapObjectValues(cropDefinitions, (key, value): Crop => {
    return {
        ...value,
        name: key,
    };
});

export type AllCrops = Record<string, Crop>;
