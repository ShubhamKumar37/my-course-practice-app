
export default function Card(Props) {
    return (
        <div>
            {Props.Dates && Props.Dates.length >= 3 && (
                <>
                    <div>{Props.Dates[0]}</div>
                    <div>{Props.Dates[1]}</div>
                    <div>{Props.Dates[2]}</div>
                </>
            )}
        </div>
    );
}