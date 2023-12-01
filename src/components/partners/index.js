import "./partners.css"

const Partners = () => {
    return(
        <div className="partner-bg">
            <div className="partner-elements d-flex">
                <p className="partner-txt">Partners</p>
                <div className="partners-logo">
                    <img src="moveo-logo.png"  alt="moveo" width="131" height="36" style={{marginRight:93}}/>
                    <img src="one-logo.png"  alt="one" width="84" height="35" style={{marginRight:118}}/>
                    <img src="sisal-logo.png"  alt="sisal" width="99" height="38" style={{marginRight:94}}/>
                    <img src="balfin-logo.png"  alt="balfin" width="96" height="22" style={{marginRight:95}}/>
                    <img src="ip-logo.png"  alt="ip" width="144" height="87" style={{marginRight:71}}/>
                    <img src="mycicero-logo.png"  alt="mycicero" width="68" height="49"/>
                </div>
            </div>

        </div>

    )
}

export default Partners;