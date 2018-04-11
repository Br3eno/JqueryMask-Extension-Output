# JqueryMask-Extension-Output
Extension Jquery Mask - For use in output data mask

Portugues - Brasil
Ajuda no tratamento de elementos de exibição HTML, onde se busca o dado de um banco com cadastro não normalizado. Ocasiões tratadas:
1 - Quando o numero é inteiro e necessita de dois zeros para adicionar a virgula.
2 - Quando o numero é float com apenas 1 casa depois da virgula, e adiciona 1 zero dps completando 2 casas.
3 - Quando o numero ja esta float e formatado necessitando apenas do tratamento de troca para virgula ou ponto na separação e fica pronto apenas retorna o propio dado.

Quando se usar? 
- Quando se busca um dado de valor (dinheiro) onde os dados possuem formatação diferente, recebem tratamento como descrito abaixo.
Exemplos: 
R$ 21 = R$ 21,00
R$ 0,2 = R$ 0,20
R$ 1199 = R$ 1199,00
R$ 0 = R$ 0,00

Após trata-los interessante adicionar a mascara para formatação conforme necessaria, o intuito é da ferramenta é ajudar no tratamento desses dados antes de envia-los a mascara.

Extensão para se usar junto com o Jquery Mask, para aplicar mascara de dados em saida de dados
Examplo de elementos { H1... , SPAN, P, ETC... }

Versão 0.1v
- Apenas para mascara de moeda através da função - trataValorMaskOutput onde se deve passar o dado como parametro.
____________________
English
Extension to use in conjunction with Jquery Mask, to apply mask data to output elements.
Example of elements { H1... , SPAN, P, ETC... }
Version 0.1v
- Only for currency mask through function - trataValorMaskOutput where you must pass the data as a parameter.
