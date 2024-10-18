import { Grid2, Paper, Typography } from "@mui/material";
import { GridItem } from "../../components/GridItem";
import { BarChart, LineChart } from "@mui/x-charts";
import { dashboard } from "../../assets/data.json";
import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../root";

export const legalPersonRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/pessoa-juridica',
  component: LegalPerson
})

function LegalPerson () {

  const age = Object.values(dashboard.tipoPessoa.pessoaJuridica.idade);
  const ageKeys = Object.keys(dashboard.tipoPessoa.pessoaJuridica.idade);

  const legalNature = Object.values(dashboard.tipoPessoa.pessoaJuridica.naturezaJuridica);
  const legalNatureKeys = Object.keys(dashboard.tipoPessoa.pessoaJuridica.naturezaJuridica);

  const cnaes = Object.values(dashboard.tipoPessoa.pessoaJuridica.cnaes);
  const cnaesKeys = Object.keys(dashboard.tipoPessoa.pessoaJuridica.cnaes);

  return (
    <Grid2 container spacing={4} sx={{ py: 2 }}>
      <GridItem size={{ xs: 12, md: 6, xl: 4 }}>
        <Paper elevation={1} sx={{ p: { xs: 1, md: 3 } }}>
          <Typography variant="h6">Total por CNAEs</Typography>

          <BarChart

            xAxis={[{ scaleType: 'band', data: cnaesKeys, label: "CNAE" }]}
            series={[{ data: cnaes, type: 'bar' }]}


            barLabel="value"
            yAxis={[{ label: "Quantidade de Empresas" }]}
          />
        </Paper>

      </GridItem >

      <GridItem size={{ xs: 12, md: 6, xl: 4 }}>
        <Paper elevation={1} sx={{ p: { xs: 1, md: 3 } }}>
          <Typography variant="h6">Total por Natureza Jurídica</Typography>

          <BarChart

            yAxis={[{ scaleType: 'band', data: legalNatureKeys }]}
            series={[{ data: legalNature, type: 'bar' }]}


            barLabel="value"
            layout="horizontal"
            xAxis={[{ label: "Quantidade de Empresas" }]}
          />
        </Paper>

      </GridItem >

      <GridItem size={{ xs: 12, md: 6, }}>
        <Paper elevation={1} sx={{ p: { xs: 1, md: 3 } }}>
          <Typography variant="h6">Total por Faixa Etária</Typography>
          <LineChart
            xAxis={[{ data: ageKeys, label: "Faixa Etária" }]}
            series={[{ data: age }]}
            yAxis={[{ label: "Quantidade de Empresas" }]}
          />
        </Paper>

      </GridItem >

    </Grid2>
  )
}