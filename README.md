# Open-Meteo 1. tesztfeladat:
## 1. Készíts függvényt ami lekéri az open-meteo historical weather API-ról az aktuális nap átlaghőmérsékletét.
- A függvény paramétere legyen a lokalizációs string és az időpont string
példa = f1(52.52, 13.41, "2024-10-04")
- = 52.52 Szélességi fok, 13.41 hosszúsági fok
- Az átlagolt értéket én lefelé kerekítettem (Math.floor())

## 2. Készítsd el az előző feladat azon változatát ahol megadjuk az óraszámot is.
- Csak az adott órára vonatkozó hőmérséklettel térjen vissza a függvény.

- Az f1, f2 modult használjátok implementációra, illetve a helper.js-t vizsgálatokra.
- Tesztekhez a locations.json -ből veszem ki a kordinátákat.
# Telepítés
    npm install

# Lokális teszt
    npm test

    VAGY

    jest f1.test.js
    jest f2.test.js (egyenkénti tesztelésre)

`git push origin master` esetén az online teszt lefutása eltarthat 1-2 percig.