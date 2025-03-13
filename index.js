class Cliente{
    #cpf
    constructor(nome, cpf, endereco){
        this.nome = nome
        this.#cpf = cpf
        this.endereco = endereco
        this.telefones = new Set()
    }

    get getCpf(){
        return this.#cpf
    }

    get getNomeUp(){
        return this.nome.toUpperCase()
    }

    get getNomeLow(){
        return this.nome.toLowerCase()
    }

    set setTelefones(telefone){
        this.telefones.add(telefone)
    }

    detalhe(){
        const telefonesDetalhe = [...this.telefones].map(telefone => telefone.detalhe()).join("\n");

        return (
        `Nome: ${this.nome} \nCPF: ${this.#cpf} \nEndereço: ${this.endereco.detalhe()} \n${telefonesDetalhe} 
        `)
    }
}

class Telefone{
    constructor(ddd, numero){
        this.ddd = ddd
        this.numero = numero
    }
    
    get getDdd(){
        return this.ddd
    }

    get getNumero(){
        return this.numero
    }

    detalhe(){
        return (`(${this.ddd}) ${this.numero}`)
    }
}

class Endereco {
    constructor(estado, cidade, rua, numero){
        this.estado = estado
        this.cidade = cidade
        this.rua = rua
        this.numero = numero
    }

    get getEstadoUp(){
        return this.estado.toUpperCase()
    }

    get getEstadoLow(){
        return this.estado.toLowerCase()
    }

    get getCidadeUp(){
        return this.cidade.toUpperCase()
    }

    get getCidadeLow(){
        return this.cidade.toLowerCase()
    }

    get getRuaUp(){
        return this.rua.toUpperCase()
    }

    get getRuaLow(){
        return this.rua.toLowerCase()
    }

    get getNumero(){
        return this.numero
    }

    detalhe(){
        return(`Estado: ${this.estado}, Cidade: ${this.cidade}, Número: ${this.numero}`)
    }
}

class Empresa{
    #cnpj
    constructor(razaoSocial, nomeFantasia, cnpj, endereco){
        this.endereco = endereco
        this.nomeFantasia = nomeFantasia
        this.razaoSocial = razaoSocial
        this.#cnpj = cnpj
        this.clientes = new Set()
        this.telefones = new Set()
    }

    get getCnpj(){
        return this.#cnpj
    }

    get getNomeFantasiaUp(){
        return this.nomeFantasia.toUpperCase()
    }

    get getNomeFantasiaLow(){
        return this.nomeFantasia.toLowerCase()
    }

    get getRazaoSocialUp(){
        return this.razaoSocial.toUpperCase()
    }

    get getRazaoSocialLow(){
        return this.razaoSocial.toLowerCase()
    }

    set setClientes(cliente){
        this.clientes.add(cliente)
    }

    set setTelefones(telefone){
        this.telefones.add(telefone)
    }

    detalhe(){
        const clientesDetalhe = [...this.clientes].map(cliente => cliente.detalhe()).join("\n");
        const telefonesDetalhe = [...this.telefones].map(telefone => telefone.detalhe()).join("\n");


        return(
            `Nome: ${this.nomeFantasia} \nCNPJ: ${this.#cnpj} \nRazão Social: ${this.razaoSocial} \nEndereço: ${this.endereco.detalhe()}\n \n[CLIENTES]-------------------------------------\n${clientesDetalhe}\n[TELEFONES]------------------------------------\n${telefonesDetalhe}`
        )
    }

}

module.exports = {Cliente , Telefone , Endereco , Empresa}
