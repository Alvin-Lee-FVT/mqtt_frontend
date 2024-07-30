import * as React from "react";

interface props {
    fill?: string;
    strength: number;
}



export const NoWifi: React.FC<props> = (props) => (
    // #717171 color code for ligher
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="52"
        height="36"
        viewBox="0 0 37 35"
        fill="none"
        className={props.strength > 0 ? "" : "opacity"}
    >
        <path
            d="M2.175 13.2C1.675 13.7 0.875 13.7 0.375 13.2C-0.125 12.7 -0.125 11.9 0.375 11.4C5.175 6.59995 11.475 4 18.275 4C25.075 4.1 31.375 6.69995 36.075 11.4C36.575 11.9 36.575 12.7 36.075 13.2C35.575 13.7 34.775 13.7 34.275 13.2C29.975 8.99995 24.375 6.59995 18.275 6.59995C12.175 6.59995 6.475 8.89995 2.175 13.2Z"
            fill="black"
        />
        <path
            d="M4.875 17.7C5.375 18.2 6.175 18.2 6.675 17.7C9.775 14.6 13.875 12.9 18.175 12.9C22.575 12.9 26.675 14.6 29.675 17.7C30.175 18.2 30.975 18.2 31.475 17.7C31.975 17.2 31.975 16.4 31.475 15.9C27.975 12.4 23.175 10.4 18.175 10.4C13.175 10.4 8.375 12.3 4.875 15.9C4.375 16.4 4.375 17.2 4.875 17.7Z"
            fill="black"
        />
        <path
            d="M11.175 22.2C10.675 22.7 9.875 22.7 9.375 22.2C8.875 21.7 8.875 20.9 9.375 20.4C14.275 15.5 22.075 15.5 26.975 20.4C27.475 20.9 27.475 21.7 26.975 22.2C26.475 22.7 25.675 22.7 25.175 22.2C21.375 18.3 15.075 18.3 11.175 22.2Z"
            fill="black"
        />
        <path
            d="M14.575 25.7C16.575 23.8 19.675 23.7 21.675 25.7C23.675 27.6 23.675 30.8 21.675 32.8C19.675 34.8 16.575 34.8 14.575 32.8C12.575 30.8 12.675 27.6 14.575 25.7Z"
            fill="black"
        />
        <path
            d="M32.4391 33.4127C32.9447 33.4127 33.4496 33.2241 33.8361 32.8376C34.6012 32.0638 34.6012 30.8176 33.8369 30.0438L4.36808 0.57502C3.98079 0.188518 3.47676 0 2.97195 0C2.46634 0 1.96152 0.187729 1.57502 0.57502C1.18852 0.96231 1 1.46634 1 1.97195C1 2.47676 1.18852 2.98158 1.57502 3.36808L31.043 32.8376C31.4303 33.2241 31.9343 33.4127 32.4391 33.4127Z"
            fill="black"
        />
        <path d="M1.92858 3.01454L1.92857 3.01453C1.64126 2.72722 1.5 2.35202 1.5 1.97195C1.5 1.59128 1.64114 1.21659 1.92893 0.928213C2.21572 0.64084 2.59051 0.5 2.97195 0.5C3.35161 0.5 3.72623 0.640991 4.01465 0.928696C4.01473 0.928775 4.01481 0.928854 4.01489 0.928933L33.4811 30.3952C33.4814 30.3954 33.4817 30.3957 33.482 30.396C34.0527 30.9748 34.0528 31.9063 33.4815 32.4851C33.1944 32.7717 32.8197 32.9127 32.4391 32.9127C32.0594 32.9127 31.6846 32.7716 31.3962 32.4837L1.92858 3.01454Z" />
    </svg>
);