import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  ArcElement,
  Filler,
} from "chart.js";

// Register Chart.js components once
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  ArcElement,
  Filler
);

// GitHub Insights-style color palette
export const chartColors = [
  "rgba(59, 130, 246, 1)", // blue
  "rgba(16, 185, 129, 1)", // green
  "rgba(139, 92, 246, 1)", // purple
  "rgba(245, 158, 11, 1)", // amber
  "rgba(239, 68, 68, 1)", // red
  "rgba(107, 114, 128, 1)", // gray
  "rgba(236, 72, 153, 1)", // pink
  "rgba(6, 182, 212, 1)", // cyan
];

// Helper to get background color with opacity
export const getBackgroundColor = (color: string, opacity: number = 0.1): string => {
  return color.replace("1)", `${opacity})`);
};

// Create gradient for area charts
export const createGradient = (ctx: CanvasRenderingContext2D, color: string, height: number = 300): CanvasGradient => {
  const gradient = ctx.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, color.replace("1)", "0.3)"));
  gradient.addColorStop(1, color.replace("1)", "0.02)"));
  return gradient;
};

// GitHub-style grid options (theme-aware)
const getGridStyle = (isDark: boolean) => ({
  color: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.06)",
  drawBorder: false,
});

const getTickStyle = (isDark: boolean) => ({
  color: isDark ? "#9CA3AF" : "#6B7280",
  font: { size: 11 },
});

// Common chart options with GitHub styling (theme-aware)
export const getCommonLineOptions = (isDark: boolean) => ({
  responsive: true,
  maintainAspectRatio: true,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  plugins: {
    legend: {
      position: "top" as const,
      labels: {
        usePointStyle: true,
        pointStyle: "circle",
        padding: 20,
        font: { size: 12 },
        color: isDark ? "#D1D5DB" : "#374151",
      },
    },
    tooltip: {
      backgroundColor: isDark ? "rgba(17, 24, 39, 0.95)" : "rgba(0, 0, 0, 0.8)",
      padding: 12,
      titleFont: { size: 13 },
      bodyFont: { size: 12 },
      cornerRadius: 8,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      border: { display: false },
      grid: getGridStyle(isDark),
      ticks: getTickStyle(isDark),
    },
    x: {
      border: { display: false },
      grid: { display: false },
      ticks: getTickStyle(isDark),
    },
  },
});

// Donut chart options (theme-aware)
export const getCommonDonutOptions = (isDark: boolean) => ({
  responsive: true,
  maintainAspectRatio: true,
  cutout: "60%",
  plugins: {
    legend: {
      position: "right" as const,
      labels: {
        usePointStyle: true,
        pointStyle: "circle",
        padding: 16,
        font: { size: 12 },
        color: isDark ? "#D1D5DB" : "#374151",
      },
    },
    tooltip: {
      backgroundColor: isDark ? "rgba(17, 24, 39, 0.95)" : "rgba(0, 0, 0, 0.8)",
      padding: 12,
      cornerRadius: 8,
    },
  },
});

// Common chart wrapper styling
export const chartWrapperClass = "bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700";

// Default no data message
export const NO_DATA_MESSAGE = "Ingen data tilgjengelig for visning";
