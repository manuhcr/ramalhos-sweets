import imgDoceria from '../assets/doceria.webp';
export default function Sobre() {
  return (
    <section className='sobreNos'>
      <h2 className="sobretitle">Sobre a doceria</h2>

      <div className="divsobre">
        <img
          className="img-doceria"
          src={imgDoceria}
          alt="Imagem da doceria"
        />

        <p className="sobre">
          Minha jornada com a <strong>Ramalho Sweets</strong> começou de forma muito íntima e
          afetiva — com a lembrança dos aromas da infância, das tardes na cozinha com minha família
          e da alegria que um doce bem feito pode trazer. Desde muito nova, tive um encantamento
          especial pela confeitaria.
          <br />
          <br />
          Com o tempo, essa paixão cresceu e se tornou um propósito: espalhar doçura, afeto e boas
          memórias por meio da confeitaria. Foi com esse sentimento que nasceu a Ramalho Sweets — um
          sonho que virou realidade, movido por amor, coragem e muita dedicação. A proposta sempre
          foi ir além de simplesmente vender doces. Eu queria criar experiências que abraçassem o
          coração de quem experimentasse.
          <br />
          <br />
          Na Ramalho Sweets, cada doce é preparado artesanalmente, com ingredientes de qualidade,
          atenção aos detalhes e, acima de tudo, com muito carinho. Acredito que a confeitaria é uma
          forma de expressar cuidado, acolhimento e celebração. Por isso, cada bolo, brigadeiro,
          churro ou sobremesa que sai da minha cozinha carrega uma parte de mim — da minha história,
          do meu amor pelo que faço, e da vontade sincera de tornar o dia de alguém mais feliz.
          <br />
        </p>
      </div>
    </section>
  );
}