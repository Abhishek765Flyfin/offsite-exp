import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import HorizontalPicker from "@vseslav/react-native-horizontal-picker";

interface HorizontalPickerWeb {
  data: number[];
  renderItem: (item, index) => React.ReactNode;
}

function HorizontalPickerWeb({ data, renderItem }) {
  return (
    <HorizontalPicker data={data} renderItem={renderItem} itemWidth={80} />
  );
}

export default HorizontalPickerWeb;
