const GRID = [
  "###############",
  "..###########..",
  "...##.....##...",
  "...##.....##...",
  "..###########..",
  "...##.....##...",
  "...##.....##...",
  "...##.....##...",
  "...##.....##...",
  "...##.....##...",
];

export default function PixelTorii({
  size = 6,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  const rects = GRID.flatMap((row, y) =>
    row.split("").map((c, x) =>
      c === "#" ? <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} /> : null
    )
  );
  return (
    <svg
      viewBox="0 0 15 10"
      width={15 * size}
      height={10 * size}
      shapeRendering="crispEdges"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      {rects}
    </svg>
  );
}
