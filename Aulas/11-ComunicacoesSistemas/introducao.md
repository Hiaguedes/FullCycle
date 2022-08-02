# Comunicacao entre sistemas

Por que usamos apenas Rest pra tudo e isso nem sempre e legal e nao ha nada de errado nisso, mas voce vai perceber que o rest manda uma request e espera uma response e isso implica em alguns problemas, pois a lentidao e a nao disponibilidade de sistemas estragam a experiencia

## Comunicacao sincrona vs assincrona

Sincrona -> em tempo real

Assincrona -> e o tipo de comunicacao que voce nao precisa ter a resposta na hora e sabe que em algum momento se vai ter algum tipo de resposta, bem ideal, se o sistema ta lento ou nao disponivel nao importa ele faz no tempo dele

O problema do asincrono e o desalinhamento de dados que podem estar em diversos microsservicos diferentes (pois um microsservico precisa ter um banco de dados pra se chamar de servico ne uahsuas), a esse fenomeno dizemos que as informacoes estao inconcistentes, mas e uma inconcistencia que logo sera corrigida quando um banco de dados for atualizado (o nome disso e inconsistencia eventual)
