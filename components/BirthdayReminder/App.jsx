import React, { useState } from "react";
import List from "./List";

import { data } from "../../data/data"

import {
    Container,
    ReminderBoxSection,
} from "../../styles/BirthdayReminder/index";

const App = () => {
    const [dataInfo, setdataInfo] = useState(data)
    return (
        <Container>
            <ReminderBoxSection>
                <h4>{dataInfo.length} birthdays Today</h4>
                <br />
                <List dataInfo={dataInfo} setdataInfo={setdataInfo} />
            </ReminderBoxSection>
        </Container>
    );
};

export default App;
