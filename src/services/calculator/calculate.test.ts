import {itCases} from '@augment-vir/browser-testing';
import {calculateYield} from './calculate';
import {allCrops} from './crops';

describe(calculateYield.name, () => {
    itCases(calculateYield, [
        {
            it: 'calculates wheat correctly',
            inputs: [
                allCrops.Wheat,
                100,
                70,
            ],
            expect: 53,
        },
    ]);
});
