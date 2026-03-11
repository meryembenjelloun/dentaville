import React from "react"
import "./Questions.css"

const Questions = ({data, open, toggle}) => {

return (

<div className="faq-item">

<div
className="faq-question"
onClick={toggle}
>

<h3>{data.question}</h3>

<span className="faq-icon">
{open ? "-" : "+"}
</span>

</div>

<div className={`faq-answer ${open ? "open" : ""}`}>
<p>{data.answer}</p>
</div>

</div>

)

}

export default Questions