"use client";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { Tile, TileContent, TileWrapper } from "@/utils/tile";
import { WorkLeft, WorkLink, WorkRight } from "@/utils/works";
// ss
import useWindowDimension from "@/hooks/useWindowDimension";

const Works = () => {
  const windowDimension: null | number = useWindowDimension();
  useEffect(() => {
    console.log( windowDimension);
  }, []);
  return (
    <>
      <TileWrapper numOfPages={2.01}>
        <TileContent>
          <Tile
            page={0}
            renderContent={({ progress }) => (
              <div className="flex h-full items-center justify-center flex-col w-full ">
                <WorkLeft progress={progress}>
                  <span>We built</span>
                  <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                    <WorkLink href="./">blank</WorkLink>
                    &#x27;s app.
                  </div>
                </WorkLeft>
                <WorkRight progress={progress}>
                
                    <img
                      src="/assets/works/AARASTA_MOBILE.png"
                      alt="AARASTA"
                      className="min-[650px]:hidden "
                    />
                 
                    <img
                      src="/assets/works/AARASTA.png"
                      alt="AARASTA"
                      className="max-[650px]:hidden w-full"
                    />
                 
                 
                </WorkRight>
              </div>
            )}
          ></Tile>

          <Tile
            page={1}
            renderContent={({ progress }) => (
              <div className="flex h-full items-center flex-col   w-full ">
                <WorkLeft progress={progress}>
                  <span>We built</span>
                  <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                    <WorkLink href="https://pinkpanda.io/">AARASTA</WorkLink>
                    &#x27;s app.
                  </div>
                </WorkLeft>
                <WorkRight progress={progress}>
                <img
                
                      src="/assets/works/AARASTA_MOBILE.png"
                      alt="AARASTA"
                      className="min-[650px]:hidden  w-full"
                    />
                 
                    <img
                      src="/assets/works/AARASTA.png"
                      alt="AARASTA"
                      className="max-[650px]:hidden w-full"
                    />
                </WorkRight>
              </div>
            )}
          ></Tile>
        </TileContent>
      </TileWrapper>
    </>
  );
};

export default Works;
