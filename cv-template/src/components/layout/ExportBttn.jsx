import React, { Component } from 'react'
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas'

class ExportBttn extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        const input = this.props.targetEl.current;
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'pt', [canvas.width, canvas.height]);
            let pdfWidth = pdf.internal.pageSize.getWidth();
            let pdfHeight = pdf.internal.pageSize.getHeight();

            pdf.addImage(imgData, 'PNG', 0, 0), pdfWidth, pdfHeight;
            pdf.save('test.pdf')
        })
    }

    render() {
        return(
            <button className='border-2 rounded-md text-[#7B9ACC] py-2 px-2' onClick={this.handleClick}>Export to PDF</button>
        )
    }
}

export default ExportBttn