import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 50"
      width="140"
      height="40"
      {...props}
    >
      <text
        x="10"
        y="35"
        fontFamily="'Poppins', sans-serif"
        fontSize="30"
        fontWeight="bold"
        fill="hsl(var(--primary))"
      >
        Achieve
      </text>
      <text
        x="115"
        y="35"
        fontFamily="'Poppins', sans-serif"
        fontSize="30"
        fontWeight="normal"
        fill="hsl(var(--foreground))"
      >
        Fitness
      </text>
    </svg>
  );
}
