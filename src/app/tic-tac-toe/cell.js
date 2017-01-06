export const EMPTY = '';
export const CROSS = 'X';
export const NOUGHT = 'O';

export function createCell(value, activated) {
    value = value === CROSS || value === NOUGHT ? value : EMPTY;
    activated = !!activated;

    return { 
        getValue: () => value,
        setValue: (newValue) => {
            if (value !== EMPTY || newValue !== CROSS && newValue !==  NOUGHT) {
                return false;
            }
            value = newValue;
            return true;
        },
        isActivated: () => activated,
        activate: () =>  activated = true
     };
}