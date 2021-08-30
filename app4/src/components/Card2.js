import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Card2 = ({ c }) => {
    return (
        <>
            <div style={{ display: 'flex', width: '350px', height: "400px", backgroundColor: "#fff", margin: 10, flexDirection: 'column', border: "1px black solid", borderRadius: 5 }}>
                <div style={{ textAlign: 'center', justifyContent: 'center', fontSize: "2px", padding: 2 }}>
                    <h4>{c.cardTitle}</h4>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridTemplateRows: "repeat(2, 1fr)", gap: 2 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 3, margin: 3 }}>
                        <div>
                            <img src={c.cardImg1File} alt="" style={{ width: "120px", height: "120px" }} />
                        </div>
                        <div>
                            <p style={{ fontSize: "15px", textAlign: "start" }}>{c.cardImg1Text}</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 3, margin: 3 }}>
                        <div>
                            <img src={c.cardImg2File} alt="" style={{ width: "120px", height: "120px" }} />
                        </div>
                        <div>
                            <p style={{ fontSize: "15px", textAlign: "start" }}>{c.cardImg2Text}</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 3, margin: 3 }}>
                        <div>
                            <img src={c.cardImg3File} alt="" style={{ width: "120px", height: "120px" }} />
                        </div>
                        <div>
                            <p style={{ fontSize: "15px", textAlign: "start" }}>{c.cardImg3Text}</p>
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 3, margin: 3 }}>
                        <div>
                            <img src={c.cardImg4File} alt="" style={{ width: "120px", height: "120px" }} />
                        </div>
                        <div>
                            <p style={{ fontSize: "15px", textAlign: "start" }}>{c.cardImg4Text}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div style={{ width: '22rem', height: "26em", margin: "0.5em", top: "0em", textAlign: "center" }}>
                <div style={{ textAlign: "center", padding: "0.5em", fontSize: "20px" }}>{c.cardTitle}</div>
                <div style={{ display: "grid", gridTemplateColumns: "130px 130px", gridColumnGap: "1em", gridRowGap: "0em", alignItems: "center", justifyContent: "center" }}>
                    <div>

                        <img src={c.cardImg1File} alt="" />
                        <p style={{ fontSize: "10px", textAlign: "start" }}>{c.cardImg1Text}</p>
                    </div>
                    <div>

                        <img src={c.cardImg2File} alt="" />
                        <p style={{ fontSize: "10px", textAlign: "start" }}>{c.cardImg2Text}</p>
                    </div>
                    <div>

                        <img src={c.cardImg3File} alt="" />
                        <p style={{ fontSize: "10px", textAlign: "start" }}>{c.cardImg3Text}</p>
                    </div>

                    <div>

                        <img src={c.cardImg4File} alt="" />
                        <p style={{ fontSize: "10px", textAlign: "start" }}>{c.cardImg4Text}</p>
                    </div>

                </div>
                <div style={{ textAlign: "start", margin: "0em", paddingTop: "0em" }} >
                    <a href="#" style={{ color: "#007185", alignItems: "flex-start", textDecoration: "none" }}>view all products</a>
                </div>
            </div> */}
        </>
    )
}

export default Card2
