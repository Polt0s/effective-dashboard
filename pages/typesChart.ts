export enum ChartHorizontalAlign {
  left = 'left',
  center = 'center',
  right = 'right'
}

export enum ChartVerticalAlign {
  top = 'top',
  middle = 'middle',
  bottom = 'bottom'
}

export enum ChartTypes {
  line = 'line',
  area = 'area',
  bar = 'bar',
  histogram = 'histogram',
  pie = 'pie',
  donut = 'donut',
  radialBar = 'radialBar',
  scatter = 'scatter',
  bubble = 'bubble',
  heatmap = 'heatmap'
}

export enum ChartShape {
  circle = 'circle',
  square = 'square'
}

export enum ChartPosition {
  top = 'top',
  right = 'right',
  bottom = 'bottom',
  left = 'left'
}

export enum ChartCurve {
  smooth = 'smooth',
  straight = 'straight'
}

export interface ChartLegend {
  show?: true;
  position?: 'top' | 'right' | 'bottom' | 'left';
  horizontalAlign?: ChartHorizontalAlign;
  verticalAlign?: ChartVerticalAlign;
  floating?: boolean;
  fontSize?: string;
  offsetX?: number;
  offsetY?: number;
  formatter?: any;
  textAnchor?: string;
  labels?: {
    foreColor?: string;
    useSeriesColors?: boolean;
  };
  markers?: {
    size?: number;
    strokeColor?: string;
    strokeWidth?: number;
    offsetX?: number;
    offsetY?: number;
    radius?: number;
    shape?: ChartShape;
  };
  itemMargin?: {
    horizontal?: number;
    vertical?: number
  };
  containerMargin?: {
    left?: number;
    top?: number;
  };
  onItemClick?: {
    toggleDataSeries?: boolean;
  };
  onItemHover?: {
    highlightDataSeries?: boolean;
  };
}

export interface ChartConfig {
  height?: number;
  type?: ChartTypes;
  shadow?: {
    enabled?: boolean;
    color?: string;
    top?: number;
    left?: number;
    blur?: number;
    opacity?: number
  };
  zoom?: {
    enabled?: boolean
  };
}

export interface ChartSerie {
  name?: string;
  data?: number[];
}

export interface ChartRow {
  colors?: string[];
  opacity?: number;
}

export interface IChart {
  options: {
    chart?: {
      background: string;
    };
    color?: string[];
    stroke: ApexStroke | undefined
    title?: {
      text?: string;
      align?: ChartHorizontalAlign;
    };
    grid?: {
      show: boolean;
      borderColor?: string;
      row?: ChartRow;
    };
    xaxis?: {
      categories?: string[];
      title?: {
        text?: string;
      }
    };
    legend?: ChartLegend;
    dataLabels: {
      enabled: boolean;
    }
  }
  series?: ChartSerie[];
  markers?: {
    size?: number;
    colors?: string[];
    strokeColor?: string;
    strokeWidth?: number;
    strokeOpacity?: number;
    fillOpacity?: number;
    shape?: ChartShape;
    radius?: number;
    offsetX?: number;
    offsetY?: number;
    hover?: {
      size?: number
    }
  };
  yaxis?: {
    title?: {
      text?: string;
    };
    min?: number;
    max?: number;
  };
}
