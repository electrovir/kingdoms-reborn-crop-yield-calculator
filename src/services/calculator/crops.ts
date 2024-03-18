import {mapObjectValues} from '@augment-vir/common';

export type Crop = {
    name: string;
    yield: number;
    fertilityDependence: number;
};

const cropDefinitions = {
    Wheat: {
        yield: 72,
        fertilityDependence: 90,
    },
    'Medicinal Herb': {
        fertilityDependence: 90,
        yield: 94,
    },
    // Rice: {},
    Cabbage: {
        yield: 65,
        fertilityDependence: 70,
    },
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
