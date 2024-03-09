
export default function Card(Props) {
    return (
        <div className="relative flex flex-col p-2 bg-black rounded-lg text-center">
            <div>{Props.Dates[0]}</div>
            <div>{Props.Dates[1]}</div>
            <div>{Props.Dates[2]}</div>
            {(
                <>
                </>
            )}
        </div>
    );
}