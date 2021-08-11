import React, { useEffect, useState, useRef } from 'react';
import { NextSeo } from 'next-seo';
import Layout from '@/components/layout';
import Navigation from '@/components/header';
import {
  LazyMotion,
  domAnimation,
  m,
  useViewportScroll,
  useTransform,
  useMotionValue,
} from 'framer-motion';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { ContainerBox } from '@/components/container';

export default function HomePage() {
  const containerRef = useRef(null);
  const { scrollY, scrollYProgress } = useViewportScroll();
  const background = useTransform(
    scrollY,
    ['300px', '600px', '900px'],
    ['#ff008c', '#7700ff', 'rgb(230, 255, 0)']
  );

  return (
    <Layout>
      <NextSeo title="Home" />
      <Navigation />
      <LocomotiveScrollProvider
        options={{ smooth: true, lerp: 0.05 }}
        containerRef={containerRef}
        watch={[]}>
        <section data-scroll-container ref={containerRef} id="scroll-container">
          <aside data-scroll-section>
            <LazyMotion features={domAnimation}>
              <ContainerBox className="has-mx">
                <m.div initial="initial" animate="enter" exit="exit">
                  <m.main>
                    <m.div style={{ background, overflow: 'scroll' }}>
                      <m.div>
                        <h1>Hello</h1>
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Dolorum, voluptates amet. In, saepe veritatis
                          dolor maxime nisi temporibus atque nemo ab repudiandae
                          architecto, molestiae ut ex sunt ea iusto voluptatum
                          nesciunt minus. Dolore corrupti sapiente nostrum eaque
                          aliquid maiores aperiam minima deleniti, laudantium
                          commodi ab dicta, voluptatem, quibusdam non omnis hic
                          quod corporis alias tenetur aspernatur aliquam at.
                          Iure quo sit numquam eos quis animi quos impedit?
                          Atque rerum nesciunt necessitatibus soluta omnis odit
                          laboriosam nobis doloremque alias tenetur quas aliquid
                          ea debitis, cupiditate, maiores, esse ad sequi et
                          magnam amet! Alias libero sequi perferendis neque
                          reprehenderit vel repellat omnis ut enim saepe
                          veritatis explicabo non laborum minima, corporis magni
                          quasi nulla cum illum. Ipsum aperiam culpa deserunt.
                          Animi eius delectus, obcaecati pariatur officiis
                          quisquam dignissimos sed doloribus doloremque.
                          Adipisci expedita iusto voluptatum, nihil, quam in,
                          totam quia sapiente nostrum at minima inventore iure
                          accusamus. Dignissimos eum quod voluptatibus et.
                          Provident sint eaque perferendis ex, modi ipsa,
                          tenetur nesciunt earum sapiente illo veniam, rem
                          nostrum corporis explicabo at. Magni perferendis unde
                          sapiente reprehenderit labore tenetur. Numquam aliquam
                          corporis laborum. Doloribus fugit voluptatibus
                          blanditiis iure. Ratione eaque reiciendis, impedit
                          beatae in voluptatum facilis! Aspernatur eligendi quae
                          eveniet voluptatibus vitae temporibus, nobis deserunt
                          illo. Nemo eligendi ullam ea qui voluptatum
                          dignissimos commodi modi quam ducimus labore dolore,
                          consequuntur eveniet ipsum. Eligendi sit cumque nisi
                          doloribus, hic dolores perspiciatis blanditiis
                          deserunt eveniet dolor, dolorum velit sunt incidunt
                          nesciunt exercitationem asperiores eius
                          necessitatibus, veniam ipsum. Iusto quas illum
                          inventore dolor labore ad, nihil temporibus quaerat,
                          ea fugit reprehenderit? Explicabo doloremque eveniet
                          at earum maiores quam sapiente, eos culpa odio
                          assumenda perspiciatis natus, illo ut beatae similique
                          impedit qui incidunt quaerat fugiat. Fuga quos dolores
                          minima excepturi, voluptates, repellat, placeat soluta
                          vero esse autem iste distinctio! Quis consequatur
                          officiis nam asperiores soluta quasi laborum modi.
                        </p>

                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Alias illo ad minus. Id eveniet inventore
                          asperiores sequi. Consequuntur, magni fugit
                          necessitatibus laborum facilis magnam officia
                          laudantium obcaecati optio numquam explicabo est
                          voluptatibus, earum excepturi ut aliquid sequi
                          deserunt nemo? Excepturi voluptates culpa molestiae
                          libero inventore nihil alias, neque iste fuga! Debitis
                          accusantium saepe perferendis. Nostrum doloribus
                          maiores, iste laborum nam possimus asperiores, sunt
                          natus, ducimus modi placeat ipsa quae ea. Quidem,
                          aliquam praesentium asperiores quibusdam, facilis
                          ducimus libero tempora earum expedita aliquid commodi
                          eveniet quis neque nulla quisquam natus non velit
                          nihil consequatur? Provident magni dolorem ipsa
                          quisquam! Animi omnis ipsa at ullam illo. Illum
                          accusamus dolorum deserunt atque nesciunt quo
                          doloremque? Voluptatum ad velit eum consequuntur
                          aliquid saepe est libero molestiae minus ducimus quia
                          ratione tenetur eius minima quos deleniti quasi harum
                          in assumenda modi vero, dolores beatae! Natus beatae
                          quos, minus recusandae unde dolor deserunt aperiam
                          libero provident molestias, dolore omnis corrupti
                          similique est minima vero! Totam voluptate maiores
                          quis accusamus commodi dolorem sapiente. Eos numquam
                          maxime debitis dolorum nobis voluptates maiores neque
                          et dolores minima. Repellendus, ullam placeat dicta
                          expedita facilis, facere similique impedit consequatur
                          nesciunt velit sapiente. Earum velit voluptas corrupti
                          consectetur laboriosam ipsam reprehenderit! Eligendi
                          quas impedit obcaecati accusamus ex id, dolore ducimus
                          consequatur nesciunt fugit consectetur perferendis
                          adipisci ullam reiciendis quos! Delectus consequuntur
                          a, praesentium voluptas cum tenetur incidunt
                          provident. Odit minima molestiae fugit provident
                          quibusdam cum veniam eum distinctio ut sunt, nostrum
                          labore, sapiente reiciendis repellat laborum aut esse.
                          Aliquid qui corporis voluptatibus nobis impedit. Sed
                          incidunt quaerat dolor doloribus repellendus nulla
                          cupiditate dolores magni voluptatem totam accusamus
                          tempore, quibusdam, facere porro, quos ullam animi
                          dicta voluptate vitae cum corrupti expedita ipsam.
                          Maxime deserunt error natus sint, omnis iste suscipit
                          sequi minus nesciunt aperiam. Est, dolorum numquam
                          delectus aperiam ea a earum, ex doloremque voluptas
                          ipsam rerum natus aliquam amet ipsum deleniti omnis
                          eveniet voluptate adipisci nesciunt voluptatibus,
                          optio molestias voluptates. Ullam eveniet ex impedit a
                          autem, magni eius natus inventore error pariatur
                          suscipit corporis illum fugiat iste, distinctio
                          maxime! Asperiores sint fuga itaque aliquid, in
                          voluptas voluptatibus, reiciendis ea illum iure, neque
                          dicta numquam tempora sed repellendus! Tempore alias
                          eveniet, sequi consequatur reprehenderit enim unde
                          possimus obcaecati est ex magni quos aperiam tempora
                          iste corporis. Magni dolor alias vitae exercitationem
                          iure veritatis, quidem totam? Voluptatibus ipsum, sint
                          consectetur voluptatem ea, vero accusamus odio
                          officiis perferendis nostrum eveniet omnis optio rem
                          magnam dicta consequuntur dignissimos? Non
                          consequuntur sint, aliquid deleniti optio eaque libero
                          veritatis assumenda, dolorem enim dolore tempora sequi
                          expedita eveniet dolores, recusandae nulla pariatur
                          atque cum eligendi sapiente suscipit. Expedita dolorum
                          odit id, quae dolores facere animi atque nobis dolore
                          ratione corrupti aut modi possimus velit eius sit
                          dolorem maxime dignissimos molestiae enim eligendi sed
                          obcaecati. Tempora vitae, totam labore itaque cum
                          quasi vel! Repellat officia tempora nostrum sequi.
                          Impedit dolor laudantium cupiditate qui dolorem
                          voluptates aliquam quis. Dolorum, cupiditate beatae.
                          Sequi, voluptatem similique inventore iure excepturi
                          dolorem asperiores iusto, eius necessitatibus
                          veritatis nihil laborum eum illum rem incidunt? Autem
                          possimus temporibus voluptatem, praesentium non
                          minima. Itaque corporis fugiat minus harum. Laborum
                          consectetur rerum atque deserunt corrupti voluptate.
                          Dolorum, nobis! Numquam nisi dolorum minus vel. Nam
                          amet, molestias non doloremque velit quod at omnis
                          excepturi fuga illum! Ut neque molestiae quisquam quam
                          architecto in unde odio vitae nam quos qui fugiat,
                          ipsa debitis at eaque doloremque vero culpa. Quaerat
                          ex sed at aut, ipsam magni possimus commodi libero
                          modi. Corrupti maxime suscipit, possimus doloribus
                          voluptatum commodi eius omnis nesciunt! Blanditiis
                          repudiandae magnam reiciendis totam. Expedita
                          repellendus quidem dolorum atque odio quos sit ratione
                          amet ipsa in, dicta debitis, itaque laborum velit
                          vitae doloremque id nulla rerum, nam eveniet rem
                          aspernatur libero sint exercitationem! Ut esse
                          exercitationem assumenda sint expedita impedit
                          quisquam, ipsa fugiat ex necessitatibus consectetur
                          ipsum modi rerum accusantium. Vel sunt corporis natus
                          explicabo ut voluptatum voluptate omnis tempora
                          doloribus tempore? Eius placeat porro veniam, natus ea
                          voluptatem hic aliquid dignissimos temporibus. Ipsam
                          est accusamus nostrum inventore? Saepe accusamus
                          sequi, consectetur cumque est hic officia minima ipsam
                          veniam, quia, officiis voluptas harum adipisci porro
                          ipsa amet unde. Id nesciunt voluptate quos aperiam
                          ullam, suscipit cupiditate eaque? Illo amet possimus
                          magnam, et adipisci natus quos? Unde repellendus
                          voluptatem omnis explicabo. Dolores ullam facere
                          repudiandae eligendi voluptates labore enim possimus
                          officia temporibus, cupiditate quod explicabo.
                          Laudantium iste ea itaque expedita, illum delectus
                          quae ut quod porro nostrum, doloribus, reprehenderit
                          corporis exercitationem? Rerum labore nam soluta amet,
                          corporis veniam et vero sunt ducimus pariatur alias
                          magni quisquam officiis repellat culpa at, accusantium
                          dolorem cum reprehenderit dicta! Quo voluptates porro
                          nisi quam accusamus autem nam est, deserunt ipsa sint
                          quisquam rem adipisci totam impedit amet praesentium
                          explicabo qui asperiores vel soluta incidunt magni
                          inventore atque commodi! Odio molestiae maiores unde
                          hic officiis sunt, sed rem animi, omnis perspiciatis,
                          quam alias dolorem delectus aspernatur quia
                          dignissimos mollitia soluta aperiam ipsam ullam ad
                          enim esse? Odio minus dicta doloribus porro, excepturi
                          et eius maiores, hic rem temporibus nam inventore
                          aliquid, soluta dolorum quidem amet possimus
                          voluptatem nemo facilis labore delectus officiis ab
                          repellat! Eius porro, perspiciatis quae provident in
                          eligendi odio beatae molestiae ipsa qui consequatur
                          enim vel veritatis nulla pariatur quidem neque
                          adipisci voluptates molestias architecto, dicta
                          debitis. Commodi accusamus, corrupti nemo neque
                          maiores dolor ipsum blanditiis, asperiores non fugit
                          ullam ex repellat inventore cupiditate enim. Error
                          rem, ad exercitationem repellendus doloremque id
                          repudiandae velit quaerat ea possimus accusamus
                          consectetur facilis necessitatibus adipisci fuga
                          aspernatur tempora. Natus minus sapiente impedit odit
                          ea nesciunt deleniti consequatur, officiis aliquid.
                          Odit adipisci odio vitae quaerat, enim inventore
                          voluptas ducimus totam, corporis quam alias
                          doloremque! Impedit recusandae perferendis consequatur
                          illo ad culpa reiciendis aut animi ipsum fugiat
                          dignissimos modi, non velit est doloremque sequi ullam
                          veritatis quibusdam voluptatem odio beatae molestiae
                          maiores praesentium! Aliquam amet minus debitis,
                          necessitatibus laudantium nisi rem maxime veritatis.
                          Ratione aut velit vitae ab illum alias provident quam
                          doloribus voluptatum quisquam ut adipisci architecto
                          repudiandae esse omnis quod similique eos illo
                          inventore explicabo harum nostrum, nisi nobis? Error,
                          libero aperiam. Repellendus magnam autem magni placeat
                          aspernatur ea at consectetur iusto neque assumenda
                          provident eveniet, quia mollitia repellat corporis
                          facilis distinctio excepturi temporibus eos
                          voluptatum. Aliquam laborum eligendi reiciendis natus,
                          minima dignissimos laudantium ab, voluptatum quaerat
                          qui ipsa libero accusantium minus nesciunt sunt,
                          temporibus optio alias error non maiores accusamus
                          neque illum. Vero error nam dolor sequi amet eligendi
                          accusantium repudiandae itaque cumque fuga facere
                          vitae ut facilis debitis, perferendis expedita minus,
                          eaque alias. Tenetur sit aperiam atque fugiat earum
                          dolore quidem. Ad eveniet dolorem tempora aliquid eum
                          error, officia a minus earum dicta suscipit et!
                          Ducimus, amet aperiam culpa velit facere iste nulla
                          necessitatibus cum alias dolorum commodi aspernatur?
                          Et esse reiciendis, inventore pariatur ab sint ea
                          vitae soluta, quam voluptate voluptatum ipsum
                          repellendus adipisci consequuntur necessitatibus odit
                          accusantium excepturi molestias quo repellat? Laborum,
                          omnis possimus, tempora, itaque fuga sint cumque
                          provident unde dignissimos ut adipisci! Est porro quod
                          optio maxime molestias, distinctio ipsam minus non,
                          quia temporibus pariatur debitis in? Molestiae quod,
                          repellat dolorum sed ullam ad in veritatis
                          praesentium, vel voluptatibus numquam autem laudantium
                          reprehenderit qui iste nihil neque rerum eius fugiat
                          quam recusandae porro! Delectus consequatur corrupti
                          magni voluptas eius officia non at enim. Reprehenderit
                          architecto quas modi iure! Ratione maxime error non
                          cupiditate excepturi consectetur, sequi labore
                          nesciunt! Omnis debitis iure ipsum deleniti magnam
                          assumenda corporis est dolore consequuntur explicabo
                          ad inventore autem optio voluptate quod odio
                          reprehenderit earum, nobis beatae necessitatibus quo
                          magni dolores cum. Reprehenderit laborum doloribus
                          corrupti impedit perspiciatis dolore minima inventore
                          iure possimus officiis! Eaque illo atque accusamus
                          nihil quod, ipsum voluptate rem nisi alias. Unde
                          reprehenderit culpa adipisci hic incidunt laboriosam
                          repellendus laborum, aliquid aliquam debitis eos
                          accusamus quaerat a inventore. Consequuntur rem porro
                          aut fugit, quae culpa quia ullam nam saepe id, omnis
                          et. Dolor aliquid aperiam mollitia perferendis quidem.
                          Perspiciatis, blanditiis explicabo repudiandae tempore
                          adipisci incidunt ipsa ab cumque quasi temporibus
                          provident. Voluptatum optio asperiores, eveniet quis
                          reiciendis repellat beatae vero recusandae
                          repudiandae, debitis delectus quibusdam eos doloremque
                          id blanditiis quos deserunt. Tempore ea reiciendis
                          necessitatibus temporibus facere culpa consequuntur
                          asperiores quia voluptatum repudiandae. Nostrum amet
                          possimus, ut provident autem laborum quaerat expedita
                          dicta dolores nemo voluptas fugiat quos modi unde
                          quisquam delectus, ipsa assumenda quam. Laboriosam quo
                          temporibus quia libero unde, dicta, illum fugit sint
                          ea quae asperiores, sed soluta dolor doloribus.
                          Repellendus sunt dolor fuga. At, quisquam nostrum nam
                          est sed deserunt, sint, asperiores adipisci dolorum
                          rerum quam? Consectetur illum reiciendis iusto
                          obcaecati praesentium velit ea sunt illo perferendis
                          quibusdam odio eveniet, libero aspernatur alias
                          voluptas beatae amet similique, nobis autem adipisci
                          facere! Ratione expedita ullam voluptas cupiditate
                          nulla aperiam, in officiis suscipit ipsam distinctio.
                          Voluptates deserunt nobis magnam voluptatum enim
                          architecto, inventore corporis hic illo, tempore, nam
                          sint? Consequatur corporis quia aut commodi nesciunt
                          nulla veniam mollitia veritatis similique ad repellat,
                          at maxime eligendi. Obcaecati minima explicabo tempora
                          fuga, doloremque delectus cumque provident, laudantium
                          a dicta similique quod fugit illo culpa molestiae
                          quibusdam deleniti corporis dolorum? Accusamus
                          laboriosam voluptatum dolorum consequuntur. Repellat
                          ipsum fugit dolorum veritatis aperiam ab cum! Dolore,
                          assumenda vero. Rem esse voluptas asperiores illum
                          iusto omnis aut, debitis, officia animi dignissimos
                          dicta eum magni quo molestiae. Perferendis expedita in
                          animi, dolore quas, doloremque maxime eaque quis totam
                          minus, atque explicabo impedit architecto? Explicabo,
                          provident magnam ratione iure eius laboriosam rerum
                          voluptate error aliquid illum sint ad quidem eos
                          nesciunt recusandae, dignissimos ducimus incidunt
                          corrupti cumque nulla? Laudantium deserunt sapiente
                          placeat nam magni amet et, neque recusandae quo
                          aliquam facere iure, doloribus ut nihil omnis
                          repudiandae, explicabo corrupti aspernatur. Blanditiis
                          architecto cumque repellat, accusantium dolor ipsa
                          officiis quis corporis impedit voluptates delectus
                          ipsam, quae porro sed! Veniam labore reprehenderit
                          culpa officiis. Quam recusandae illum tempora,
                          accusantium quos adipisci possimus aut sunt. Tempore
                          cum dolorem possimus dolor nobis fugit suscipit,
                          eveniet voluptate odit atque amet exercitationem nihil
                          tempora dolore eaque ad, quisquam adipisci soluta quam
                          iure ratione veniam facere. Quis vel perspiciatis
                          iusto aspernatur maxime nobis explicabo! Consequuntur
                          eum assumenda illum, officia cum facilis repellendus
                          nemo asperiores quis ipsam sint ipsum, voluptates
                          consectetur animi, atque reprehenderit eligendi esse
                          consequatur magni! Ex pariatur sed maxime explicabo
                          cum, at distinctio. Modi officia amet sequi error
                          veritatis odit sint mollitia nam ducimus esse animi
                          explicabo hic unde laboriosam molestiae incidunt
                          possimus, natus soluta totam dolorum vitae
                          reprehenderit. Laudantium veniam aperiam temporibus
                          dolorem amet debitis rem. Quod quas ullam accusamus
                          praesentium, quibusdam error reiciendis! Nihil
                          architecto soluta deleniti consectetur dolore, illo,
                          nemo harum iusto neque pariatur natus recusandae
                          similique id nostrum rem optio dolorum praesentium
                          aperiam magnam odit! Cumque eos est laborum impedit
                          explicabo excepturi quaerat repellendus beatae
                          reiciendis rem voluptatum, maiores optio tenetur,
                          blanditiis vero odio deserunt expedita, repellat eaque
                          nisi rerum provident. Quod soluta in doloribus odit
                          explicabo culpa voluptatibus mollitia pariatur quis
                          animi nemo eius maiores ratione reprehenderit, dicta
                          facilis corporis similique doloremque ipsam dolore
                          cupiditate! Distinctio sapiente pariatur vitae.
                          Sapiente totam amet eos, in exercitationem enim vitae
                          tenetur tempore praesentium dicta, repellat adipisci
                          deleniti perspiciatis. Rem modi nihil maxime,
                          explicabo aspernatur sint, ratione numquam et esse
                          nisi laudantium vitae qui quae doloremque tempora
                          exercitationem cupiditate enim praesentium fugit!
                          Distinctio aliquam necessitatibus nemo nihil dolorem
                          accusantium minima eum aperiam laboriosam quod
                          dignissimos adipisci quisquam optio inventore
                          recusandae rem corporis cumque, eaque quasi? Mollitia
                          itaque dolorum perferendis ut laboriosam. Iste
                          veritatis obcaecati debitis possimus corporis,
                          necessitatibus nulla, illo dolorem laboriosam corrupti
                          natus odio laborum. Culpa veniam eius doloribus
                          laborum sequi debitis repellat. Ut quas rerum tempore
                          minus excepturi voluptates odit ipsum ducimus, iusto
                          alias numquam ea veniam facere perferendis odio error
                          natus quo ipsa eaque maxime est culpa enim sit?
                          Accusantium laborum suscipit ad esse amet dicta eius
                          totam quidem, neque cum ducimus repudiandae beatae
                          corporis, minima maxime. Exercitationem ea cumque
                          eaque recusandae quia cum vitae? Ipsum labore unde
                          eaque quisquam, consequatur quod corrupti maxime
                          error, ex illum earum accusamus vitae quasi quam
                          inventore porro nam sequi consectetur commodi
                          voluptates vel iure nisi. Dolorum aut optio,
                          praesentium ducimus repellendus voluptatibus possimus
                          consequuntur animi expedita perferendis cumque? Eius
                          ea tenetur labore, nesciunt, deleniti distinctio
                          aliquid, error molestias asperiores vel pariatur dolor
                          temporibus recusandae. Repellat eaque, quia error
                          delectus, molestias fugiat obcaecati illum velit
                          aspernatur enim dolor. Similique, vel! Delectus, rerum
                          dolorem? Fuga cumque asperiores laboriosam saepe
                          voluptatem magnam harum qui veniam quo similique
                          maiores possimus doloribus, ab ratione corporis eum,
                          consequuntur laudantium iste tenetur, blanditiis
                          impedit maxime cum? Vitae, incidunt provident! Vitae
                          iste doloremque exercitationem, sed a nesciunt iure
                          soluta quos laboriosam beatae labore ad odio, suscipit
                          voluptatum enim nemo dolores. Qui quidem perferendis
                          accusamus voluptas? Cum, eum sunt, quidem doloribus
                          deserunt magnam culpa provident quas eius doloremque
                          suscipit aut harum. Saepe in, commodi voluptatibus
                          rerum atque odio, quas quo tenetur dicta expedita
                          eligendi vero pariatur non recusandae doloribus est
                          reiciendis. Ipsa laboriosam, iste rem delectus ullam
                          at minus id in unde incidunt molestias deleniti
                          temporibus ut nulla nisi animi impedit eveniet amet
                          nostrum nihil veniam dignissimos. Maxime corporis
                          natus ipsam at voluptate, dolorem sunt. Molestias
                          tempore, cum, porro itaque aut qui accusamus vero
                          maiores exercitationem tempora vitae eveniet iure
                          facere molestiae deserunt rem. Tempora unde odit
                          aperiam? Facere recusandae, repellendus delectus
                          assumenda rem, hic vel harum modi quae alias nostrum
                          voluptatibus ea cum. Totam, vel quo. Voluptatibus
                          nesciunt earum sapiente, vel quisquam ducimus magnam
                          ea quidem quo ratione laborum nulla autem quod totam,
                          provident at. Natus voluptatem veritatis, minus,
                          possimus corporis numquam fugiat excepturi rerum
                          pariatur commodi sint eveniet minima quo rem cumque
                          earum, quidem voluptates illum reiciendis maxime omnis
                          praesentium eius adipisci ad! Eum itaque, repellendus
                          vitae placeat eos rerum commodi unde impedit aliquam
                          voluptatum! Facere recusandae, suscipit quibusdam
                          fugit inventore expedita modi, natus qui illo dolorum
                          necessitatibus vel voluptates fugiat, quasi iusto fuga
                          error! Itaque temporibus sapiente molestiae minus
                          minima id, impedit nulla placeat repellat dicta,
                          consectetur soluta. Laboriosam eius id aliquam,
                          nesciunt corporis quo explicabo totam. Nihil ab harum
                          aperiam quod numquam quidem commodi itaque velit
                          officiis, reiciendis culpa natus nisi. Commodi sunt
                          tenetur nulla molestias ipsam aliquam voluptatum
                          quaerat doloremque illum et voluptatem placeat alias
                          possimus velit architecto, asperiores est fuga ipsum,
                          libero maiores adipisci! Sint illum incidunt sit ipsum
                          impedit quam a praesentium accusantium enim explicabo
                          eum assumenda, corrupti blanditiis, autem dignissimos
                          sed. Facere rerum blanditiis nulla voluptatem eius
                          minima consectetur, aperiam dolores tenetur corrupti,
                          voluptas non, pariatur hic temporibus quidem vero
                          tempora reprehenderit quis similique animi ullam?
                          Soluta reprehenderit itaque voluptatum similique rerum
                          vero, tempora, ea dolores in odio fugiat doloribus
                          quisquam quas ullam eius officiis blanditiis.
                          Pariatur, incidunt. Amet eaque, corrupti expedita,
                          ipsam voluptas repellat totam excepturi odit quod
                          suscipit sed iste, blanditiis itaque placeat! Non quas
                          molestiae, voluptatem sint consequuntur impedit eos!
                          Labore natus, cupiditate officiis facere doloremque
                          voluptate maiores et ullam consequuntur porro sapiente
                          aspernatur soluta nesciunt ipsam fuga laborum,
                          reprehenderit dignissimos totam at. Fugit vel adipisci
                          veniam voluptates itaque modi recusandae. Ut maiores
                          mollitia molestias sequi consequatur aliquid.
                          Consectetur qui fugit ipsum cumque voluptas
                          praesentium ad rem vitae. Deserunt incidunt quo
                          doloremque aperiam nisi consectetur impedit asperiores
                          et earum illo, accusamus culpa quidem error, laborum
                          consequuntur iste blanditiis numquam placeat, quisquam
                          praesentium? Porro, tempora nisi perspiciatis facere
                          aut suscipit blanditiis sit delectus! Amet voluptatum
                          exercitationem eligendi maxime modi. Ab reprehenderit,
                          dignissimos aut dolore nesciunt quaerat praesentium
                          saepe quasi nostrum maxime placeat voluptates
                          reiciendis modi soluta! Itaque reprehenderit labore
                          dignissimos ullam dolorum, temporibus animi assumenda
                          voluptatem consectetur doloribus ipsam fugiat
                          blanditiis consequuntur vitae accusamus provident
                          officia eum natus maiores quo quidem deleniti. Cum a
                          earum impedit quibusdam quisquam veniam quis,
                          temporibus doloribus deserunt natus officiis aliquid
                          voluptates. Dignissimos laudantium sequi, natus
                          tempore beatae sapiente mollitia quisquam vitae
                          accusamus nisi harum doloremque? Et, sit quod,
                          repellendus aliquam, laborum tenetur illo facilis
                          voluptate optio ipsam recusandae quo molestias id
                          quasi maiores eos exercitationem voluptates eius
                          numquam dolorem iste? Consequuntur debitis, in vero
                          itaque praesentium aperiam tempora amet? Sed enim
                          natus qui, numquam libero eos, quaerat neque ipsum
                          perferendis eligendi ducimus tempora molestiae commodi
                          praesentium corporis eveniet eum fuga, fugit illo
                          eaque. Velit dicta nostrum perspiciatis ex? Et maiores
                          corporis laborum repellendus, consequuntur blanditiis
                          quod, nesciunt explicabo, perferendis cupiditate
                          quaerat provident. Quo perspiciatis officia sint
                          veritatis. Assumenda necessitatibus laudantium itaque
                          soluta optio delectus earum sint laborum! Accusantium
                          nihil libero debitis inventore cum nesciunt temporibus
                          minus asperiores ipsa tempora culpa, quibusdam optio
                          autem beatae velit obcaecati exercitationem eveniet
                          laboriosam eaque unde at fugit! Sapiente magni rem
                          dolore at! Est excepturi et obcaecati ab ut
                          voluptatibus autem laboriosam, repellendus sunt
                          blanditiis at doloribus provident in veritatis?
                          Tenetur natus provident quas aut hic sapiente unde
                          magnam quisquam dolor est aperiam, voluptates ullam
                          minus quos, illo asperiores eveniet sequi velit? At
                          deserunt alias, neque, expedita blanditiis ab deleniti
                          fugit earum excepturi distinctio nulla iste cum nam
                          minus tempore perspiciatis quasi eaque? Dicta magni
                          accusamus, eligendi ullam fuga illum labore voluptatem
                          nihil quia debitis exercitationem corrupti molestias
                          adipisci temporibus illo explicabo aut architecto ab
                          non iste veniam velit. Error laboriosam officiis
                          quibusdam fugit magni velit nesciunt ea amet
                          consectetur, excepturi provident, libero asperiores
                          blanditiis nemo sed labore quo nam. Suscipit beatae,
                          libero quae ullam distinctio molestiae laborum
                          voluptas nam odit vero deserunt excepturi consectetur
                          aspernatur quam minus dolorem ad quis nemo cumque
                          nostrum. Laboriosam rerum eos fugiat facere possimus
                          sunt rem. Iste obcaecati, commodi molestiae, dolores
                          sit veritatis enim cum sed quae consectetur, deserunt
                          recusandae totam porro blanditiis dolorem nihil. Sit,
                          obcaecati quod doloremque, aspernatur necessitatibus
                          soluta harum, beatae voluptatum corrupti nam pariatur
                          sequi hic. Obcaecati odit labore laborum nam aperiam
                          beatae? Voluptate corporis nostrum ipsa nihil earum
                          quasi aperiam optio nesciunt aut vitae perspiciatis
                          aliquid laborum maxime adipisci recusandae, sapiente
                          qui unde? Illo omnis ex minima iusto, ipsa voluptates
                          assumenda. Et quisquam obcaecati quia consectetur
                          deserunt repudiandae, porro praesentium odio cum! Aut
                          distinctio reiciendis, a consequuntur dolores tempore
                          explicabo soluta? Architecto minima rem facilis quod
                          distinctio esse debitis eum nostrum officiis odit quo,
                          blanditiis corporis ipsam tenetur animi alias itaque
                          consequuntur recusandae a sed voluptatibus sint
                          necessitatibus labore iure? Ab doloremque adipisci nam
                          vitae beatae modi optio explicabo neque, quisquam
                          suscipit veritatis eius deleniti aliquam cum veniam,
                          alias accusamus at id. Repellendus nisi voluptatibus
                          debitis perferendis magnam doloribus natus laborum
                          ipsum expedita, asperiores iusto porro corrupti enim,
                          architecto totam voluptate.
                        </p>
                      </m.div>
                    </m.div>
                  </m.main>
                </m.div>
              </ContainerBox>
            </LazyMotion>
          </aside>
        </section>
      </LocomotiveScrollProvider>
    </Layout>
  );
}
