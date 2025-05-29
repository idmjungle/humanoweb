"use client";

const AboutImage = ({
  design = "",
  size = 64,
}: {
  design?: string;
  size?: number;
}) => {
  const parsedSize = typeof size === "number" ? size : 64;

  return (
    <svg
      width={`${parsedSize}px`}
      height={`${parsedSize}px`}
      viewBox="0 0 150 150"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      className={design}
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: 2,
      }}
    >
      <g transform="matrix(1,0,0,1,-250,-420)">
        <g transform="matrix(1,0,0,1,-654.309,44.5924)">
          <g transform="matrix(1.5,0,0,1.5,754.309,-524.592)">
            <path d="M150,600C177.596,600 200,622.404 200,650C200,677.596 177.596,700 150,700C122.404,700 100,677.596 100,650C100,622.404 122.404,600 150,600ZM150,606.667C126.084,606.667 106.667,626.084 106.667,650C106.667,673.916 126.084,693.333 150,693.333C173.916,693.333 193.333,673.916 193.333,650C193.333,626.084 173.916,606.667 150,606.667Z" />
          </g>
          <g transform="matrix(1.5,0,0,1.5,324.588,-589.684)">
            <g transform="matrix(1,0,0,1,385.746,166.667)">
              <path d="M45.735,521.277C45.735,518.517 47.975,516.277 50.735,516.277C53.494,516.277 55.735,518.517 55.735,521.277L55.735,544.456C55.735,547.216 53.494,549.456 50.735,549.456C47.975,549.456 45.735,547.216 45.735,544.456L45.735,521.277Z" />
            </g>
            <g transform="matrix(0.952381,0,0,0.952381,388.147,191.143)">
              <circle cx="50.75" cy="508.75" r="5.25" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default AboutImage;
