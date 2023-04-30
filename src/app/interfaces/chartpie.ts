import { ChartOptions, ChartTypeRegistry, CoreChartOptions, DatasetChartOptions, ElementChartOptions, PluginChartOptions, ScaleChartOptions, ScaleTypeRegistry } from "chart.js";
import { _DeepPartialObject } from "chart.js/dist/types/utils";

interface MyChartOptions extends ChartOptions {
  legend?: {
    display?: boolean;
    position?: string;
    labels?: {
      fontColor?: string;
    };
  };
}
