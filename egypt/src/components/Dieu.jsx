import React from "react";
import styled from "styled-components";
import un from "../images/un.png";
import deux from "../images/deux.png";
import trois from "../images/trois.png";
import quatre from "../images/quatre.png";
import cinq from "../images/cinq.png";
import six from "../images/six.png";
import sept from "../images/sept.png";
import huit from "../images/huit.png";
import neuf from "../images/neuf.png";
import dix from "../images/dix.png";

const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 1.6;
  font-family: "Montserrat", "HelveticaNeue", "Helvetica Neue", sans-serif;
  color: #072f8c;
  font-weight: 400;
  -webkit-text-size-adjust: 100%;
  img {
    padding: 20px;
  }
`;

const Title = styled.h1`
  display: flex;
  align-items: center;

  color: white;
  font-weight: 400;
`;

const StyledComponents = () => (
  <div>
    <Container>
      <img src={un} alt="un"></img>
      <Title>
        Osiris était un roi sage qui étaitmarié à sa sœur, Isis. Lorsqu'il fut
        assassiné par leur frère Seth, elleusa de magie pour le ressusciter dans
        le but d’avoir de lui un fils.Celui s’appela Horus et il vint venger la
        mort de son père en assassinant son oncle. Horus est ensuite devenu le
        roi d'Égypte, tandisqu'Osiris est devenu le roi des morts et le juge des
        enfers.
      </Title>
    </Container>

    <Container>
      <img src={deux} alt="deux"></img>
      <Title>
        Isis était l'ultime déesse car elle était la mère d'Horus et à la fois
        épouse et sœur d'Osiris. Lorsque son mari bien-aimé fut assassiné par
        leur frère Seth, elle rassembla les parties démembrées du corps d'Osiris
        et les réunit avec des bandages, jetant ainsi les bases de la pratique
        de l'Égypte ancienne qui consistait à momifier les défunts.
      </Title>
    </Container>
    <Container>
      <img src={trois} alt="trois"></img>
      <Title>
        Horus,l'un des plus importants Dieux Égyptiens était le fils d'Osiris et
        d'Isis. Selon le célèbre mythe, il a vengé le meurtre de son père en
        assassinant son oncle Seth, ce pourquoi il devint le nouveau roi
        d'Égypte. Les premiers pharaons égyptiens ont par la suite légitimé
        leurs règnes en se présentant comme l’incarnation d’Horus. Également
        vénéré comme le dieu de la lumière et du ciel, Horus était généralement
        représenté comme une créature mâle à tête de faucon arborant une
        couronne blanche et rouge.
      </Title>
    </Container>
    <Container>
      <img src={quatre} alt="quatre"></img>
      <Title>
        Thoth,le dieu de la sagesse, de l'écriture et de la magie était le plus
        souvent représenté sous la forme d’un homme à tête d'ibis. Thot était le
        scribe du monde souterrain, qui enregistrait un verdict concernant
        chaque défunt dans la salle de la Maât, entretenait la bibliothèque des
        dieux, écrivait les sorts du "Livre des morts" et rédigeait "Le Livre de
        Thot" (contenant les secrets de l'univers). Mais il a également joué un
        rôle important dans de nombreux mythes de l'Égypte ancien.
      </Title>
    </Container>
    <Container>
      <img src={cinq} alt="cinq"></img>
      <Title>
        Râ (ou Rê) était le dieu du soleil et l'une des divinités plus
        importantes de l’Égypte antique. Il fut associé à la construction des
        pyramides et à la résurrection des pharaons. Symboliquement, il naissait
        chaque matin au lever du soleil ; il mourrait symboliquement de la même
        façon à chaque coucher de soleil. Chaque nuit, il commençait un voyage
        dans le Monde souterrain. Plus tard, Rê fut étroitement associé à Horus.
      </Title>
    </Container>
    <Container>
      <img src={six} alt="six"></img>
      <Title>
        Seth ou Seth était le dieu du désert et des tempêtes qui, plus tard, a
        été associé également au chaos et à l'obscurité. Il était représenté la
        plupart du temps sous la forme d’un homme à tête de chien pourvu d’un
        long museau et d’une queue fourchue ; on pouvait cependant parfois le
        voir représenté en cochon, crocodile, scorpion ou en hippopotame. Seth
        est l'un des personnages principaux de la légende d'Osiris et d'Isis. En
        raison de la popularité croissante du culte d'Osiris, Seth s’est vu
        diabolisé et ses images ont été retirées des temples.
      </Title>
    </Container>
    <Container>
      <img src={sept} alt="sept"></img>
      <Title>
        Mut,en tant qu'épouse d'Amon et mère de Khons, Mout était l'un des
        principaux.Vénérée comme la grande mère divine, Mut était généralement
        représentée comme une femme portant une couronne blanche et rouge, mais
        elle était aussi parfois représentée avec la tête ou le corps d'un
        vautour ou sous la forme d’une vache car, dans la période ultérieure,
        elle a fusionné avec Hathor, une autre grande divinité « mère ».
      </Title>
    </Container>
    <Container>
      <img src={huit} alt="huit"></img>
      <Title>
        Bastet était une déesse féline qui était représentée soit sous la forme
        d'un chat, soit sous la forme d'une femme à tête de chat. Elle était la
        fille du dieu du soleil Râ et était étroitement associée au chat
        domestique. Bastet était vénérée pour sa nature maternelle et
        protectrice et était souvent peinte entourée de chatons. Mais on croyait
        cependant qu’elle savait également se montrer féroce lorsque cela était
        nécessaire – en effet, les chats étaient capables de tuer les serpents,
        l'une des créatures les plus mortelles de l'Égypte ancienne.
      </Title>
    </Container>
    <Container>
      <img src={neuf} alt="neuf"></img>
      <Title>
        Amon ou Amun, qui se traduit par "Le Caché" était à la tête du panthéon
        thébain des dieux et déesses. Vénéré comme le roi des dieux (tout comme
        Zeus en Grèce antique), Amon était généralement peint sous une forme
        humaine, mais il était parfois représenté avec la tête de bélier. Comme
        beaucoup d'autresDieux Égyptiens, qui ont finalement été assimilés à
        leurs « versions » locales, Amon a plus tard fusionné avec Râ pour
        former Amon-Râ qui est demeuré le dieu principal pendant toute la
        période de l'Égypte ancienne.
      </Title>
    </Container>
    <Container>
      <img src={dix} alt="dix"></img>
      <Title>
        Ptah a été à l’origine un dieu local à Memphis. Cependant, à mesure que
        l'influence de Memphis s'étendait sur l'Égypte, il est devenu populaire
        ailleurs partout ailleurs. Il était un dieu créateur et la divinité
        protectrice de l'artisanat et du travail manuel. Ptah était généralement
        représenté comme une figure momifiée.
      </Title>
    </Container>
  </div>
);

export default StyledComponents;
