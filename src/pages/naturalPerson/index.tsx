import { Grid2, Paper, Typography } from "@mui/material";
import { GridItem } from "../../components/GridItem";
import { BarChart, LineChart, PieChart } from "@mui/x-charts";
import { dashboard } from "../../assets/data.json";
import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../root";

export const naturalPersonRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/pessoa-fisica',
  component: NaturalPerson
})

function NaturalPerson () {
  const totalPeople = Object.values(dashboard.totalPessoasPorRegiao).reduce((prev, curr) => prev + curr, 0)
  return (
    <Grid2 container spacing={4} sx={{ py: 2 }}>
      <GridItem size={{ xs: 12, md: 6, xl: 4 }}>
        <Paper elevation={1} sx={{
          p: { xs: 1, md: 3 },
        }}>
          <Typography variant="h6">Total de Pessoas por Região</Typography>
          <PieChart
            sx={{
              aspectRatio: 16 / 9,
            }}
            series={[{
              highlightScope: { fade: 'global', highlight: 'item' },
              faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
              valueFormatter: (item: { value: number }) => `${item.value} (${item.value * 300 / totalPeople}%)`,
              arcLabel: (item: { value: number }) => item.value.toString(),
              data: Object.entries(dashboard.totalPessoasPorRegiao).map(item => ({ id: item[1], value: item[1], label: item[0] }))
            }]}

          />
        </Paper>

      </GridItem >

      <GridItem size={{ xs: 12, md: 6, xl: 4 }}>
        <Paper elevation={1} sx={{ p: { xs: 1, md: 3 } }}>
          <Typography variant="h6">Total de Pessoas por sexo</Typography>

          <BarChart
            height={300}
            xAxis={[{
              scaleType: 'band',
              data: Object.keys(dashboard.tipoPessoa.pessoaFisica.sexo),
              tickLabelStyle: { textTransform: "capitalize" }
            }]}
            series={[{ data: Object.values(dashboard.tipoPessoa.pessoaFisica.sexo) }]}
            barLabel="value"
            yAxis={[{ label: "Quantidade de Pessoas" }]}
          />
        </Paper>

      </GridItem>

      <GridItem size={{ xs: 12, md: 6, xl: 4 }}>
        <Paper elevation={1} sx={{ p: { xs: 1, md: 3 } }}>

          <Typography variant="h6" >Total com Participação em Empresas</Typography>
          <BarChart
            height={300}
            xAxis={[{ scaleType: 'band', data: ["Participa", "Não Participa"] }]}
            series={[{ data: Object.values(dashboard.tipoPessoa.pessoaFisica.participaEmpresa) }]}
            barLabel="value"
            yAxis={[{ label: "Quantidade de Pessoas" }]}
          />
        </Paper>

      </GridItem >

      <GridItem size={{ xs: 12, md: 6 }}>
        <Paper elevation={1} sx={{ p: { xs: 1, md: 3 } }}>
          <Typography variant="h6">Total por Faixa Etária</Typography>
          <LineChart
            xAxis={[{
              scaleType: 'band',
              data: Object.keys(dashboard.tipoPessoa.pessoaFisica.idade).map(item => item.replace("a", " à ")),
              label: "Idade"
            }]}
            series={[{ data: Object.values(dashboard.tipoPessoa.pessoaFisica.idade), area: true }]}

            height={300}
            yAxis={[{ label: "Quantidade de Pessoas", min: 0 }]}
          />
        </Paper>

      </GridItem >

      <GridItem size={{ xs: 12, md: 6 }}>
        <Paper elevation={1} sx={{ p: { xs: 1, md: 3 } }}>
          <Typography variant="h6">Total por Categorias de Carteira de registro</Typography>
          <BarChart
            xAxis={[{
              scaleType: 'band',
              data: Object.keys(dashboard.tipoPessoa.pessoaFisica.carteira),
              tickLabelStyle: { textTransform: "capitalize" }
            }]}
            series={[{ data: Object.values(dashboard.tipoPessoa.pessoaFisica.carteira) }]}
            height={300}
            barLabel="value"
            yAxis={[{ label: "Quantidade de Pessoas" }]}
          />

        </Paper>

      </GridItem >
    </Grid2>
  )
}