import UXButton from "../components/UXButton";

const Start = () => {

return (
    <div className="flex flex-col items-center w-full max-w-[1280px] xl:my-20 my-28 px-6 lg:gap-y-24 gap-y-10">
      <section
        id="intro"
        className="flex sm:flex-row flex-col items-start lg:gap-16 md:gap-10 gap-6">
        <div className="sm:w-[90%] mt-20 w-full">
          <h1 className="sm:w-[90%] mb-8">Einsatz von Künstlicher Intelligenz / Automation  </h1>
          <h2>Self-Assesment-Tool für gemeinwohlorientierte Organisationen</h2>
      
          <p className="bigger">
            Das Self-Assessment Tool bietet Ihnen die Möglichkeit zu prüfen, ob {" "}
            <b>Prozesse in ihrer Organisation für die Nutzung von Automation oder Künstlicher Intelligenz (KI)
            geeignet
            </b>  
            sein könnten. Dazu bekommen sie, basierend auf ihren Antworten, {" "}
            <b>weitere Informationen</b> um sich weiter mit dem Thema beschäftigen zu können. <br/> 
            Dieses Tool ist unabhängig von ihrem Vorwissen und Erfahrungsniveau nutzbar.
          </p>

        </div>
      </section>

      <section className="flex lg:flex-row flex-col w-full lg:gap-10 gap-4 mb-4">
        <UXButton text="Self-Assessment starten" useGlassyBox to="/Fragebogen">
         
        </UXButton>

      </section>

    </div>
  );
}

export default Start;