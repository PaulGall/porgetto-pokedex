import React from "react";
import 'tailwindcss/tailwind.css';

export default function Cards () {
  return (
    <div className="bg-orange-500">
      <h1 className="text-center text-white">Pokedex</h1>
      <div
        id="container"
        className="flex flex-wrap w-full h-full gap-32 sm:gap-8 md:gap-10 lg:gap-20 xl:gap-20 m-4 sm:m-8 md:m-10 lg:m-10 xl:m-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4"
      >
        {/* Inizio card */}
        <div className="box-border h-full w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 sm:h-1/2 md:h-1/2 lg:h-1/2 xl:h-1/2">
          <div className="bg-white">
            <img
              src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"
              alt="image"
              className="w-40 mx-auto"
            />
            <div className="flex-col justify-center text-center bg-white">
              <h4 className="font-semibold text-dark text-base">Charizard</h4>
              <p className="text-sm text-body-color">Tipo: Fuoco</p>
            </div>
          </div>
        </div>
        {/* Fine card */}
        <div className="box-border h-32 w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
        <div className="bg-white">
          <img
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"
            alt="image"
            className="w-40 mx-auto" />
          <div className="flex-col justify-center text-center bg-white">
            <h4 className="font-semibold text-dark text-base">Charizard</h4>
            <p className="text-sm text-body-color">Tipo: Fuoco</p>
          </div>
        </div>
      </div>
      <div className="box-border h-32 w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
        <div className="bg-white">
          <img
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"
            alt="image"
            className="w-40 mx-auto" />
          <div className="flex-col justify-center text-center bg-white">
            <h4 className="font-semibold text-dark text-base">Charizard</h4>
            <p className="text-sm text-body-color">Tipo: Fuoco</p>
          </div>
        </div>
      </div>
      <div className="box-border h-32 w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
        <div className="bg-white">
          <img
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"
            alt="image"
            className="w-40 mx-auto" />
          <div className="flex-col justify-center text-center bg-white">
            <h4 className="font-semibold text-dark text-base">Charizard</h4>
            <p className="text-sm text-body-color">Tipo: Fuoco</p>
          </div>
        </div>
      </div>
      <div className="box-border h-32 w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
        <div className="bg-white">
          <img
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"
            alt="image"
            className="w-40 mx-auto" />
          <div className="flex-col justify-center text-center bg-white">
            <h4 className="font-semibold text-dark text-base">Charizard</h4>
            <p className="text-sm text-body-color">Tipo: Fuoco</p>
          </div>
        </div>
      </div>
      <div className="box-border h-32 w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
        <div className="bg-white">
          <img
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"
            alt="image"
            className="w-40 mx-auto" />
          <div className="flex-col justify-center text-center bg-white">
            <h4 className="font-semibold text-dark text-base">Charizard</h4>
            <p className="text-sm text-body-color">Tipo: Fuoco</p>
          </div>
        </div>
      </div>
      <div className="box-border h-32 w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
        <div className="bg-white">
          <img
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"
            alt="image"
            className="w-40 mx-auto" />
          <div className="flex-col justify-center text-center bg-white">
            <h4 className="font-semibold text-dark text-base">Charizard</h4>
            <p className="text-sm text-body-color">Tipo: Fuoco</p>
          </div>
        </div>
      </div>
      <div className="box-border h-32 w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
        <div className="bg-white">
          <img
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"
            alt="image"
            className="w-40 mx-auto" />
          <div className="flex-col justify-center text-center bg-white">
            <h4 className="font-semibold text-dark text-base">Charizard</h4>
            <p className="text-sm text-body-color">Tipo: Fuoco</p>
          </div>
        </div>
      </div>
      <div className="box-border h-32 w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
        <div className="bg-white">
          <img
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"
            alt="image"
            className="w-40 mx-auto" />
          <div className="flex-col justify-center text-center bg-white">
            <h4 className="font-semibold text-dark text-base">Charizard</h4>
            <p className="text-sm text-body-color">Tipo: Fuoco</p>
          </div>
        </div>
      </div>
      <div className="box-border h-32 w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
        <div className="bg-white">
          <img
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"
            alt="image"
            className="w-40 mx-auto" />
          <div className="flex-col justify-center text-center bg-white">
            <h4 className="font-semibold text-dark text-base">Charizard</h4>
            <p className="text-sm text-body-color">Tipo: Fuoco</p>
          </div>
        </div>
      </div>
      <div className="box-border h-32 w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
        <div className="bg-white">
          <img
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"
            alt="image"
            className="w-40 mx-auto" />
          <div className="flex-col justify-center text-center bg-white">
            <h4 className="font-semibold text-dark text-base">Charizard</h4>
            <p className="text-sm text-body-color">Tipo: Fuoco</p>
          </div>
        </div>
      </div>
      <div className="box-border h-32 w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
        <div className="bg-white">
          <img
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"
            alt="image"
            className="w-40 mx-auto" />
          <div className="flex-col justify-center text-center bg-white">
            <h4 className="font-semibold text-dark text-base">Charizard</h4>
            <p className="text-sm text-body-color">Tipo: Fuoco</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}