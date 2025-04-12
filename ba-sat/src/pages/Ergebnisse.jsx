import { useAnswer } from "../components/AnswerContext";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, Cell} from "recharts";

const Ergebnisse = () => {
 
const { answers } = useAnswer();  

const bewertungZuWert = {
  "stimme vollkommen zu": 2,
  "stimme zu": 1,
  "stimme nicht zu": -1,
  "stimme gar nicht zu": -2,
  "Keine Antwort": 0
};


const data = answers.map((answer, index) => ({
  name: `Frage ${index + 1}`,
  wert: bewertungZuWert[answer] || 0
}));

const getColor = (wert) => {
  if (wert == -2) return '#D177B3'; // Rot für Werte < 25
  if (wert == -1) return '#AA77C2'; // Gelb für Werte < 50
  if (wert == 1) return '#7AA2CD'; 
  if (wert == 2) return '#77D1CB';
  return '#000000'; // Blau für Werte >= 75
};

console.log("Data for chart:", data);


return (
  <div className="flex flex-col w-full ml-2 max-w-[1280px] xl:my-10 my-28 px-6 lg:gap-y-15 gap-y-10">
  <section
    className="flex sm:flex-row flex-col items-start lg:gap-16 md:gap-10 gap-6">
    <div className="sm:w-[90%] mt-6 w-full">
      <h2 className="sm:w-[90%] mb-6">Self-Assesment Ergebnisse</h2>
      <h4 className="">Wir empfehlen die Nutzung von Automation oder KI für ihren Prozess</h4>

    </div>
  </section>
  <section className="flex flex-col gap-5 sm:w-[94%]">

      <div className = "box glassBox2 flex flex-col w-full min-h-[650px]">
        <h4 className = "pt-16 pl-14 ml-10 mt-20 flex self-start ">Übersicht</h4>
        <div className="flex self-end gap-6 pr-8 mr-12">
          <span style={{ color: '#d177b3' }}>sehr negativ</span>
          <span style={{ color: '#aa77c2' }}>negativ</span>
          <span style={{ color: '#7aa2cd' }}>positiv</span>
          <span style={{ color: '#77d1cb' }}>sehr positiv</span>
        </div>
        <div className="p-8 w-full flex justify-center items-center gap-1">
          <div className="m-0 mb-6 pl-16 pb-12 ">
            <p>Prozess ist zeitaufwendig <br />
            Prozess beinhaltet sich oft wiederholende Aufgaben <br />
            Prozess beinhaltet standardisierte Aufgaben <br />
            Prozess erfordert Erfassen von vielen Informationen<br />
            Aufgaben des Prozesses schwierig für Menschen <br />
            Mitarbeiter müssen mit anderen Menschen kommunizieren<br />
            Prozess ist anfällig für menschliche Fehler<br />
            Mitarbeitende werden von anderen Aufgaben abgehalten<br />
            Ergebnisse sind wichtig für andere Prozesse <br />
            Ergebnisse könnten verbessert werden<br />
            Mitarbeitende würde Arbeitslast abgenommen werden<br />
            Erfahrungen externen Personen negativ beeinflusst<br />
            Wichtige soziale Interaktionen könnten verhindert werden<br />
            Einfacher das automatische System zu kontrollieren<br />
            Verzögerungen oder erheblichen Problemen in der Organisation <br />
            Aufgaben könnten wieder manuell durchgeführt werden<br />
            Entscheidungen für Mitarbeitende schwer nachzuvollziehen <br />
            Mitarbeitende könnten wichtige Fähigkeiten verlieren<br />
            </p>
            
          </div>
          <ResponsiveContainer className="pr-10 pb-12 mb-6 flex" width="40%"  height={650}>
  
            <BarChart data={data} layout="vertical">
              <XAxis type="number" domain={[-2, 2]} hide={true} />
              <YAxis dataKey="name" type="category" hide={true}/>
              <ReferenceLine x={0} stroke="#f1f0f4" strokeWidth={2}/>
              <Bar dataKey="wert" barSize={25}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={getColor(entry.wert)} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    <div className = "box glassBox2 flex flex-col w-full min-h-[650px] items-start justify-start">
      <h4 className = "pl-10 pt-10 ml-10 mt-4 flex self-start items-start justify-start">Empfehlungen</h4>
        <div className="pl-16 pt-10 ml-10 mt-4 flex flex-row w-full gap-2">
          <p  className="w-full pt-6">
            “Der Prozess beinhaltet Aufgaben, die sich oft wiederholen” <br />
            Ihre Antwort: “stimme gar nicht zu”
          </p>
          <p  className="w-full pr-8 mr-16"> Da sich Aufgaben nicht oft wiederholen, könnte eine Automatisierung nicht sinnvoll sein. Prüfen Sie stattdessen, ob sie den Prozess anders optimieren können.
          </p>
        </div>
        <div className="flex flex-grow"></div>
    </div>
    
  </section>

  </div>
  );
}

export default Ergebnisse;