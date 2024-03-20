import { produtos } from "@/data"

export const BuscarProdutos = (textoDigitado: any) =>{
    return produtos.filter(
        (produto) => 
        produto.nome.toLowerCase().includes(textoDigitado.toLowerCase()) ||
        produto.descricao.toLowerCase().includes(textoDigitado.toLowerCase())
    )
}

export const FiltrarProdutos = (categoria: any) => {
    return produtos.filter((produto) => produto.categoria === categoria)
}

export const ProdutosEntradas = FiltrarProdutos("Entradas")