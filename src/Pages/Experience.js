import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement className="vertical-timeline-element--education"
        date="2016-2018"
        iconStyle={{ background : "#3e497a", color:"#fff"}}
        icon={<SchoolIcon />}
        >
       <h3 className="vertical-timeline-element-title">
        Uttarpara Model High School, Uttarpara, West Bengal
       </h3>
       <p> Higher Secondary(HS) - 87%</p>

        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Raja Peary Mohan College, University of Calcutta, Kolkata, West Bengal
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Mathematics & Computer Science</p>
          <p>CGPA - 7.9</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Developer - Tata Consultancy Services Limited
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Kolkata, West Bengal
          </h4>
          <p>
          1. Collaborated with cross-functional teams including product managers, designers, and other engineers in an Agile environment.<br/>
          2. Developed and deployed custom Apex classes and triggers to support complex business requirements.<br/>
          3. Implement cost optimization ideas for azure resources to optimize cost up to 1000 AUD for our organization.<br/>
          4. Build lightning components using JavaScript. I have experience to work in salesforce CPQ and build backend logics and test cases using Apex.<br/>
          5. Build and integrated an API in a bidding system which enhance the system performance and makes traders life faster.<br/>
          6. Migrated legacy CRM data to Salesforce, ensuring data accuracy and integrity.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
 
    </div>
  )
}

export default Experience
