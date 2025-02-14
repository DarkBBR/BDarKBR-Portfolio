"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import AvatarHero from "../../public/image.png";
import ParticlesComponent from "./components/particlesJs";

export default function Home() {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Partículas no fundo */}
      <ParticlesComponent id="particles" className="absolute inset-0 z-0" />

      {/* Conteúdo principal centralizado */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-center h-full px-4 md:px-8 lg:px-16 gap-8">
        {/* Texto com gradiente, animação e uppercase */}
        <div className="text-center md:text-left max-w-lg">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-pulse mb-4">
            Bem-vindo ao Meu Portfólio
          </h1>

          <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 bg-gradient-to-r from-blue-400 via-green-400 to-yellow-400 bg-clip-text text-transparent animate-pulse">
            Sou um desenvolvedor Full Stack apaixonado por criar soluções
            inovadoras. Explore meus projetos e entre em contato para colaborar
            em novas ideias!
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6 sm:mt-8">
            {/* Botão "Ver Projetos" */}
            <button className="btn cube cube-hover" type="button">
              <div className="bg-top">
                <div className="bg-inner"></div>
              </div>
              <div className="bg-right">
                <div className="bg-inner"></div>
              </div>
              <div className="bg">
                <div className="bg-inner"></div>
              </div>
              <div className="text">
                <a href="#projetos">Ver Projetos</a>
              </div>
            </button>

            {/* Botão "Contato" */}
            <button className="btn cube cube-hover" type="button">
              <div className="bg-top">
                <div className="bg-inner"></div>
              </div>
              <div className="bg-right">
                <div className="bg-inner"></div>
              </div>
              <div className="bg">
                <div className="bg-inner"></div>
              </div>
              <div className="text">
                <a href="#contato">Contato</a>
              </div>
            </button>

            {/* Botão "Currículo" */}
            <button className="btn cube cube-hover" type="button">
              <div className="bg-top">
                <div className="bg-inner"></div>
              </div>
              <div className="bg-right">
                <div className="bg-inner"></div>
              </div>
              <div className="bg">
                <div className="bg-inner"></div>
              </div>
              <div className="text">
                <a href="#curriculo">Currículo</a>
              </div>
            </button>
          </div>
        </div>

        {/* Imagem centralizada à direita */}
        <div>
          <Image
            className="rounded-full border-4 border-white shadow-lg w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72"
            src={AvatarHero}
            alt="avatar-hero"
            priority
          />
        </div>
      </div>
    </div>
  );
}
