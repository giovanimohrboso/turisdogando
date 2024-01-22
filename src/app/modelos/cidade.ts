export interface Cidade{
  nome:string
  descricao1:string
  descricao2:string
  descricao3:string
  descricao4:string
  caminhoFotoCapa:string
  destaque:boolean
  data:string
  fotos:Fotos[]
}

export interface Fotos{
  descricao:string
  caminhoFoto:string
}
