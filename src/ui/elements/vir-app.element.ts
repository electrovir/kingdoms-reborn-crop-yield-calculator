import {copyThroughJson} from '@augment-vir/common';
import {
    asyncProp,
    css,
    defineElementNoInputs,
    html,
    isError,
    isResolved,
    listen,
} from 'element-vir';
import {LoaderAnimated24Icon, ViraIcon, noNativeSpacing} from 'vira';
import {allCrops} from '../../services/calculator/crops';
import {
    CalculationInputs,
    defaultCalculationInputs,
    loadLastCalculationInputs,
    saveLastCalculationInputs,
} from '../../services/storage/calculations-store';
import {VirCalculator} from './vir-calculator.element';

export const VirApp = defineElementNoInputs({
    tagName: 'vir-app',
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            font-family: sans-serif;
            padding: 32px;
            gap: 16px;
        }

        article {
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
        }

        h1 {
            ${noNativeSpacing};
        }
    `,
    stateInitStatic: {
        allCalculations: asyncProp({defaultValue: loadLastCalculationInputs()}),
    },
    renderCallback({state}) {
        if (!isResolved(state.allCalculations.value)) {
            return html`
                <${ViraIcon.assign({
                    icon: LoaderAnimated24Icon,
                })}
                    class="loader"
                ></${ViraIcon}>
            `;
        }

        const allCalculations: CalculationInputs[] = isError(state.allCalculations.value)
            ? [defaultCalculationInputs]
            : state.allCalculations.value;

        async function updateCalculations(
            callback: (calculationsToMutate: CalculationInputs[]) => void,
        ) {
            const newCalculations = copyThroughJson(allCalculations);

            callback(newCalculations);

            state.allCalculations.setResolvedValue(newCalculations);

            await saveLastCalculationInputs(newCalculations);
        }

        const calculators = allCalculations.map((calculationInputs, index) => {
            return html`
                <${VirCalculator.assign({
                    crops: allCrops,
                    calculationInputs,
                })}
                    ${listen(VirCalculator.events.calculationInputsChange, async (event) => {
                        await updateCalculations((newCalculations) => {
                            newCalculations[index] = event.detail;
                        });
                    })}
                ></${VirCalculator}>
            `;
        });

        return html`
            <h1>Kingdoms Reborn Crop Yield Calculator</h1>
            <button
                ${listen('click', async () => {
                    await updateCalculations((newCalculations) => {
                        newCalculations.push(defaultCalculationInputs);
                    });
                })}
            >
                +
            </button>
            <article>${calculators}</article>
        `;
    },
});
