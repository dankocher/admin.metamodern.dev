import React, { FC, ReactElement, useState } from "react";

import { MetTagInput } from "@metamodern.dev/metamodern-ui/";

export const TagInput: FC<any> = (): ReactElement => {
    const [value, setValue] = useState("");

    const onChange = (event) => {
        setValue(event.target.value);
    };

    return <MetTagInput value={value} onChange={onChange} fontClass="body1" />;
};
