import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import UXButton from "../components/UXButton";
import { useAnswer } from "../components/AnswerContext";
import "../components/UXButton.css";
import SubNavigation from "../components/SubNavigation"


const Fragebogen = () => {

    const categories = [
        "Eigenschaften des Prozesses",
        "Auswirkungen auf Personen",
        "Probleme durch Automatisierung"
    ];

    const catDesc = [
        "Denken Sie an den jetzigen Prozess, welche Aufgaben durchgeführt werden müssen und an die Ergebnisse des Prozesses. Bewerten Sie die folgenden Aussagen von stimme vollkommen zu bis stimme gar nicht zu.",
        "Denken Sie an die Menschen, die Aufgaben des Prozesses übernehmen oder mit dem Prozess interagieren, sowohl innerhalb der Organisation aber auch externe Personen, und überlegen Sie, welche Auswirkungen eine Automatisierung auf diese haben könnte. Bewerten Sie die folgenden Aussagen von stimme vollkommen zu bis stimme gar nicht zu.",
        "Überlegen Sie, welche Probleme bei der Automatisierung des Prozesses auftreten könnten und wie mit diesen dann umgegangen werden könnte. Bewerten Sie die folgenden Aussagen von stimme vollkommen zu bis stimme gar nicht zu."
    ];
    const categoryCounts = [10,4,4];
    const items = [
        "Der Prozess ist zeitaufwendig",
        "Der Prozess beinhaltet Aufgaben, die sich oft wiederholen",
        "Der Prozess beinhaltet Aufgaben, die standardisiert ablaufen",
        "Der Prozess erfordert das Erfassen von vielen Informationen",
        "Die Aufgaben des Prozesses sind schwierig für Menschen durchzuführen",
        "Im Prozess ist es nicht notwendig für Mitarbeiter mit anderen Menschen zu kommunizieren",
        "Der Prozess ist anfällig für menschliche Fehler",
        "Die Aufgaben des Prozesses halten Mitarbeitende von anderen wichtigen Aufgaben ab",
        "Die Ergebnisse des Prozesses sind nicht wichtig für andere Prozesse in der Organisation",
        "Die Automatisierung des Prozesses könnte die Ergebnisse verbessern",
        "Die Automatisierung des Prozesses würde Mitarbeitende Arbeitslast abnehmen",
        "Die Automatisierung des Prozesses könnte die Erfahrung externen Personen, die mit dem Prozess in Kontakt kommen negativ beeinflussen", 
        "Die Automatisierung des Prozesses könnte wichtige soziale Interaktionen verhindern",
        "Es wäre einfacher das automatische System zu kontrollieren, als die Aufgaben manuell durchzuführen",
        "Bei einem Problem mit dem Automatisierten Prozess würde es zu Verzögerungen oder erheblichen Problemen in der Organisation kommen",
        "Bei einem Problem mit dem Automatisierten Prozess könnten die Aufgaben wieder manuell durchgeführt werden",
        "Das automatisierte System könnte Entscheidungen treffen, die für Mitarbeitende schwer nachzuvollziehen sind",
        "Durch die Automatisierung könnten Mitarbeitende wichtige Fähigkeiten verlieren, weil sie bestimmte Aufgaben nicht mehr selbst durchführen"
    ];

    const description = [
        "Einige Aufgaben oder der ganze Prozess dauern lange",
        "Es gibt Aufgaben die mehrmals vorkommen oder immer wieder ausgeführt werden müssen",
        "Es gibt klare Regeln für Abläufe, die immer gleich bleiben",
        "Viele verschiedene Daten müssen gesammelt und dann ausgewertet werden",
        "Aufgaben sind körperlich anstrengend oder erfordern viel Konzentration, weil zum Beispiel viele Dinge gleichzeitig beachtet werden müssen",
        "Für die Aufgaben des Prozesses ist Austausch mit anderen Mitarbeitenden oder externen Personen ist nicht wichtig für die Informationssammlung, für das knüpfen von Kontakten, etc",
        "Fehler passieren leicht zum Beispiel durch Zeitdruck, übersehen von Kleinigkeiten, etc",
        "Aufgaben beanspruchen viel Zeit und halten Mitarbeitende von anderen Aufgaben ab",
        "Andere Prozesse könnten auch ohne diese Ergebnisse weiterlaufen",
        "Ergebnisse könnten durch Automatisierung genauer, konsistenter, verlässlicher sein",
        "Mehr Zeit, weniger Stress, Routineaufgaben fallen weg",
        "Es könnten Nachteile für Personen außerhalb der Organisation aufkommen durch den dann Automatisierten Prozess", 
        "Gespräche oder Kontakte von Mitarbeitenden oder mit Personen außerhalb der Organisationen fallen weg, zum Beispiel Nutzung von KI-Chatbot anstatt persönlichen Telefonat",
        "Ist die Überprüfung des Systems und der Ergebnisse wirklich einfacher als die Aufgabe selber durchzuführen",
        "Andere Bereiche in der Organisation können nicht richtig weiterlaufen bei einem Fehler im automatisierten System",
        "Die Aufgaben könnten ohne Probleme wieder wie vor der Automation durchgeführt werden",
        "Bei Problemen verstehen die Mitarbeitenden nicht genau was passiert ist, da das System zu komplex sein könnte",
        "Fachwissen und Routine der Menschen könnte verloren gehen"
    ];

    const sections = [
        { id: "1", title: "Eigenschaften der Prozesse" },
        { id: "2", title: "Auswirkungen auf Personen" },
        { id: "3", title: "Probleme durch Automatisierung" },
      ];

    const [currentCategory, setCurrentCategory] = useState(0);
    const [currentCatDesc, setCurrentCatDesc] = useState(0);
    const [currentItem, setCurrentItem] = useState(0);
    const [currentDescription, setCurrentDescription] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null); 

    const nextCategory = () => {
        if (currentItem + 1 < categoryCounts[0]) {
            setCurrentCategory(0);
        } else if (currentItem + 1 < categoryCounts[0] + categoryCounts[1]) {
            setCurrentCategory(1);
        } else {
            setCurrentCategory(2);
        }
      };

      const nextCatDesc = () => {
        if (currentItem + 1 < categoryCounts[0]) {
            setCurrentCatDesc(0);
        } else if (currentItem + 1 < categoryCounts[0] + categoryCounts[1]) {
            setCurrentCatDesc(1);
        } else {
            setCurrentCatDesc(2);
        }
      };

    const nextDescription = () => {
        if (currentDescription < description.length - 1) {
          setCurrentDescription(currentDescription + 1);
        } else {
          console.log("Alle Antworten:", answers);
    
        }
      };

    const nextItem = () => {
        if (currentItem < items.length - 1) {
          setCurrentItem(currentItem + 1);
          setSelectedAnswer(null);
          nextDescription();
          nextCategory();
          nextCatDesc();
        } else {
          console.log("Alle Antworten:", answers);
         
        }
      };


    const { answers, setAnswers } = useAnswer();
     
    const handleAnswer = (answer) => {
        const updatedAnswers = [...answers];
        updatedAnswers[currentItem] = answer;
        setAnswers(updatedAnswers);
        setSelectedAnswer(answer);
    };

  

    return (
        <div className="flex flex-col w-full max-w-[1280px] xl:my-10 my-28 px-6 lg:gap-y-15 gap-y-10 ">
            <SubNavigation sections={sections} />
            <section className="flex flex-col items-start">
                <div className="sm:w-[90%] md:w-[100%] lg:w-[94%] mt-5 w-full">
                    <h2 className="sm:w-[90%] mb-8">{categories[currentCategory]}</h2>
                    <p>{catDesc[currentCatDesc]}</p>
                </div>
            </section>
            <section className="flex flex-col lg:w-[94%]">
                <div className ="box glassBox2 flex flex-col w-full min-h-[650px]">
                    <h3 className="p-10 ml-10 mt-4 self-start">{items[currentItem]}</h3>
                    <p className="pl-16 pr-6 ml-10 mt-2 mr-16 self-start"> {description[currentDescription]} </p>
                    <div className="flex-grow"></div>
                    <div className="flex gap-6 flex-col md:flex-row">
                        {["stimme vollkommen zu", "stimme zu", "stimme nicht zu", "stimme gar nicht zu", "keine Antwort"].map((option) => (
                        <button
                            key={option}
                            className={`p-3 box glassBox rounded border ${answers[currentItem] === option ? "box2 text-white"  : "glassBox2"}`}
                            onClick={() => handleAnswer(option)}
                        >
                            {option}
                        </button>
                        ))}
                    </div>
                    
                    <div className="p-10 mt-8 flex self-end">
                        <UXButton text="Weiter" useGlassyBox onClick={() => selectedAnswer && nextItem()} disabled={!selectedAnswer} 
                        to={currentItem === items.length - 1 ? "/Ergebnisse" : undefined} ></UXButton>
                
                    </div>       
                </div>
              
            </section>
            <div>
    
  </div>

        </div>
      
    );
  };
  
  export default Fragebogen;