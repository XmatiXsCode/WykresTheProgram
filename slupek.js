class slupek //klasa z funkcjami definująca słupki
{
  constructor(x, y, w, h)
  {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  rysuj()
  {
    rect(this.x, this.y, this.w, this.h);
  }
}