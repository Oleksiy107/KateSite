import React, { useState } from "react";
import interviewBriefly from "../JSON/InterviewBriefly";

export default function LinkToInterview() {
  const [interviewItems, setInterviewItems] = useState(
    interviewBriefly.slice(0, 5)
  );

  return (
    <div className="BrieflyInterviewBox">
      <h2 className="BrieflyInterviewBox__title"> Інтерв'ю з волонтерами</h2>
      <div className="BrieflyInterviewBox__innerWrap">
        {interviewItems.map((item) => (
          <div key={item.id} className="BrieflyInterviewBox__interviewBlock">
            <img src={item.img} alt="" className="BrieflyInterviewBox__img"/>
            <h2 className="BrieflyInterviewBox__title">{item.title}</h2>
            <p className="BrieflyInterviewBox__text">{item.textShort}</p>
            <button className="BrieflyInterviewBox__button-84">Детально</button>
          </div>
        ))}
      </div>
    </div>
  );
}
