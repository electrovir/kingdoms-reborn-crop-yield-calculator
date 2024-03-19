import {clamp, isTruthy} from '@augment-vir/common';
import {Crop} from './crops';
import {farmStats} from './farm';

export function calculateYield(crop: Readonly<Crop>, farmSize: number, fertility: number): number {
    return Math.round(
        (crop.yield / 100) *
            clamp({value: farmSize, min: farmStats.minFarmSize, max: farmStats.maxFarmSize}) *
            (1 - ((1 - fertility / 100) * crop.fertilityDependence) / 100),
    );
}

export type CalculationStat = {
    label: string;
    value: string | number;
};

export function calculateStats(
    farmSize: number,
    fertility: number,
    crop: Readonly<Crop>,
): CalculationStat[] {
    const harvest = calculateYield(crop, farmSize, fertility);
    const workers = farmSize / farmStats.tilesPerWorker;

    return [
        {
            label: 'Workers',
            value: workers,
        },
        {
            label: 'Harvest',
            value: harvest,
        },
        {
            label: 'per tile',
            value: harvest / farmSize,
        },
        {
            label: 'per worker',
            value: harvest / Math.ceil(workers),
        },
        crop.isFood
            ? {
                  label: 'approx people fed',
                  value: Math.floor(harvest / 12),
              }
            : undefined,
    ].filter(isTruthy);
}
