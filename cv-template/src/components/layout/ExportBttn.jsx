import React, { Component } from 'react'
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas'


const ExportBttn = function(props) {
    const handleClick  = function() {
        const input = props.targetEl.current;
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'pt', [canvas.width, canvas.height]);
            let pdfWidth = pdf.internal.pageSize.getWidth();
            let pdfHeight = pdf.internal.pageSize.getHeight();

            pdf.addImage(imgData, 'PNG', 0,0, pdfWidth, pdfHeight);
            pdf.save('test.pdf')
        })
    }

    return (
        <button className='border-2 rounded-md text-[#7B9ACC] py-2 px-2' onClick={handleClick}>Export to PDF</button>
    )
}

export default ExportBttn
