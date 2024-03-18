import localForage from 'localforage-esm';
import {farmStats} from '../calculator/farm';

export const defaultCalculationInputs = {
    farmSize: String(farmStats.minFarmSize),
    fertility: '90',
};

export type CalculationInputs = typeof defaultCalculationInputs;

const calculationsKey = 'calculationInputs';
const calculationsStore = localForage.createInstance({
    description: 'last calculations for KRCYC app',
    name: 'krcyc',
    storeName: 'krcyc',
});

export async function loadLastCalculationInputs(): Promise<CalculationInputs[]> {
    return (
        (await calculationsStore.getItem(calculationsKey)) || [
            defaultCalculationInputs,
        ]
    );
}

export async function saveLastCalculationInputs(
    calculationInputs: ReadonlyArray<Readonly<CalculationInputs>>,
): Promise<void> {
    await calculationsStore.setItem(calculationsKey, calculationInputs);
}
