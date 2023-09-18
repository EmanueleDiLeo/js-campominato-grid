Griglia Campo Minato
===
## Consegna
L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

### Procedimento

1. creo un header e un main in html
1. nell'header ci sarà la scelta della difficoltà e il bottone per iniziare il gioco
1. nel main il contenitore che conterrà inizialmente un h2 e dopo all'avvio del del gioco una matrice
1. creo varie classi nel css per ordinare i quadrati della matrice
1. prendo il bottose su js e resetto in contenitore al click con una funzione
1. creo una funzione che in base alla difficoltà mi dice quante righe/collone occorrono
1. creo 2 for il primo mi scorre le righe il secondo le colonne in base alla difficolta selezionata
1. creo la funzione per crearmi un box dove gli passo la larghezza che devono avere i box e il numero del box che sta creando
1. creo un evento chick al box dove si colora di azzurro e stampa in console il numero del box
