# Challenge Text Decoder

## T7 ONE - Oracle Next Education com parceria da Alura - Challenge Decodificador de Texto

Este projeto é parte do programa T7 ONE em parceria com a Alura e tem como objetivo criar um decodificador de texto que aplica regras específicas de criptografia e descriptografia.

### Funcionalidades

- **Criptografia de Texto:** 
  - As letras do texto são transformadas de acordo com as seguintes regras:
    - `"e"` se transforma em `"enter"`
    - `"i"` se transforma em `"imes"`
    - `"a"` se transforma em `"ai"`
    - `"o"` se transforma em `"ober"`
    - `"u"` se transforma em `"ufat"`
    
- **Descriptografia de Texto:** 
  - O processo é revertido, transformando as palavras de volta às suas letras originais.

- **Tratamento de Caracteres Especiais:**
  - Letras com acentos (e.g., `ã`, `ç`, `é`) são automaticamente convertidas para suas versões sem acento (`a`, `c`, `e`, etc.).
  - Letras maiúsculas são convertidas automaticamente para minúsculas.
  - Números e caracteres especiais são removidos do texto, mantendo apenas letras minúsculas e espaços.

- **Interação do Usuário:**
  - O projeto conta com três botões principais:
    - `"Encrypt"`: Criptografa o texto inserido no campo de texto.
    - `"Decrypt"`: Descriptografa o texto criptografado inserido.
    - `"Copy"`: Copia o texto criptografado ou descriptografado para a área de transferência.

### Deploy

O projeto está disponível para visualização no GitHub Pages:  
[Challenge Text Decoder](https://karoene.github.io/alura-challenge-decodificador/)
