import Card from "./Card";

export default function CardLists() {
  return (
    <>
      <div className="title">
        <h4 className="font-bold text-2xl bg-gradient-to-r mx-auto tracking-widest text-center md:text-left from-[#F28CC1] to-[#8E70B7] text-transparent bg-clip-text mb-40 p-6 md:pl-24">
          Depoimento dos nossos clientes fieis
        </h4>
      </div>

      
      <div>
        <section className="flex md:flex-row md:gap-8 md:px-8 justify-center  flex-col gap-24">
            <Card
              information="Joao da Silva, 30 anos"
              quote="De fato um servico"
              imgSrc="../public/card1.jpg"
            />

            <Card
              information="Sandra Moras, 27 anos"
              quote="verdade esse bilhete"
              imgSrc="../public/card2.jpg"
            />

            <Card
              information="Mae, CENSORED anos"
              quote="wow! impressionante"
              imgSrc="../public/card3.jpg"
            />

    

        </section>
      </div>
    </>
  );
}
