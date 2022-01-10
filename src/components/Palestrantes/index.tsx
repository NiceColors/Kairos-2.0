import { Box, Grid, Text, Flex, Image, Heading } from "@chakra-ui/react";
import React from "react";

export default function index() {
  return (
    <>
      <Box
        minH="35vh"
        margin="0 auto"
        transform="translateY(20%)"
        boxShadow="lg"
        bgColor="gray.800"
        borderRadius="8px"
        w="100%"
        p={8}
      >
        <Heading color="white" textAlign="center">
          Moderador
        </Heading>
        <Grid
          mt="20px"
          placeItems={{ sm: "center", xl: "start" }}
          gridTemplateColumns={{ lg: "0.3fr 1fr" }}
        >
          <Image
            maxW={{ lg: "400px", md: "full" }}
            maxH="300px"
            borderRadius="8px"
            src="http://r1.ufrrj.br/seminariopsi/kairos2021/public/assets/palestrantes/profNilton.jpg"
          />
          <Text color="white" p="18px" fontWeight="light">
            <Heading mb="8px" fontSize="1.3rem" fontWeight="bold">
              Prof. Nilton Sousa da Silva
            </Heading>
            Doutor em Psicologia (UFRJ); Pós-Doutorado em Serviço Social
            (PUC-Rio); Mestrado em Filosofia (UERJ); Formação em Psicologia
            (UGF). Professor Associado da Universidade Federal Rural do Rio de
            Janeiro (UFRRJ). Professor Permanente do Programa de Pós-Graduação
            em Psicologia (PPGPSI) da UFRRJ. Coordenador do Laboratório de
            Psicologia e Informações Afro-Descendentes (LAPSIAFRO) da
            UFRRJ-CNPq. Supervisor Clínico de Base Junguiana no Serviço de
            Psicologia Aplicada (SPA) da UFRRJ. Afiliado à ABPN (Associação
            Brasileira de Pesquisadores/as Negros/as). Membro do GT AION:
            Interdisciplinaridades da Pesquisa em Psicologia Analítica no
            Brasil, GT cadastrado na ANPEPP.
          </Text>
        </Grid>
      </Box>
    </>
  );
}
