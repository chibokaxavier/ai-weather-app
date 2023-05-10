"use client";
import { Card, Divider, Subtitle, Text } from "@tremor/react";
import Head from "next/head";
import CityPicker from "@/components/CityPicker";
import {City,Country} from "country-state-city"

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#394F68] to-[#183B7E] flex flex-col p-10 justify-center items-center ">
        <Card className="max-w-4xl mx-auto">
          <Text className="text-6xl  text-center font-bold mb-10">
            Weather AI
          </Text>
          <Subtitle className="text-xl text-center">
            Powered by OpenAI, Next.js 13.3, Tailwind Css , Tremor 2.0 + More!{" "}
          </Subtitle>
          <Divider className="my-10" />
          <Card className="bg-gradient-to-br from-[#394F68] to-[#183B7E]">
            <CityPicker />
          </Card>
        </Card>
      </div>
    </>
  );
}
