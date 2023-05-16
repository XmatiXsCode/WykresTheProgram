let arr = []; //tablica z wysokościami wszystkich słupków
let szer; //zmienna określająca szerokość słupków i przerwy między nimi (deklarowana w funkcji setup())
let ile; //zmnienna ilości słupków (określana przez użytkownika za pomocą metody prompt())
let czas = 50; //zmienna odpowiadająca za przerwy w wykonywaniu funkcji solve() (może być modyfikowana przez użytkownika)
let col = 0; //zmienna odpowiadająca za styl kolorów słupków, gdzie 0 = brak koloru (kolor biały - domyślny); 1< = płynna zmiana kolorów (możliwa modyfikacja przez użytkownika, zawiera 2 easter eggi)
let pyt; //zmienna przechowująca odpowiedź na pytanie w metodzie prompt() w funckji setup() (definiuję funkcję 'ile')
let czy = 1; //zmienna kontrolująca pytanie o liczbę słupków, gdzie 0 = brak wyświetlania pytania (domyślna wartość słupków, czyli 10); 1 = normalne wyświetlanie pytania; 2< = losowa liczba słupków od 10*czy do 1000*czy (możliwa modyfikacja przez użytkownika)
function setup() //funkcja podstawowa określająca i ustawiająca wszystkie niezbędne parametry programu
{
  createCanvas(400, 400);
  if(czy==1)
  {
    pyt = prompt("Podaj ilość słupków (nie mniej niż 10):");
    if(pyt=="")
    {
      alert("Wpisz liczbę!");
      setup();
      return;
    }
    else if(pyt==null)
    {
      alert("Wpisz liczbę!");
      setup();
      return;
    }
    else
    {
      if(isNaN(pyt))
      {
        alert("Wpisz liczbę!");
        setup();
        return;
      }
      else
      {
        if(pyt>=10)
        {
          if(pyt==2137)
          {
            col = 0;
          }
          ile = pyt;
        }
        else
        {
          alert("Wpisz większą liczbę!");
          setup();
          return;
        }
      }
    }
  }
  else if(czy==0)
  {
    ile = 10;
  }
  else if(czy>=2)
  {
    ile = floor(random(10*czy, 100*czy));
  }
  for(let i = ile;i>0;i--)
  {
    arr.push(floor(random(30, 300)));
  }
  setInterval(solve, czas);
  szer = width/ile;
  if(col>1)
  {
    col = 1;
  }
}

function draw() //funkcja rysująca na bieżąco wszystkie słupki
{
  background(0);
  noStroke();
  let w = szer/2, x = szer*0.5, y = 400 //zmienne określające parametry każdego słupka
  for(let h of arr)
  {
    slu = new slupek(x, y, w, -h);
    slu.rysuj();
    x = x + w + w;
  }
  fill(220);
  noStroke();
  rect(0,0,400,20);
  textSize(17);
  fill(0);
  text("Autorzy: Mateusz Gałkiewicz i Wiktor Sokoliński",20,16);
  fill(255);
  if(pyt==88)
  {
    if(col==0)
    {
      fill(0);
      return;
    }
  }
  if(col>=1)
  {
    col+=1;
    if(col>359)
    {
      col=1;
    }
    fill('hsl('+ col +', 100%, 50%)');
  }
}
  
function solve() //funkcja sortująca tablicę 'arr'
{
  let n = ile;
  do
  {
    for(let i = 0;i<ile;i++)
    {
      if(arr[i]>arr[i+1])
      {
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        return;
      }
    }
    n--;
  }
  while(n>1)
}