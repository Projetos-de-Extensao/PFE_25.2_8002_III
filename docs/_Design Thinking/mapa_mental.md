---
id: mapa_mental
title: Mapas Mentais
---
 
## Introdução
 
<p align = "justify">
Mapa mental consiste em criar resumos cheios de símbolos, cores, setas e frases de efeito com o objetivo de organizar o conteúdo e facilitar associações entre as informações destacadas. Esse material é muito indicado para pessoas que têm facilidade de aprender de forma visual.
</p>
 
## Metodologia
 
<p align = "justify">
Criamos um mapa mental depois da pesquisa (v.1) e um mapa mental depois do brainstorm (v.2).
</p>
 
## Mapa mental - Geral.
 
## Versão 1.0
 
### Mapa mental 1
 
```puml
@startmindmap
' theme vibrant
<style>
mindmapDiagram {
  ' --- TEMA VERDE ---
  .node_green {
    BackgroundColor #27AE60
    FontColor black
  }
  .node_green_level_1 {
    BackgroundColor #58D68D
  }
  .node_green_level_2 {
    BackgroundColor #A9DFBF
  }
  .node_green_level_3 {
    BackgroundColor #D4EFDF
  }

  ' --- TEMA VERMELHO ---
  .node_red {
    BackgroundColor #C0392B
    FontColor black
  }
  .node_red_level_1 {
    BackgroundColor #E74C3C
  }
  .node_red_level_2 {
    BackgroundColor #F5B7B1
  }
  .node_red_level_3 {
    BackgroundColor #FADBD8
  }

  ' --- TEMA AMARELO ---
  .node_yellow {
    BackgroundColor #B7950B
    FontColor black
  }
  .node_yellow_level_1 {
    BackgroundColor #F1C40F
    FontColor black
  }
  .node_yellow_level_2 {
    BackgroundColor #F9E79F
    FontColor black
  }
  .node_yellow_level_3 {
    BackgroundColor #FEF9E7
    FontColor black
  }
}
</style>

+ **Requisitos do Projeto: Portal de Monitoria**
-- **Estudante** <<node_green>>
--- Cadastro simples e rápido <<node_green_level_1>>
--- Recomendação de vagas (baseado em nota/CR) <<node_green_level_1>>
--- Visualização de Vagas <<node_green_level_1>>
---- Layout: Lista + Detalhes na mesma tela <<node_green_level_2>>
---- Ver página do Professor/Disciplina <<node_green_level_2>>
--- Ferramentas de Busca <<node_green_level_1>>
---- Filtros e Pesquisa por disciplina <<node_green_level_2>>
--- Notificações <<node_green_level_1>>
---- Alertas de status da candidatura <<node_green_level_2>>
--- Avaliação <<node_green_level_1>>
---- Avalia a experiência da monitoria <<node_green_level_2>>

-- **Professor** <<node_yellow>>
--- Gestão de Vagas <<node_yellow_level_1>>
---- Criar vaga para uma disciplina <<node_yellow_level_2>>
--- Análise de Candidatos <<node_yellow_level_1>>
---- Visualizar CR e Notas dos alunos <<node_yellow_level_2>>
--- Notificações <<node_yellow_level_1>>
---- Alertas de novas candidaturas <<node_yellow_level_2>>
--- Avaliação <<node_yellow_level_1>>
---- Avalia o desempenho do monitor <<node_yellow_level_2>>

-- **Administrador** <<node_red>>
--- Dashboard Geral <<node_red_level_1>>
---- Visualizar todas as vagas, professores e estudantes <<node_red_level_2>>
--- Gestão de Filtros <<node_red_level_1>>
---- Criar filtros detalhados (disciplina, professor) <<node_red_level_2>>
--- Supervisão <<node_red_level_1>>
---- Acesso às avaliações das monitorias <<node_red_level_2>>

@endmindmap
```
 
 
## Conclusão
 
<p align = "justify">
O mapa mental é uma ficha de estudos que ajuda a dar uma visão geral do tema, e ajuda a fixar os pontos mais importantes sobre o app.
</p>


