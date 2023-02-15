import { StaticImage} from "gatsby-plugin-image";
import React from 'react';
import {Icon} from "./types";

export const GraphqlIcon = ({width = 90}): Icon => (
    <>
        <StaticImage
            src="../assets/images/redis-icon.png"
            alt="GraphQl Icon"
            placeholder="blurred"
            width={90}
        />
    </>
)
