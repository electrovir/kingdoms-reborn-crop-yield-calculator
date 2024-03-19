import {extractErrorMessage} from '@augment-vir/common';
import {css, defineElement, defineElementEvent, html, listen} from 'element-vir';
import {isRunTimeType} from 'run-time-assertions';
import {ViraInput, noNativeSpacing} from 'vira';
import {CalculationStat, calculateStats} from '../../services/calculator/calculate';
import {Crop} from '../../services/calculator/crops';
import {CalculationInputs} from '../../services/storage/calculations-store';

const allCrops = 'All' as const;

export const VirCalculator = defineElement<{
    crops: Record<string, Crop>;
    calculationInputs: Readonly<CalculationInputs>;
}>()({
    tagName: 'vir-calculator',
    stateInitStatic: {
        selectedCropName: allCrops as string,
    },
    events: {
        calculationInputsChange: defineElementEvent<CalculationInputs>(),
    },
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .error {
            color: red;
        }

        p {
            ${noNativeSpacing};
        }

        table {
            align-self: flex-start;
        }

        td:first-child {
            text-align: right;
            padding-right: 16px;
        }
    `,
    renderCallback({inputs, events, dispatch}) {
        const selectedCrops: Crop[] = Object.values(inputs.crops).sort((a, b) => {
            const isFoodCompare = Number(b.isFood || 0) - Number(a.isFood || 0);

            if (isFoodCompare) {
                return isFoodCompare;
            } else {
                return a.name.localeCompare(b.name);
            }
        });

        const {errors, cropStats} = convertToStats(
            inputs.calculationInputs.farmSize,
            inputs.calculationInputs.fertility,
            selectedCrops,
        );

        const cropStatsTemplates = cropStats.map(({crop, stats}) => {
            const statRows = stats.map((stat) => {
                const value = isRunTimeType(stat.value, 'number')
                    ? stat.value.toFixed(1)
                    : stat.value;

                return html`
                    <tr>
                        <td>${stat.label}</td>
                        <td>${value}</td>
                    </tr>
                `;
            });

            return html`
                <h3>${crop.name}</h3>
                <table><tbody>${statRows}</tbody></table>
            `;
        });

        const errorTemplates = errors.map((error) => {
            return html`
                <p class="error">
                    ${error
                        ? extractErrorMessage(error)
                        : html`
                              &nbsp;
                          `}
                </p>
            `;
        });

        return html`
            <span>Farm Size</span>
            <${ViraInput.assign({
                value: inputs.calculationInputs.farmSize,
            })}
                ${listen(ViraInput.events.valueChange, (event) => {
                    dispatch(
                        new events.calculationInputsChange({
                            ...inputs.calculationInputs,
                            farmSize: event.detail,
                        }),
                    );
                })}
            ></${ViraInput}>
            <span>Fertility</span>
            <${ViraInput.assign({
                value: inputs.calculationInputs.fertility,
            })}
                ${listen(ViraInput.events.valueChange, (event) => {
                    dispatch(
                        new events.calculationInputsChange({
                            ...inputs.calculationInputs,
                            fertility: event.detail,
                        }),
                    );
                })}
            ></${ViraInput}>

            ${errorTemplates} ${cropStatsTemplates}
        `;
    },
});

function convertToStats(
    farmSizeString: string,
    fertilityString: string,
    crops: Crop[],
): {cropStats: {crop: Crop; stats: CalculationStat[]}[]; errors: (Error | undefined)[]} {
    const errors: (Error | undefined)[] = [
        undefined,
        undefined,
    ];

    const farmSize = Number(farmSizeString);
    if (isNaN(farmSize)) {
        errors[0] = new Error('Farm size input is not a number.');
    }
    const fertility = Number(fertilityString);
    if (isNaN(fertility)) {
        errors[1] = new Error('Fertility input is not a number.');
    }

    const cropStats = crops.map((crop) => {
        return {
            crop,
            stats: calculateStats(
                farmSize,
                fertility,
                crop || {
                    fertilityDependence: NaN,
                    name: '',
                    yield: NaN,
                },
            ),
        };
    });

    return {errors, cropStats};
}
