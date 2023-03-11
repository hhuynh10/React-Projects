import React from 'react'
import { SectionWrapper } from "../hoc";
import Swal from 'sweetalert2'

const Resume = () => {

    const resumePop = () => {
        Swal.fire({
            imageUrl: 'https://resume.creddle.io/resume/jbrahnit44d',
            imageHeight: 1500,
            imageAlt: 'A tall image'
        })
    }

    return (
        <div>
            <button onClick={resumePop}>Resume</button>
        </div>
    )
}

export default SectionWrapper(Resume, "resume");