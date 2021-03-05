import React, {useState} from 'react';
import {Document, Page, pdfjs} from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import './PDFviewer.scss';
import menu from './The_Grilled_Menu.pdf';
import styled from "styled-components";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const StyledDIV = styled.div`
  .page-controls {
    position: absolute;
    bottom: 5%;
    left: 50%;
    background: white;
    transform: translateX(-50%);
    transition: opacity ease-in-out 0.2s;
    box-shadow: 0 30px 40px 0 rgba(16, 36, 94, 0.2);
    border-radius: 4px;
  }

  .page-controls span {
    font: inherit;
    font-size: 0.8em;
    padding: 0 0.5em;
  }

  .page-controls button {
    width: 44px;
    height: 44px;
    background: white;
    border: 0;
    font: inherit;
    font-size: 0.8em;
    border-radius: 4px;
  }

  .page-controls button:enabled:hover {
    cursor: pointer;
  }

  .page-controls button:enabled:hover,
  .page-controls button:enabled:focus {
    background-color: #e6e6e6;
  }

  .page-controls button:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .page-controls button:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`

const options = {
    cMapUrl: 'cmaps/',
    cMapPacked: true,
};

export default function PDFviewer() {
    const [file, setFile] = useState(menu);
    const [amountOfPages, setAmountOfPages] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    function onDocumentLoadSuccess({numPages: nextNumPages}) {
        setAmountOfPages(nextNumPages);
    }

    return (
        <StyledDIV>
            <div className="Example">
                <div className="Example__container">
                    <div className="Example__container__document" style={{position: 'relative'}}>
                        <Document
                            file={file}
                            onLoadSuccess={onDocumentLoadSuccess}
                            options={options}
                        >

                            <Page
                                width={450}
                                pageNumber={currentPage}
                            />

                        </Document>

                        <div className="page-controls">
                            <button disabled={currentPage == 1} type="button"
                                    onClick={() => setCurrentPage(num => num - 1)}>‹
                            </button>
                            <span>{currentPage} из {amountOfPages}</span>
                            <button disabled={currentPage == amountOfPages} type="button"
                                    onClick={() => setCurrentPage(num => num + 1)}>›
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </StyledDIV>
    );
}
