import Card from "./Card";


export default function DateCard(Props)
{
    return (
        <>
            <div>
                <div>
                    <Card Dates={[Props.AllValue[0].Month, Props.AllValue[0].Date, Props.AllValue[0].Year]}></Card>
                    <p>{Props.AllValue[0].Name}</p>
                </div>
                <div>
                    <Card Dates={[Props.AllValue[1].Month, Props.AllValue[1].Date, Props.AllValue[1].Year]}></Card>
                    <p>{Props.AllValue[1].Name}</p>
                </div>
                <div>
                    <Card Dates={[Props.AllValue[2].Month, Props.AllValue[0].Date, Props.AllValue[0].Year]}></Card>
                    <p>{Props.AllValue[2].Name}</p>
                </div>
                <div>
                    <Card Dates={[Props.AllValue[3].Month, Props.AllValue[0].Date, Props.AllValue[0].Year]}></Card>
                    <p>{Props.AllValue[3].Name}</p>
                </div>
            
            </div>
        </>
    );
}