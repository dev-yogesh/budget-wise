"use client";

import { Period, Timeframe } from "@/lib/types";
import React from "react";

interface Props {
  period: Period;
  setPeriod: (priod: Period) => void;
  timeframe: Timeframe;
  setTimeframe: (timeframe: Timeframe) => void;
}

function HistoryPeriodSelector({
  period,
  setPeriod,
  timeframe,
  setTimeframe,
}: Props) {
  return <div>HistoryPeriodSelector</div>;
}

export default HistoryPeriodSelector;
