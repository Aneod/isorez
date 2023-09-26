import './edt.css'

function Edt() {
    return (
    <div className="edt">
        <div className='infoBarre'>
            <button className='precedente'>Précédente</button>
            <button className='actuelle'>Cette semaine</button>
            <button className='suivante'>Suivante</button>
        </div>
        <div className='week'>
            <div className='hours'>
                <div className='case' style={{backgroundColor: 'white'}}>
                    <img src="./logo512.png" alt="logo" />
                </div>
                <div className='hour' style={{backgroundColor: '#F3DE8A'}}>8h00</div>
                <div className='hour' style={{backgroundColor: '#F4D796'}}>9h00</div>
                <div className='hour' style={{backgroundColor: '#F4D29F'}}>10h00</div>
                <div className='hour' style={{backgroundColor: '#F4CFA5'}}>11h00</div>
                <div className='hour' style={{backgroundColor: '#F4CBAB'}}>12h00</div>
                <div className='hour' style={{backgroundColor: '#F4C9AE'}}>13h00</div>
                <div className='hour' style={{backgroundColor: '#F4C3B7'}}>14h00</div>
                <div className='hour' style={{backgroundColor: '#E6B9B6'}}>15h00</div>
                <div className='hour' style={{backgroundColor: '#DBB3B3'}}>16h00</div>
                <div className='hour' style={{backgroundColor: '#B9A0AA'}}>17h00</div>
                <div className='hour' style={{backgroundColor: '#9C90A2'}}>18h00</div>
            </div>
            <div className='day'>
                <div className='case' style={{backgroundColor: '#F3DE8A'}}>Lundi</div>
                {/* <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div> */}
                <div className='cours'>
                    PO TP G4 (B02A - D24 Linux ISTIC (024),B02A - D26 Linux ISTIC (026))
                </div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
            </div>
            <div className='day'>
                <div className='case' style={{backgroundColor: '#F4D796'}}>Mardi</div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
            </div>
            <div className='day'>
                <div className='case' style={{backgroundColor: '#F4D29F'}}>Mercredi</div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
            </div>
            <div className='day'>
                <div className='case' style={{backgroundColor: '#F4CFA5'}}>Jeudi</div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
            </div>
            <div className='day'>
                <div className='case' style={{backgroundColor: '#F4CBAB'}}>Vendredi</div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
                <div className='case'></div>
            </div>
        </div>
    </div>
    );
}

export default Edt;
