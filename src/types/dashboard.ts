export interface Dashboard {
  dashboard: {
    tipoPessoa: {
      pessoaFisica: PessoaFisica;
      pessoaJuridica: PessoaJuridica;
    };
    totalPessoasPorRegiao: Regiao;
  };
  dados_detalhados: DadoDetalhado[];
}

interface Regiao {
  Norte: number;
  Sul: number;
  Leste: number;
  Oeste: number;
}

interface PessoaFisica {
  total: number;
  sexo: {
    masculino: number;
    feminino: number;
    indefinido: number;
  };
  idade: {
    "-18": number;
    "19a25": number;
    "26a40": number;
    "41a60": number;
    "61a80": number;
    "+80": number;
  };
  participaEmpresa: {
    sim: number;
    nao: number;
  };
  carteira: {
    cobranca: number;
    ecommerce: number;
    aposentados: number;
    outros: number;
  };
}

interface PessoaJuridica {
  total: number;
  cnaes: {
    "6201-5": number;
    "7210-0": number;
    "7311-4": number;
    "7490-1": number;
  };
  naturezaJuridica: {
    "203-5": number;
    "206-2": number;
  };
  idade: {
    "1": number;
    "5": number;
    "10": number;
    "+20": number;
  };
}

interface DadoDetalhado {
  documento: string;
  tipoPessoa: "Fisica" | "Juridica";
  nome: string;
  sexo: "Masculino" | "Feminino" | "Indefinido";
  regiao: keyof Regiao;
  idade: number;
  participaEmpresa: "Sim" | "Não";
  carteira: "cobranca" | "ecommerce" | "aposentados" | "outros";
  cnae_principal: string;
  natureza_juridica: string;
}