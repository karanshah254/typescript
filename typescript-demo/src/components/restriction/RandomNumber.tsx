type RandomNumberType = {
    value: number;

}

type PositiveNumber = RandomNumberType & {
    isPositive: boolean;
    isNegetive?: never;
    isZero?: never;
}

type NegetiveNumber = RandomNumberType & {
    isNegetive: boolean;
    isPositive?: never;
    isZero?: never;
}

type Zero = RandomNumberType & {
    isZero: boolean;
    isPositive?: never;
    isNegetive?: never;
}

type RandomNumberProps = PositiveNumber | NegetiveNumber | Zero;

export const RandomNumber = ({ value, isPositive, isNegetive, isZero }: RandomNumberProps) => {
    return (
        <div>
            {value} {isPositive && 'positive'} {isNegetive && 'negative'} {' '} {isZero && 'zero'}
        </div>
    )
}