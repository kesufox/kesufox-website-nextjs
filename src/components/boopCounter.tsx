"use client";

import { client } from "@/app/appwrite";
import { RealtimeResponseEvent } from "appwrite";
import { useState } from "react";

interface Props {
  count: number;
}

export default function BoopCounter({ count }: Props) {
  const [boopCounter, setBoopCounter] = useState(count);

  client.subscribe(
    "databases.web.collections.counters.documents.veveBoops",
    (response: RealtimeResponseEvent<any>) => {
      setBoopCounter(response.payload.count);
    }
  );

  return <p>Boops: {boopCounter}</p>;
}
