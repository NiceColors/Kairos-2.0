import React from "react";
import { Stack, Heading, Flex, Text, Image, Grid, Box } from "@chakra-ui/react";

export default function index() {
  return (
    <>
      <Stack>
        <Heading
          align="center"
          position="relative"
          mb={8}
          _before={{
            content: "''",
            display: "flex",
            width: "250px",
            height: "5px",
            opacity: "0.8",
            background: "green.400",
            position: "absolute",
            bottom: "-10px",
            left: " 50%",
            transform: "translate(-50%, 0)",
          }}
          fontSize="clamp(1.8rem, 2.8vw, 7rem)"
        >
          Informações do Evento
        </Heading>
        <Grid m="0 auto" gridTemplateColumns={{ lg: "50% 50%" }} gap="39px">
          <Box>
            <Heading mb={4} fontSize="clamp(1.1rem, 1.8vw, 2.7rem)">
              ESTÁ O MUNDO EM VÉSPERAS DO RENASCIMENTO ESPIRITUAL?
            </Heading>
            <Text mb={2} style={{ textIndent: "4em" }} textAlign="justify">
              Eis pelo que teólogos, ao longo de muitos séculos, vêm clamando; o
              que muitos deles afirmaram ver através do nevoeiro de dúvidas,
              desilusão e desespero, como uma estrela refulgindo nos altos céus.
            </Text>
            <Text mb={2} style={{ textIndent: "4em" }} textAlign="justify">
              Não sou um teólogo; sou um médico e um psicólogo. Mas, como
              médico, tenho tido experiências com milhares de pessoas de todas
              as partes do mundo — aquelas que vêm contar-me histórias de suas
              vidas, suas esperanças, seus temores, suas realizações e seus
              fracassos. Estudei cuidadosamente a psicologia delas, a qual é e
              deve ser o meu guia.
            </Text>
            <Text mb={2} style={{ textIndent: "4em" }} textAlign="justify">
              De minha experiência com esses milhares de pacientes, convenci-me
              de que o problema psicológico de hoje é um problema espiritual, um
              problema religioso. O homem de hoje está faminto e sedento de uma
              relação segura com as forças psíquicas dentro de si mesmo. Sua
              consciência, recuando em face das dificuldades do mundo moderno,
              carece de um relacionamento com condições espirituais seguras.
              Isso fá-lo neurótico, doente, assustado.
            </Text>
            <Text style={{ textIndent: "4em" }} textAlign="justify">
              A ciência disse-lhe que não existe Deus, que tudo o que existe é
              matéria. Isso privou a humanidade de sua floração plena, de sua
              sensação de bem-estar e de segurança num mundo confiável.
              (McGUIRE, W. & HULL, R.F.C. C. G. JUNG: Entrevistas e Encontros.
              São Paulo: Cultrix, 1982, p.76)
            </Text>
          </Box>

          <Box display={{ base: "none", md: "block" }}>
            <Image
              maxH="450px"
              objectFit="cover"
              src="https://super.abril.com.br/wp-content/uploads/2020/07/SI_Psicologia_Jung_Perfil.jpg"
            />
          </Box>
        </Grid>
      </Stack>
    </>
  );
}
