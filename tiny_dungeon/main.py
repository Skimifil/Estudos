import random

def vantagem_desvantagem(modificador: str, dados_padrao: int, dados_diff: int):
    if modificador == 'vantagem':
        total = dados_padrao + dados_diff
        print(f"Por ter adquirido {modificador}, recebeu +{dados_diff}d6.")
        return rola_dados(total)
    elif modificador == 'desvantagem':
        total = dados_padrao - dados_diff
        print(f"Por ter adquirido {modificador}, recebeu -{dados_diff}d6.")
        return rola_dados(abs(total))
    else:
        return print(f"Não houve Vantagem ou Desvantagem, com isso o seu resultado foi: ")
    return None


def rola_dados(dados: int):
    while dados > 0:
        d6 = random.randrange(1, 6)
        dados -= 1
        print(f"Rolando os dados: {d6}")

print(vantagem_desvantagem('desvantagem',1,2))