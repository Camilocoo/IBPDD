import React from 'react';
import Breakpoint from 'react-socks';

let backgroundImage = {
  width: "100%",
  height: "auto",
  backgroundImage: `url(${"http://www.iglesiabautistapoderdedios.com/prueba/wp-content/uploads/2017/05/Iglesia-Poder-de-Dios.jpg"})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundSize: "cover"

};

let blankBox={
    heigth:"400px"
};

let bienvenidos={
    fontSize:"50px",
    color:"#ffc107"
};

let transparent={
    color:"transparent"
}

let bienvenidosMd={
    fontSize:"114px",
    color:"#ffc107"
};

let bienvenidosLg={
    fontSize:"248px",
    color:"#ffc107"
};

function Home() {
  return (
    <React.Fragment>
        <div class="jumbotron p-0">
            <div className="container-fluid">
                <div className="row">
                    <div className="col"  style={backgroundImage}>
                        <Breakpoint small down>
                            <div style={bienvenidos}>
                                Bienvenidos
                            </div>
                            <div style={transparent}>
                               transparent box to give more size to the div
                            </div>
                        </Breakpoint>
                         <Breakpoint medium only>
                            <div style={bienvenidosMd}>
                                Bienvenidos
                            </div>
                            <div style={transparent}>
                               transparent box to give more size to the div
                            </div>
                        </Breakpoint>
                        <Breakpoint large up>
                            <div style={bienvenidosLg}>
                                Bienvenidos
                            </div>
                            <div style={transparent}>
                               transparent box to give more size to the div
                            </div>
                        </Breakpoint>

                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  );
}

export default Home;
